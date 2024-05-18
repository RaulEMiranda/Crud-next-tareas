"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

interface Task {
  titulo: string;
  descripcion?: string;
  fecha_creacion?: string;
  estado?: "pendiente" | "en_progreso" | "completada";
  id: number;
}
export const AllTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const getTasks = async () => {
    try {
      const res = await axios.get(`/api/tasks/tasksByUser`);
      setTasks(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("Hubo un problema al cargar las tareas. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container mx-auto w-">
      <h1 className="text-3xl font-bold my-8 text-zinc-200">
        Todas las tareas{" "}
        <span className="text-lg">
          {" "}
          -&gt;{" "}
          <Link
            href="/tasks/create-task"
            className="text-teal-200 hover:text-white"
          >
            {" "}
            Agregar nueva tarea
          </Link>
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading ? (
          <Loader />
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <Link
              href={`/tasks/${task.id}/${task.titulo}`}
              key={task.id}
              className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between border-2 border-stone-600 transition-transform duration-300 transform  hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 text-zinc-800">
                {task.titulo}
              </h2>
              <p className="text-gray-600 mb-4">{task.descripcion}</p>
              <div>
                <hr className="my-2" />
                <p
                  className={`text-sm ${
                    task.estado === "pendiente" && "text-red-500"
                  } ${task.estado === "completada" && "text-green-500"} ${
                    task.estado === "en_progreso" && "text-[#326ea7]"
                  }`}
                >
                  <span className="font-bold text-gray-800">Estado:</span>{" "}
                  {task.estado}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-xl text-gray-200">
            Aún no tiene tareas programadas
          </p>
        )}
      </div>
    </div>
  );
};
