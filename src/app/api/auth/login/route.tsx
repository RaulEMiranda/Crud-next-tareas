import { conn } from "@/libs/db";
import { NextResponse } from "next/server";
import { setTokenSession } from "@/actions/cookie";

interface User {
  id: number;
  nombre: string;
  email: string;
  contraseña: string;
}

export async function POST(req: Request, res: Response) {
  const data: { email: string; password: string } = await req.json();

  const user: User[] = await conn.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [data.email]
  );

  if (user.length === 0)
    return NextResponse.json("El correo no está registrado", {
      status: 401,
    });

  if (user[0].contraseña !== data.password)
    return NextResponse.json("contraseña incorrecta");

  // const passwordMatch = await bcrypt.compare(data.password, user[0].contraseña);
  // if (!passwordMatch)
  //   return NextResponse.json("Contraseña incorrecta");

  // response.headers.set('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000; Path=/`);

  await setTokenSession(user[0]);

  return NextResponse.json("Inicio de sesion exitoso");
}
