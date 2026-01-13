"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

// Helper de traducción
function tt(t, key, fallback) {
  const v = t?.(key);
  if (v === undefined || v === null) return fallback;
  if (Array.isArray(v)) return v;
  const s = String(v).trim();
  if (!s) return fallback;
  if (s.toLowerCase() === key.toLowerCase()) return fallback;
  return v;
}

// VARIANTES ANIMACIÓN SLIDER
const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
};

export default function AboutSection() {
  const { t } = useLang();

  // --- 1. TRADUCCIONES DE TEXTO PLANO ---
  const headerTitle = tt(t, "about.header.title", "Perfil & Visión");
  const headerBg = tt(t, "about.header.bg", "PERFIL");
  const heading1 = tt(t, "about.heading.line1", "Arquitectura Digital.");
  const heading2 = tt(t, "about.heading.line2", "Crecimiento Real.");
  
  const p1 = tt(t, "about.p1", "Siempre me ha interesado entender cómo funcionan las cosas por dentro...");
  const p2 = tt(t, "about.p2", "Con el tiempo confirmé algo clave...");
  const p3 = tt(t, "about.p3", "Hoy lidero un equipo ágil...");
  const p4 = tt(t, "about.p4", "Diseñamos ecosistemas digitales completos...");
  const ctaText = tt(t, "about.cta", "Iniciar Proyecto");

  // --- 2. TRADUCCIONES DE STATS ---
  const statFocusLabel = tt(t, "about.stats.focus.label", "Core Focus");
  const statFocusValue = tt(t, "about.stats.focus.value", "Desarrollo Odoo & Web Apps");
  
  const statLocLabel = tt(t, "about.stats.location.label", "Location");
  const statLocValue = tt(t, "about.stats.location.value", "Global");

  const statExpLabel = tt(t, "about.stats.experience.label", "Experience");
  const statExpValue = tt(t, "about.stats.experience.value", "+3 Años");

  const statAppLabel = tt(t, "about.stats.approach.label", "Approach");
  const statAppValue = tt(t, "about.stats.approach.value", "Estrategia & Performance");

  // --- 3. CONSTRUCCIÓN DINÁMICA DE SLIDES (MOBILE) ---
  const aboutSlides = [
    {
      id: "intro",
      title: tt(t, "about.slides.intro", "Quién Soy"),
      content: (
        <div className="flex flex-col h-full">
          <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden border border-white/10 bg-[#111]">
            <Image
              src="/about.png"
              alt="Verónica Cruces"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="text-white/80 font-light leading-relaxed text-sm">
             {p1.split(".")[0]}. <strong className="text-white font-medium">Eficiencia</strong>. {p1.split(".")[2]}.
          </p>
        </div>
      )
    },
    {
      id: "philosophy",
      title: tt(t, "about.slides.philosophy", "Filosofía"),
      content: (
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-2xl font-serif italic text-white mb-6">
            {heading1} <br />
            <span className="font-sans not-italic font-bold text-white/40">{heading2}</span>
          </h3>
          <p className="text-white/70 font-light leading-relaxed mb-6 border-l border-white/20 pl-4 text-sm">
            {p2}
          </p>
          <p className="text-white font-medium text-sm">
            {p4}
          </p>
        </div>
      )
    },
    {
      id: "team",
      title: tt(t, "about.slides.team", "El Equipo"),
      content: (
        <div className="flex flex-col justify-center h-full">
          <p className="text-white/70 font-light leading-relaxed mb-8 text-sm">
            {p3}
          </p>
          {/* --- CORRECCIÓN AQUÍ: p-4 en vez de p-6 para dar espacio en pantallas pequeñas --- */}
          <div className="p-4 md:p-6 border border-white/10 bg-white/[0.02] rounded-lg">
            <p className="text-white font-medium text-center text-sm italic leading-relaxed">
              "{tt(t, "about.quote", "No trabajamos como una fábrica...")}"
            </p>
          </div>
        </div>
      )
    },
    {
      id: "stats",
      title: tt(t, "about.slides.stats", "Datos Clave"),
      content: (
        <div className="grid grid-cols-1 gap-4 h-full content-center">
          <div className="border-b border-white/10 pb-3">
            <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{statFocusLabel}</h4>
            <p className="text-white text-base">{statFocusValue}</p>
          </div>
          <div className="border-b border-white/10 pb-3">
            <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{statLocLabel}</h4>
            <p className="text-white text-base">{statLocValue}</p>
          </div>
          <div className="border-b border-white/10 pb-3">
            <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{statExpLabel}</h4>
            <p className="text-white text-base">{statExpValue}</p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">{statAppLabel}</h4>
            <p className="text-white text-base">{statAppValue}</p>
          </div>
        </div>
      )
    }
  ];

  // --- LÓGICA MOBILE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = aboutSlides.length - 1;
    if (newIndex >= aboutSlides.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="about" className="relative w-full bg-[#050505]">

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

      {/* =======================================================================
          1. VERSIÓN MOBILE: CARRUSEL
         ======================================================================= */}
      <div className="block lg:hidden px-6 py-24 w-full relative z-10">

        <div className="mb-8">
          <SectionHeader
            id="about-header-mob"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        <div className="relative min-h-[600px] flex flex-col justify-between">

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full flex-grow flex flex-col"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-mono text-white/30 tracking-widest">0{currentIndex + 1}</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{aboutSlides[currentIndex].title}</h3>
              </div>

              <div className="flex-grow">
                {aboutSlides[currentIndex].content}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6 border-t border-white/[0.05] pt-6">
            <div className="flex gap-2">
              {aboutSlides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#contact" className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 border-b border-white/20 pb-1 hover:text-white transition-colors">
              {ctaText} →
            </a>
          </div>

        </div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP
         ======================================================================= */}
      <div className="hidden lg:block px-6 md:px-12 py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto relative z-10">

          <div className="mb-16 lg:mb-24">
            <SectionHeader
              id="about-header"
              title={headerTitle}
              bgText={headerBg}
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center order-2 lg:order-1"
            >
                <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-10 leading-tight">
                  {heading1} <br />
                  <span className="font-sans not-italic font-bold text-white/40">{heading2}</span>
                </h2>

                <div className="space-y-8 text-base md:text-lg text-white/70 font-light leading-relaxed border-l border-white/10 pl-8 md:pl-10">
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <p>{p3}</p>
                  <p className="text-white font-medium">{p4}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-16 mb-12 py-10 border-t border-b border-white/10">
                  <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{statFocusLabel}</h4>
                    <p className="text-white text-sm">{statFocusValue}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{statLocLabel}</h4>
                    <p className="text-white text-sm">{statLocValue}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{statExpLabel}</h4>
                    <p className="text-white text-sm">{statExpValue}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{statAppLabel}</h4>
                    <p className="text-white text-sm">{statAppValue}</p>
                  </div>
                </div>
            </motion.div>

            <div className="order-1 lg:order-2 relative h-full">
              <div className="lg:sticky lg:top-20 w-full flex flex-col items-center lg:items-end gap-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    borderRadius: [
                      "50% 50% 50% 50% / 50% 50% 50% 50%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "40% 60% 70% 30% / 50% 60% 30% 60%",
                      "50% 50% 50% 50% / 50% 50% 50% 50%"
                    ],
                    y: [0, -15, 0]
                  }}
                  transition={{
                    borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="relative w-full max-w-[550px] lg:max-w-[650px] aspect-square overflow-hidden border border-white/10 bg-[#111] shadow-2xl z-10"
                >
                  <Image
                    src="/about.png"
                    alt="Verónica Cruces"
                    fill
                    className="object-cover object-top scale-[1.15] hover:scale-105 transition-all duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex justify-center lg:justify-end w-full max-w-[550px] lg:max-w-[650px]"
                >
                  <a href="#contact" className="group flex items-center gap-4 text-white hover:text-white/70 transition-colors cursor-pointer">
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <FiArrowRight className="text-xl" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase">{ctaText}</span>
                  </a>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}