import { CreateTaskForm } from "@/components/CreateTaskForm/CreateTaskForm";

export const metadata = {
  title: "Crea tu tarea",
  description: "Crear tu tarea en ordena tus ideas",
}

export default function createTask() {
  return (
    <section className="max-w-md mx-auto flex justify-center items-center h-[80vh]">
      <CreateTaskForm />
    </section>
  );
}
