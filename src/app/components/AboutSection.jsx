"use client";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

export default function AboutSection() {
  const { t } = useLang();
  const bullets = t("about.bullets") || [];

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-8 md:px-16 pt-16 md:pt-24 pb-16 bg-[#F3EFF5] text-[#232338] relative overflow-x-hidden flex flex-col items-center justify-center"
    >
      {/* glow */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{ width: 340, height: 90, background: "radial-gradient(circle, #8F67E84a 0%, transparent 70%)", filter: "blur(30px)" }}
      />

      {/* título de sección */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-3"
      >
        <SectionHeader
          id="about"
          title={t("about.header.title")}
          bgText={t("about.header.bg")}
          titleColor="#5E60CE"
          bgColor="#8F67E8"
          bgOpacityClass="opacity-10"
        />
      </motion.div>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 relative z-10">
        {/* foto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.04, ease: "easeOut" }}
          className="flex flex-col items-center w-full md:w-auto"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#8F67E8] bg-[#F3EFF5]">
            <img src="/image/about.jpg" alt={t("about.photoAlt")} className="object-cover w-full h-full" />
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "0 0 52px 15px #5E60CE44, 0 0 38px 10px #8F67E8bb" }} />
            <div className="absolute -right-6 top-7 w-7 h-7 rounded-full bg-[#8F67E8] opacity-60 blur-[2px]" />
            <div className="absolute left-4 -bottom-5 w-4 h-4 rounded-full bg-[#5E60CE] opacity-40 blur-[2px]" />
          </div>
        </motion.div>

        {/* texto */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <motion.h3
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#3F3351] drop-shadow-sm text-left"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.11 }}
            className="max-w-2xl text-left"
          >
            <p className="text-sm sm:text-base md:text-[1rem] text-[#232338] leading-relaxed">
              {t("about.p1", { years: 3 })}
            </p>
            <p className="text-sm sm:text-base md:text-[1rem] text-[#232338] leading-relaxed mt-4">
              {t("about.p2")}
            </p>
            <p className="text-sm sm:text-base md:text-[1rem] text-[#232338] leading-relaxed mt-4">
              {t("about.p3")}
            </p>
          </motion.div>

          {/* bullets */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: 0.18 }}
            className="mt-4 mb-2 text-[#393966] text-xs sm:text-sm md:text-base space-y-1 list-disc pl-4"
          >
            {(Array.isArray(bullets) ? bullets : []).map((line, i) => <li key={i}>{line}</li>)}
          </motion.ul>

          {/* botones */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://drive.google.com/file/d/17zxFIhnMEHViqL8LxuWdB06rUtAFEtda/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("about.buttons.download")}
            >
              <motion.button
                whileHover={{ backgroundColor: "#393966", color: "#F3EFF5", scale: 1.035, boxShadow: "0 2px 12px 0 #5E60CE44", borderColor: "#5E60CE" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer font-semibold text-[#F3EFF5] text-sm sm:text-base transition-all duration-200 bg-[#232338] border border-[#5E60CE]"
              >
                {t("about.buttons.download")}
                <FiDownload size={18} className="ml-1" />
              </motion.button>
            </a>

            <a href="mailto:crucessveronica@gmail.com" aria-label={t("about.buttons.talk")}>
              <motion.button
                whileHover={{ backgroundColor: "#8F67E8", color: "#F3EFF5", scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8F67E8] text-[#8F67E8] bg-transparent font-semibold transition-all"
              >
                {t("about.buttons.talk")}
              </motion.button>
            </a>
          </div>

          {/* quote + fun fact */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="italic text-[#5E60CE] text-xs sm:text-sm mt-8 border-l-4 border-[#8F67E8] pl-4"
          >
            {t("about.quote")}
          </motion.blockquote>

          <div className="mt-4 text-xs text-[#888]">{t("about.funfact")}</div>
        </div>
      </div>
    </section>
  );
}
