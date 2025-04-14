"use client";
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // cerrar menú en móvil al hacer clic
  };

  const linkClass = (section) =>
    `${activeSection === section ? "text-[#BF8173]" : "text-[#F2F2F2]"} hover:text-[#A9C992] transition-colors`;

  return (
    <div>
      {/* === TOPBAR MÓVIL (RECONSTRUIDO) === */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#324024] z-50 px-4 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Nombre */}
          <h2 className="text-base font-bold text-[#F2F2F2] whitespace-nowrap truncate">
            Verónica Cruces
          </h2>

          {/* Redes + Botón */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-[#F2F2F2]">
              <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={16} /></a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#F2F2F2]"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose size={24} /> : <HiOutlineMenuAlt1 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* === MENÚ DESPLEGABLE MÓVIL === */}
      <div
        className={`md:hidden fixed top-[3.5rem] left-0 w-full max-w-full overflow-x-hidden bg-[#324024] z-40 transition-all duration-300 ${menuOpen ? "max-h-screen pt-4 pb-6" : "max-h-0 py-0"
          }`}
      >
        <nav className="flex flex-col items-start justify-center gap-0 px-6 w-full">
          {[
            { id: "home", label: "Inicio" },
            { id: "about", label: "Acerca de mí" },
            { id: "services", label: "Servicios" },
            { id: "resume", label: "Currículum" },
            { id: "portfolio", label: "Portafolio" },
            { id: "contact", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`${linkClass(item.id)} py-3 w-full border-b border-[#50623A]`}
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>


      {/* === SIDEBAR ESCRITORIO === */}
      <div className="hidden md:flex fixed top-0 left-0 w-64 h-screen bg-[#324024] flex-col items-center py-8 px-4">
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#BF8173]">
          <Image
            src="/image/profile.jpg"
            alt="Foto de perfil"
            width={224}
            height={224}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-[#F2F2F2]">Verónica Cruces</h2>
        <nav className="mt-8 flex flex-col gap-4">
          <a href="#home" onClick={() => handleClick("home")} className={linkClass("home")}>Inicio</a>
          <a href="#about" onClick={() => handleClick("about")} className={linkClass("about")}>Acerca de mí</a>
          <a href="#services" onClick={() => handleClick("services")} className={linkClass("services")}>Servicios</a>
          <a href="#resume" onClick={() => handleClick("resume")} className={linkClass("resume")}>Currículum</a>
          <a href="#portfolio" onClick={() => handleClick("portfolio")} className={linkClass("portfolio")}>Portafolio</a>
          <a href="#contact" onClick={() => handleClick("contact")} className={linkClass("contact")}>Contacto</a>
        </nav>
        <div className="mt-auto flex gap-4 text-[#F2F2F2] mb-4">
          <a href="#" className="hover:text-[#A9C992]" aria-label="Instagram"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-[#A9C992]" aria-label="Facebook"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-[#A9C992]" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
          <a href="#" className="hover:text-[#A9C992]" aria-label="GitHub"><FaGithub size={20} /></a>
        </div>
      </div>
    </div>
  );
}
