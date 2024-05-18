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
  try {
    const data: { email: string; password: string; name: string } =
      await req.json();

    const user: User[] = await conn.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [data.email]
    );

    if (user.length !== 0)
      return NextResponse.json("El correo ya está registrado");

    const nombreSinEspaciosExtra = data.name.replace(/\s+/g, " ").trim();

    const { insertId }: { insertId: Number } = await conn.query(
      "INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)",
      [nombreSinEspaciosExtra, data.email, data.password]
    );

    await setTokenSession({
      nombre: nombreSinEspaciosExtra,
      email: data.email,
      id: insertId as number,
    });

    return NextResponse.json("Registro exitoso");
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return NextResponse.json("Error interno del servidor");
  }
}
