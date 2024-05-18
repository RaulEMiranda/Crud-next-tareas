import { conn } from "@/libs/db";
import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

interface Product {
  titulo: string;
  descripcion?: string;
  fecha_limite?: string;
  estado?: "pendiente" | "en_progreso" | "completada";
  id_usuario?: number;
}

interface DeleteResult {
  affectedRows: number;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  console.log(params);

  try {
    const tokenJWT = req.cookies.get("tokenSession")?.value;
    if (tokenJWT) {
      const { payload } = await jwtVerify(
        tokenJWT,
        new TextEncoder().encode(process.env.SECRET)
      );

      const result: Product[] = await conn.query(
        "SELECT * FROM tareas WHERE id = ?",
        [params.taskId]
      );

      if (payload.id !== result[0].id_usuario) {
        return NextResponse.json(
          {
            message: "Product not found",
            status: 404,
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(result[0]);
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 404,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    console.log(params, "hola mundo");

    const result: DeleteResult = await conn.query(
      "DELETE FROM tareas WHERE id = ?",
      [params.taskId]
    );
    console.log(result);

    if (result.affectedRows === 0) {
      return NextResponse.json({
        message: "Product not found",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Product deleted successfully",
      status: 204,
    });
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

export async function PUT(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    console.log("Hola");

    const data = await req.json();
    console.log(data);
    const result: DeleteResult = await conn.query(
      "UPDATE tareas SET ? WHERE id = ?",
      [
        {
          titulo: data.titulo,
          descripcion: data.descripcion,
          estado: data.estado,
        },
        params.taskId,
      ]
    );
    console.log(result);
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

  return NextResponse.json(
    {
      message: "Tarea actualizada",
    },
    {
      status: 200,
    }
  );
}
