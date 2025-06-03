"use client";

import SectionHeader from './SectionHeader';
import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), { name, email, message, createdAt: new Date() });
      setName(''); setEmail(''); setMessage('');
      alert('Mensaje enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error. Intenta de nuevo.');
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative w-full min-h-screen px-2 sm:px-8 py-20 md:py-28 bg-[#F3EFF5] text-[#232338] flex flex-col items-center overflow-x-hidden"
      >
        {/* Glow decorativo superior */}
        <div
          className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: 430,
            height: 130,
            background: "radial-gradient(circle, #8F67E85c 0%, transparent 74%)",
            filter: "blur(28px)",
          }}
        />
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto relative z-10">
          <SectionHeader
            id="contact"
            title="Contáctame"
            bgText="CONTACTO"
            titleColor="#5E60CE"
            bgColor="#8F67E8"
            bgOpacityClass="opacity-10"
          />

          <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Información de contacto */}
            <div className="flex flex-col gap-8">
              {/* Ubicación */}
              <div className="rounded-2xl border border-[#8F67E8]/40 bg-[#F3EFF5] p-7 shadow-[0_2px_28px_0_#8F67E815]">
                <h3 className="text-xl font-bold text-[#5E60CE] mb-4 tracking-tight">Ubicación</h3>
                <p className="text-base text-[#3F3351]">
                  Basada en Colombia <span className="text-[#B9B6D3]">(nómada digital)</span>.<br />
                  <span className="text-[#3F3351]">Disponible para trabajos remotos.</span>
                </p>
              </div>
              {/* Contacto directo */}
              <div className="rounded-2xl border border-[#8F67E8]/40 bg-[#F3EFF5] p-7 shadow-[0_2px_28px_0_#8F67E815]">
                <h3 className="text-xl font-bold text-[#5E60CE] mb-4 tracking-tight">Contacto directo</h3>
                <div className="space-y-3 text-base">
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-[#8F67E8]" />
                    <span className="text-[#3F3351] font-medium">+51 977968602 <span className="text-[#B9B6D3]">(Perú)</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail className="text-[#8F67E8]" />
                    <span className="text-[#3F3351] font-medium">crucessveronica@gmail.com</span>
                  </div>
                </div>
              </div>
              {/* Sígueme */}
              <div className="rounded-2xl border border-[#8F67E8]/40 bg-[#F3EFF5] p-7 shadow-[0_2px_28px_0_#8F67E815]">
                <h3 className="text-xl font-bold text-[#5E60CE] mb-4 tracking-tight">Sígueme</h3>
                <div className="flex gap-4 text-2xl">
                  <a href="https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw" className="text-[#3F3351] hover:text-[#8F67E8] transition"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" className="text-[#3F3351] hover:text-[#5E60CE] transition"><FaLinkedinIn /></a>
                  <a href="https://www.facebook.com/share/16dGbcpR9P/" className="text-[#3F3351] hover:text-[#8F67E8] transition"><FaFacebookF /></a>
                  <a href="https://github.com/VeronicaC-Fuentes" className="text-[#3F3351] hover:text-[#5E60CE] transition"><FaGithub /></a>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-7 rounded-2xl border border-[#8F67E8]/40 bg-white p-7 shadow-[0_2px_32px_0_#8F67E815]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full bg-[#F3EFF5] text-[#3F3351] placeholder-[#B9B6D3] p-3 rounded-xl border border-[#8F67E8]/20 focus:outline-none focus:ring-2 focus:ring-[#8F67E8] transition"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#F3EFF5] text-[#3F3351] placeholder-[#B9B6D3] p-3 rounded-xl border border-[#8F67E8]/20 focus:outline-none focus:ring-2 focus:ring-[#8F67E8] transition"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Cuéntame más sobre tus necesidades..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                className="w-full bg-[#F3EFF5] text-[#3F3351] placeholder-[#B9B6D3] p-3 rounded-xl border border-[#8F67E8]/20 focus:outline-none focus:ring-2 focus:ring-[#8F67E8] transition"
              />
              <motion.button
                type="submit"
                whileHover={{
                  backgroundColor: "#5E60CE",
                  color: "#F3EFF5",
                  scale: 1.04,
                  boxShadow: "0 2px 16px 0 #8F67E8AA",
                  borderColor: "#8F67E8",
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex items-center gap-2
                  px-4 sm:px-5 py-2 sm:py-2
                  rounded-full cursor-pointer
                  font-semibold text-[#F3EFF5]
                  text-sm sm:text-base
                  transition-all duration-200
                  bg-[#3F3351] border mx-auto
                  shadow-lg
                "
                style={{
                  border: "2px solid #8F67E8",
                  letterSpacing: "0.04em",
                  fontWeight: 700,
                  minWidth: 140,
                }}
              >
                Contáctame
                <FiArrowRight size={16} className="ml-1" />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F3EFF5] text-[#3F3351] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-[#8F67E8]/10">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm tracking-wide font-medium">
            &copy; {new Date().getFullYear()} Verónica Cruces. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
