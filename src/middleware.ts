import { NextResponse, NextRequest } from "next/server";
import { jwtVerify, JWTPayload } from "jose";
import { match } from "assert";
import NextCors from "nextjs-cors";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  response.headers.append("Access-Control-Allow-Credentials", "true");
  response.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  response.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  response.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  const tokenJWT = req.cookies.get("tokenSession")?.value;
  const path = req.nextUrl.pathname;

  if (
    !tokenJWT &&
    (path.startsWith("/tasks") || path.startsWith("/dashboard"))
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (!tokenJWT && path.startsWith("/inicio")) {
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

      return response;
    } catch (error) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/tasks/:path*", "/inicio/:path*", "/signin", "/signup"],
};
