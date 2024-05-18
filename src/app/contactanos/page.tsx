import { ContactForm } from "@/components/ContactForm/ContactForm";

export const metadata = {
  title: "Contactanos",
  description: "Contacta con Ordena tus ideas",
}

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto flex justify-center items-center h-[80vh]">
      <ContactForm />
    </div>
  );
}
