"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  titulo: string;
  descripcion: string;
  fecha_limite: string;
}

export const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const currentDate = new Date().toISOString().split("T")[0];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await axios.post(`/api/tasks`, data);
    console.log(res);
    if (res.status === 200) {
      router.push("/tasks");
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border-2 w-[80vw] rounded-lg my-10 px-4 py-5 md:w-full"
      noValidate
    >
      <h2 className="text-2xl font-bold text-center mb-4">Crear Nueva Tarea</h2>

      <div>
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-100"
        >
          Título
        </label>
        <input
          id="titulo"
          type="text"
          {...register("titulo", { required: true })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.titulo ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.titulo && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
      </div>

      <div>
        <label
          htmlFor="descripcion"
          className="block text-sm font-medium text-gray-100"
        >
          Descripción
        </label>
        <textarea
          id="descripcion"
          rows={4}
          {...register("descripcion", { required: true })}
          className={`mt-1 block resize-none text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.descripcion ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />
        {errors.descripcion && (
          <p className="mt-2 text-sm text-red-500">Este campo es requerido</p>
        )}
      </div>

      <div>
        <label
          htmlFor="fecha_limite"
          className="block text-sm font-medium text-gray-100"
        >
          Fecha Límite
        </label>
        <input
          id="fecha_limite"
          type="date"
          {...register("fecha_limite", {
            required: "Este campo es requerido",
            validate: (value) =>
              new Date(value) > new Date(currentDate) ||
              "La fecha límite debe ser mayor a la fecha actual",
          })}
          className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
            errors.fecha_limite ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-blue-500`}
        />

        {errors.fecha_limite && (
          <p className="mt-2 text-sm text-red-500">
            {errors.fecha_limite.message}
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/2 px-4 py-2 text-[19px] font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Crear Tarea
        </button>
      </div>
    </form>
  );
};
