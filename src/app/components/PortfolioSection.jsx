"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; 
import { FiArrowRight } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";
import { ALL_PROJECTS } from "./projects";

function tt(t, key, fallback) {
  const v = t?.(key);
  if (v === undefined || v === null) return fallback;
  if (Array.isArray(v)) return v;
  const s = String(v).trim();
  if (!s) return fallback;
  if (s.toLowerCase() === key.toLowerCase()) return fallback;
  return v;
}

function FeaturedCard({ project, index, t }) {
  const isEven = index % 2 === 0;

  // Datos
  const title = project.title || tt(t, `portfolio.projects.${project.id}.title`, "Project");
  const type = project.type || tt(t, `portfolio.projects.${project.id}.type`, "Web Development");
  const desc = project.description || tt(t, `portfolio.projects.${project.id}.details`, "Descripción técnica.");
  
  // Limpiamos el tech stack: Solo texto separado por puntos, sin iconos para no saturar
  const techText = project.tech ? project.tech.split(",").join("  •  ") : "";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group flex flex-col lg:flex-row gap-8 lg:gap-20 items-center mb-32 lg:mb-48 last:mb-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      
      {/* 1. IMAGEN (El foco dinámico) */}
      <a href={project.url} target="_blank" className="w-full lg:w-7/12 block overflow-hidden relative cursor-pointer">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
            {/* Imagen: B&N a Color + Zoom suave */}
            <Image 
              src={project.image} 
              alt={title} 
              fill 
              className="object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105" 
            />
            
            {/* Overlay sutil al hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </a>

      {/* 2. TEXTO (Minimalista Editorial) */}
      <div className="w-full lg:w-5/12 flex flex-col items-start">
        
        {/* Número decorativo */}
        <span className="text-xs font-mono text-white/30 mb-6 tracking-widest">
          0{index + 1}
        </span>

        {/* Título */}
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-white/80 transition-colors">
            {title}
        </h3>
        
        {/* Tipo de proyecto */}
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-8 border-l border-white/30 pl-3">
            {type}
        </span>
        
        {/* Descripción limpia */}
        <p className="text-base text-white/50 leading-relaxed font-light mb-8 max-w-sm">
            {desc}
        </p>
        
        {/* Tech Stack: Solo texto, elegante */}
        <div className="text-xs text-white/30 uppercase tracking-widest leading-loose mb-10 font-mono">
            {techText}
        </div>

        {/* Link simple */}
        <a 
            href={project.url} 
            target="_blank" 
            className="flex items-center gap-3 text-white text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-transparent hover:border-white pb-1"
        >
          Ver Proyecto
          <FiArrowRight />
        </a>
      </div>

    </motion.div>
  );
}

export default function PortfolioSection() {
  const { t } = useLang();
  
  // FILTRAR
  const featured = ALL_PROJECTS.filter(p => p.featured);

  return (
    <section id="portfolio" className="relative w-full bg-[#050505] px-6 md:px-12 py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* HEADER SIMPLE */}
        <div className="mb-24 lg:mb-32">
            <SectionHeader
              id="featured-header"
              title={tt(t, "portfolio.featured.title", "Proyectos")} // Texto más corto y elegante
              bgText="WORKS"
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
        </div>

        {/* LISTA */}
        <div className="flex flex-col">
          {featured.map((proj, idx) => (
            <FeaturedCard key={proj.id} project={proj} index={idx} t={t} />
          ))}
        </div>

        {/* BOTÓN FINAL */}
        <div className="flex justify-center mt-20">
            <Link 
              href="/portfolio" 
              className="px-8 py-4 border border-white/10 text-white/50 text-xs tracking-[0.25em] uppercase hover:text-white hover:border-white transition-all duration-500"
            >
                Ver Portafolio Completo
            </Link>
        </div>
      </div>
    </section>
  );
}