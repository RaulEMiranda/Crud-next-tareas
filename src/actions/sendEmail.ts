import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

export async function sendEmail({ to, subject, text, html }: EmailOptions) {
  console.log(process.env.NODEMAILER_EMAIL, process.env.NODEMAILER_PASSWORD);

  try {
    await transporter.sendMail({
      from: `"Ordena tus Ideas" <${process.env.NODEMAILER_EMAIL}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Correo electrónico enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    throw new Error("Error al enviar el correo electrónico");
  }
}
