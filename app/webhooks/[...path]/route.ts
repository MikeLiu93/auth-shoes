/**
 * /webhooks/* 全代理（T01.5 MAD + T08-1 external_alert）。
 *
 * 注意：
 * - eBay MAD 用 /webhooks/ebay/account-deletion（这条已有 /api/ebay/account-deletion
 *   旧路径在 app/api/ebay/account-deletion/route.ts；新部署后 eBay 后台改成
 *   /webhooks/ebay/account-deletion 即可，二选一）
 * - external_alert webhook 用 /webhooks/external_alert
 *
 * eBay 签名校验用 X-EBAY-SIGNATURE header；这里 1:1 forward，header 不丢。
 */
import { NextRequest } from "next/server";
import { proxyRequest } from "@/lib/proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function rebuildPath(req: NextRequest): string {
  const url = new URL(req.url);
  return url.pathname;
}

export const GET = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
export const POST = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
