"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FiArrowRight, FiMapPin, FiMail, FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

// Helper de traducción
function tt(t, key, fallback) {
  const v = t?.(key);
  if (!v || v === key) return fallback;
  return v;
}

export default function ContactSection() {
  const { t } = useLang();

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "messages"), {
        ...formState,
        createdAt: new Date(),
      });
      setFormState({ name: "", email: "", message: "" });
      alert("Mensaje enviado con éxito.");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] px-6 md:px-12 py-32 lg:py-60 border-t border-white/5">
      
      {/* Fondo de ruido */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 lg:mb-40">
          <SectionHeader
            id="contact-header"
            title={tt(t, "contact.header.title", "Contacto")}
            bgText="CONTACT"
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* 1. COLUMNA IZQUIERDA: COPY + FORMULARIO */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            
            <div className="mb-16">
                {/* --- NUEVO TEXTO: Más directo y profesional --- */}
                <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-6 leading-tight">
                  ¿Tienes un proyecto <br />
                  <span className="font-sans not-italic font-bold text-white/40">en mente?</span>
                </h3>
                <p className="text-white/60 text-lg font-light max-w-md leading-relaxed">
                   Desde implementaciones en Odoo hasta desarrollos web a medida. Cuéntame tu visión y encontremos juntos la mejor estrategia técnica para hacerla realidad.
                </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                
                {/* Input Nombre */}
                <div className="relative group">
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent"
                        placeholder="Nombre"
                        id="name"
                    />
                    <label 
                        htmlFor="name" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono
                            ${formState.name || focusedField === 'name' ? '-top-4 text-white/40' : 'top-5 text-white/30'}
                        `}
                    >
                        Tu Nombre
                    </label>
                </div>

                {/* Input Email */}
                <div className="relative group">
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent"
                        placeholder="Email"
                        id="email"
                    />
                    <label 
                        htmlFor="email" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono
                            ${formState.email || focusedField === 'email' ? '-top-4 text-white/40' : 'top-5 text-white/30'}
                        `}
                    >
                        Email
                    </label>
                </div>

                {/* Input Mensaje */}
                <div className="relative group">
                    <textarea
                        name="message"
                        rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent resize-none"
                        placeholder="Mensaje"
                        id="message"
                    />
                    <label 
                        htmlFor="message" 
                        className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono
                            ${formState.message || focusedField === 'message' ? '-top-4 text-white/40' : 'top-5 text-white/30'}
                        `}
                    >
                        ¿Cómo puedo ayudarte?
                    </label>
                </div>

                <div className="pt-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-6 text-white hover:text-white/70 transition-colors cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                            {isSubmitting ? (
                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <FiArrowRight className="text-2xl" />
                            )}
                        </div>
                        <span className="text-sm font-bold tracking-[0.25em] uppercase">
                            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                        </span>
                    </button>
                </div>
            </form>
          </div>


          {/* 2. COLUMNA DERECHA: VIDEO (Líquido) + DATOS (Sticky) */}
          <div className="order-1 lg:order-2 relative h-full">
             
             {/* STICKY CONTAINER */}
             <div className="lg:sticky lg:top-40 w-full flex flex-col items-center lg:items-end gap-16">
                
                {/* --- VIDEO EN FORMA DE GOTA (LÍQUIDO) --- */}
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
                        y: [0, -15, 0] 
                    }}
                    transition={{ 
                        borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-full max-w-[450px] aspect-square overflow-hidden border border-white/10 bg-[#111] shadow-2xl z-10"
                >
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-110"
                    >
                        <source src="/DSCF0544.webm" type="video/webm" />
                        <source src="/DSCF0544.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>
                </motion.div>

                {/* --- DATOS DE CONTACTO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-[450px] flex flex-col gap-10 text-right"
                >
                    {/* Email */}
                    <div className="group">
                        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Email</p>
                        <a href="mailto:crucessveronica@gmail.com" className="text-xl md:text-2xl text-white font-medium hover:text-white/70 transition-colors border-b border-white/20 pb-1">
                            crucessveronica@gmail.com
                        </a>
                    </div>

                    <div className="flex justify-end gap-12">
                         {/* Ubicación */}
                        <div className="text-right">
                            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-2">
                                Base <FiMapPin /> 
                            </p>
                            <p className="text-white text-base">LATAM / EUROPA</p>
                            <p className="text-white/40 text-sm mt-1">Remote Friendly</p>
                        </div>

                        {/* WhatsApp */}
                        <div className="text-right">
                            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-2">
                                Chat <FaWhatsapp /> 
                            </p>
                            <a href="https://wa.me/51977968602" target="_blank" className="flex items-center justify-end gap-2 text-white hover:text-green-400 transition-colors">
                                +51 977 968 602 <FiArrowUpRight className="text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex justify-end gap-6 pt-6 border-t border-white/10">
                         {[
                            { icon: FaInstagram, href: "https://www.instagram.com/veronicadev.web/" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" },
                            { icon: FaGithub, href: "https://github.com/VeronicaC-Fuentes" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.href} 
                                target="_blank" 
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                </motion.div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}