"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Iconos para navegar
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

const STEPS = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Estrategia",
    desc: "No escribo código sin entender tu negocio. Analizamos tus flujos actuales, definimos los puntos de dolor y trazamos la hoja de ruta técnica."
  },
  {
    id: "design",
    number: "02",
    title: "Diseño & Arquitectura",
    desc: "Definimos la estructura de datos en Odoo o el diseño visual en Figma. Todo se planifica para ser escalable, seguro y estético."
  },
  {
    id: "development",
    number: "03",
    title: "Desarrollo (The Craft)",
    desc: "Aquí ocurre la magia. Desarrollo limpio, modular y optimizado (Python/React). Con revisiones constantes para asegurar calidad."
  },
  {
    id: "delivery",
    number: "04",
    title: "Despegue & Soporte",
    desc: "Pruebas finales, puesta en producción y capacitación. No desaparezco tras el lanzamiento; te acompaño en la estabilización."
  }
];

// Animaciones Desktop
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

// Variantes Slider Mobile
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0
  })
};

export default function ProcessSection() {
  const { t } = useLang();

  const headerTitle = tt(t, "process.header.title", "Metodología");
  const headerBg = tt(t, "process.header.bg", "PROCESS");

  // --- LÓGICA MOBILE (SLIDER) ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = STEPS.length - 1;
    if (newIndex >= STEPS.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const currentStep = STEPS[currentIndex];

  return (
    <section id="process" className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* =======================================================================
          1. VERSIÓN MOBILE: SLIDER (CARRUSEL PASO A PASO)
          Visible solo en mobile (lg:hidden)
          Reduce el scroll vertical drásticamente.
         ======================================================================= */}
      <div className="block lg:hidden px-6 py-24 w-full">
        
        {/* HEADER MOBILE */}
        <div className="mb-12">
          <SectionHeader
            id="process-header-mob"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        {/* ÁREA DEL SLIDER */}
        <div className="relative min-h-[420px] flex flex-col justify-between">
          
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
              className="w-full h-full flex flex-col"
            >
              {/* TARJETA DEL PASO */}
              <div className="flex flex-col h-full justify-between border-t border-white/20 pt-8 pb-4">
                 
                 {/* Número Grande */}
                 <span className="text-8xl font-black text-white/5 font-sans mb-4 block">
                    {currentStep.number}
                 </span>

                 <div className="flex flex-col gap-6">
                    <h4 className="text-3xl font-bold text-white leading-tight">
                      {currentStep.title}
                    </h4>
                    <p className="text-base text-white/50 leading-relaxed font-light">
                      {currentStep.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES ABAJO */}
          <div className="flex items-center justify-between mt-8 border-t border-white/[0.05] pt-6">
             
             {/* Indicador de pasos (Puntos) */}
             <div className="flex gap-2">
                {STEPS.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/20'}`} 
                  />
                ))}
             </div>

             {/* Botones Flechas */}
             <div className="flex gap-4">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
                >
                   <FiChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="p-3 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors"
                >
                   <FiChevronRight size={20} />
                </button>
             </div>

          </div>

        </div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP (TU CÓDIGO ORIGINAL INTACTO)
          Visible solo en desktop (hidden lg:block)
         ======================================================================= */}
      <div className="hidden lg:block px-6 md:px-12 py-40 lg:py-56 max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 lg:mb-40">
          <SectionHeader
            id="process-header"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        {/* GRID DE PASOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between p-10 lg:p-12 border-t border-white/10 hover:border-white/50 transition-colors duration-500 min-h-[400px] lg:min-h-[550px]"
            >
              {/* Borde derecho sutil */}
              <div className={`hidden lg:block absolute right-0 top-12 bottom-12 w-[1px] bg-white/5 ${index === 3 ? 'hidden' : ''}`} />

              {/* Número Gigante */}
              <div>
                <span className="block text-7xl lg:text-8xl font-black text-white/5 group-hover:text-white transition-colors duration-700 select-none font-sans">
                    {step.number}
                </span>
              </div>

              {/* Contenido */}
              <div className="relative z-10 mt-12">
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h4>
                <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500 max-w-[90%]">
                  {step.desc}
                </p>
              </div>

              {/* Decoración Hover */}
              <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,1)]" />
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}