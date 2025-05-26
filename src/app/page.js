"use client";
import React, { useEffect, useState } from "react";
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import ScrollToTopAndWhatsapp from "./components/ScrollToTopAndWhatsapp";

// Solo frases para el tipeo
const typingPhrases = [
  "te muestro mi portafolio.",
  "descubre mis proyectos.",
  "te presento mi trabajo.",
  "mira lo que hago.",
  "esto es lo que sé hacer.",
  "esto es Verónica Dev.",
];

function Typewriter({ text, speed = 40 }) {
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
  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

function Loader() {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIdx(prev => (prev + 1) % typingPhrases.length);
    }, 1800); // tiempo entre frases, puedes ajustar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[#111418]">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex items-center justify-center">
          <img
            src="https://tenor.com/es/view/cat-typing-typing-on-computer-computer-work-laptop-gif-21481919.gif"
            alt="Cat typing on laptop"
            width={250}
            height={300}
            style={{
              boxShadow: '0 4px 24px 4px #0007',
              objectFit: "cover"
            }}
          />
        </div>
        <span
          className="text-xl text-center font-mono"
          style={{
            color: "#F2F2F2",
            minHeight: "32px",
            letterSpacing: "0.03em"
          }}
        >
          Un break y listo... <Typewriter text={typingPhrases[phraseIdx]} />
        </span>
      </div>
    </div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4400); // Un poco más largo para ver varias frases
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: loading ? "none" : "block" }}>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
        <ScrollToTopAndWhatsapp />
      </div>
    </>
  );
}
