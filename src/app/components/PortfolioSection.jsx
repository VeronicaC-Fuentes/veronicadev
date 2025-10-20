"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

// Icons
import { Globe, Layout, FileText, Wrench } from "lucide-react";

// Tech badges
import {
  SiNextdotjs, SiReact, SiTypescript, SiFramer, SiTailwindcss, SiJavascript,
  SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiBootstrap, SiHtml5, SiCss3,
  SiVuedotjs, SiVite
} from "react-icons/si";
import { MdApi, MdImage } from "react-icons/md";
import { AiOutlineMail, AiOutlineCloud } from "react-icons/ai";

const techIcons = {
  "Next.js 15": <SiNextdotjs className="w-5 h-5 text-[#8F67E8]" />,
  "App Router": <SiNextdotjs className="w-5 h-5 text-[#8F67E8]" />,
  "React 19": <SiReact className="w-5 h-5 text-[#8F67E8]" />,
  "React 18": <SiReact className="w-5 h-5 text-[#8F67E8]" />,
  TypeScript: <SiTypescript className="w-5 h-5 text-[#8F67E8]" />,
  "Framer Motion": <SiFramer className="w-5 h-5 text-[#8F67E8]" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-[#8F67E8]" />,
  JavaScript: <SiJavascript className="w-5 h-5 text-[#8F67E8]" />,
  Firebase: <SiFirebase className="w-5 h-5 text-[#8F67E8]" />,
  "Vue.js": <SiVuedotjs className="w-5 h-5 text-[#8F67E8]" />,
  "Node.js": <SiNodedotjs className="w-5 h-5 text-[#8F67E8]" />,
  Express: <SiExpress className="w-5 h-5 text-[#8F67E8]" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-[#8F67E8]" />,
  "Bootstrap 5": <SiBootstrap className="w-5 h-5 text-[#8F67E8]" />,
  Vite: <SiVite className="w-5 h-5 text-[#8F67E8]" />,
  HTML: <SiHtml5 className="w-5 h-5 text-[#8F67E8]" />,
  CSS: <SiCss3 className="w-5 h-5 text-[#8F67E8]" />,
  "@microsoft/microsoft-graph-client": <MdApi className="w-5 h-5 text-[#8F67E8]" />,
  "API Tokko Broker": <MdApi className="w-5 h-5 text-[#8F67E8]" />,
  Nodemailer: <AiOutlineMail className="w-5 h-5 text-[#8F67E8]" />,
  Lucide: <AiOutlineCloud className="w-5 h-5 text-[#8F67E8]" />,
  "Next/Image": <MdImage className="w-5 h-5 text-[#8F67E8]" />,
};

// === PROYECTOS BASE (solo datos técnicos) ===
const BASE_PROJECTS = [
  { id: "factor",        icon: Layout, image: "/portfolio/factorbarcelona.png", url: "https://www.factorbarcelona.com/", tech: "Odoo 18, Python, Owl, JavaScript, XML, SCSS" },
  { id: "giuni",         icon: Layout, image: "/portfolio/giuni-cartagena.png", url: "https://www.inmobiliariagiunicartagena.com/", tech: "Odoo 18 Website, Owl, JavaScript, SCSS/Bootstrap, XML (snippets), Python (ajustes mínimos)" },
  { id: "bresson",       icon: Wrench, image: "/portfolio/bresson.png", url: "https://bresson.com.ar/", tech: "WordPress, JavaScript, HTML, CSS" },
  { id: "thehub",        icon: Layout, image: "/portfolio/thehub.jpg", url: "https://thehubentertainment.pe/", tech: "Next.js 15, React 19, TypeScript, Framer Motion, Tailwind CSS" },
  { id: "wasai",         icon: Layout, image: "/portfolio/wasai.jpg", url: "https://landing.wasai.com/", tech: "JavaScript, React 19, Tailwind CSS, Framer Motion, Firebase" },
  { id: "gasyproyectos", icon: Globe,  image: "/portfolio/gasyproyectos.jpg", url: "https://gasproyectosperu.com/", tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion, Nodemailer" },
  { id: "epp",           icon: Globe,  image: "/portfolio/eppweb.jpg", url: "https://equiposdeproteccion.pe/", tech: "Next.js 15, React 19, Tailwind CSS, Framer Motion, Nodemailer" },
  {
    id: "odoo_contacts", icon: FileText, url: "https://github.com/VeronicaC-Fuentes/Modulos_personalizados_Odoo_17/tree/main/contacts_form",
    images: ["/portfolio/odoo-portada.svg","/portfolio/odoo-contacts-1.png","/portfolio/odoo-contacts-2.png","/portfolio/odoo-contacts-3.png","/portfolio/odoo-contacts-4.png"],
    tech: "Odoo 17, Python, XML, PostgreSQL, Localización Perú"
  },
  {
    id: "odoo_products", icon: FileText, url: "https://github.com/VeronicaC-Fuentes/Modulos_personalizados_Odoo_17/tree/main/product_name_customization",
    images: ["/portfolio/odoo-portada.svg","/portfolio/odoo-products-1.png","/portfolio/odoo-products-2.png"],
    tech: "Odoo 17, Python, XML, PostgreSQL"
  },
  {
    id: "odoo_credit", icon: FileText, url: "https://github.com/VeronicaC-Fuentes/Modulos_personalizados_Odoo_17/tree/main/product_name_customization",
    images: ["/portfolio/odoo-portada.svg","/portfolio/odoo-restricciones-1.png","/portfolio/odoo-restricciones-2.png"],
    tech: "Odoo 17, Python, XML, Seguridad, Validaciones Avanzadas"
  }
];

export default function PortfolioSection() {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  // bloquear scroll cuando abre modal
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = prev; };
  }, [selectedProject]);

  // función para obtener textos i18n de cada proyecto
  const p = (id, key) => t(`portfolio.projects.${id}.${key}`);

  // etiquetas UI
  const L = {
    title:   t("portfolio.header.title"),
    bg:      t("portfolio.header.bg"),
    more:    t("portfolio.more"),
    client:  t("portfolio.client"),
    industry:t("portfolio.industry"),
    url:     t("portfolio.url"),
    prev:    t("portfolio.prev"),
    next:    t("portfolio.next"),
    close:   t("portfolio.close")
  };

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen px-2 sm:px-8 py-20 md:py-24 bg-[#232338] text-[#F3EFF5] flex flex-col items-center overflow-x-hidden"
    >
      {/* Glow */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{ width: 480, height: 160, background: "radial-gradient(circle, #8F67E840 0%, transparent 72%)", filter: "blur(32px)" }}
      />

      <div className="flex flex-col items-center w-full max-w-7xl mx-auto relative z-10">
        <SectionHeader
          id="portfolio"
          title={L.title}
          bgText={L.bg}
          titleColor="#5E60CE"
          bgColor="#F3EFF5"
          bgOpacityClass="opacity-10"
        />

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-full md:max-w-5xl mx-auto">
          {BASE_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl border-2 border-[#8F67E8] bg-gradient-to-br from-[#201B30] via-[#221b2c] to-[#2e2441]/90 p-0.5 shadow-[0_2px_36px_0_#8F67E850] hover:shadow-[0_6px_38px_0_#8F67E8aa] transition-all duration-200 group"
            >
              <div
                className="cursor-pointer flex flex-col rounded-2xl bg-[#1B1928] min-h-[340px] overflow-hidden transition"
                onClick={() => { setSelectedProject(proj); setImgIdx(0); }}
                tabIndex={0}
                aria-label={`${t("portfolio.viewDetails")} ${p(proj.id, "title")}`}
              >
                <div className="relative w-full h-40 rounded-t-2xl overflow-hidden">
                  <Image
                    src={(proj.images?.length ? proj.images[0] : proj.image) || "/portfolio/placeholder.jpg"}
                    alt={p(proj.id, "title")}
                    fill sizes="400px"
                    className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8F67E870] to-transparent opacity-0 group-hover:opacity-70 transition-all" />
                </div>

                <div className="flex flex-col gap-1 px-5 py-4 items-start">
                  <div className="flex items-center gap-2">
                    {(() => { const Icon = proj.icon || Wrench; return <Icon className="w-6 h-6 text-[#8F67E8]" aria-hidden="true" />; })()}
                    <span className="font-bold text-lg text-[#8F67E8] group-hover:text-[#F3EFF5] transition">
                      {p(proj.id, "title")}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#5E60CE] mb-2">{p(proj.id, "type")}</span>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {(proj.tech || "").split(",").slice(0, 3).map((tech) => {
                      const tname = tech.trim();
                      return (
                        <span key={tname} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[#8F67E8]/15 text-[#8F67E8] border border-[#8F67E8]/30 font-medium">
                          {techIcons[tname] || <AiOutlineCloud className="w-4 h-4 text-[#8F67E8]" />}
                          {tname}
                        </span>
                      );
                    })}
                    {(proj.tech || "").split(",").length > 3 && (
                      <span className="text-[#8F67E8] font-semibold text-xs px-2 py-0.5 rounded-full border border-[#8F67E8]/30 bg-transparent">
                        +{(proj.tech || "").split(",").length - 3} {L.more}
                      </span>
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
            className="relative w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-gradient-to-br from-[#221b2c] via-[#29283d] to-[#392963] border-2 border-[#8F67E8] text-[#F3EFF5] rounded-none sm:rounded-2xl shadow-2xl flex flex-col md:flex-row gap-0 md:gap-10 overflow-hidden animate-fadeInUp h-full max-h-full sm:h-auto sm:max-h[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 transition-all duration-150 hover:scale-110 active:scale-95 text-[#8F67E8] hover:text-[#FF6F61] bg-transparent border-none outline-none cursor-pointer"
              aria-label={L.close}
            >
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="6" x2="14" y2="14" />
                <line x1="14" y1="6" x2="6" y2="14" />
              </svg>
            </button>

            {/* SLIDER */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-[#232338] to-[#29283d] border-b md:border-b-0 md:border-r border-[#8F67E8]/30 px-4 py-8 md:py-10">
              {(() => {
                const images = selectedProject.images?.length ? selectedProject.images : [selectedProject.image || "/portfolio/placeholder.jpg"];
                return (
                  <>
                    <Image
                      src={images[imgIdx]}
                      alt={`${p(selectedProject.id, "title")} ${imgIdx + 1}`}
                      width={650} height={480}
                      className="object-contain w-full max-h-[180px] sm:max-h-[240px] md:max-h-[60vh] rounded-xl shadow-lg"
                      priority
                    />
                    {images.length > 1 && (
                      <div className="flex gap-2 mt-3 items-center">
                        <button
                          onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
                          className="p-1.5 rounded-full bg-[#29283d] hover:bg-[#8F67E8] text-[#8F67E8] hover:text-[#FFF] transition"
                          aria-label={L.prev}
                        >
                          {"‹"}
                        </button>
                        <span className="text-xs text-[#F3EFF5]">{imgIdx + 1} / {images.length}</span>
                        <button
                          onClick={() => setImgIdx((imgIdx + 1) % images.length)}
                          className="p-1.5 rounded-full bg-[#29283d] hover:bg-[#8F67E8] text-[#8F67E8] hover:text-[#FFF] transition"
                          aria-label={L.next}
                        >
                          {"›"}
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>

            {/* TEXTO */}
            <div className="flex-1 flex flex-col px-5 py-6 md:px-8 md:py-10 gap-3 overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#8F67E8]">{p(selectedProject.id, "title")}</h3>
              <span className="font-medium text-base mb-2 text-[#5E60CE]">{p(selectedProject.id, "type")}</span>
              <p className="mb-2 text-justify text-base text-[#F3EFF5] leading-relaxed">{p(selectedProject.id, "details")}</p>

              <div className="border-b border-[#8F67E822] my-2"></div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-8 gap-y-1 text-base">
                <p><span className="font-semibold text-[#5E60CE]">{L.client}:</span> {p(selectedProject.id, "client")}</p>
                <p><span className="font-semibold text-[#5E60CE]">{L.industry}:</span> {p(selectedProject.id, "industry")}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {(selectedProject.tech || "").split(",").map((tech) => {
                  const tname = tech.trim();
                  return (
                    <span key={tname} className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#8F67E825] text-[#8F67E8] border border-[#8F67E8] font-medium hover:bg-[#8F67E860] transition">
                      {techIcons[tname] || <AiOutlineCloud className="w-5 h-5 text-[#8F67E8]" />}
                      {tname}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-[#5E60CE] font-semibold">{L.url}:</span>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#8F67E8] underline font-semibold hover:text-[#FF6F61] transition break-all">
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
