import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

/**
 * eBay Marketplace Account Deletion (MAD) notification endpoint.
 *
 * Two request types:
 *   GET  ?challenge_code=...   Subscription verification — returns SHA-256 hash.
 *   POST                       Account-deletion notification from eBay.
 *
 * Required environment variables (set in Vercel → Settings → Environment Variables):
 *   EBAY_MAD_VERIFICATION_TOKEN   Shared secret with eBay (32–80 chars, [A-Za-z0-9_-]).
 *   EBAY_MAD_ENDPOINT_URL         Full HTTPS URL of this endpoint, must match the value
 *                                 configured in the eBay developer portal exactly.
 *
 * Design notes:
 *   - This is the MVP-stage stub. It satisfies eBay's compliance requirement so we can
 *     subscribe to MAD notifications and pass production keyset review.
 *   - The POST handler currently only logs the notification body; no buyer data is yet
 *     stored anywhere (production API access has not started). When the auto-ebay backend
 *     goes live on AWS (T01.5), the endpoint URL in eBay's portal will be switched to the
 *     auto-ebay backend, which will perform real deletion within 30 days as required.
 *
 * Reference: https://developer.ebay.com/marketplace-account-deletion
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const challengeCode = request.nextUrl.searchParams.get("challenge_code");

  if (!challengeCode) {
    return NextResponse.json(
      { error: "Missing required query parameter: challenge_code" },
      { status: 400 }
    );
  }

  const verificationToken = process.env.EBAY_MAD_VERIFICATION_TOKEN;
  const endpointUrl = process.env.EBAY_MAD_ENDPOINT_URL;

  if (!verificationToken || !endpointUrl) {
    console.error(
      "[ebay-mad] Missing required env vars: EBAY_MAD_VERIFICATION_TOKEN and/or EBAY_MAD_ENDPOINT_URL"
    );
    return NextResponse.json(
      { error: "Endpoint not configured" },
      { status: 500 }
    );
  }

  // Per eBay spec: SHA-256(challengeCode + verificationToken + endpointUrl), hex-encoded.
  const challengeResponse = createHash("sha256")
    .update(challengeCode)
    .update(verificationToken)
    .update(endpointUrl)
    .digest("hex");

  return NextResponse.json({ challengeResponse });
}

export async function POST(request: NextRequest) {
  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  // Capture the notification in Vercel logs as a stub audit trail. When auto-ebay backend
  // is live, replace this block with a forwarder to the auto-ebay webhook.
  console.log(
    "[ebay-mad] notification received",
    JSON.stringify({
      timestamp: new Date().toISOString(),
      body,
    })
  );

  // eBay only requires a 200 acknowledgement. Actual deletion happens within 30 days
  // and is the responsibility of the downstream auto-ebay backend (T01.5).
  return NextResponse.json({ status: "received" }, { status: 200 });
}
