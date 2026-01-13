"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FiArrowRight, FiMapPin, FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LanguageProvider";

// Helper de traducción robusto
function tt(t, key, fallback) {
  const v = t?.(key);
  if (v === undefined || v === null) return fallback;
  if (Array.isArray(v)) return v;
  const s = String(v).trim();
  if (!s) return fallback;
  if (s.toLowerCase() === key.toLowerCase()) return fallback;
  return v;
}

export default function ContactSection() {
  const { t } = useLang();

  // --- VARIABLES DE TRADUCCIÓN ---
  const headerTitle = tt(t, "contact.header.title", "Contacto");
  const headerBg = tt(t, "contact.header.bg", "CONTACTO");
  
  // Tabs Mobile
  const tabWrite = tt(t, "contact.tabs.write", "Escríbeme");
  const tabInfo = tt(t, "contact.tabs.info", "Datos");

  // Hero Texts
  const heroTitle = tt(t, "contact.hero.title", "¿Tienes un proyecto");
  const heroHighlight = tt(t, "contact.hero.highlight", "en mente?");
  const heroDesc = tt(t, "contact.hero.desc", "Descripción larga...");
  const heroMobDesc = tt(t, "contact.hero.mobDesc", "Descripción corta...");

  // Form Labels
  const lblNamePh = tt(t, "contact.form.namePlaceholder", "Nombre");
  const lblNameLabel = tt(t, "contact.form.nameLabel", "Tu Nombre");
  const lblEmailPh = tt(t, "contact.form.emailPlaceholder", "Email");
  const lblEmailLabel = tt(t, "contact.form.emailLabel", "Email");
  const lblMsgPh = tt(t, "contact.form.msgPlaceholder", "Mensaje");
  const lblMsgLabel = tt(t, "contact.form.msgLabel", "¿Cómo puedo ayudarte?");
  const btnSend = tt(t, "contact.form.btn", "Enviar Mensaje");
  const btnSending = tt(t, "contact.form.sending", "Enviando...");

  // Info Labels
  const infoEmail = tt(t, "contact.info.email", "Email Directo");
  const infoBase = tt(t, "contact.info.base", "Base");
  const infoLocation = tt(t, "contact.info.location", "LATAM / EUROPA");
  const infoRemote = tt(t, "contact.info.remote", "Remote Friendly");

  // Alerts
  const alertSuccess = tt(t, "contact.alerts.success", "Mensaje enviado con éxito.");
  const alertError = tt(t, "contact.alerts.error", "Error al enviar.");


  // ESTADOS DEL FORMULARIO
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // ESTADO VISTA MOBILE
  const [activeTab, setActiveTab] = useState("form");

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
      alert(alertSuccess); // Usamos la variable traducida
    } catch (error) {
      console.error("Error:", error);
      alert(alertError); // Usamos la variable traducida
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] border-t border-white/5 overflow-hidden">
      
      {/* Fondo de ruido */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }}></div>


      {/* =======================================================================
          1. VERSIÓN MOBILE: TABS
         ======================================================================= */}
      <div className="block lg:hidden px-6 py-24 w-full relative z-10">
         
         <div className="mb-8">
            <SectionHeader
              id="contact-header-mob"
              title={headerTitle}
              bgText={headerBg}
              titleColor="#FFFFFF"
              bgColor="#FFFFFF"
              bgOpacityClass="opacity-[0.03]"
            />
         </div>

         {/* CONTROLES DE PESTAÑAS */}
         <div className="flex p-1 bg-white/5 rounded-full mb-10 w-full max-w-sm mx-auto relative">
            <motion.div 
               className="absolute top-1 bottom-1 bg-white/10 rounded-full"
               initial={false}
               animate={{ 
                 left: activeTab === "form" ? "4px" : "50%", 
                 width: "calc(50% - 4px)" 
               }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <button 
               onClick={() => setActiveTab("form")}
               className={`flex-1 relative z-10 py-3 text-xs font-bold tracking-[0.15em] uppercase text-center transition-colors ${activeTab === "form" ? "text-white" : "text-white/40"}`}
            >
               {tabWrite}
            </button>
            <button 
               onClick={() => setActiveTab("info")}
               className={`flex-1 relative z-10 py-3 text-xs font-bold tracking-[0.15em] uppercase text-center transition-colors ${activeTab === "info" ? "text-white" : "text-white/40"}`}
            >
               {tabInfo}
            </button>
         </div>

         <div className="min-h-[450px]">
           <AnimatePresence mode="wait">
             
             {/* --- VISTA A: FORMULARIO MOBILE --- */}
             {activeTab === "form" ? (
               <motion.div
                 key="form"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
               >
                  <div className="mb-8 text-center">
                      <h3 className="text-2xl font-serif italic text-white mb-2">
                        {heroTitle}?
                      </h3>
                      <p className="text-white/50 text-sm font-light">
                        {heroMobDesc}
                      </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      <div className="relative group">
                          <input
                              type="text" name="name" id="name_m"
                              value={formState.name} onChange={handleChange}
                              onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                              required
                              className="block w-full py-3 bg-transparent text-white text-lg border-b border-white/10 focus:border-white/50 focus:outline-none placeholder-transparent"
                              placeholder={lblNamePh}
                          />
                          <label htmlFor="name_m" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-[10px] font-mono ${formState.name || focusedField === 'name' ? '-top-3 text-white/40' : 'top-4 text-white/30'}`}>{lblNameLabel}</label>
                      </div>

                      <div className="relative group">
                          <input
                              type="email" name="email" id="email_m"
                              value={formState.email} onChange={handleChange}
                              onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                              required
                              className="block w-full py-3 bg-transparent text-white text-lg border-b border-white/10 focus:border-white/50 focus:outline-none placeholder-transparent"
                              placeholder={lblEmailPh}
                          />
                          <label htmlFor="email_m" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-[10px] font-mono ${formState.email || focusedField === 'email' ? '-top-3 text-white/40' : 'top-4 text-white/30'}`}>{lblEmailLabel}</label>
                      </div>

                      <div className="relative group">
                          <textarea
                              name="message" id="message_m" rows="3"
                              value={formState.message} onChange={handleChange}
                              onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                              required
                              className="block w-full py-3 bg-transparent text-white text-lg border-b border-white/10 focus:border-white/50 focus:outline-none placeholder-transparent resize-none"
                              placeholder={lblMsgPh}
                          />
                          <label htmlFor="message_m" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-[10px] font-mono ${formState.message || focusedField === 'message' ? '-top-3 text-white/40' : 'top-4 text-white/30'}`}>{lblMsgPh}</label>
                      </div>

                      <div className="pt-4 flex justify-center">
                          <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-white text-xs tracking-[0.25em] uppercase transition-all flex justify-center gap-3 items-center">
                              {isSubmitting ? btnSending : btnSend}
                              {!isSubmitting && <FiSend />}
                          </button>
                      </div>
                  </form>
               </motion.div>
             ) : (
               
               /* --- VISTA B: INFORMACIÓN MOBILE --- */
               <motion.div
                 key="info"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 20 }}
                 transition={{ duration: 0.3 }}
                 className="flex flex-col items-center gap-8"
               >
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110">
                          <source src="/DSCF0544.webm" type="video/webm" />
                          <source src="/DSCF0544.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>
                  </div>

                  <div className="w-full flex flex-col gap-6 text-center">
                      <div className="p-6 bg-white/[0.03] border border-white/10 rounded-lg">
                          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-2">{infoEmail}</p>
                          <a href="mailto:crucessveronica@gmail.com" className="text-lg text-white font-medium break-all">
                              crucessveronica@gmail.com
                          </a>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <a href="https://wa.me/51977968602" target="_blank" className="p-6 bg-white/[0.03] border border-white/10 rounded-lg flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
                             <FaWhatsapp className="text-2xl text-white" />
                             <span className="text-xs uppercase tracking-widest text-white/60">WhatsApp</span>
                         </a>
                         <div className="p-6 bg-white/[0.03] border border-white/10 rounded-lg flex flex-col items-center gap-2">
                             <FiMapPin className="text-2xl text-white" />
                             <span className="text-xs uppercase tracking-widest text-white/60">Remoto</span>
                         </div>
                      </div>

                      <div className="flex justify-center gap-8 pt-4">
                          {[
                              { icon: FaInstagram, href: "https://www.instagram.com/veronicadev.web/" },
                              { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" },
                              { icon: FaGithub, href: "https://github.com/VeronicaC-Fuentes" }
                          ].map((social, i) => (
                              <a key={i} href={social.href} target="_blank" className="text-white/40 hover:text-white transition-colors">
                                  <social.icon size={24} />
                              </a>
                          ))}
                      </div>
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
         </div>
      </div>


      {/* =======================================================================
          2. VERSIÓN DESKTOP
         ======================================================================= */}
      <div className="hidden lg:block px-6 md:px-12 py-32 lg:py-60 max-w-[1400px] mx-auto relative z-10">
        
        <div className="mb-24 lg:mb-40">
          <SectionHeader
            id="contact-header"
            title={headerTitle}
            bgText={headerBg}
            titleColor="#FFFFFF"
            bgColor="#FFFFFF"
            bgOpacityClass="opacity-[0.03]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* 1. COLUMNA IZQUIERDA: COPY + FORMULARIO */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            
            <div className="mb-16">
                <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-6 leading-tight">
                  {heroTitle} <br />
                  <span className="font-sans not-italic font-bold text-white/40">{heroHighlight}</span>
                </h3>
                <p className="text-white/60 text-lg font-light max-w-md leading-relaxed">
                   {heroDesc}
                </p>
            </div>

            {/* Formulario Desktop */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                
                {/* Input Nombre */}
                <div className="relative group">
                    <input
                        type="text" name="name" id="name"
                        value={formState.name} onChange={handleChange}
                        onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent"
                        placeholder={lblNamePh}
                    />
                    <label htmlFor="name" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono ${formState.name || focusedField === 'name' ? '-top-4 text-white/40' : 'top-5 text-white/30'}`}>{lblNameLabel}</label>
                </div>

                {/* Input Email */}
                <div className="relative group">
                    <input
                        type="email" name="email" id="email"
                        value={formState.email} onChange={handleChange}
                        onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent"
                        placeholder={lblEmailPh}
                    />
                    <label htmlFor="email" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono ${formState.email || focusedField === 'email' ? '-top-4 text-white/40' : 'top-5 text-white/30'}`}>{lblEmailLabel}</label>
                </div>

                {/* Input Mensaje */}
                <div className="relative group">
                    <textarea
                        name="message" id="message" rows="4"
                        value={formState.message} onChange={handleChange}
                        onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                        required
                        className="block w-full py-4 bg-transparent text-white text-xl border-b border-white/10 focus:border-white/50 focus:outline-none transition-all placeholder-transparent resize-none"
                        placeholder={lblMsgPh}
                    />
                    <label htmlFor="message" className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest text-xs font-mono ${formState.message || focusedField === 'message' ? '-top-4 text-white/40' : 'top-5 text-white/30'}`}>{lblMsgLabel}</label>
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
                            {isSubmitting ? btnSending : btnSend}
                        </span>
                    </button>
                </div>
            </form>
          </div>

          {/* 2. COLUMNA DERECHA: VIDEO + DATOS (Desktop) */}
          <div className="order-1 lg:order-2 relative h-full">
             <div className="lg:sticky lg:top-40 w-full flex flex-col items-center lg:items-end gap-16">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    animate={{ 
                        borderRadius: [ "50% 50% 50% 50% / 50% 50% 50% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 50% 60% 30% 60%", "50% 50% 50% 50% / 50% 50% 50% 50%" ],
                        y: [0, -15, 0] 
                    }}
                    transition={{ 
                        borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-full max-w-[450px] aspect-square overflow-hidden border border-white/10 bg-[#111] shadow-2xl z-10"
                >
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110">
                        <source src="/DSCF0544.webm" type="video/webm" />
                        <source src="/DSCF0544.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>
                </motion.div>

                {/* DATOS CONTACTO */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-[450px] flex flex-col gap-10 text-right"
                >
                    <div className="group">
                        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">{infoEmail}</p>
                        <a href="mailto:crucessveronica@gmail.com" className="text-xl md:text-2xl text-white font-medium hover:text-white/70 transition-colors border-b border-white/20 pb-1">
                            crucessveronica@gmail.com
                        </a>
                    </div>
                    <div className="flex justify-end gap-12">
                        <div className="text-right">
                            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-2">{infoBase} <FiMapPin /></p>
                            <p className="text-white text-base">{infoLocation}</p>
                            <p className="text-white/40 text-sm mt-1">{infoRemote}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2 flex items-center justify-end gap-2">Chat <FaWhatsapp /></p>
                            <a href="https://wa.me/51977968602" target="_blank" className="flex items-center justify-end gap-2 text-white hover:text-green-400 transition-colors">
                                +51 977 968 602 <FiArrowUpRight className="text-sm" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end gap-6 pt-6 border-t border-white/10">
                         {[
                            { icon: FaInstagram, href: "https://www.instagram.com/veronicadev.web/" },
                            { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" },
                            { icon: FaGithub, href: "https://github.com/VeronicaC-Fuentes" }
                        ].map((social, i) => (
                            <a key={i} href={social.href} target="_blank" className="text-white/40 hover:text-white transition-colors">
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