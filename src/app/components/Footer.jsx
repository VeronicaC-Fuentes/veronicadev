"use client";
import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useLang } from "./LanguageProvider";

function tt(t, key, fallback) {
  const v = t?.(key);
  if (v === undefined || v === null) return fallback;
  return v;
}

export default function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();
  
  const rightsText = tt(t, "footer.rights", "Todos los derechos reservados.");
  const tagline = tt(t, "footer.tagline", "Diseñado y desarrollado con pasión.");
  const backTopText = tt(t, "footer.backTop", "Volver arriba");
  const socialTitle = tt(t, "footer.socials", "Redes");

  const navLinks = [
    { name: tt(t, "nav.home", "Inicio"), href: "#home" },
    { name: tt(t, "nav.about", "Sobre mí"), href: "#about" },
    { name: tt(t, "nav.services", "Servicios"), href: "#services" },
    { name: tt(t, "nav.portfolio", "Portafolio"), href: "#portfolio" },
    { name: tt(t, "nav.contact", "Contacto"), href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" },
    { icon: <FiGithub />, href: "https://github.com/VeronicaC-Fuentes" },
    { icon: <FiInstagram />, href: "https://www.instagram.com/veronicadev.web/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/51977968602" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/10 text-white overflow-hidden">
      
      {/* Ruido de fondo */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        
        {/* --- GRID PRINCIPAL --- */}
        {/* Ajusté los col-span para agrupar mejor el contenido */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* 1. MARCA (Ocupa 6 columnas) */}
          <div className="md:col-span-6 flex flex-col gap-6 pr-10">
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
              Verónica <span className="text-white/30">Cruces</span>
            </h2>
            <p className="text-white/50 text-sm font-light max-w-sm leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* 2. MENÚ (Ocupa 3 columnas) - AHORA EN LISTA VERTICAL */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-6">Menu</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-3 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. REDES (Ocupa 3 columnas) */}
          <div className="md:col-span-3">
             <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-6">{socialTitle}</h4>
             <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/60 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-[10px] uppercase tracking-widest text-white/30 font-mono text-center md:text-left">
            © {currentYear} — {rightsText}
          </div>

          {/* BOTÓN SUBIR REFINADO */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <span>{backTopText}</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center gap-5" // Espacio entre flechas
              > 
                <FiArrowUp size={14} />
                <FiArrowUp size={14} />
              </motion.div>
            </div>
          </button>

        </div>
      </div>
    </footer>
  );
}