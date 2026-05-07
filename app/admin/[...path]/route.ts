/**
 * /admin/* 全代理（T08-4）。
 *
 * 所有 admin 后台页面都走这条；require_admin dependency 在后端校验
 * session cookie，没登录的会被 302 → /login（Vercel 这边也会原样转给浏览器）。
 */
import { NextRequest } from "next/server";
import { proxyRequest } from "@/lib/proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function rebuildPath(req: NextRequest): string {
  const url = new URL(req.url);
  return url.pathname; // 完整 /admin/... 路径
}

export const GET = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
export const POST = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
export const PUT = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
export const DELETE = (req: NextRequest) => proxyRequest(req, rebuildPath(req));
