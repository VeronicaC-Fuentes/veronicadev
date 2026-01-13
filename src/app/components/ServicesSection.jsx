"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs, FaTerminal, FaDatabase,
  FaPaintBrush, FaLayerGroup, FaCode,
  FaServer, FaSearch, FaLaptopCode,
  FaArrowRight, FaRegCommentDots,
  FaPlus, FaMinus 
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

// --- ICONOS ---
const ICONS = {
  odoo_impl: <FaCogs />, odoo_dev: <FaDatabase />, odoo_custom: <FaTerminal />,
  dev_odoo: <FaLayerGroup />, dev_code: <FaCode />, dev_ui: <FaPaintBrush />,
  web_perf: <FaServer />, web_seo: <FaSearch />, web_admin: <FaLaptopCode />,
};

function tt(t, key, fallback) {
  const v = t?.(key);
  if (v === undefined || v === null) return fallback;
  if (Array.isArray(v)) return v;
  const s = String(v).trim();
  if (!s) return fallback;
  if (s.toLowerCase() === key.toLowerCase()) return fallback;
  return v;
}

// VARIANTES DE ANIMACIÓN
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ÍTEM CON MOVIMIENTO (HOVER - DESKTOP)
function ServiceItem({ iconKey, title, desc }) {
  return (
    <motion.div
      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.02)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative py-8 px-4 border-b border-white/[0.06] last:border-0 rounded-lg cursor-default"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4">
              <motion.span 
                className="text-white/30 group-hover:text-white transition-colors duration-300 text-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {ICONS[iconKey]}
              </motion.span>
              <h4 className="text-base md:text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300 tracking-wide">
                {title}
              </h4>
           </div>
           <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white/60">
             <FaArrowRight size={12} />
           </div>
        </div>
        <p className="text-xs md:text-sm text-white/40 font-light leading-relaxed pl-9 max-w-[95%] transition-colors duration-300 group-hover:text-white/60">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

// ÍTEM SIMPLE (MOBILE)
function ServiceItemMobile({ iconKey, title, desc }) {
    return (
      <div className="group relative py-5 px-0 border-b border-white/[0.06] last:border-0">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
             <span className="text-white/40 text-base">
               {ICONS[iconKey]}
             </span>
             <h4 className="text-sm font-medium text-white tracking-wide">
               {title}
             </h4>
          </div>
          <p className="text-xs text-white/50 font-light leading-relaxed pl-7">
            {desc}
          </p>
        </div>
      </div>
    );
}

// COLUMNA DESKTOP
function ServiceColumn({ title, subtitle, items = [], hasBorder }) {
  return (
    <motion.div 
      variants={columnVariants}
      className={`flex flex-col h-full px-2 md:px-6 ${hasBorder ? 'lg:border-r border-white/[0.06]' : ''}`}
    >
      <div className="mb-12 px-4">
        <h3 className="text-2xl font-light text-white tracking-tight mb-4 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></span>
          {title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed font-light pl-5 opacity-70">
          {subtitle}
        </p>
      </div>

      <div className="flex-grow">
        {items.map((it, idx) => (
          <ServiceItem
            key={idx}
            iconKey={it.icon}
            title={it.title}
            desc={it.description}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t } = useLang();
  
  // ESTADO PARA ACORDEÓN MÓVIL
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Header
  const headerTitle = tt(t, "services.header.title", "Servicios");
  const headerBg = tt(t, "services.header.bg", "EXPERTISE");

  // --- CORRECCIÓN 1: Definir variable para el texto del botón ---
  const ctaText = tt(t, "services.cta", "¿Consulta Específica?"); 

  // DATA
  const odooTitle = tt(t, "services.columns.odoo.title", "Arquitectura Odoo");
  const odooSubtitle = tt(t, "services.columns.odoo.subtitle", "Diseño la lógica y estructura de tu ERP para que funcione como el cerebro de tu negocio.");
  const odooItems = tt(t, "services.columns.odoo.items", [
    { icon: "odoo_impl", title: "Implementación ERP", description: "Configuración técnica de módulos core: Ventas, CRM, Inventario y Contabilidad." },
    { icon: "odoo_dev", title: "Desarrollo Backend", description: "Lógica Python a medida, server actions y personalización profunda de modelos." },
    { icon: "odoo_custom", title: "Reportes & Vistas", description: "Adaptación de documentos QWeb (PDFs) y vistas XML para flujos específicos." },
  ]);

  const devTitle = tt(t, "services.columns.dev.title", "Desarrollo Web");
  const devSubtitle = tt(t, "services.columns.dev.subtitle", "Construyo la cara visible de tu marca con código limpio y tecnología moderna.");
  const devItems = tt(t, "services.columns.dev.items", [
    { icon: "dev_odoo", title: "Odoo Website", description: "Sitios web y E-commerce 100% integrados al ERP en tiempo real." },
    { icon: "dev_code", title: "Desarrollo a Medida", description: "Webs corporativas y Landing Pages en Next.js para máxima libertad." },
    { icon: "dev_ui", title: "Diseño UI/UX", description: "Personalización de temas y experiencia de usuario enfocada en conversión." },
  ]);

  const careTitle = tt(t, "services.columns.care.title", "Web Care & SEO");
  const careSubtitle = tt(t, "services.columns.care.subtitle", "Protejo tu inversión digital. Optimización continua, seguridad y posicionamiento.");
  const careItems = tt(t, "services.columns.care.items", [
    { icon: "web_perf", title: "Performance", description: "Auditoría de Core Web Vitals y optimización de velocidad de carga extrema." },
    { icon: "web_seo", title: "SEO Técnico", description: "Estructura semántica y metadatos para mejorar tu ranking en Google." },
    { icon: "web_admin", title: "Mantenimiento", description: "Actualizaciones de seguridad, backups y soporte técnico continuo." },
  ]);

  const allColumns = [
    { title: odooTitle, subtitle: odooSubtitle, items: odooItems },
    { title: devTitle, subtitle: devSubtitle, items: devItems },
    { title: careTitle, subtitle: careSubtitle, items: careItems },
  ];

  return (
    <section id="services" className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* ATMÓSFERA VIVA */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 100, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"
        />
      </div>


      {/* =======================================================================
          1. VERSIÓN MOBILE (ACORDEÓN)
         ======================================================================= */}
      <div className="block lg:hidden px-6 py-24 relative z-10 w-full">
         <div className="mb-12">
            <SectionHeader
              id="services-header-mob"
              title={headerTitle}
              bgText={headerBg}
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.02]"
            />
         </div>

         <div className="flex flex-col gap-4">
            {allColumns.map((col, idx) => {
               const isActive = activeAccordion === idx;
               return (
                  <div key={idx} className={`rounded-xl transition-all duration-500 overflow-hidden ${isActive ? 'bg-white/[0.03] border border-white/10' : 'bg-transparent border border-white/[0.05]'}`}>
                     
                     <button
                        onClick={() => setActiveAccordion(isActive ? null : idx)}
                        className="w-full text-left px-5 py-5 flex items-center justify-between group"
                     >
                        <h3 className={`text-base font-light tracking-tight flex items-center gap-3 transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
                           <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white shadow-[0_0_8px_white]' : 'bg-white/20'}`}></span>
                           {col.title}
                        </h3>
                        <div className={`text-white/40 transition-transform duration-300 ${isActive ? 'rotate-180 text-white' : ''}`}>
                           {isActive ? <FaMinus size={12} /> : <FaPlus size={12} />}
                        </div>
                     </button>

                     <AnimatePresence>
                        {isActive && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                           >
                              <div className="px-5 pb-6 pt-0 border-t border-white/[0.05]">
                                 <p className="text-xs text-white/40 leading-relaxed font-light mt-4 mb-6 pl-2 border-l-2 border-white/10">
                                    {col.subtitle}
                                 </p>
                                 <div className="flex flex-col">
                                    {(Array.isArray(col.items) ? col.items : []).map((it, itemIdx) => (
                                       <ServiceItemMobile key={itemIdx} iconKey={it.icon} title={it.title} desc={it.description} />
                                    ))}
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               );
            })}
         </div>

         {/* CTA MOBILE */}
         <div className="mt-12 flex justify-center">
            <a href="#contact" className="text-[10px] tracking-[0.2em] uppercase text-white/30 border-b border-white/10 pb-1 hover:text-white transition-colors">
              {/* --- CORRECCIÓN 2: Usar variable aquí --- */}
              {ctaText} 
            </a>
         </div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP 
         ======================================================================= */}
      <div className="hidden lg:block px-6 md:px-12 py-32 lg:py-48 max-w-[1400px] mx-auto relative z-10">
        
        <div className="mb-24 pl-4 md:pl-10">
          <SectionHeader
            id="services-header"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.02]"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0"
        >
          <ServiceColumn 
            title={odooTitle} 
            subtitle={odooSubtitle} 
            items={Array.isArray(odooItems) ? odooItems : []} 
            hasBorder={true} 
          />
          <ServiceColumn 
            title={devTitle} 
            subtitle={devSubtitle} 
            items={Array.isArray(devItems) ? devItems : []} 
            hasBorder={true} 
          />
          <ServiceColumn 
            title={careTitle} 
            subtitle={careSubtitle} 
            items={Array.isArray(careItems) ? careItems : []} 
            hasBorder={false} 
          />
        </motion.div>

        {/* CTA FLOTANTE ANIMADO */}
        <div className="mt-40 flex justify-center">
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 group-hover:text-white transition-colors duration-500">
               {/* --- CORRECCIÓN 3: Usar variable aquí --- */}
              {ctaText}
            </span>
            <motion.div 
              className="w-[1px] bg-gradient-to-b from-white/10 to-white/50"
              initial={{ height: 40 }}
              whileHover={{ height: 80 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/40 group-hover:text-white transition-colors duration-500"
            >
               <FaRegCommentDots size={20} />
            </motion.div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}