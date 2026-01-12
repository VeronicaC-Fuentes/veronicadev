"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VisualBreak() {
  const containerRef = useRef(null);
  
  // Efecto Parallax suave: el texto se mueve a diferente velocidad que el scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Movimiento vertical suave y desvanecimiento
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. VIDEO DE FONDO (Color natural) */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/video-1.webm" type="video/webm" />
      </video>

      {/* 2. ATMÓSFERA (Gradientes para suavizar cortes) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-black/20" /> 

      {/* 3. MENSAJE MINIMALISTA */}
      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 text-center px-6"
      >
        <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-4">
           <span className="text-white/80 italic font-serif">"Digitalizando tu visión."</span>
        </h3>
        <div className="w-12 h-[1px] bg-white/30 mx-auto mt-6"></div>
      </motion.div>

    </section>
  );
}