// src/app/portfolio/page.jsx

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar"; 
import { ALL_PROJECTS } from "../components/projects"; 

function GalleryCard({ project }) {
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
          alt={project.id} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <FiArrowUpRight size={24} className="text-white" />
        </div>
      </div>
      
      {/* --- AQUÍ ESTÁ EL CAMBIO PARA MOSTRAR LA DESCRIPCIÓN --- */}
      <div className="flex flex-col border-t border-white/10 pt-4 gap-2">
         <div className="flex justify-between items-start">
            <h4 className="text-lg font-medium text-white group-hover:text-white/70 transition-colors uppercase">
                {project.id}
            </h4> 
            {/* Tech stack muy sutil a la derecha o abajo */}
         </div>
         
         {/* Descripción Breve */}
         <p className="text-sm text-white/60 font-light leading-relaxed">
            {project.description}
         </p>

         {/* Tecnologías más pequeñas abajo */}
         <p className="text-xs text-white/30 uppercase tracking-wider mt-1">
            {project.tech}
         </p>
      </div>
    </motion.a>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar /> 
      
      <main className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        
        <div className="mb-20 mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest mb-8 transition-colors">
                <FiArrowLeft /> Volver al inicio
            </Link>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                PORTAFOLIO <span className="text-white/20">FULL</span>
            </h1>
            <p className="text-white/50 max-w-xl font-light leading-relaxed">
                Colección completa de desarrollos web, módulos Odoo y experimentos de código.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {ALL_PROJECTS.map((proj) => (
            <GalleryCard key={proj.id} project={proj} />
          ))}
        </div>

      </main>
    </div>
  );
}