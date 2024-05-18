import { TaskDetail } from "@/components/TaskDetail/TaskDetail";
import axios from "axios";
import { Metadata } from "next";

interface Params {
  params: {
    taskId: string;
  };
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `Tarea ${params.taskId}`,
    description: "Descripción de la tarea",
  };
}

export default function TaskDetailPage({ params }: Params) {
  return (
    <>
      <section className="flex justify-center items-center mt-4 ">
        <TaskDetail id={params.taskId} />
      </section>
    </>
  );
}
