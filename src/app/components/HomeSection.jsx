"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { useMemo } from "react";
import { useLang } from "./LanguageProvider";

function Glow() {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        width: "600px",
        height: "280px",
        background: "radial-gradient(circle, #5E60CE33 0%, transparent 75%)",
        filter: "blur(42px)",
        zIndex: 2,
      }}
    />
  );
}

function Particles() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.04 }}>
      <circle cx="90" cy="180" r="2.5" fill="#8F67E8" />
      <circle cx="400" cy="90" r="1.5" fill="#C4C4C4" />
      <circle cx="950" cy="250" r="2" fill="#5E60CE" />
    </svg>
  );
}

export default function HomeSection() {
  const { t } = useLang();

  // 1) Textos desde i18n
  const words = t("home.typewriter");         // array de frases
  const ctaText = t("home.cta");              // "Contáctame" / "Contact me"

  // 2) Frase "más larga" para fijar ancho del contenedor según idioma
  const longestPhrase = useMemo(() => {
    const fallback = "Desarrolladora de software con experiencia en desarrollo web y automatización de procesos.";
    if (!Array.isArray(words) || words.length === 0) return fallback;
    return words.reduce((a, b) => (String(b).length > String(a).length ? b : a), words[0]);
  }, [words]);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/image/banner1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(24,24,40,0.72) 63%, rgba(63,51,81,0.16) 100%)",
          zIndex: 1,
        }}
      />
      <Particles />
      <Glow />

      <motion.div
        className="relative z-10 flex flex-col items-start text-left px-4 sm:px-10 py-8 sm:py-12 max-w-xl w-full"
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.62, 0.13, 0.43, 0.88] }}
        style={{ fontFamily: `'Montserrat', 'Inter', 'DM Sans', 'sans-serif'` }}
      >
        {/* Tu nombre no cambia */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-1 tracking-tight md:whitespace-nowrap"
          style={{
            background: "linear-gradient(90deg, #F3EFF5 80%, #8F67E8 120%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 16px #23233844",
            fontWeight: 900,
            letterSpacing: ".01em",
            lineHeight: 1.1,
            maxWidth: "100%",
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Verónica Cruces
        </motion.h1>

        {/* Línea digital */}
        <motion.div
          className="my-3 sm:my-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.63, 0.09, 0.39, 0.97] }}
          style={{
            width: 44,
            height: 3,
            background: "linear-gradient(90deg, #8F67E8 0%, #5E60CE 100%)",
            borderRadius: 8,
            boxShadow: "0 0 12px #8F67E888",
            opacity: 0.9,
            transformOrigin: "left",
          }}
        />

        {/* Contenedor con ancho mínimo según la frase más larga */}
        <div className="w-full relative flex items-center h-[38px] mb-7" style={{ minHeight: 38, position: "relative" }}>
          {/* Invisible para fijar ancho */}
          <span
            aria-hidden="true"
            className="invisible select-none absolute"
            style={{
              pointerEvents: "none",
              whiteSpace: "pre-line",
              fontWeight: 500,
              fontSize: "0.96rem",
              fontFamily: `'Montserrat', 'Inter', 'DM Sans', 'sans-serif'`,
              letterSpacing: "0.06em",
            }}
          >
            {longestPhrase}
          </span>

          <motion.h2
            className="text-sm sm:text-base font-normal tracking-wide w-full"
            style={{
              color: "#C4C4C4",
              textShadow: "0 2px 8px #18182833",
              fontWeight: 500,
              letterSpacing: "0.06em",
              whiteSpace: "pre-line",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              transition: "none",
              fontSize: "1.1rem",
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Typewriter
              words={Array.isArray(words) ? words : []}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={34}
              deleteSpeed={18}
              delaySpeed={2800}
            />
          </motion.h2>
        </div>

        <motion.a href="#contact" initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 1.4 }}>
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
            style={{ border: "2px solid #5E60CE", boxShadow: "0 2px 10px 0 #18182844", letterSpacing: "0.04em", fontWeight: 700, transition: "all 0.16s" }}
          >
            {ctaText}
            <FiArrowRight size={18} className="ml-1" />
          </motion.button>
        </motion.a>
      </motion.div>
    </section>
  );
}
