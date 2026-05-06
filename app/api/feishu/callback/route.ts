import { NextRequest, NextResponse } from "next/server";

/**
 * Feishu (Lark) webhook proxy → auto-ebay backend.
 *
 * Why this proxy exists:
 *   - Feishu requires the event-callback URL to be a public HTTPS endpoint.
 *   - The auto-ebay FastAPI backend is currently developed locally
 *     (Docker on a workstation), exposed temporarily via ngrok.
 *   - ngrok subdomains can change; we don't want to keep editing the URL in
 *     the Feishu developer console. Instead, Feishu always calls
 *     `https://www.authshoes.com.au/api/feishu/callback` and this route
 *     forwards to whatever ngrok URL is currently set in `FEISHU_BACKEND_URL`.
 *
 * Required environment variable (Vercel → Settings → Environment Variables):
 *   FEISHU_BACKEND_URL   Base URL of the auto-ebay backend, no trailing slash.
 *                        e.g. https://ineffaceably-unrelativistic-yamileth.ngrok-free.dev
 *
 * The proxy is intentionally dumb:
 *   - It forwards the request body verbatim (raw bytes), so Feishu's AES
 *     encryption signature stays intact.
 *   - It mirrors the upstream status, content-type, and body to Feishu.
 *   - It strips Vercel-injected hop-by-hop headers (host, content-length)
 *     so the upstream Server: uvicorn doesn't choke.
 *
 * When auto-ebay moves to AWS, replace `FEISHU_BACKEND_URL` with the AWS
 * domain — no code change needed.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FORWARD_PATH = "/feishu/callback";
const PROXY_TIMEOUT_MS = 4500; // Feishu requires <1s ideally, but a hard cap keeps Vercel's 10s limit safe.
const HOP_BY_HOP = new Set([
  "host",
  "content-length",
  "connection",
  "transfer-encoding",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-real-ip",
  "x-vercel-forwarded-for",
  "x-vercel-id",
  "x-vercel-deployment-url",
]);

function backendUrl(): string | null {
  const base = process.env.FEISHU_BACKEND_URL;
  if (!base) return null;
  return base.replace(/\/+$/, "") + FORWARD_PATH;
}

function buildHeaders(req: NextRequest): Headers {
  const out = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      out.set(key, value);
    }
  });
  // ngrok shows a browser warning page on first visit unless this header is set.
  out.set("ngrok-skip-browser-warning", "1");
  return out;
}

async function forward(req: NextRequest): Promise<NextResponse> {
  const target = backendUrl();
  if (!target) {
    console.error("[feishu-proxy] FEISHU_BACKEND_URL not configured");
    return NextResponse.json(
      { error: "Endpoint not configured" },
      { status: 503 }
    );
  }

  const body = req.method === "GET" ? undefined : await req.arrayBuffer();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: req.method,
      headers: buildHeaders(req),
      body,
      signal: controller.signal,
      // Vercel edge-friendly defaults.
      cache: "no-store",
      redirect: "manual",
    });
  } catch (err) {
    clearTimeout(timer);
    const reason =
      err instanceof Error && err.name === "AbortError"
        ? "upstream timeout"
        : `upstream error: ${(err as Error).message}`;
    console.error("[feishu-proxy] forward failed", { target, reason });
    return NextResponse.json({ error: reason }, { status: 502 });
  }
  clearTimeout(timer);

  // Mirror status + content-type. Strip hop-by-hop on the way back.
  const headers = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });
  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, { status: upstream.status, headers });
}

export async function POST(req: NextRequest) {
  return forward(req);
}

export async function GET(req: NextRequest) {
  // Feishu doesn't normally GET this URL, but a manual probe shouldn't 404.
  return forward(req);
}
