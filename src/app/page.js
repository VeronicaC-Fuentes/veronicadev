"use client";
import React, { useEffect, useState } from "react";
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import ScrollToTopAndWhatsapp from "./components/ScrollToTopAndWhatsapp"

// Frases para el tipeo
const typingPhrases = [
  "te muestro mi portafolio.",
  "descubre mis proyectos.",
  "te presento mi trabajo.",
  "mira lo que hago.",
  "esto es lo que sé hacer.",
  "esto es Verónica Dev.",
];

// Loader (adaptado a la paleta)
function Typewriter({ text, speed = 40, cursorColor = "#FFD166" }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span style={{ color: cursorColor, fontWeight: "bold" }} className="animate-pulse">|</span>
    </span>
  );
}

function Loader({ onFinish }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx(prev => (prev + 1) % typingPhrases.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 700);
    }, 4400);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className={`
      fixed inset-0 flex items-center justify-center z-[9999] 
      transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      bg-gradient-to-br from-[#3F3351] via-[#232338] to-[#5E60CE]
    `}>
      <div className="flex flex-col items-center">
        <div className="mb-7 flex items-center justify-center">
          <div className="
            w-40 h-40 rounded-full overflow-hidden
            border-4 border-[#5E60CE]
            shadow-[0_0_32px_0_#8F67E888]
            animate-pulse ring-4 ring-[#8F67E8]/30
            bg-[#232338]
          ">
            <img
              src="https://tenor.com/es/view/cat-typing-typing-on-computer-computer-work-laptop-gif-21481919.gif"
              alt="Cat typing on laptop"
              className="object-cover w-full h-full"
              width={160}
              height={160}
            />
          </div>
        </div>
        <span
          className="text-xl md:text-2xl text-center font-mono font-medium tracking-tight"
          style={{
            color: "#F3EFF5",
            textShadow: "0 2px 12px #3F335155, 0 1px 0 #5E60CE66",
            minHeight: "32px",
            letterSpacing: "0.04em"
          }}
        >
          <span className="text-[#FFD166] font-bold">Un break y listo...</span>{" "}
          <span className="text-[#8F67E8]">
            <Typewriter text={typingPhrases[phraseIdx]} cursorColor="#FFD166" />
          </span>
        </span>
      </div>
      {/* Pulsing border keyframes */}
      <style>
        {`
          .animate-pulse {
            animation: borderPulse 1.7s infinite alternate cubic-bezier(.4,0,.6,1);
          }
          @keyframes borderPulse {
            0% {
              box-shadow: 0 0 0 0 #8F67E850, 0 0 32px 0 #FFD16666;
            }
            100% {
              box-shadow: 0 0 18px 8px #8F67E825, 0 0 48px 8px #FFD16644;
            }
          }
        `}
      </style>
    </div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ResumeSection />
          <PortfolioSection />
          <ContactSection />
          <ScrollToTopAndWhatsapp />
        </>
      )}
    </>
  );
}
