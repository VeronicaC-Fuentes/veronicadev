"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi"; // Icono de menú más moderno
import { IoMdClose } from "react-icons/io";
import { useLang } from "./LanguageProvider";
import LocaleSwitch from "./LocaleSwitcher";

export default function Sidebar() {
  const { t } = useLang();

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "curriculum", label: t("nav.curriculum") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "contact", label: t("nav.contact") },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const itemRefs = useRef({});

  // --- Lógica de ScrollSpy (Mantenida igual porque funciona bien) ---
  const getScrollEl = () => document.querySelector("#content") || window;
  const getAbsTop = (el, scrollEl) => {
    const rect = el.getBoundingClientRect();
    if (scrollEl === window) return rect.top + window.scrollY;
    const hostRect = scrollEl.getBoundingClientRect();
    return rect.top - hostRect.top + scrollEl.scrollTop;
  };

  useEffect(() => {
    let raf = null;
    const computeActive = () => {
      const scrollEl = getScrollEl();
      const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean);
      if (!sections.length) return;

      const topOffsetPx = 0.35;
      const viewport = scrollEl === window ? window.innerHeight : scrollEl.clientHeight;
      const current = (scrollEl === window ? window.scrollY : scrollEl.scrollTop) + viewport * topOffsetPx;

      let currentId = sections[0].id;
      for (const sec of sections) {
        const secTop = getAbsTop(sec, scrollEl);
        if (secTop <= current) currentId = sec.id;
      }
      setActiveSection(currentId);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        computeActive();
      });
    };

    const scrollEl = getScrollEl();
    const resizeTarget = scrollEl === window ? window : scrollEl;
    setTimeout(computeActive, 0);
    resizeTarget.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      resizeTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [navItems.map((i) => i.id).join(",")]);

  const handleClick = (section) => {
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* --- MÓVIL: TOPBAR DE CRISTAL --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 bg-[#0a0a1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between">
          {/* Logo Minimalista Texto */}
          <h2 className="text-lg font-bold text-white tracking-tight">
            VERÓNICA<span className="text-[#F2C53D]">.DEV</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <LocaleSwitch />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-[#F2C53D] transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoMdClose size={28} /> : <HiOutlineMenuAlt4 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MÓVIL: MENÚ FULL SCREEN (Efecto Cinemático) --- */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#0a0a1a]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`text-2xl font-light tracking-widest uppercase transition-all duration-300
                ${activeSection === item.id 
                  ? "text-[#F2C53D] font-bold scale-110" 
                  : "text-white/60 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Redes Móvil */}
        <div className="absolute bottom-10 flex gap-6 text-white/50">
          <a href="https://www.instagram.com/veronicadev.web/" className="hover:text-[#F2C53D]"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" className="hover:text-[#F2C53D]"><FaLinkedinIn size={24} /></a>
          <a href="https://github.com" className="hover:text-[#F2C53D]"><FaGithub size={24} /></a>
        </div>
      </div>

      {/* --- DESKTOP: SIDEBAR PREMIUM (Estilo Glass) --- */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen z-30 flex-col justify-between py-12 px-8
        w-80 
        bg-[#0a0a1a]/80 backdrop-blur-xl border-r border-white/5 shadow-2xl">
        
        {/* 1. Header: Perfil Elevado */}
        <div className="flex flex-col items-start">
          <div className="relative w-20 h-20 mb-6 rounded-full p-[2px] bg-gradient-to-tr from-[#23338C] to-[#F2C53D]">
            <div className="rounded-full overflow-hidden w-full h-full border-2 border-[#0a0a1a]">
               <Image 
                 src="/image/profile.jpg" 
                 alt="Profile" 
                 width={80} 
                 height={80} 
                 className="object-cover w-full h-full"
               />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white tracking-tighter leading-none mb-1">
            VERÓNICA<br/><span className="text-[#F2C53D]">CRUCES</span>
          </h2>
          <span className="text-xs text-white/50 tracking-[0.25em] uppercase font-medium mt-2">
            {t("role")}
          </span>
        </div>

        {/* 2. Navegación: Limpia y Editorial */}
        <nav className="flex flex-col gap-5 w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => { itemRefs.current[item.id] = el; }}
                onClick={() => handleClick(item.id)}
                className="group flex items-center w-full text-left relative pl-2"
              >
                {/* Indicador de línea vertical (El toque de oro) */}
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#F2C53D] transition-all duration-300 group-hover:h-4
                  ${isActive ? "h-full shadow-[0_0_10px_#F2C53D]" : ""}`} 
                />
                
                <span className={`pl-6 py-1 text-sm tracking-widest uppercase transition-all duration-300
                  ${isActive 
                    ? "text-white font-bold translate-x-1" 
                    : "text-white/40 group-hover:text-white font-medium"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* 3. Footer: Redes y Settings */}
        <div className="flex flex-col gap-6">
           {/* Línea divisoria sutil */}
           <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
           
           <div className="flex justify-between items-center">
              <div className="flex gap-4 text-white/40">
                {[
                  { href: "https://www.instagram.com/veronicadev.web/", Icon: FaInstagram },
                  { href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/", Icon: FaLinkedinIn },
                  { href: "https://github.com/VeronicaC-Fuentes", Icon: FaGithub },
                ].map(({ href, Icon }, idx) => (
                  <a key={idx} href={href} className="hover:text-[#F2C53D] hover:scale-110 transition-all duration-200">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <LocaleSwitch />
           </div>
           
           <div className="text-[10px] text-white/20 font-mono">
             © 2024 V.DEV
           </div>
        </div>
      </aside>
    </>
  );
}