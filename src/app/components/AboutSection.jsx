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
        pt-20 pb-20
        bg-[#F3EFF5] text-[#232338] relative overflow-x-hidden
        flex items-center justify-center
        min-h-[82vh] max-h-[960px]
      "
    >
      {/* Glow decorativo superior */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: 440,
          height: 130,
          background: "radial-gradient(circle, #8F67E84a 0%, transparent 70%)",
          filter: "blur(34px)",
        }}
      />
      {/* Glow decorativo inferior derecha */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none z-0"
        style={{
          width: 230,
          height: 170,
          background: "radial-gradient(circle at 90% 90%, #5E60CE33 0%, transparent 90%)",
          filter: "blur(32px)",
        }}
      />

      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* FOTO + Glow */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.04, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[#8F67E8] bg-[#F3EFF5]">
            <img
              src="/image/about.jpg"
              alt="Foto de Verónica Cruces"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                boxShadow: "0 0 60px 12px #5E60CE44, 0 0 38px 10px #8F67E8bb"
              }}></div>
            {/* Partículas decorativas */}
            <div className="absolute -right-6 top-7 w-7 h-7 rounded-full bg-[#8F67E8] opacity-60 blur-[2px]" />
            <div className="absolute left-4 -bottom-5 w-4 h-4 rounded-full bg-[#5E60CE] opacity-40 blur-[2px]" />
          </div>
        </motion.div>

        {/* TEXTO */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-4 md:mt-0">
          {/* HEADER animado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full mb-3"
          >
            <SectionHeader
              id="about"
              title="Conóceme"
              bgText="SOBRE MÍ"
              titleColor="#5E60CE"
              bgColor="#8F67E8"
              bgOpacityClass="opacity-10"
            />
          </motion.div>

          {/* NOMBRE y MAIL */}
          <motion.h2
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#3F3351] drop-shadow-sm text-center md:text-left"
          >
            VERÓNICA CRUCES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.13 }}
            className="text-xs sm:text-base md:text-lg text-[#5E60CE] font-semibold mb-2 text-center md:text-left"
          >
            crucessveronica@gmail.com
          </motion.p>

          {/* DESCRIPCIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.11 }}
            className="max-w-2xl text-center md:text-left"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#232338]">
              <span className="text-[#5E60CE] font-semibold">Desarrolladora de software</span> orientada a la innovación y la consultoría digital. Mi foco está en <span className="text-[#8F67E8] font-semibold">React, Next.js y automatización de procesos</span> para empresas y startups. Diseño experiencias modernas, accesibles y de alto rendimiento.
            </p>
          </motion.div>

          {/* BOTÓN ANIMADO estilo digital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.23 }}
            className="mt-8 flex justify-center md:justify-start"
          >
            <a
              href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
              className="inline-block"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
