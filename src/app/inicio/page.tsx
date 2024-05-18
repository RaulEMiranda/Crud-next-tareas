import { AuthInicio } from "@/components/Inicio/AuthInicio";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: `Inicio`,
    description: "Bienvenida",
  };
}

export default function InicioPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-gray-200">
      <AuthInicio />
    </section>
  );
}
