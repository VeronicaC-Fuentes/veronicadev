"use client";
import SectionHeader from './SectionHeader';
import { useState } from "react";
import { Globe, Layout, FileText, PlusCircle } from "lucide-react";
import Image from "next/image";
import {
  SiNextdotjs, SiReact, SiTypescript, SiFramer, SiTailwindcss, SiJavascript, SiFirebase,
  SiNodedotjs, SiExpress, SiMongodb, SiBootstrap, SiHtml5, SiCss3, SiVuedotjs, SiVite
} from "react-icons/si";
import { MdApi, MdImage } from "react-icons/md";
import { AiOutlineMail, AiOutlineCloud } from "react-icons/ai";

const techIcons = {
  'Next.js 15': <SiNextdotjs className="w-5 h-5 text-[#8F67E8]" />,
  'App Router': <SiNextdotjs className="w-5 h-5 text-[#8F67E8]" />,
  'React 19': <SiReact className="w-5 h-5 text-[#8F67E8]" />,
  'React 18': <SiReact className="w-5 h-5 text-[#8F67E8]" />,
  'TypeScript': <SiTypescript className="w-5 h-5 text-[#8F67E8]" />,
  'Framer Motion': <SiFramer className="w-5 h-5 text-[#8F67E8]" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5 text-[#8F67E8]" />,
  'JavaScript': <SiJavascript className="w-5 h-5 text-[#8F67E8]" />,
  'Firebase': <SiFirebase className="w-5 h-5 text-[#8F67E8]" />,
  'Vue.js': <SiVuedotjs className="w-5 h-5 text-[#8F67E8]" />,
  'Node.js': <SiNodedotjs className="w-5 h-5 text-[#8F67E8]" />,
  'Express': <SiExpress className="w-5 h-5 text-[#8F67E8]" />,
  'MongoDB': <SiMongodb className="w-5 h-5 text-[#8F67E8]" />,
  'Bootstrap 5': <SiBootstrap className="w-5 h-5 text-[#8F67E8]" />,
  'Vite': <SiVite className="w-5 h-5 text-[#8F67E8]" />,
  'HTML': <SiHtml5 className="w-5 h-5 text-[#8F67E8]" />,
  'CSS': <SiCss3 className="w-5 h-5 text-[#8F67E8]" />,
  '@microsoft/microsoft-graph-client': <MdApi className="w-5 h-5 text-[#8F67E8]" />,
  'API Tokko Broker': <MdApi className="w-5 h-5 text-[#8F67E8]" />,
  'Nodemailer': <AiOutlineMail className="w-5 h-5 text-[#8F67E8]" />,
  'Lucide': <AiOutlineCloud className="w-5 h-5 text-[#8F67E8]" />,
  'Next/Image': <MdImage className="w-5 h-5 text-[#8F67E8]" />
};

export default function PortafolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "The Hub",
      type: "Landing",
      icon: Layout,
      details: "Landing desarrollada para una empresa de eventos. Cuenta con una cartelera dinámica de eventos próximos y pasados, efectos de parallax, carrusel con video e integración externa con servicios de ticketing. Totalmente responsive y optimizada para SEO.",
      client: "The Hub",
      industry: "Eventos",
      tech: "Next.js 15, React 19, TypeScript, Framer Motion, Tailwind CSS",
      url: "https://thehubentertainment.pe/",
      image: "/portfolio/thehub.jpg"
    },
    {
      title: "Wasai",
      type: "Landing",
      icon: Layout,
      details: "Landing desarrollada para promover el lodge turístico Wasai en la selva de Perú. Incluye secciones de experiencias, galería de fotos, animaciones de entrada y conexión con Firebase para reservas.",
      client: "Wasai Perú",
      industry: "Turismo",
      tech: "JavaScript, React 19, Tailwind CSS, Framer Motion, Firebase",
      url: "https://landing.wasai.com/",
      image: "/portfolio/wasai.jpg"
    },

    {
      title: "Gas y Proyectos",
      type: "Página Web(En Desarrollo)",
      icon: Globe,
      details: "Sitio corporativo desarrollado para una empresa especializada en instalaciones de gas. Presenta los servicios técnicos que ofrecen, portafolio de proyectos, formulario de contacto funcional y diseño profesional responsivo con animaciones suaves.",
      client: "Gas y Proyectos S.A.C.",
      industry: "Instalaciones de Gas",
      tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion, Nodemailer",
      url: "https://demo0016.netlify.app/",
      image: "/portfolio/gasyproyectos.jpg"
    },

    {
      title: "Equipos de Protección Peruanos",
      type: "Página Web (En Desarrollo)",
      icon: Globe,
      details: "Sitio corporativo para Equipos de Protección Peruanos, distribuidores líderes de equipos de protección personal y seguridad industrial en Perú. Incluye catálogo de productos, servicios técnicos de recarga y mantenimiento de extintores, asesoría técnica, testimonios de clientes, formulario de contacto funcional y diseño responsivo con animaciones suaves.",
      client: "Equipos de Protección Peruanos",
      industry: "Seguridad Industrial",
      tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion, Nodemailer",
      url: "https://eppweb.netlify.app/",
      image: "/portfolio/eppweb.jpg",
    },


  ];

  // Bloquea scroll body si modal abierto
  if (typeof window !== "undefined") {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen px-2 sm:px-8 py-20 md:py-24 bg-[#232338] text-[#F3EFF5] flex flex-col items-center overflow-x-hidden"
    >
      {/* Glow decorativo superior */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: 480,
          height: 160,
          background: "radial-gradient(circle, #8F67E840 0%, transparent 72%)",
          filter: "blur(32px)",
        }}
      />
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto relative z-10">
        <SectionHeader
          id="portfolio"
          title="Mis trabajos"
          bgText="PORTAFOLIO"
          titleColor="#5E60CE"
          bgColor="#F3EFF5"
          bgOpacityClass="opacity-10"
        />
        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-full md:max-w-5xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="rounded-2xl border-2 border-[#8F67E8] bg-gradient-to-br from-[#201B30] via-[#221b2c] to-[#2e2441]/90 p-0.5 shadow-[0_2px_36px_0_#8F67E850] hover:shadow-[0_6px_38px_0_#8F67E8aa] transition-all duration-200 group"
            >
              <div
                className="cursor-pointer flex flex-col rounded-2xl bg-[#1B1928] min-h-[340px] overflow-hidden transition"
                onClick={() => setSelectedProject(proj)}
                tabIndex={0}
                aria-label={`Ver detalles de ${proj.title}`}
              >
                <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="400px"
                    className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay Glow al hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8F67E870] to-transparent opacity-0 group-hover:opacity-70 transition-all" />
                </div>
                <div className="flex flex-col gap-1 px-5 py-4 items-start">
                  <div className="flex items-center gap-2">
                    <proj.icon className="w-6 h-6 text-[#8F67E8]" />
                    <span className="font-bold text-lg text-[#8F67E8] group-hover:text-[#F3EFF5] transition">{proj.title}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#5E60CE] mb-2">{proj.type}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {proj.tech.split(',').slice(0, 3).map((tech) => (
                      <span key={tech.trim()} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[#8F67E8]/15 text-[#8F67E8] border border-[#8F67E8]/30 font-medium">
                        {techIcons[tech.trim()] || <AiOutlineCloud className="w-4 h-4 text-[#8F67E8]" />}
                        {tech.trim()}
                      </span>
                    ))}
                    {proj.tech.split(',').length > 3 && (
                      <span className="text-[#8F67E8] font-semibold text-xs px-2 py-0.5 rounded-full border border-[#8F67E8]/30 bg-transparent">+{proj.tech.split(',').length - 3} más</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[99] px-0 sm:px-8 py-0 sm:py-8 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`
        relative w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
        bg-gradient-to-br from-[#221b2c] via-[#29283d] to-[#392963]
        border-2 border-[#8F67E8] text-[#F3EFF5] rounded-none sm:rounded-2xl shadow-2xl
        flex flex-col md:flex-row gap-0 md:gap-10 overflow-hidden animate-fadeInUp
        h-full max-h-full sm:h-auto sm:max-h-[90vh]
      `}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="
    absolute top-3 right-3 sm:top-4 sm:right-4 z-10
    p-1.5 transition-all duration-150
    hover:scale-110 active:scale-95
    text-[#8F67E8] hover:text-[#FF6F61]
    bg-transparent border-none shadow-none
    outline-none focus:outline-none
    cursor-pointer
  "
              aria-label="Cerrar"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none"
                style={{ display: "block" }}
              >
                <line x1="6" y1="6" x2="14" y2="14" />
                <line x1="14" y1="6" x2="6" y2="14" />
              </svg>
            </button>

            <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-[#232338] to-[#29283d] border-b md:border-b-0 md:border-r border-[#8F67E8]/30 px-4 py-8 md:py-10">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={650}
                height={480}
                className="object-contain w-full max-h-[180px] sm:max-h-[240px] md:max-h-[60vh] rounded-xl shadow-lg"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col px-5 py-6 md:px-8 md:py-10 gap-3 overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#8F67E8]">{selectedProject.title}</h3>
              <span className="font-medium text-base mb-2 text-[#5E60CE]">{selectedProject.type}</span>
              <p className="mb-2 text-justify text-base text-[#F3EFF5] leading-relaxed">
                {selectedProject.details}
              </p>
              <div className="border-b border-[#8F67E822] my-2"></div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-8 gap-y-1 text-base">
                <p>
                  <span className="font-semibold text-[#5E60CE]">Cliente:</span> {selectedProject.client}
                </p>
                <p>
                  <span className="font-semibold text-[#5E60CE]">Industria:</span> {selectedProject.industry}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {selectedProject.tech.split(',').map((tech) => (
                  <span
                    key={tech.trim()}
                    className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#8F67E825] text-[#8F67E8] border border-[#8F67E8] font-medium hover:bg-[#8F67E860] transition"
                  >
                    {techIcons[tech.trim()] || <AiOutlineCloud className="w-5 h-5 text-[#8F67E8]" />}
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-[#5E60CE] font-semibold">URL:</span>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#8F67E8] underline font-semibold hover:text-[#FF6F61] transition break-all"
                >
                  {selectedProject.url}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M18 13V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"></path>
                    <polyline points="15 18 20 18 20 13"></polyline>
                    <line x1="20" y1="18" x2="10" y2="8"></line>
                  </svg>
                </a>
              </div>
            </div>
            <style>{`
        .animate-fadeIn { animation: fadeInModal .20s cubic-bezier(.62,.06,.36,1.22) both;}
        .animate-fadeInUp { animation: fadeInModalUp .30s cubic-bezier(.62,.06,.36,1.22) both;}
        @keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInModalUp { from { opacity: 0; transform: translateY(24px) scale(.98);} to { opacity: 1; transform: none;}}
      `}</style>
          </div>
        </div>
      )}

    </section>
  );
}