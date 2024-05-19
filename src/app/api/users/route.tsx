import { conn } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Aqui los usuarios");
    
    const results =
      (await conn.query("SELECT * FROM usuarios")) || "no se encontró nada";

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
}
