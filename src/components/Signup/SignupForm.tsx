"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  name: string;
}

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [emailError, setEmailError] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setEmailError(false)
      // await axios.post(`/api/sendEmailToUser`, {
      //   email: data.email,
      //   name: data.name,
      // });
      const res = await axios.post(`${process.env.VERCEL_API_URL}/api/auth/register`, data);

      if (res.status === 200) {
        router.push("/inicio");
        router.refresh();
      }
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.data === "Debes poner un correo valido") {
        setEmailError(true);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border-2 w-[80vw] rounded-lg my-10 px-4 py-5 md:w-full"
      noValidate
    >
      <h2 className="text-2xl font-bold text-center mb-4">Registro</h2>
      <div>
        <label
          htmlFor="name"
          className="block text-md font-medium text-gray-100"
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
        {errors.name && errors.name.type === "required" && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-md font-medium text-gray-100"
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
        {errors.email?.type === "pattern" || emailError && (
          <p className="mt-2 text-sm text-red-500">
            Por favor ingresa un correo electrónico válido
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-md font-medium text-gray-100"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.password && errors.password.type === "required" && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="mt-2 text-sm text-red-500">
            La contraseña debe tener al menos 8 caracteres
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/2 px-4 py-2 text-[19px] font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Registrarse
        </button>
      </div>
      <div className="mt-4">
        <span className="block text-sm text-gray-200">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Inicia sesión aquí
          </Link>
        </span>
      </div>
    </form>
  );
};
