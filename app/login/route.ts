import { NextRequest } from "next/server";
import { proxyRequest } from "@/lib/proxy";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = (req: NextRequest) => proxyRequest(req, "/login");
export const POST = (req: NextRequest) => proxyRequest(req, "/login");
