"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FiArrowRight } from "react-icons/fi";

export default function AboutSection() {
  
  return (
    // CAMBIO 1: Aumenté masivamente el padding vertical (lg:py-60) para que la sección sea gigante y limpia
    <section id="about" className="relative w-full bg-[#050505] px-6 md:px-12 py-32 lg:py-60">
      
      {/* Fondo de ruido */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        {/* CAMBIO 2: Mucha más separación entre el título "Perfil" y el contenido (mb-40) */}
        <div className="mb-24 lg:mb-40">
          <SectionHeader
            id="about-header"
            title="Perfil & Visión" 
            bgText="PROFILE"
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        {/* CAMBIO 3: Aumenté el gap entre columnas (gap-32) para separar texto de foto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* 1. COLUMNA TEXTO (Izquierda) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Título Principal más separado del texto */}
            <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-16 leading-tight">
              Arquitectura Digital. <br />
              <span className="font-sans not-italic font-bold text-white/40">Crecimiento Real.</span>
            </h2>

            {/* Texto: Aumenté el space-y-12 (antes 8) para que cada párrafo sea una isla */}
            <div className="space-y-12 text-base md:text-lg text-white/70 font-light leading-relaxed border-l border-white/10 pl-10 md:pl-12">
              <p>
                Siempre me ha obsesionado entender cómo funcionan las cosas por dentro. Mi viaje en la tecnología no empezó buscando clientes, sino buscando 
                <strong className="text-white font-medium"> eficiencia</strong>. Me di cuenta temprano de que el código por sí solo no resuelve problemas; es la lógica detrás del código la que transforma el caos en estructura.
              </p>
              
              <p>
                Entendí que para escalar negocios reales, la tecnología debe dejar de ser un obstáculo y convertirse en un <strong className="text-white font-medium">motor silencioso y eficiente</strong>.
              </p>
              
              <p>
                Hoy, esta visión ha crecido más allá de mí. Lidero un <strong>equipo ágil de especialistas</strong> donde unimos la ingeniería robusta (Odoo/Backend) con el desarrollo web de alto rendimiento. No somos una fábrica de software; somos tus socios estratégicos.
              </p>
              
              <p className="text-white font-medium">
                Diseñamos ecosistemas digitales completos que te permiten operar mejor, vender más y crecer sin fricción técnica.
              </p>
            </div>

            {/* Grid de Datos: Más margen arriba y abajo (py-16) */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-12 mt-24 mb-20 py-16 border-t border-b border-white/10">
                <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Core Focus</h4>
                    <p className="text-white text-base">Desarrollo Odoo & Web Apps</p>
                </div>
                <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Location</h4>
                    <p className="text-white text-base">Global (Remote First)</p>
                </div>
                <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Experience</h4>
                    <p className="text-white text-base">+3 Años construyendo sistemas</p>
                </div>
                <div>
                    <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Approach</h4>
                    <p className="text-white text-base">Estrategia & Performance</p>
                </div>
            </div>

            {/* El botón lo dejamos a la derecha con la foto como pediste, así que aquí no va nada */}
          </motion.div>


          {/* 2. COLUMNA IMAGEN (Derecha) */}
          <div className="order-1 lg:order-2 relative h-full">
             
             {/* STICKY: Cambié top-20 a top-40. 
                 Al haber más espacio, queda mejor que la foto se pegue un poco más abajo, no tan al techo. */}
             <div className="lg:sticky lg:top-40 w-full flex flex-col items-center lg:items-end gap-16">
                
                {/* --- LA FOTO --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ 
                        borderRadius: [
                            "50% 50% 50% 50% / 50% 50% 50% 50%", 
                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                            "40% 60% 70% 30% / 50% 60% 30% 60%",
                            "50% 50% 50% 50% / 50% 50% 50% 50%" 
                        ],
                        y: [0, -20, 0] // Un poco más de flotación vertical
                    }}
                    transition={{ 
                        borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-full max-w-[550px] lg:max-w-[650px] aspect-square overflow-hidden border border-white/10 bg-[#111] shadow-2xl z-10"
                >
                    <Image 
                      src="/about.png" 
                      alt="Verónica Cruces" 
                      fill 
                      className="object-cover object-top scale-[1.15] hover:scale-105 transition-all duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>

                {/* --- EL BOTÓN --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex justify-center lg:justify-end w-full max-w-[550px] lg:max-w-[650px]"
                >
                    <a href="#contact" className="group flex items-center gap-6 text-white hover:text-white/70 transition-colors cursor-pointer">
                        {/* Hice el botón un pelín más grande (w-16 h-16) para que vaya acorde al nuevo espacio */}
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <FiArrowRight className="text-2xl" />
                        </div>
                        <span className="text-sm font-bold tracking-[0.25em] uppercase">Iniciar Proyecto</span>
                    </a>
                </motion.div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}