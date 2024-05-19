"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  nombre: string;
  email: string;
}

export const AuthInicio = () => {
  const [user, setuser] = useState<UserData>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_VERCEL_API_URL}/api/auth/profile`
        );
        if (response.status === 200) {
          setuser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">
        ¡Bienvenido {user?.nombre} a &quot;Ordena tus ideas&quot;!
      </h1>
      <p className="text-lg text-center">
        Esta aplicación te ayuda a organizar tus tareas diarias, semanales o
        mensuales. Crea tus tareas programadas y mantén un seguimiento de tus
        actividades de manera sencilla y efectiva.
      </p>
      <p className="text-lg mt-4">
        ¡Es hora de poner orden en tu vida y hacer las cosas de manera más
        eficiente!
      </p>
    </>
  );
};
