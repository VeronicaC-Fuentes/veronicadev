"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useLang } from "./LanguageProvider";
import LocaleSwitch from "./LocaleSwitcher";

export default function Sidebar() {
  const { t } = useLang();

  // Construimos los ítems del menú con traducciones
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

  const getScrollEl = () => document.querySelector("#content") || window;

  const getAbsTop = (el, scrollEl) => {
    const rect = el.getBoundingClientRect();
    if (scrollEl === window) return rect.top + window.scrollY;
    const hostRect = scrollEl.getBoundingClientRect();
    return rect.top - hostRect.top + scrollEl.scrollTop;
  };

  // ScrollSpy
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
  }, [navItems.map((i) => i.id).join(",")]); // deps estables por ids

  // Auto-scroll del menú al item activo
  useEffect(() => {
    const el = itemRefs.current[activeSection];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [activeSection]);

  const handleClick = (section) => {
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* --- TOPBAR MÓVIL --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#3F3351] z-50 px-4 py-4 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#C4C4C4] whitespace-nowrap truncate">Verónica Cruces</h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-2 text-[#C4C4C4]">
              <a href="https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw" aria-label="Instagram" className="hover:text-[#5E60CE]"><FaInstagram size={16} /></a>
              <a href="https://www.facebook.com/share/16dGbcpR9P/" aria-label="Facebook" className="hover:text-[#5E60CE]"><FaFacebookF size={16} /></a>
              <a href="https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" aria-label="LinkedIn" className="hover:text-[#5E60CE]"><FaLinkedinIn size={16} /></a>
              <a href="https://github.com/VeronicaC-Fuentes" aria-label="GitHub" className="hover:text-[#5E60CE]"><FaGithub size={16} /></a>
            </div>
            {/* Botón de idioma en móvil */}
            <LocaleSwitch />
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

      {/* --- MENÚ MÓVIL --- */}
      <div
        className={`lg:hidden fixed top-[3.5rem] left-0 w-full bg-[#3F3351] z-40 transition-all duration-300 shadow-xl
        ${menuOpen ? "py-4 opacity-100 pointer-events-auto" : "py-0 opacity-0 pointer-events-none"}`}
        style={{ transition: "all 0.3s cubic-bezier(.4,0,.2,1)" }}
      >
        <nav className="flex flex-col items-start px-6 gap-2 overflow-y-auto max-h-[calc(100vh-3.5rem-16px)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => { itemRefs.current[item.id] = el; }}
              onClick={() => handleClick(item.id)}
              className="group w-full text-left flex items-center"
            >
              <span className={`h-8 w-1 rounded-r mr-3 transition-all duration-300
                ${activeSection === item.id ? "bg-[#8F67E8] shadow-[0_0_8px_2px_#8F67E8aa] opacity-100" : "opacity-0 group-hover:opacity-80 bg-[#5E60CE]"}`}/>
              <span className={`py-2 pr-4 w-full transition-colors duration-200 tracking-wide
                ${activeSection === item.id ? "text-[#8F67E8] font-bold" : "text-[#C4C4C4] group-hover:text-[#5E60CE]"}`}>
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

        {/* Decorativo */}
        <svg className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <circle cx="150" cy="150" r="80" fill="#5E60CE" />
        </svg>

        {/* Avatar */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-[0_0_40px_0_rgba(94,96,206,0.6)] border-2 border-[#5E60CE] bg-[#232338]">
          <Image src="/image/profile.jpg" alt="Foto de perfil" width={192} height={192} className="object-cover w-full h-full" />
        </div>

        <h2 className="mt-8 text-2xl font-extrabold text-[#C4C4C4] tracking-tight">Verónica Cruces</h2>
        {/* Rol traducible */}
        <span className="text-[#B9B6D3] text-xs mt-1 uppercase tracking-widest">
          {t("role")}
        </span>

        {/* Navegación */}
        <nav className="mt-12 flex flex-col gap-1 w-full overflow-y-auto max-h-[calc(100vh-320px)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              ref={(el) => { itemRefs.current[item.id] = el; }}
              onClick={() => handleClick(item.id)}
              className="group w-full text-left"
            >
              <div className="flex items-center">
                <span className={`h-8 w-1 rounded-r mr-3 transition-all duration-300 
                  ${activeSection === item.id ? "bg-[#8F67E8] shadow-[0_0_8px_2px_#5E60CE88] opacity-100" : "opacity-0 group-hover:opacity-80 bg-[#5E60CE]"}`}/>
                <span className={`py-2 pr-4 w-full transition-colors duration-200 tracking-wide
                  ${activeSection === item.id ? "text-[#8F67E8] font-bold" : "text-[#C4C4C4] group-hover:text-[#5E60CE]"}`}>
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </nav>

        <div className="flex-grow" />

        {/* Redes + switch idioma */}
        <div className="flex gap-5 text-[#C4C4C4] mb-6 z-20 items-center">
          {[
            { href: "https://www.instagram.com/veronicadev.web/", Icon: FaInstagram, label: "Instagram" },
            { href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/", Icon: FaLinkedinIn, label: "LinkedIn" },
            { href: "https://github.com/VeronicaC-Fuentes", Icon: FaGithub, label: "GitHub" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} className="transition-all duration-200 hover:text-[#8F67E8] hover:scale-110" aria-label={label} target="_blank" rel="noopener noreferrer">
              <Icon size={20} />
            </a>
          ))}
          <LocaleSwitch />
        </div>
      </aside>
    </>
  );
}
