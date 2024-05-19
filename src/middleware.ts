import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Origin': '*', // Permitir cualquier origen
};

export async function middleware(req: NextRequest) {
  const tokenJWT = req.cookies.get("tokenSession")?.value;
  const path = req.nextUrl.pathname;

  if (req.method === 'OPTIONS') {
    return NextResponse.json({}, { headers: corsOptions });
  }

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

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  const response = NextResponse.next();

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return NextResponse.next();
}

export const config = {
  matcher: ["/tasks/:path*", "/inicio/:path*", "/signin", "/signup"],
};
