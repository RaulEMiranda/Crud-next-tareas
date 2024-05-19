"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(process.env.NEXT_PUBLIC_VERCEL_API_URL || "Hola?");
      console.log("Hola como estás");
      
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_VERCEL_API_URL}/api/sendEmailToOwner`,
        data
      );
      console.log(res);

      if (res.status === 200) {
        router.push("/inicio");
      }
    } catch (error) {
      console.log({
        message: "Error axios",
        error,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border-2 w-[80vw] rounded-lg my-10 px-4 py-5 md:w-full"
      noValidate
    >
      <h2 className="text-2xl font-bold text-center mb-4">
        Envianos un comentario
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-100"
        >
          Nombre
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: true })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.name ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-100"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.email?.type === "required" && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="mt-2 text-sm text-red-500">
            Por favor ingresa un correo electrónico válido
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-100"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/2 px-4 py-2 text-[19px] font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 "
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};
