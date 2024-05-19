import { conn } from "@/libs/db";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

interface Product {
  titulo: string;
  descripcion?: string;
  fecha_creacion?: string;
  estado?: "pendiente" | "en_progreso" | "completada";
  id: number;
}

export async function GET(req: NextRequest) {
  try {
    const tokenJWT = req.cookies.get("tokenSession")?.value;
    if (tokenJWT) {
      const { payload } = await jwtVerify(
        tokenJWT,
        new TextEncoder().encode(process.env.SECRET)
      );

      const tasks: Product[] = await conn.query(
        "SELECT * FROM tareas WHERE id_usuario = ?",
        [payload.id]
      );      

      const filteredTasks = tasks.map(({ titulo, descripcion, fecha_creacion, estado, id }) => ({
        titulo,
        descripcion,
        fecha_creacion,
        estado,
        id
      }));
      
      return NextResponse.json(filteredTasks);
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al enviar las tareas",
      },
      {
        status: 500,
      }
    );
  }
}
