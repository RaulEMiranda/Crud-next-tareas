import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, JWTPayload } from "jose";
import { match } from "assert";

export async function middleware(req: NextRequest) {
  const tokenJWT = req.cookies.get("tokenSession")?.value;
  const path = req.nextUrl.pathname;

  console.log(path, "hola");
  

  if (!tokenJWT && (path.startsWith("/tasks") || path.startsWith("/dashboard"))) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (!tokenJWT && (path.startsWith("/inicio") )) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (tokenJWT && (path === "/signin" || path === "/signup")) {
    return NextResponse.redirect(new URL("/inicio", req.url));
  }

  if (tokenJWT) {
    try {
      const { payload } = await jwtVerify(
        tokenJWT,
        new TextEncoder().encode(process.env.SECRET)
      );

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tasks/:path*", "/inicio/:path*", "/signin", "/signup"],
};
