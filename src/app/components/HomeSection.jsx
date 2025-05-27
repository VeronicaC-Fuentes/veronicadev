'use client';
import { motion } from 'framer-motion';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/image/banner1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay con gradiente violeta */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, rgba(39,38,64,0.78) 60%, rgba(255,111,97,0.15) 100%)",
          zIndex: 1,
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-[90vw] sm:max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.62, 0.13, 0.43, 0.88] }}
      >
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold mb-2 drop-shadow-lg tracking-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bienvenido
        </motion.h2>

        {/* Subrayado animado */}
        <motion.span
          className="block h-1 mx-auto mb-6 rounded-full bg-[#FFD166]"
          style={{ width: '4rem' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.63, 0.09, 0.39, 0.97] }}
        />

        <motion.p
          className="text-2xl sm:text-3xl mb-10 font-semibold tracking-wide"
          style={{
            color: "#FF6F61",
            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Soy Desarrolladora de Software
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            whileHover={{
              backgroundColor: "#5E60CE",
              scale: 1.05,
              boxShadow: "0 12px 32px 0 rgba(94,96,206,0.21)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full cursor-pointer font-semibold text-white text-lg shadow-lg transition-all duration-300 bg-[#FF6F61] focus:outline-none"
            style={{
              boxShadow: "0 8px 20px rgba(255,111,97,0.4)",
            }}
          >
            Contáctame
          </motion.button>
        </motion.a>
      </motion.div>
    </section>
  );
}
