import * as React from "react";

interface EmailTemplateProps {
  message: string;
  name: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message, name
}) => (
  <div className="font-sans text-gray-800">
    <h1 className="bg-green-500 text-white p-4">
      📬 Mensaje de la página de tareas
    </h1>
    <div className="p-8 leading-relaxed">
      <p>
        Hola, <strong className="font-bold">{name}</strong>,
      </p>
      <p>{message}</p>
      <p>Saludos,</p>
      <p>El equipo de Tareas</p>
    </div>
    <div className="bg-gray-200 p-8 text-center">
      <p>
        Este es un mensaje automático, por favor no respondas a este correo.
      </p>
    </div>
  </div>
);
