import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Ordena tus ideas",
  description: "programar tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg?v=1" type="image/svg+xml" />
      </head>
      <body className="bg-gray-800">
        <header>
          <Navbar />
        </header>
        <main className="min-h-[100vh] p-8 pt-16 text-zinc-100 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
