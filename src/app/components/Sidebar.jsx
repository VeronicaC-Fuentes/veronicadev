"use client";
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Acerca de mí" },
  { id: "services", label: "Servicios" },
  { id: "curriculum", label: "Currículum" },
  { id: "portfolio", label: "Portafolio" },
  { id: "contact", label: "Contacto" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);

    // Scroll suave a la sección con ese ID
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      {/* --- TOPBAR MÓVIL --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#272640] z-50 px-4 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#F3EFF5] whitespace-nowrap truncate">
            Verónica Cruces
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-[#F3EFF5]">
              <a href="https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw" aria-label="Instagram" className="hover:text-[#FFD166]"><FaInstagram size={16} /></a>
              <a href="https://www.facebook.com/share/16dGbcpR9P/" aria-label="Facebook" className="hover:text-[#FFD166]"><FaFacebookF size={16} /></a>
              <a href="https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" aria-label="LinkedIn" className="hover:text-[#FFD166]"><FaLinkedinIn size={16} /></a>
              <a href="https://github.com/VeronicaC-Fuentes" aria-label="GitHub" className="hover:text-[#FFD166]"><FaGithub size={16} /></a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#FFD166] hover:text-[#FF6F61] transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose size={24} /> : <HiOutlineMenuAlt1 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      <div
        className={`lg:hidden fixed top-[3.5rem] left-0 w-full bg-[#272640] z-40 transition-all duration-300 overflow-hidden shadow-xl ${menuOpen ? "max-h-screen pt-4 pb-6" : "max-h-0 py-0"
          }`}
      >
        <nav className="flex flex-col items-start px-4 gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group w-full text-left flex items-center"
            >
              {/* Línea lateral animada, igual que escritorio */}
              <span className={`h-8 w-1 rounded-r mr-3 transition-all duration-300
                ${activeSection === item.id
                  ? item.id === "contact"
                    ? "bg-[#FFD166] opacity-100"
                    : "bg-[#FF6F61] opacity-100"
                  : "opacity-0 group-hover:opacity-70 bg-[#FFD166]"}`
              }>
              </span>
              <span className={
                `py-2 pr-4 w-full transition-colors duration-200
                ${activeSection === item.id
                  ? item.id === "contact"
                    ? "text-[#FFD166] font-bold"
                    : "text-[#FF6F61] font-bold"
                  : "text-[#F3EFF5] group-hover:text-[#FFD166]"} 
                tracking-wide`
              }>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* --- SIDEBAR ESCRITORIO --- */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-72 h-screen z-30
        flex-col items-center py-10 px-4
        bg-gradient-to-b from-[#272640] via-[#232338] to-[#181828]
        shadow-xl overflow-hidden">

        {/* Pattern decorativo */}
        <svg
          className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="150" cy="150" r="80" fill="#5E60CE" />
        </svg>

        {/* Avatar Glow (más grande) */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-[0_0_40px_0_rgba(94,96,206,0.4)] border-2 border-[#232338] bg-[#232338]">
          <Image
            src="/image/profile.jpg"
            alt="Foto de perfil"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-8 text-2xl font-extrabold text-[#F3EFF5] tracking-tight">Verónica Cruces</h2>
        <span className="text-[#B9B6D3] text-xs mt-1 uppercase tracking-widest">
          Desarrolladora de Software
        </span>

        {/* Navegación escritorio */}
        <nav className="mt-12 flex flex-col gap-1 w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group w-full text-left"
            >
              <div className="flex items-center">
                {/* Línea lateral animada */}
                <span className={`h-8 w-1 rounded-r bg-[#FF6F61] mr-3 transition-all duration-300 
                  ${activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`}>
                </span>
                <span className={
                  `py-2 pr-4 w-full transition-colors duration-200
                  ${activeSection === item.id
                    ? "text-[#FF6F61] font-bold"
                    : "text-[#F3EFF5] group-hover:text-[#FFD166]"} 
                  tracking-wide`
                }>
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </nav>
        <div className="flex-grow"></div>
        {/* Redes sociales escritorio */}
        <div className="flex gap-5 text-[#F3EFF5] mb-6 z-20">
          {[{
            href: "https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw",
            Icon: FaInstagram,
            label: "Instagram"
          }, {
            href: "https://www.facebook.com/share/16dGbcpR9P/",
            Icon: FaFacebookF,
            label: "Facebook"
          }, {
            href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/",
            Icon: FaLinkedinIn,
            label: "LinkedIn"
          }, {
            href: "https://github.com/VeronicaC-Fuentes",
            Icon: FaGithub,
            label: "GitHub"
          }].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              className="transition-all duration-200 hover:text-[#FFD166] hover:scale-110"
              aria-label={label}
              target="_blank" rel="noopener noreferrer"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
