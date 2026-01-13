"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";

// --- DATOS PARA EL SLIDER MÓVIL (Fragmentamos tu texto para mobile) ---
const ABOUT_SLIDES = [
  {
    id: "intro",
    title: "Quién Soy",
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
          Siempre me ha obsesionado entender cómo funcionan las cosas por dentro. Mi viaje en la tecnología no empezó buscando clientes, sino buscando <strong className="text-white font-medium">eficiencia</strong>.
        </p>
      </div>
    )
  },
  {
    id: "philosophy",
    title: "Filosofía",
    content: (
      <div className="flex flex-col justify-center h-full">
         <h3 className="text-2xl font-serif italic text-white mb-6">
           Arquitectura Digital. <br />
           <span className="font-sans not-italic font-bold text-white/40">Crecimiento Real.</span>
         </h3>
         <p className="text-white/70 font-light leading-relaxed mb-6 border-l border-white/20 pl-4 text-sm">
            Me di cuenta temprano de que el código por sí solo no resuelve problemas; es la lógica detrás del código la que transforma el caos en estructura.
         </p>
         <p className="text-white/70 font-light leading-relaxed text-sm">
            Para escalar negocios reales, la tecnología debe dejar de ser un obstáculo y convertirse en un <strong className="text-white font-medium">motor silencioso y eficiente</strong>.
         </p>
      </div>
    )
  },
  {
    id: "team",
    title: "El Equipo",
    content: (
       <div className="flex flex-col justify-center h-full">
          <p className="text-white/70 font-light leading-relaxed mb-8 text-sm">
            Hoy, esta visión ha crecido más allá de mí. Lidero un <strong>equipo ágil de especialistas</strong> donde unimos la ingeniería robusta (Odoo/Backend) con el desarrollo web de alto rendimiento.
          </p>
          <div className="p-6 border border-white/10 bg-white/[0.02] rounded-lg">
             <p className="text-white font-medium text-center text-sm">
                "No somos una fábrica de software; somos tus socios estratégicos."
             </p>
          </div>
       </div>
    )
  },
  {
    id: "stats",
    title: "Datos Clave",
    content: (
       <div className="grid grid-cols-1 gap-4 h-full content-center">
          <div className="border-b border-white/10 pb-3">
              <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Core Focus</h4>
              <p className="text-white text-base">Desarrollo Odoo & Web Apps</p>
          </div>
          <div className="border-b border-white/10 pb-3">
              <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Location</h4>
              <p className="text-white text-base">Global (Remote First)</p>
          </div>
          <div className="border-b border-white/10 pb-3">
              <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Experience</h4>
              <p className="text-white text-base">+3 Años construyendo sistemas</p>
          </div>
          <div>
              <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">Approach</h4>
              <p className="text-white text-base">Estrategia & Performance</p>
          </div>
       </div>
    )
  }
];

// VARIANTES ANIMACIÓN SLIDER
const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
};

export default function AboutSection() {
  
  // --- LÓGICA MOBILE ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = ABOUT_SLIDES.length - 1;
    if (newIndex >= ABOUT_SLIDES.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="about" className="relative w-full bg-[#050505]">
      
      {/* Fondo de ruido (Común para ambos) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>


      {/* =======================================================================
          1. VERSIÓN MOBILE: CARRUSEL "STORYTELLING"
          Visible solo en mobile (lg:hidden). Diseño totalmente independiente.
         ======================================================================= */}
      <div className="block lg:hidden px-6 py-24 w-full relative z-10">
         
         {/* Header Mobile */}
         <div className="mb-8">
            <SectionHeader
              id="about-header-mob"
              title="Perfil & Visión" 
              bgText="PROFILE"
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
         </div>

         {/* ÁREA DEL SLIDER */}
         <div className="relative min-h-[550px] flex flex-col justify-between">
            
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
                 {/* Título de la Slide Actual */}
                 <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-mono text-white/30 tracking-widest">0{currentIndex + 1}</span>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{ABOUT_SLIDES[currentIndex].title}</h3>
                 </div>

                 {/* Contenido Dinámico */}
                 <div className="flex-grow">
                    {ABOUT_SLIDES[currentIndex].content}
                 </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLES */}
            <div className="flex items-center justify-between mt-6 border-t border-white/[0.05] pt-6">
                
                {/* Indicadores Puntos */}
                <div className="flex gap-2">
                   {ABOUT_SLIDES.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/20'}`} 
                      />
                   ))}
                </div>

                {/* Flechas */}
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
            
            {/* Botón CTA Mobile */}
            <div className="mt-8 flex justify-center">
                 <a href="#contact" className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 border-b border-white/20 pb-1 hover:text-white transition-colors">
                    Iniciar Proyecto →
                 </a>
            </div>

         </div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP: TU CÓDIGO ORIGINAL (INTACTO)
          Visible solo en desktop (hidden lg:block).
          He copiado y pegado TU código base aquí dentro.
         ======================================================================= */}
      <div className="hidden lg:block px-6 md:px-12 py-24 lg:py-40">
        <div className="max-w-[1400px] mx-auto relative z-10">
            
            {/* HEADER */}
            <div className="mb-16 lg:mb-24">
            <SectionHeader
                id="about-header"
                title="Perfil & Visión" 
                bgText="PROFILE"
                titleColor="#FFFFFF"
                bgColor="#FFFFFF"
                bgOpacityClass="opacity-[0.03]"
            />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* 1. COLUMNA TEXTO (Izquierda) */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center order-2 lg:order-1"
            >
                <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-10 leading-tight">
                Arquitectura Digital. <br />
                <span className="font-sans not-italic font-bold text-white/40">Crecimiento Real.</span>
                </h2>

                <div className="space-y-8 text-base md:text-lg text-white/70 font-light leading-relaxed border-l border-white/10 pl-8 md:pl-10">
                <p>
                    Siempre me ha obsesionado entender cómo funcionan las cosas por dentro. Mi viaje en la tecnología no empezó buscando clientes, sino buscando 
                    <strong className="text-white font-medium"> eficiencia</strong>. Me di cuenta temprano de que el código por sí solo no resuelve problemas; es la lógica detrás del código la que transforma el caos en estructura.
                </p>
                
                <p>
                    Entendí que para escalar negocios reales, la tecnología debe dejar de ser un obstáculo y convertirse en un <strong className="text-white font-medium">motor silencioso y eficiente</strong>.
                </p>
                
                <p>
                    Hoy, esta visión ha crecido más allá de mí. Lidero un <strong>equipo ágil de especialistas</strong> donde unimos la ingeniería robusta (Odoo/Backend) con el desarrollo web de alto rendimiento. No somos una fábrica de software; somos tus socios estratégicos.
                </p>
                
                <p className="text-white font-medium">
                    Diseñamos ecosistemas digitales completos que te permiten operar mejor, vender más y crecer sin fricción técnica.
                </p>
                </div>

                {/* Grid de Datos */}
                <div className="grid grid-cols-2 gap-y-10 gap-x-8 mt-16 mb-12 py-10 border-t border-b border-white/10">
                    <div>
                        <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Core Focus</h4>
                        <p className="text-white text-sm">Desarrollo Odoo & Web Apps</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Location</h4>
                        <p className="text-white text-sm">Global (Remote First)</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Experience</h4>
                        <p className="text-white text-sm">+3 Años construyendo sistemas</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Approach</h4>
                        <p className="text-white text-sm">Estrategia & Performance</p>
                    </div>
                </div>

            </motion.div>


            {/* 2. COLUMNA IMAGEN (Derecha) */}
            <div className="order-1 lg:order-2 relative h-full">
                
                {/* STICKY CONTAINER */}
                <div className="lg:sticky lg:top-20 w-full flex flex-col items-center lg:items-end gap-10">
                    
                    {/* --- LA FOTO --- */}
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

                    {/* --- EL BOTÓN --- */}
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
                            <span className="text-sm font-bold tracking-[0.2em] uppercase">Iniciar Proyecto</span>
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