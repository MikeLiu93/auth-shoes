/**
 * 飞书登录 OAuth 回调（T08-4）。
 *
 * 路径必须严格等于飞书"重定向 URL 白名单"里的项：
 *   https://www.authshoes.com.au/auth/feishu/callback
 *
 * 飞书会带 ?code=&state= 跳过来；这里 1:1 转发到后端
 * `/auth/feishu/callback`，后端验 state、换 token、设 cookie、302 → /admin/orders。
 *
 * 与 /api/feishu/callback（飞书事件订阅 / AES 加密 webhook）是不同链路，
 * 不要混用。
 */
import { NextRequest } from "next/server";
import { proxyRequest } from "@/lib/proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = (req: NextRequest) =>
  proxyRequest(req, "/auth/feishu/callback");
