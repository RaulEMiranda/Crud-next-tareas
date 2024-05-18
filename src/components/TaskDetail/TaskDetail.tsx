"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { usePathname, useRouter } from "next/navigation";
import { Loader } from "../Loader/Loader";

interface Task {
  titulo: string;
  descripcion?: string;
  fecha_creacion?: string;
  estado?: "pendiente" | "en_progreso" | "completada";
  id: number;
}

export const TaskDetail = ({ id }: { id: string }) => {
  const [task, setTask] = useState<Task | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`/api/tasks/tasksByUser/${id}`);

        setTask(res.data);
      } catch (error) {

        router.push("/tasks");
        router.refresh();
      }
    };

    getTasks();
  }, [id, router]);

  const handleUpdate = () => {
    console.log(pathname);
    router.replace(`/tasks/${id}/update-task`)
    //router.push(`${pathname}/update-task`);
  };

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const confirmDelete = async () => {
    const res = await axios.delete(`/api/tasks/tasksByUser/${id}`);

    if (res.status === 200) {
      router.push("/tasks");
      router.refresh();
    }
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {task ? (
        <div className="flex flex-col bg-white shadow-xl  rounded-lg overflow-hidden max-w-xs m-4">
          <div className="px-4 py-2">
            <h2 className="text-gray-900 font-bold text-xl">{task.titulo}</h2>
            <hr className="my-3" />
            <p className="text-gray-700 text-md">{task.descripcion}</p>
          </div>
          <div className="px-4 py-2 bg-gray-100 text-right">
            <span
              className={`font-bold uppercase text-lg ${
                task.estado === "pendiente" && "text-red-500"
              } ${task.estado === "completada" && "text-green-500"} ${
                task.estado === "en_progreso" && "text-[#326ea7]"
              }`}
            >
              {task.estado}
            </span>
          </div>
          <div className="px-4 py-2 flex justify-evenly my-2">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Actualizar
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {modalIsOpen && (
        <Modal confirmDelete={confirmDelete} setModalIsOpen={setModalIsOpen} />
      )}
    </div>
  );
};
