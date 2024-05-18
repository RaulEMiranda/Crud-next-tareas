import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const res = cookies().delete("tokenSession");

  return NextResponse.json("Bien hecho muchacho");
}
