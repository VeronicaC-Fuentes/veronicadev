"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; 
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

// --- COMPONENTE ESCRITORIO ---
function FeaturedCardDesktop({ project, index, t }) {
  const isEven = index % 2 === 0;
  
  // CORRECCIÓN 1: Invertimos el orden. 
  // Primero 'tt' busca en el JSON. Si falla, usa 'project.title' como fallback.
  const title = tt(t, `portfolio.projects.${project.id}.title`, project.title);
  const type = tt(t, `portfolio.projects.${project.id}.type`, project.type);
  const desc = tt(t, `portfolio.projects.${project.id}.details`, project.description);
  
  const techText = project.tech ? project.tech.split(",").join("  •  ") : "";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`group flex flex-col lg:flex-row gap-8 lg:gap-20 items-center mb-32 lg:mb-48 last:mb-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <a href={project.url} target="_blank" className="w-full lg:w-7/12 block overflow-hidden relative cursor-pointer">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
            <Image 
              src={project.image} 
              alt={title} 
              fill 
              className="object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </a>
      <div className="w-full lg:w-5/12 flex flex-col items-start">
        <span className="text-xs font-mono text-white/30 mb-6 tracking-widest">0{index + 1}</span>
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-white/80 transition-colors">{title}</h3>
        <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-8 border-l border-white/30 pl-3">{type}</span>
        <p className="text-base text-white/50 leading-relaxed font-light mb-8 max-w-sm">{desc}</p>
        <div className="text-xs text-white/30 uppercase tracking-widest leading-loose mb-10 font-mono">{techText}</div>
        <a href={project.url} target="_blank" className="flex items-center gap-3 text-white text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity border-b border-transparent hover:border-white pb-1">
          {/* CORRECCIÓN 2: Traducir el botón "Ver Proyecto" */}
          {tt(t, "portfolio.viewProject", "Ver Proyecto")} <FiArrowRight />
        </a>
      </div>
    </motion.div>
  );
}

// --- TARJETA MOBILE ---
function FeaturedCardMobile({ project, index, t }) {
  // CORRECCIÓN 3: Misma lógica invertida para mobile
  const title = tt(t, `portfolio.projects.${project.id}.title`, project.title);
  const type = tt(t, `portfolio.projects.${project.id}.type`, project.type);
  const desc = tt(t, `portfolio.projects.${project.id}.details`, project.description);
  
  return (
    <div className="w-full flex flex-col">
       <a href={project.url} target="_blank" className="block relative w-full aspect-[4/3] bg-[#111] overflow-hidden rounded-sm mb-6 border-b border-white/10 shadow-2xl">
          <Image src={project.image} alt={title} fill className="object-cover" />
          <div className="absolute top-3 right-3 text-[10px] font-mono text-white/70 bg-black/60 px-2 py-1 backdrop-blur-md border border-white/10">
            0{index + 1}
          </div>
       </a>

       <div className="flex flex-col items-start px-1">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40 mb-2">
             {type}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
             {title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed font-light mb-5 line-clamp-3">
             {desc}
          </p>
          <a href={project.url} target="_blank" className="flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase border-b border-white/20 pb-1 hover:border-white transition-colors">
            {/* CORRECCIÓN 4: Traducir botón mobile */}
            {tt(t, "portfolio.viewProject", "Ver Proyecto")} <FiArrowRight size={14} />
          </a>
       </div>
    </div>
  );
}

export default function PortfolioSection() {
  const { t } = useLang();
  
  const featured = ALL_PROJECTS.filter(p => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 })
  };
  
  const [direction, setDirection] = useState(0);
  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) nextSlide(); else prevSlide();
  };

  // CORRECCIÓN 5: Usar la clave correcta del JSON (header.title) y traducir el botón final
  const headerTitle = tt(t, "portfolio.header.title", "Mis trabajos");
  const viewFullText = tt(t, "portfolio.viewAll", "Ver Portafolio Completo");

  return (
    <section id="portfolio" className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* MOBILE */}
      <div className="block lg:hidden py-24 w-full">
         <div className="px-6 mb-12">
            <SectionHeader
              id="featured-header-mob"
              title={headerTitle} 
              bgText="WORKS"
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
         </div>

         <div className="relative w-full px-6 min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="w-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
              >
                <FeaturedCardMobile project={featured[currentIndex]} index={currentIndex} t={t} />
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col items-center justify-center mt-8 gap-6">
                <div className="flex items-center gap-8">
                    <button onClick={() => paginate(-1)} className="p-3 rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all active:scale-95">
                      <FiChevronLeft size={20} />
                    </button>
                    <span className="text-[10px] tracking-[0.2em] font-mono text-white/30">
                       {currentIndex + 1} / {featured.length}
                    </span>
                    <button onClick={() => paginate(1)} className="p-3 rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all active:scale-95">
                      <FiChevronRight size={20} />
                    </button>
                </div>
                <div className="flex gap-3">
                  {featured.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-white" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                    />
                  ))}
                </div>
            </div>
         </div>

         <div className="flex justify-center mt-12 border-t border-white/[0.05] pt-12 mx-6">
            <Link href="/portfolio" className="px-6 py-3 text-white/40 text-[10px] tracking-[0.2em] uppercase hover:text-white transition-colors">
                {viewFullText} →
            </Link>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block px-6 md:px-12 py-32 max-w-[1280px] mx-auto relative z-10">
        <div className="mb-24 lg:mb-32">
            <SectionHeader
              id="featured-header"
              title={headerTitle}
              bgText="WORKS"
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
        </div>

        <div className="flex flex-col">
          {featured.map((proj, idx) => (
            <FeaturedCardDesktop key={proj.id} project={proj} index={idx} t={t} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
            <Link href="/portfolio" className="px-8 py-4 border border-white/10 text-white/50 text-xs tracking-[0.25em] uppercase hover:text-white hover:border-white transition-all duration-500">
                {viewFullText}
            </Link>
        </div>
      </div>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;