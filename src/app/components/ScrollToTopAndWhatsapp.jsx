"use client";

import React, { useEffect, useState } from "react";

const colors = {
  bg: "#111418",
  accent: "#BF8173",
  light: "#F2F2F2",
  green: "#6ca12b",
  darkGreen: "#457431",
  sidebar: "#324024",
};

const ScrollToTopAndWhatsapp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > window.innerHeight / 1.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-2 z-50">
      {/* Botón Scroll To Top */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="shadow-lg flex items-center justify-center rounded-full w-14 h-14 transition-all duration-300"
          style={{
            background: colors.accent,
            color: colors.bg,
          }}
          aria-label="Subir"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="none"/>
            <path
              d="M12 19V5M12 5L6 11M12 5l6 6"
              stroke={colors.light}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51977968602"
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg flex items-center justify-center rounded-full w-14 h-14 transition-all duration-300"
        style={{
          background: colors.green,
        }}
        aria-label="WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default ScrollToTopAndWhatsapp;
