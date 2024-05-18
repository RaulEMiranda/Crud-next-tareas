"use client";

import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { useRouter } from "next/navigation";

interface Task {
  titulo: string;
  descripcion?: string;
  fecha_creacion?: string;
  estado?: "pendiente" | "en_progreso" | "completada";
  id: number;
}

export const UpdateTaskForm = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Task>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`/api/tasks/tasksByUser/${id}`);
        if (res.data) {
          setValue("titulo", res.data.titulo);
          setValue("descripcion", res.data.descripcion);
          setValue("estado", res.data.estado);
          setValue("id", res.data.id);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, [id, setValue]);

  const onSubmit = async (data: Task) => {
    try {
      console.log(data);

      const res = await axios.put(`/api/tasks/tasksByUser/${data.id}`, data);
      console.log(res);
      if (res.status === 200) {
        router.push("/tasks");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 border-2  w-[80vw] rounded-lg my-10 px-4 py-5 md:w-full"
          noValidate
        >
          <h2 className="text-2xl font-bold text-center mb-4">
            Actualizar Tarea
          </h2>

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
              <p className="mt-2 text-sm text-red-500">
                Este campo es requerido
              </p>
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
              {...register("descripcion")}
              className="mt-1 block resize-none text-stone-800 w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="estado"
              className="block text-sm font-medium text-gray-100"
            >
              Estado
            </label>
            <select
              id="estado"
              {...register("estado", { required: true })}
              className={`mt-1 block text-stone-800 w-full px-3 py-2 border rounded-md ${
                errors.estado ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500`}
            >
              <option value="pendiente">Pendiente</option>
              <option value="en_progreso">En Progreso</option>
              <option value="completada">Completada</option>
            </select>
            {errors.estado && (
              <p className="mt-2 text-sm text-red-500">
                Este campo es requerido
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-[19px] font-medium text-white bg-teal-400 hover:bg-teal-500 active:bg-teal-600 rounded-md  focus:outline-none"
            >
              Actualizar Tarea
            </button>
          </div>
        </form>
      )}
    </>
  );
};
