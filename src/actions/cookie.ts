"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

interface User {
  id: number;
  nombre: string;
  email: string;
}

export async function getServerSideProps(req: NextRequest) {
  const tokenJWT = req.cookies.get("tokenSession")?.value;

  return tokenJWT;
}

export async function setTokenSession(user: User) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const tokenSession = jwt.sign(
    {
      nombre: user.nombre,
      email: user.email,
      id: user.id,
    },
    `${process.env.SECRET}`,
    { expiresIn: "30d" }
  );

  cookies().set("tokenSession", tokenSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
