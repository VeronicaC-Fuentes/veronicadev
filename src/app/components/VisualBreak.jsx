"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VisualBreak() {
  const containerRef = useRef(null);
  
  // --- CONFIGURACIÓN PARALLAX ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transformaciones Desktop (Movimiento amplio)
  const yDesktop = useTransform(scrollYProgress, [0, 1], [80, -80]);
  
  // Transformaciones Mobile (Movimiento más corto y sutil para no marear)
  const yMobile = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-black overflow-hidden">
      
      {/* =======================================================================
          1. VERSIÓN MOBILE
          - Altura: 50vh (Compacto)
          - Parallax: Suave (yMobile)
          - Texto: Tamaño ajustado
         ======================================================================= */}
      <div className="block lg:hidden relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        
        {/* VIDEO FONDO MOBILE */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline // CRUCIAL para iOS
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/video-1.webm" type="video/webm" />
          {/* Tip: Agrega un <img src="poster.jpg" /> debajo si el video tarda en cargar */}
        </video>

        {/* ATMÓSFERA */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        
        {/* TEXTO MOBILE */}
        <motion.div 
          style={{ y: yMobile, opacity }} 
          className="relative z-10 text-center px-4"
        >
          <h3 className="text-2xl font-light text-white tracking-wide leading-snug">
             <span className="text-white/90 italic font-serif">"Digitalizando tu visión."</span>
          </h3>
          <div className="w-8 h-[1px] bg-white/40 mx-auto mt-4"></div>
        </motion.div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP (ORIGINAL)
          - Altura: 80vh (Impactante)
          - Parallax: Profundo (yDesktop)
         ======================================================================= */}
      <div className="hidden lg:flex relative w-full h-[80vh] items-center justify-center overflow-hidden">
        
        {/* VIDEO FONDO DESKTOP */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video-1.webm" type="video/webm" />
        </video>

        {/* ATMÓSFERA */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-black/20" /> 

        {/* TEXTO DESKTOP */}
        <motion.div 
          style={{ y: yDesktop, opacity }} 
          className="relative z-10 text-center px-6"
        >
          <h3 className="text-5xl font-light text-white tracking-tight leading-tight mb-4">
             <span className="text-white/80 italic font-serif">"Digitalizando tu visión."</span>
          </h3>
          <div className="w-12 h-[1px] bg-white/30 mx-auto mt-6"></div>
        </motion.div>
      </div>

    </section>
  );
}