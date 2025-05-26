"use client";

import SectionHeader from './SectionHeader';
import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

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
        className="bg-[#F2F2F2] text-[#324024] pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10"
      >
        <SectionHeader
          id="contact"
          title="Contáctame"
          bgText="CONTACTO"
          titleColor="#BF8173"
          bgColor="#E6E6E6"
          bgOpacityClass="opacity-50"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#BF8173] mb-4">Ubicación</h3>
              <p className="text-base">
                Basada en Colombia (nómada digital). Disponible para trabajos remotos.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#BF8173] mb-4">Contacto directo</h3>
              <div className="space-y-3 text-base">
                <div className="flex items-center">
                  <FiPhone className="text-[#BF8173] mr-2" />
                  <span>+51 977968602 (Perú)</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-[#BF8173] mr-2" />
                  <span>crucessveronica@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#BF8173] mb-4">Sígueme</h3>
              <div className="flex space-x-4 text-2xl">
                <a href="https://www.instagram.com/vwonka2.0/profilecard/?igsh=ZXM2aHcybzN0MGVw" className="text-[#324024] hover:text-[#BF8173]"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/" className="text-[#324024] hover:text-[#BF8173]"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/share/16dGbcpR9P/" className="text-[#324024] hover:text-[#BF8173]"><FaFacebookF /></a>
                <a href="https://github.com/VeronicaC-Fuentes" className="text-[#324024] hover:text-[#BF8173]"><FaGithub /></a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full bg-[#457431] text-[#F2F2F2] placeholder-[#F2F2F2]/60 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#BF8173]"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full bg-[#457431] text-[#F2F2F2] placeholder-[#F2F2F2]/60 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#BF8173]"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Cuéntame más sobre tus necesidades..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              className="w-full bg-[#457431] text-[#F2F2F2] placeholder-[#F2F2F2]/60 p-3 sm:p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#BF8173]"
            />
            <button
              type="submit"
              className="block mx-auto bg-[#457431] hover:bg-[#BF8173] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#263321] text-[#F2F2F2] py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Verónica Cruces. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
