"use client";
import { motion } from "framer-motion";
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-20 sm:pb-24 md:pb-28 lg:pb-32 bg-white text-[#272640] relative overflow-x-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* HEADER animado */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          <SectionHeader
            id="about"
            title="Conóceme"
            bgText="ACERCA DE MI"
            titleColor="#FF6F61"
            bgColor="#F3EFF5"
            bgOpacityClass="opacity-90"
          />
        </motion.div>

        {/* FOTO + NOMBRE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full px-2 sm:px-4 md:px-0"
        >
          <div className="relative w-44 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] h-44 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-[#FF6F61] bg-[#232338]">
            <img
              src="/image/about.jpg"
              alt="Foto de Verónica Cruces"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center" }}
            />
            {/* Glow decorativo */}
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{
              boxShadow: "0 0 80px 16px #FFD16644, 0 0 40px 4px #5E60CE66"
            }}></div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#FF6F61] drop-shadow-md tracking-tight">
              VERÓNICA CRUCES
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5E60CE] font-semibold tracking-wide"
            >
              crucessveronica@gmail.com
            </motion.p>
          </div>
        </motion.div>

        {/* TEXTO animado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.14 }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-3xl text-center leading-relaxed px-2 sm:px-4 md:px-0"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#272640]">
            Soy una <span className="text-[#FF6F61] font-semibold">desarrolladora de software</span> comprometida con la innovación y la creación de soluciones digitales de alto impacto. Con amplia experiencia en <span className="text-[#5E60CE] font-semibold">React, Next.js y Tailwind CSS</span>, me dedico a diseñar interfaces que combinan estética y funcionalidad. Siempre en constante aprendizaje, busco proyectos desafiantes que potencien mi crecimiento profesional y me permitan aportar valor a través de la tecnología.
          </p>
        </motion.div>

        {/* BOTÓN animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className=" mt-8 sm:mt-10 md:mt-12 lg:mt-14"
        >
          <a
            href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                backgroundColor: "#FFD166",
                color: "#272640",
                scale: 1.06,
                boxShadow: "0 10px 32px 0 #FFD16666"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#FF6F61] cursor-pointer hover:bg-[#FFD166] text-white hover:text-[#272640] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all shadow-md"
              style={{ boxShadow: "0 6px 22px 0 #FF6F6155" }}
            >
              Descargar CV
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
