import { NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies"

const middleware = (request: NextRequest) => { 
 const cookie = getSessionCookie(request);

 if (!cookie) {
  return NextResponse.redirect(new URL("/signup", request.url));
 }

 return NextResponse.next();
}

export default middleware;

export const config = {
 matcher: ["/feed/:path*", "/posts/:path*", "/me/:path*"],
}