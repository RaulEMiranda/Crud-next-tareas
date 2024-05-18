import { UpdateTaskForm } from "@/components/UpdateTaskForm/UpdateTaskForm";
import { Metadata } from "next";

interface Params {
  params: {
    taskId: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `Actualizar tarea`,
    description: "Actualizar tarea de ordena tus ideas",
  };
}

export default async function updateTask({ params }: Params) {
  return (
    <div className="max-w-md mx-auto flex justify-center items-center h-[80vh]">
      <UpdateTaskForm id={params.taskId}/>
    </div>
  );
}
