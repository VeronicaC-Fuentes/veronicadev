"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { useLang } from "./LanguageProvider";

export default function HomeSection() {
  const { t } = useLang();

  // --- HELPERS I18N ---
  const tt = (key, fallback) => {
    const v = t?.(key);
    if (v === undefined || v === null) return fallback;
    if (Array.isArray(v)) return v;
    const s = String(v).trim();
    if (!s || s.toLowerCase() === key.toLowerCase()) return fallback;
    return v;
  };

  const labelText = tt("home.label", "Odoo Consulting & Software Developer");
  const typewriterWords = tt("home.typewriter", [
    "Implementación y optimización",
    "Reportes, flujos y automatizaciones",
    "Soporte para tu operación diaria",
  ]);
  const valueLine = tt("home.valueLine", "Odoo, web y posicionamiento: diseñamos, construimos y optimizamos para que tu operación y tu presencia crezcan.");
  const ctaText = tt("home.cta", "Ver proyectos");

  return (
    <section id="home" className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* =====================================================================================
          1. VERSIÓN MOBILE (SOLO VISIBLE EN PANTALLAS PEQUEÑAS)
          Diseño: Impactante, Full Screen, SIN LA FRASE DEL TIPEO (ELIMINADA).
         ===================================================================================== */}
      <div className="block lg:hidden relative w-full h-[100dvh]">
        
        {/* IMAGEN DE FONDO FULL SCREEN */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/profile.jpg"
            alt="Verónica Cruces"
            fill
            priority
            className="object-cover object-[center_20%] grayscale-0 hover:grayscale transition-all duration-700"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* CONTENIDO TEXTO FLOTANTE */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white/80 text-xs tracking-[0.34em] uppercase mb-4 font-medium drop-shadow-md"
          >
            {labelText}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6 drop-shadow-lg"
          >
            VERÓNICA <br />
            <span className="text-white/60">CRUCES</span>
          </motion.h1>

          {/* --- AQUÍ ESTABA LA FRASE DEL TIPEO. SE ELIMINÓ COMPLETAMENTE --- */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/90 max-w-sm leading-relaxed mb-8 drop-shadow-md font-medium"
          >
            {valueLine}
          </motion.p>

          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group flex justify-center items-center gap-3 text-white text-sm tracking-[0.2em] uppercase"
          >
            <span className="border-b border-white/80 pb-1 drop-shadow-md">
              {ctaText}
            </span>
            <FiArrowDownRight size={20} className="drop-shadow-md" />
          </motion.a>
        </div>
      </div>


      {/* =====================================================================================
          2. VERSIÓN DESKTOP (TU CÓDIGO ORIGINAL INTACTO)
          Visible solo en lg: (min-width: 1024px)
         ===================================================================================== */}
      <div className="hidden lg:flex w-full min-h-screen items-center px-12 pt-24 pb-16">
        <style jsx>{`
          @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          .animate-blob {
            animation: morph 10s ease-in-out infinite;
          }
          .animate-blob-slow {
            animation: morph 14s ease-in-out infinite reverse;
          }
        `}</style>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-20 items-center">
          
          {/* COLUMNA TEXTO (DESKTOP) */}
          <div className="flex flex-col items-start text-left z-10 order-1">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/50 text-sm tracking-[0.34em] uppercase mb-6 font-medium"
            >
              {labelText}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="text-8xl font-black text-white tracking-tighter leading-[0.88] mb-8"
            >
              VERÓNICA <br />
              <span className="text-white/32">CRUCES</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="min-h-[3.4rem] flex items-center justify-start mb-6 w-full"
            >
              <div className="w-14 h-[1px] bg-white/22 mr-5" />
              <span className="text-xl text-white/78 font-light tracking-wide">
                <span className="text-white font-semibold">
                  <Typewriter
                    words={Array.isArray(typewriterWords) ? typewriterWords : [String(typewriterWords)]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={52}
                    deleteSpeed={26}
                    delaySpeed={1900}
                  />
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base text-white/50 max-w-xl leading-relaxed mb-12 mx-0"
            >
              {valueLine}
            </motion.p>

            <motion.a
              href="#portfolio"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.78 }}
              className="group w-auto flex justify-start items-center gap-4 text-white text-sm tracking-[0.22em] uppercase hover:text-white/70 transition-colors"
            >
              <span className="border-b border-white/80 pb-1 group-hover:border-white/35 transition-all">
                {ctaText}
              </span>
              <FiArrowDownRight
                size={20}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"
              />
            </motion.a>
          </div>

          {/* COLUMNA IMAGEN (DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative w-full flex justify-end order-2 h-[80vh] items-center"
          >
            <div className="relative lg:w-[650px] aspect-square mr-[-50px]">
              <div className="absolute inset-0 border border-white/10 animate-blob-slow opacity-60 scale-105 pointer-events-none"></div>
              <div className="relative w-full h-full animate-blob overflow-hidden border-[1px] border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
                <Image
                  src="/image/profile.jpg"
                  alt="Verónica Cruces"
                  fill
                  priority
                  className="object-cover object-[center_20%] grayscale-0 hover:grayscale transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-white/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
            </div>
          </motion.div>

        </div>

        {/* INDICADOR SCROLL (SOLO DESKTOP) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          aria-hidden="true"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
        </motion.div>
      </div>

    </section>
  );
}