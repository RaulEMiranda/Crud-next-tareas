"use client";

import Link from "next/link";

export const Inicio = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-4 lg:text-7xl">
        ORDENA TUS IDEAS
      </h1>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="text-lg mb-2">
            Bienvenido a nuestra página de tareas. Aquí puedes administrar tus
            tareas diarias de manera fácil y eficiente.
          </p>
        </div>
      </article>
      <h2 className="mt-10 text-3xl mx-auto text-center">
        Ventajas de organizar tus tareas
      </h2>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="mb-2 font-bold text-xl">Mayor productividad</p>
          <p className="text-lg">
            Al organizar tus tareas, puedes priorizarlas según su importancia y
            urgencia, lo que te permite completar las más importantes primero y
            aumentar tu productividad en general.
          </p>
        </div>
      </article>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="mb-2 font-bold text-xl">Reducción del estrés</p>
          <p className="text-lg">
            Tener una lista clara de tareas organizadas te ayuda a visualizar lo
            que necesitas hacer y te permite abordarlas de manera más
            sistemática, lo que puede reducir el estrés y la sensación de
            abrumamiento.
          </p>
        </div>
      </article>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="mb-2 font-bold text-xl">Mejor gestión del tiempo</p>
          <p className="text-lg">
            Ordenar tus tareas te permite asignar tiempo y recursos de manera
            más efectiva, lo que te ayuda a cumplir con plazos importantes y a
            administrar tu tiempo de manera más eficiente.
          </p>
        </div>
      </article>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="mb-2 font-bold text-xl">Claridad y enfoque</p>
          <p className="text-lg">
            Tener tus tareas organizadas te proporciona claridad sobre lo que
            necesitas hacer y te ayuda a mantener el enfoque en las actividades
            más importantes, evitando distracciones y procrastinación.
          </p>
        </div>
      </article>
      <article className="max-w-xl mx-auto  p-5 bg-gray-700 rounded-lg border-2  mt-10 shadow-[0_0px_50px_-15px_rgba(255,255,255,0.3)] transition-transform duration-300 transform  hover:scale-105">
        <div>
          <p className="mb-2 font-bold text-xl">Sentimiento de logro</p>
          <p className="text-lg">
            A medida que completas tus tareas organizadas, experimentas un
            sentido de logro y progreso, lo que te motiva a seguir adelante y a
            mantener hábitos positivos de organización.
          </p>
        </div>
      </article>
      <article>
        <h2 className="mt-10 text-3xl mx-auto text-center">
          Para comenzar, simplemente regístrate y agrega tus tareas por hacer
        </h2>
        <div className="flex flex-col lg:flex-row">
          <Link
            href="/signin"
            className="max-w-sm mx-auto p-5  bg-gray-700 rounded-lg border-2 border-teal-500 mt-10 shadow-[0_0px_50px_-15px_rgba(79,209,197,0.5)] transition-transform duration-300 transform  hover:scale-105"
          >
            <div>
              <p className="mb-2 font-bold underline text-2xl">Inicia Sesión</p>
              <p className="text-lg">
                ¡Accede a tu cuenta para administrar tus tareas!
              </p>
            </div>
          </Link>
          <Link
            href="signup"
            className="max-w-sm mx-auto p-5 bg-gray-700 rounded-lg border-2 border-teal-500 mt-10 shadow-[0_0px_50px_-15px_rgba(79,209,197,0.5)] transition-transform duration-300 transform  hover:scale-105"
          >
            <div>
              <p className="mb-2 font-bold text-2xl underline">Registrate</p>
              <p className="text-lg">
                ¡Únete a nosotros para comenzar a organizar tus tareas!
              </p>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
};
