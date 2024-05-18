import { AllTasks } from "@/components/AllTasks/AllTasks";

export const metadata = {
  title: "Todas tus tareas",
  description: "Lista de tareas",
}

export default function TasksPage() {

  return (
    <section>
      <AllTasks />
    </section>
  );
}
