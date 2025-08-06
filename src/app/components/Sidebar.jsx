"use client";
import { useEffect, useRef, useState } from "react";
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
  const observerRef = useRef(null);

  useEffect(() => {
    // Espera a que el DOM esté completamente listo antes de buscar los ids
    const timeout = setTimeout(() => {
      const sectionIds = navItems.map(item => item.id);
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

      // Debug: muestra qué secciones encontró
      console.log("Sections found:", sections.map(s => s.id));

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new window.IntersectionObserver(
        (entries) => {
          let mostVisible = null;
          let maxRatio = 0;
          entries.forEach(entry => {
            // Debug: muestra ratios de intersección
            // console.log(entry.target.id, entry.intersectionRatio);
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisible = entry.target.id;
            }
          });
          if (mostVisible && maxRatio > 0.1) {
            setActiveSection(mostVisible);
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -60% 0px",
          threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        }
      );

      sections.forEach(section => {
        observerRef.current.observe(section);
      });
    }, 400); // 400ms suele ser suficiente para SSR/Next

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timeout);
    };
  }, []);

  const handleClick = (section) => {
    setMenuOpen(false);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* --- TOPBAR MÓVIL --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#3F3351] z-50 px-4 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#C4C4C4] whitespace-nowrap truncate">
            Verónica Cruces
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 text-[#C4C4C4]">
              <a href="https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw" aria-label="Instagram" className="hover:text-[#5E60CE]"><FaInstagram size={16} /></a>
              <a href="https://www.facebook.com/share/16dGbcpR9P/" aria-label="Facebook" className="hover:text-[#5E60CE]"><FaFacebookF size={16} /></a>
              <a href="https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" aria-label="LinkedIn" className="hover:text-[#5E60CE]"><FaLinkedinIn size={16} /></a>
              <a href="https://github.com/VeronicaC-Fuentes" aria-label="GitHub" className="hover:text-[#5E60CE]"><FaGithub size={16} /></a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#C4C4C4] hover:text-[#5E60CE] transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose size={24} /> : <HiOutlineMenuAlt1 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL SOLO CONTENIDO --- */}
      <div
        className={`lg:hidden fixed top-[3.5rem] left-0 w-full bg-[#3F3351] z-40 transition-all duration-300 shadow-xl
          ${menuOpen ? "py-4 opacity-100 pointer-events-auto" : "py-0 opacity-0 pointer-events-none"}
        `}
        style={{
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)"
        }}
      >
        <nav className="flex flex-col items-start px-6 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="group w-full text-left flex items-center"
            >
              <span className={`h-8 w-1 rounded-r mr-3 transition-all duration-300
                ${activeSection === item.id
                  ? "bg-[#8F67E8] shadow-[0_0_8px_2px_#8F67E8aa] opacity-100"
                  : "opacity-0 group-hover:opacity-80 bg-[#5E60CE]"}`
              }></span>
              <span className={
                `py-2 pr-4 w-full transition-colors duration-200
                ${activeSection === item.id
                  ? "text-[#8F67E8] font-bold"
                  : "text-[#C4C4C4] group-hover:text-[#5E60CE]"} 
                tracking-wide`
              }>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* --- SIDEBAR ESCRITORIO --- */}
      <aside className="w-0 lg:w-72 hidden lg:flex fixed top-0 left-0 h-screen z-30
        flex-col items-center py-10 px-4
        bg-gradient-to-b from-[#3F3351] via-[#232338] to-[#181828]
        shadow-xl overflow-hidden">

        {/* Pattern decorativo */}
        <svg
          className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="150" cy="150" r="80" fill="#5E60CE" />
        </svg>

        {/* Avatar Glow */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-[0_0_40px_0_rgba(94,96,206,0.6)] border-2 border-[#5E60CE] bg-[#232338]">
          <Image
            src="/image/profile.jpg"
            alt="Foto de perfil"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="mt-8 text-2xl font-extrabold text-[#C4C4C4] tracking-tight">Verónica Cruces</h2>
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
                <span className={`h-8 w-1 rounded-r mr-3 transition-all duration-300 
                  ${activeSection === item.id
                    ? "bg-[#8F67E8] shadow-[0_0_8px_2px_#5E60CE88] opacity-100"
                    : "opacity-0 group-hover:opacity-80 bg-[#5E60CE]"}`
                }>
                </span>
                <span className={
                  `py-2 pr-4 w-full transition-colors duration-200
                  ${activeSection === item.id
                    ? "text-[#8F67E8] font-bold"
                    : "text-[#C4C4C4] group-hover:text-[#5E60CE]"} 
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
        <div className="flex gap-5 text-[#C4C4C4] mb-6 z-20">
          {[{
            href: "https://www.instagram.com/veronicadev.web/",
            Icon: FaInstagram,
            label: "Instagram"
          },
          {
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
              className="transition-all duration-200 hover:text-[#8F67E8] hover:scale-110"
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
