import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookies = req.cookies;
  const token =
    cookies.get("next-auth.session-token")?.value ||
    cookies.get("__Secure-next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/order/:path*", "/cart/:path*"],
};
