/**
 * Generic proxy → auto-ebay backend.
 *
 * 让 https://www.authshoes.com.au/<path> 转发到 ${AUTOEBAY_BACKEND_URL}<path>。
 * 所有 /login /logout /healthz /auth/feishu/callback /admin/* /webhooks/*
 * 都用这个 helper。
 *
 * 必须的 Vercel env：AUTOEBAY_BACKEND_URL（无尾斜杠），例如：
 *   https://ineffaceably-unrelativistic-yamileth.ngrok-free.dev
 *
 * 后端搬到 AWS 后只改这个 env 就行，路由文件不动。
 */

import { NextRequest, NextResponse } from "next/server";

const PROXY_TIMEOUT_MS = 9500; // Vercel hobby 函数最长 10s
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

function backendBase(): string | null {
  // 优先用 AUTOEBAY_BACKEND_URL；为兼容老 env，回退 FEISHU_BACKEND_URL
  const base = process.env.AUTOEBAY_BACKEND_URL || process.env.FEISHU_BACKEND_URL;
  if (!base) return null;
  return base.replace(/\/+$/, "");
}

function copyHeaders(req: NextRequest): Headers {
  const out = new Headers();
  req.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      out.set(key, value);
    }
  });
  // ngrok 第一次访问会弹浏览器警告；这个 header 跳过
  out.set("ngrok-skip-browser-warning", "1");
  return out;
}

/**
 * 把当前请求转发给 backend 上 `targetPath`（从 url.pathname 复制，含 query）。
 * 状态码 / 响应头 / body 全 mirror 回去（包括 Set-Cookie 和 Location）。
 */
export async function proxyRequest(
  req: NextRequest,
  targetPath: string
): Promise<NextResponse> {
  const base = backendBase();
  if (!base) {
    console.error("[proxy] AUTOEBAY_BACKEND_URL not configured");
    return NextResponse.json(
      { error: "backend not configured" },
      { status: 503 }
    );
  }

  const url = new URL(req.url);
  const target = base + targetPath + (url.search || "");
  const body = ["GET", "HEAD"].includes(req.method)
    ? undefined
    : await req.arrayBuffer();

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: req.method,
      headers: copyHeaders(req),
      body,
      signal: controller.signal,
      cache: "no-store",
      // 关键：让 30x 透传给浏览器（飞书 OAuth 回调后我们要 302 → /admin/orders）
      redirect: "manual",
    });
  } catch (err) {
    clearTimeout(timer);
    const reason =
      err instanceof Error && err.name === "AbortError"
        ? "upstream timeout"
        : `upstream error: ${(err as Error).message}`;
    console.error("[proxy] forward failed", { target, reason });
    return NextResponse.json({ error: reason }, { status: 502 });
  }
  clearTimeout(timer);

  // Mirror status + headers（包含 Set-Cookie 和 Location）
  const headers = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!HOP_BY_HOP.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });
  // Next.js Set-Cookie 多值单独处理
  const setCookies = upstream.headers.getSetCookie?.() || [];
  if (setCookies.length > 0) {
    headers.delete("set-cookie");
    setCookies.forEach((c) => headers.append("set-cookie", c));
  }

  const buf = await upstream.arrayBuffer();
  return new NextResponse(buf, { status: upstream.status, headers });
}
