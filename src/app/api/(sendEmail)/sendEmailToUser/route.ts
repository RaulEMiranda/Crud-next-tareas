import { sendEmail } from "@/actions/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, name } = await req.json();

    await sendEmail({
      to: email,
      subject: "Mensaje Automático de Ordena tus Ideas",
      text: `Mensaje enviado por ${name} con correo ${email}`,
      html: `<div style="font-family: sans-serif; color: #333;">
      <h1 style="background-color: #48BB78; color: #fff; padding: 1rem 1.5rem; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; font-size: 1.25rem; margin: 0;">🌟 ¡Bienvenido a nuestra plataforma!</h1>
      <div style="padding: 2rem; line-height: 1.5;">
        <p>Hola, <strong style="font-weight: bold;">${name}</strong>,</p>
        <p>¡Bienvenido a nuestra plataforma de tareas! Estamos emocionados de tenerte con nosotros.</p>
        <p>Aquí podrás administrar tus tareas de manera eficiente y colaborar con tu equipo.</p>
        <p>¡Esperamos que disfrutes de la experiencia!</p>
        <p style="font-size: 1.125rem; margin-top: 2rem;">¡Es hora de poner orden en tu vida y hacer las cosas de manera más eficiente!</p>
        <p>Hemos registrado tu correo electrónico como <strong>${email}</strong>.</p>
        <p>Saludos,</p>
        <p>El equipo de Tareas</p>
      </div>
      <div style="background-color: #EDF2F7; padding: 2rem; text-align: center; border-bottom-left-radius: 0.5rem; border-bottom-right-radius: 0.5rem;">
        <p>Este es un mensaje automático, por favor no respondas a este correo.</p>
      </div>
    </div>`,
    });

    return NextResponse.json("Correo electrónico enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return NextResponse.json("Debes poner un correo valido", {
      status: 500,
    });
  }
}
