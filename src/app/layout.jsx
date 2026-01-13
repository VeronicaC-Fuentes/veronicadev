// src/app/layout.js

import "./globals.css";
import Navbar from "./components/Navbar"; // Asegúrate de tener este import
import ClientRoot from "./ClientRoot";
import { Sora } from "next/font/google"; // O la fuente que uses

const font = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "Verónica Cruces",
  description: "Odoo Developer Portfolio",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={font.variable}>
      <body className={`${font.className} flex flex-col min-h-screen bg-[#050505] overflow-x-hidden`}>
        <ClientRoot>
          {/* Tu nueva barra superior */}
          <Navbar />
          
          {/* AQUÍ ESTABA EL ERROR: */}
          {/* Antes tenías: className="flex-1 min-h-screen lg:ml-64" */}
          {/* Ahora debe ser: className="flex-1 w-full" */}
          
          <main className="flex-1 w-full relative">
            {children}
          </main>
          
        </ClientRoot>
      </body>
    </html>
  );
}