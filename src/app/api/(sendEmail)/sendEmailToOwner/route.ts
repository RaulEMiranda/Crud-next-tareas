import { sendEmail } from "@/actions/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  // try {
  //   const { email, name, message } = await req.json();

  //   console.log("Enviando email");
    

  //   await sendEmail({
  //     to: process.env.NODEMAILER_EMAIL || "rauledmore98@outlook.com",
  //     subject: "Mensaje Automático de Ordena tus Ideas",
  //     text: `Mensaje enviado por ${name} con correo ${email}`,
  //     html: `  <div style="font-family: sans-serif; color: #4A5568;">
  //     <h1 style="background-color: #48BB78; color: #fff; padding: 1rem; margin: 0;">📬 Mensaje de la página de tareas</h1>
  //     <div style="padding: 2rem; line-height: 1.5;">
  //       <p>Hola, <strong style="font-weight: bold;">${name}</strong>,</p>
  //       <p>${message}</p>
  //       <p>Saludos,</p>
  //       <p>El equipo de Tareas</p>
  //     </div>
  //     <div style="background-color: #EDF2F7; padding: 2rem; text-align: center;">
  //       <p>Este es un mensaje automático, por favor no respondas a este correo.</p>
  //     </div>
  //   </div>`,
  //   });

  //   console.log("Email Enviado");
    

  //   return NextResponse.json("Correo electrónico enviado correctamente", {
  //     status: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //     },
  //   });
  // } catch (error) {

  //   return NextResponse.json(
  //     {
  //       message: "Error al enviar el email",
  //     },
  //     {
  //       status: 500,
  //     }
  //   );
  // }


  return NextResponse.json(
        {
          message: "Correo enviado",
        },
        {
          status: 200,
        }
      );
}
