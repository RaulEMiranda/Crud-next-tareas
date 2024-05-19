import { conn } from "@/libs/db";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

interface Tarea {
  titulo: string;
  descripcion: string;
  fecha_limite: string;
}

export async function GET() {
  try {
   // const tasks = await conn.query("SELECT * FROM tareas");

    return NextResponse.json("tasks", {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET', 
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "No hemos encontrado tareas",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: NextRequest, res: Response) {
  try {
    const tokenJWT = req.cookies.get("tokenSession")?.value;

    if (tokenJWT) {
      const data: Tarea = await req.json();

      const { payload } = await jwtVerify(
        tokenJWT,
        new TextEncoder().encode(process.env.SECRET)
      );

      console.log(payload, 1);

      console.log(data, 2);

      const tasks = await conn.query("INSERT INTO tareas SET ?", {
        titulo: data.titulo,
        descripcion: data.descripcion,
        fecha_limite: data.fecha_limite,
        id_usuario: payload.id,
      });

      return NextResponse.json(
        {
          message: "Tarea creada",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Debes iniciar sesión",
        },
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
