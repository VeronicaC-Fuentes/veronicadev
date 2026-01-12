"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

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

const STEPS = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Estrategia",
    desc: "No escribo código sin entender tu negocio. Analizamos tus flujos actuales, definimos los puntos de dolor y trazamos la hoja de ruta técnica."
  },
  {
    id: "design",
    number: "02",
    title: "Diseño & Arquitectura",
    desc: "Definimos la estructura de datos en Odoo o el diseño visual en Figma. Todo se planifica para ser escalable, seguro y estético."
  },
  {
    id: "development",
    number: "03",
    title: "Desarrollo (The Craft)",
    desc: "Aquí ocurre la magia. Desarrollo limpio, modular y optimizado (Python/React). Con revisiones constantes para asegurar calidad."
  },
  {
    id: "delivery",
    number: "04",
    title: "Despegue & Soporte",
    desc: "Pruebas finales, puesta en producción y capacitación. No desaparezco tras el lanzamiento; te acompaño en la estabilización."
  }
];

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function ProcessSection() {
  const { t } = useLang();

  const headerTitle = tt(t, "process.header.title", "Metodología");
  const headerBg = tt(t, "process.header.bg", "PROCESS");

  return (
    // CAMBIO 1: Aumenté el py (padding vertical) de 32 a 40 y en desktop a 56 para separar más la sección completa
    <section id="process" className="relative w-full bg-[#050505] px-6 md:px-12 py-40 lg:py-56 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        {/* CAMBIO 2: Más margen debajo del título (mb-32 en desktop) */}
        <div className="mb-24 lg:mb-40">
          <SectionHeader
            id="process-header"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        {/* GRID DE PASOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              // CAMBIO 3: 
              // - min-h-[500px]: Hice las cajas mucho más altas.
              // - justify-between: Separa el número (arriba) del texto (abajo).
              // - p-12: Más padding interno.
              className="group relative flex flex-col justify-between p-10 lg:p-12 border-t border-white/10 hover:border-white/50 transition-colors duration-500 min-h-[400px] lg:min-h-[550px]"
            >
              {/* Borde derecho sutil (ajustado top/bottom para que no toque los bordes del todo) */}
              <div className={`hidden lg:block absolute right-0 top-12 bottom-12 w-[1px] bg-white/5 ${index === 3 ? 'hidden' : ''}`} />

              {/* Número Gigante */}
              <div>
                <span className="block text-7xl lg:text-8xl font-black text-white/5 group-hover:text-white transition-colors duration-700 select-none font-sans">
                    {step.number}
                </span>
              </div>

              {/* Contenido (Ahora pegado abajo gracias al justify-between) */}
              <div className="relative z-10 mt-12">
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h4>
                <p className="text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500 max-w-[90%]">
                  {step.desc}
                </p>
              </div>

              {/* Decoración Hover (Puntito) */}
              <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,1)]" />
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}