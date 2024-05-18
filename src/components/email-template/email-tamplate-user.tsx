import * as React from "react";

interface WelcomeEmailTemplateProps {
  name: string;
  email: string;
}

export const WelcomeEmailTemplate: React.FC<
  Readonly<WelcomeEmailTemplateProps>
> = ({ name, email }) => (
  <div className="font-sans text-gray-800">
    <h1 className="bg-green-500 text-white py-4 px-6 rounded-t-lg text-2xl">
      🌟 ¡Bienvenido a nuestra plataforma!
    </h1>
    <div className="p-8 leading-relaxed">
      <p>
        Hola, <strong className="font-bold">{name}</strong>,
      </p>
      <p>
        ¡Bienvenido a nuestra plataforma de tareas! Estamos emocionados de
        tenerte con nosotros.
      </p>
      <p>
        Aquí podrás administrar tus tareas de manera eficiente y colaborar con
        tu equipo.
      </p>
      <p>¡Esperamos que disfrutes de la experiencia!</p>

      <p className="text-lg mt-4">
        ¡Es hora de poner orden en tu vida y hacer las cosas de manera más
        eficiente!
      </p>
      <p>
        Hemos registrado tu correo electrónico como <strong>{email}</strong>.
      </p>
      <p>Saludos,</p>
      <p>El equipo de Tareas</p>
    </div>
    <div className="bg-gray-200 p-8 text-center rounded-b-lg">
      <p>
        Este es un mensaje automático, por favor no respondas a este correo.
      </p>
    </div>
  </div>
);
