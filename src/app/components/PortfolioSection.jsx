"use client";

import { useState } from "react";
import { Globe, Layout, FileText, PlusCircle } from "lucide-react";
import Image from "next/image";
// React Icons imports for technologies
import { 
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiFramer,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiVite,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { MdApi, MdImage } from "react-icons/md";
import { AiOutlineMail,  AiOutlineCloud } from "react-icons/ai";

export default function PortafolioSection() {
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
      title: "Impacto Real Estate 2.0",
      type: "Página Web",
      icon: Globe,
      details: "Sitio web institucional para inmobiliaria. Presenta propiedades desde la API de Tokko Broker, secciones animadas, formulario de contacto conectado con Firebase, y diseño responsive. Incluye buscador, galería de propiedades y enlaces externos con botones personalizados.",
      client: "Impacto Real Estate",
      industry: "Bienes Raíces",
      tech: "JavaScript, React 18, Vite, Firebase, Bootstrap 5, API Tokko Broker",
      url: "https://impacto-realestate.com/",
      image: "/portfolio/impacto.jpg"
    },
    {
      title: "Gas y Proyectos",
      type: "Página Web",
      icon: Globe,
      details: "Sitio corporativo desarrollado para una empresa especializada en instalaciones de gas. Presenta los servicios técnicos que ofrecen, portafolio de proyectos, formulario de contacto funcional y diseño profesional responsivo con animaciones suaves.",
      client: "Gas y Proyectos S.A.C.",
      industry: "Instalaciones de Gas",
      tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion, Nodemailer",
      url: "https://demo0016.netlify.app/",
      image: "/portfolio/gasyproyectos.jpg"
    },
    {
      title: "EPP Docs",
      type: "Aplicación Web",
      icon: FileText,
      details: "Aplicación para cargar documentos a OneDrive. Implementa un formulario en HTML/CSS/JS que permite seleccionar cliente y número de documento, subir imágenes y PDFs, convertir imágenes a PDF con jsPDF, y almacenar archivos en OneDrive usando Microsoft Graph y MSAL.",
      client: "Brolsac",
      industry: "Gestión Documental",
      tech: "HTML, CSS, JavaScript, Node.js, Express, MongoDB, @microsoft/microsoft-graph-client",
      url: "https://app-brolsac-37a742b8c39d.herokuapp.com/",
      image: "/portfolio/eppsdocs.jpg"
    }
  ];

  const techIcons = {
    'Next.js 15': <SiNextdotjs className="w-6 h-6 text-[#BF8173]" />,
    'App Router': <SiNextdotjs className="w-6 h-6 text-[#BF8173]" />,  
    'React 19': <SiReact className="w-6 h-6 text-[#BF8173]" />,
    'React 18': <SiReact className="w-6 h-6 text-[#BF8173]" />,
    'TypeScript': <SiTypescript className="w-6 h-6 text-[#BF8173]" />,
    'Framer Motion': <SiFramer className="w-6 h-6 text-[#BF8173]" />,
    'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-[#BF8173]" />,
    'JavaScript': <SiJavascript className="w-6 h-6 text-[#BF8173]" />,
    'Firebase': <SiFirebase className="w-6 h-6 text-[#BF8173]" />,
    'Vue.js': <SiVuedotjs className="w-6 h-6 text-[#BF8173]" />,
    'Node.js': <SiNodedotjs className="w-6 h-6 text-[#BF8173]" />,
    'Express': <SiExpress className="w-6 h-6 text-[#BF8173]" />,
    'MongoDB': <SiMongodb className="w-6 h-6 text-[#BF8173]" />,
    'Bootstrap 5': <SiBootstrap className="w-6 h-6 text-[#BF8173]" />,
    'Vite': <SiVite className="w-6 h-6 text-[#BF8173]" />,
    'HTML': <SiHtml5 className="w-6 h-6 text-[#BF8173]" />,
    'CSS': <SiCss3 className="w-6 h-6 text-[#BF8173]" />,
    '@microsoft/microsoft-graph-client': <MdApi className="w-6 h-6 text-[#BF8173]" />,
    'API Tokko Broker': <MdApi className="w-6 h-6 text-[#BF8173]" />,
    'Nodemailer': <AiOutlineMail className="w-6 h-6 text-[#BF8173]" />,
    'Lucide': <AiOutlineCloud className="w-6 h-6 text-[#BF8173]" />,  
    'Next/Image': <MdImage className="w-6 h-6 text-[#BF8173]" />
  };

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-36 sm:py-44 px-4 sm:px-6 lg:px-8 bg-[#263321] text-[#F2F2F2]"
    >
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="relative mb-20 sm:mb-24 text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#BF8173] relative z-10">Mis Trabajos</h2>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <h1 className="text-[2.5rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-[#F2F2F2] opacity-5 leading-none">PORTAFOLIO</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map(({ title, type, icon: Icon }) => (
            <button
              key={title}
              onClick={() => setSelectedProject(projects.find(p => p.title === title))}
              className="group relative flex flex-col items-center justify-between px-6 py-8 sm:py-10 bg-[#324024] rounded-xl border border-transparent hover:border-[#BF8173] transition-all hover:scale-[1.03]"
            >
              <div className="flex flex-col items-center">
                <Icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#F2F2F2] group-hover:text-[#BF8173] transition-colors" />
                <span className="mt-4 text-lg sm:text-xl font-semibold text-[#F2F2F2] group-hover:text-[#BF8173] text-center">{title}</span>
                <span className="text-sm sm:text-base text-[#A0C49D] mt-1 text-center">{type}</span>
              </div>
              <div className="absolute bottom-3 right-3 group">
                <PlusCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#BF8173] group-hover:text-[#F2F2F2] transition-colors animate-pulse" />
                <div className="absolute bottom-full right-0 mb-2 bg-[#BF8173] text-[#F2F2F2] text-xs px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity before:absolute before:content-[''] before:top-full before:right-3 before;border-transparent before:border-t-[#BF8173]">Ver más</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-start justify-center z-50 px-4 pt-16 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#F2F2F2] rounded-2xl shadow-2xl p-10 sm:p-16 max-w-6xl w-full flex flex-col sm:flex-row gap-12 items-start relative text-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-[#BF8173] hover;text-[#324024] text-3xl font-bold">✕</button>
            {selectedProject.image && (
              <div className="w-full sm:w-1/2 max-h-[650px] overflow-y-auto rounded-xl border border-[#BF8173] custom-scrollbar scrollbar-thin scrollbar-thumb-[#BF8173] scrollbar-track-[#EADCD6] scrollbar-rounded-lg hover_scrollbar-thumb-[#A76157']">
                <Image src={selectedProject.image} alt={selectedProject.title} width={900} height={1400} className="w-full object-cover object-top" />
              </div>
            )}
            <div className="flex-1 text-[#324024] w-full">
              <h3 className="text-3xl sm:text-4xl font-bold mb-5">{selectedProject.title}</h3>
              <p className="mb-6 text-justify text-lg sm:text-xl leading-relaxed">{selectedProject.details}</p>
              {selectedProject.client && (
                <div className="text-lg space-y-4">
                  <p><strong>Cliente:</strong> {selectedProject.client}</p>
                  <p><strong>Industria:</strong> {selectedProject.industry}</p>
                  <div className="flex flex-wrap gap-4 items-center mt-4">
                    {selectedProject.tech.split(',').map((tech) => (
                      <span key={tech.trim()} className="inline-flex items-center gap-3 text-base px-4 py-2 rounded-full bg-[#BF8173]/10 text-[#324024] border border-[#BF8173]">
                        {techIcons[tech.trim()] || <AiOutlineCloud className="w-6 h-6 text-[#BF8173]" />}
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <p><strong>URL:</strong> <a href={selectedProject.url} target="_blank" className="text-[#BF8173] underline text-lg">{selectedProject.url}</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
