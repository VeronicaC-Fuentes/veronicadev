"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        w-full px-4 sm:px-8 md:px-16
        pt-16 pb-16
        bg-[#F3EFF5] text-[#232338] relative overflow-x-hidden
        flex flex-col items-center justify-center
        min-h-[82vh] max-h-[1080px]
      "
    >
      {/* Glow decorativo superior */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: 340,
          height: 90,
          background: "radial-gradient(circle, #8F67E84a 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* TÍTULO GRANDE DIFUMINADO (como SectionHeader) */}
      <div className="w-full flex flex-col items-center mb-8 relative z-10">
        <SectionHeader
          id="about"
          title="Conóceme"
          bgText="SOBRE MÍ"
          titleColor="#5E60CE"
          bgColor="#8F67E8"
          bgOpacityClass="opacity-10"
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
        />
      </div>

      {/* CONTENIDO EN FILA */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 relative z-10">
        {/* FOTO + Glow */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.04, ease: "easeOut" }}
          className="flex flex-col items-center w-full md:w-auto"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#8F67E8] bg-[#F3EFF5]">
            <img
              src="/image/about.jpg"
              alt="Foto de Verónica Cruces"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: "0 0 52px 15px #5E60CE44, 0 0 38px 10px #8F67E8bb"
              }}></div>
            {/* Partículas decorativas */}
            <div className="absolute -right-6 top-7 w-7 h-7 rounded-full bg-[#8F67E8] opacity-60 blur-[2px]" />
            <div className="absolute left-4 -bottom-5 w-4 h-4 rounded-full bg-[#5E60CE] opacity-40 blur-[2px]" />
          </div>
        </motion.div>

        {/* TEXTO */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <motion.h3
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-lg sm:text-2xl md:text-2xl font-extrabold tracking-tight text-[#3F3351] drop-shadow-sm text-left"
          >
            VERÓNICA CRUCES
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.13 }}
            className="text-xs sm:text-base md:text-lg text-[#5E60CE] font-semibold mb-2 text-left"
          >
            crucessveronica@gmail.com
          </motion.p>

          {/* DESCRIPCIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.11 }}
            className="max-w-2xl text-left"
          >
            <p className="text-sm sm:text-base md:text-[1rem] text-[#232338] leading-relaxed">
              Actualmente trabajo como <span className="text-[#5E60CE] font-semibold">Analista Odoo ERP</span>, donde personalizo módulos, desarrollo reportes y capacito equipos para que aprovechen al máximo la herramienta. Me encanta transformar procesos complejos en soluciones simples y útiles.<br /><br />
              Por otro lado, me apasiona el desarrollo web: diseño y creo sitios modernos usando <span className="text-[#8F67E8] font-semibold">React, Next.js y JavaScript</span> —y sí, ya he hecho la web de varios amigos porque creo que una página bien hecha es tu mejor carta de presentación en el mundo digital.<br /><br />
              Disfruto trabajar con empresas y emprendedores, aprender todos los días (aunque el to-do siempre crece 😅) y compartir lo que sé. Ahora busco proyectos remotos, seguir creciendo y ayudar a más personas a llevar su negocio al siguiente nivel online.
            </p>
          </motion.div>

          {/* PROPOSICIÓN DE VALOR */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.18 }}
            className="mt-4 mb-2 text-[#393966] text-xs sm:text-sm md:text-base space-y-1 list-disc pl-4"
          >
            <li>Personalización de Odoo ERP: de reportes a automatizaciones, lo hago entendible y útil.</li>
            <li>Desarrollo web a la medida para empresas y emprendedores.</li>
            <li>Enseño, acompaño y ayudo a crecer, siempre sumando.</li>
            <li>Buscando siempre aprender algo nuevo... o hacer una web más 😉</li>
          </motion.ul>

          {/* BOTÓNES: Descargar CV + Contacto */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  backgroundColor: "#393966",
                  color: "#F3EFF5",
                  scale: 1.035,
                  boxShadow: "0 2px 12px 0 #5E60CE44",
                  borderColor: "#5E60CE",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer font-semibold text-[#F3EFF5] text-sm sm:text-base transition-all duration-200 bg-[#232338] border"
                style={{
                  border: "2px solid #5E60CE",
                  boxShadow: "0 2px 10px 0 #18182844",
                  letterSpacing: "0.04em",
                  fontWeight: 700,
                  transition: "all 0.16s",
                }}
              >
                Descargar CV
                <FiDownload size={18} className="ml-1" />
              </motion.button>
            </a>
            <a href="mailto:crucessveronica@gmail.com">
              <motion.button
                whileHover={{ backgroundColor: "#8F67E8", color: "#F3EFF5", scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8F67E8] text-[#8F67E8] bg-transparent font-semibold transition-all"
              >
                ¡Hablemos!
              </motion.button>
            </a>
          </div>

          {/* FRASE INSPIRADORA */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="italic text-[#5E60CE] text-xs sm:text-sm mt-8 border-l-4 border-[#8F67E8] pl-4"
          >
            “El mejor software es el que hace que otros brillen.”
          </motion.blockquote>

          {/* FUN FACT */}
          <div className="mt-4 text-xs text-[#888]">👾 Fun fact: Mi guilty pleasure es el café colombiano y los memes de programadores.</div>
        </div>
      </div>
    </section>
  );
}
