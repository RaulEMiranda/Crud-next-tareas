import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const cookie = cookies().get("tokenSession")?.value;
    console.log(cookie);
    

    if (!cookie) {
      return NextResponse.json(
        {
          message: "No has iniciado sesion",
        },
        {
          status: 401,
        }
      );
    }

    const user = jwt.verify(
      cookie as string,
      process.env.SECRET!
    ) as JwtPayload & { email: string; nombre: string };

    return NextResponse.json({
      email: user.email,
      nombre: user.nombre,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 401,
      }
    );
  }
}
