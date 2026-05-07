/**
 * eBay OAuth 回调（T01）。
 *
 * 路径必须严格等于 eBay 开发者后台 RuName 映射的 "Your auth accepted URL"：
 *   https://www.authshoes.com.au/auth/ebay/callback
 *
 * eBay 跳过来时带 ?code=&state=（&expires_in=）；这里 1:1 转发到后端
 * `/auth/ebay/callback`，后端：
 *   1. 验 state（redis 取出 + 删除）
 *   2. 用 code 换 refresh_token + access_token
 *   3. 调 commerce.identity 拿 ebay_user_id
 *   4. 加密落 oauth_tokens 表，返回 callback_ok.html
 *
 * 静态页 /auth/ebay/accepted（"Authorization Confirmed"）保留，那是给授权流程**外**
 * 的展示页用的；OAuth 实际回跳用的是这条 route。
 */
import { NextRequest } from "next/server";
import { proxyRequest } from "@/lib/proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = (req: NextRequest) =>
  proxyRequest(req, "/auth/ebay/callback");
