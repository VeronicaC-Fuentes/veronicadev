"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar"; 
import { ALL_PROJECTS } from "../components/projects"; 
import { useLang } from "../components/LanguageProvider"; // Asegúrate de que la ruta sea correcta

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

function GalleryCard({ project, t }) {
  // Traducimos Título, Tipo y Descripción usando la misma lógica que en el Home
  // Si no encuentra traducción, usa la info del archivo projects.js como fallback
  const title = tt(t, `portfolio.projects.${project.id}.title`, project.title || project.id);
  const desc = tt(t, `portfolio.projects.${project.id}.details`, project.description);
  
  return (
    <motion.a
      href={project.url}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col gap-4 cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111] border border-white/10 rounded-sm">
        <Image 
          src={project.image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <FiArrowUpRight size={24} className="text-white" />
        </div>
      </div>
      
      <div className="flex flex-col border-t border-white/10 pt-4 gap-2">
         <div className="flex justify-between items-start">
            <h4 className="text-lg font-medium text-white group-hover:text-white/70 transition-colors uppercase">
                {title} 
            </h4> 
         </div>
         
         {/* Descripción Breve Traducida */}
         <p className="text-sm text-white/60 font-light leading-relaxed line-clamp-3">
            {desc}
         </p>

         {/* Tecnologías */}
         <p className="text-xs text-white/30 uppercase tracking-wider mt-1">
            {project.tech}
         </p>
      </div>
    </motion.a>
  );
}

export default function PortfolioPage() {
  const { t } = useLang();

  // Traducción de textos estáticos de la página
  const backText = tt(t, "portfolio.backHome", "Volver al inicio");
  const titleMain = tt(t, "portfolio.fullPortfolio.title", "PORTAFOLIO");
  const titleSub = tt(t, "portfolio.fullPortfolio.subtitle", "FULL");
  const descMain = tt(t, "portfolio.fullPortfolio.desc", "Colección completa de desarrollos web, módulos Odoo y experimentos de código.");

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar /> 
      
      <main className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        
        <div className="mb-20 mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest mb-8 transition-colors">
                <FiArrowLeft /> {backText}
            </Link>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                {titleMain} <span className="text-white/20">{titleSub}</span>
            </h1>
            <p className="text-white/50 max-w-xl font-light leading-relaxed">
                {descMain}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ALL_PROJECTS.map((proj) => (
            <GalleryCard key={proj.id} project={proj} t={t} />
          ))}
        </div>

      </main>
    </div>
  );
}