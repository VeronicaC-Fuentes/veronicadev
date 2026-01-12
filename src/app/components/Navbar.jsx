"use client";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { useLang } from "./LanguageProvider";
import LocaleSwitch from "./LocaleSwitcher";

export default function Navbar() {
  const { t } = useLang();
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
   // { id: "curriculum", label: t("nav.curriculum") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrolled(currentScroll > 50);
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; 

      for (const section of sections) {
        if (section && 
            section.offsetTop <= scrollPosition && 
            (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      }
    };
    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navItems]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const elementPositionPage = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: elementPositionPage, behavior: "smooth" });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${scrolled 
          ? "bg-[#050505]/80 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5" 
          : "bg-transparent py-8 border-b border-transparent"}`}
      >
        {/* Barra de progreso de lectura */}
        <div 
          className="absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%`, opacity: scrolled ? 0.3 : 0 }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* 1. LOGO MONOGRAMA: "VC" */}
          <div 
            className="cursor-pointer select-none group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Diseño Compacto y Sólido */}
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter hover:opacity-50 transition-opacity duration-300">
              VC
              {/* Punto final opcional para balance visual (puedes quitarlo si prefieres solo letras) */}
              <span className="text-white/40">.</span>
            </h1>
          </div>

          {/* 2. MENÚ ESCRITORIO */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group py-2"
              >
                <span className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-500
                  ${activeSection === item.id ? "text-white opacity-100" : "text-white/40 group-hover:text-white"}`}>
                  {item.label}
                </span>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-white transform transition-transform duration-500 ease-out
                  ${activeSection === item.id ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40"}`} 
                />
              </button>
            ))}
          </nav>

          {/* 3. ACCIONES DERECHA */}
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-6 border-r border-white/10 pr-8">
              {[
                { Icon: FaInstagram, href: "https://instagram.com" },
                { Icon: FaLinkedinIn, href: "https://linkedin.com" },
                { Icon: FaGithub, href: "https://github.com" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer" 
                   className="text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <LocaleSwitch />
            <button 
              className="lg:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(true)}
            >
              <HiOutlineMenuAlt4 size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center transition-all duration-[800ms] cubic-bezier(0.32, 0.72, 0, 1)
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        <button 
          className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors hover:rotate-90 duration-500"
          onClick={() => setMenuOpen(false)}
        >
          <HiX size={32} />
        </button>

        <nav className="flex flex-col items-center gap-9">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{ transitionDelay: `${100 + idx * 60}ms` }}
              className={`text-3xl md:text-4xl font-light tracking-widest uppercase transition-all duration-700 ease-out transform
                ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                ${activeSection === item.id ? "text-white font-normal" : "text-white/30 hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Footer Móvil */}
        <div 
          className={`absolute bottom-20 flex flex-col items-center gap-6 transition-all duration-1000 delay-500
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
           <div className="w-[1px] h-12 bg-white/20"></div>
           <div className="flex gap-10 opacity-50">
              <FaInstagram size={22} /> <FaLinkedinIn size={22} /> <FaGithub size={22} />
           </div>
        </div>
      </div>
    </>
  );
}