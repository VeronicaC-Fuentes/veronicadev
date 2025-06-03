"use client";

import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const PALETTE = {
  violetNeon: "#8F67E8",
  violetAccent: "#5E60CE",
  white: "#F3EFF5",
  whatsapp: "#25D366",
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
    <div className="fixed bottom-8 right-6 flex flex-col gap-4 z-50 items-end">
      {/* Botón Scroll To Top */}
      {showScroll && (
        <button
          onClick={handleScrollToTop}
          className="
            shadow-[0_4px_20px_0_#8F67E840]
            flex items-center justify-center rounded-full
            w-12 h-12 sm:w-14 sm:h-14
            border-2 border-[#8F67E8]
            bg-[#8F67E8]
            hover:bg-[#5E60CE] hover:border-[#5E60CE]
            transition-all duration-200
            hover:scale-105
            active:scale-95
            group
          "
          aria-label="Subir"
        >
          <FiArrowUp size={28} className="text-[#F3EFF5] group-hover:text-[#F3EFF5]" />
        </button>
      )}

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/51977968602"
        target="_blank"
        rel="noopener noreferrer"
        className="
          shadow-[0_4px_20px_0_#8F67E840]
          flex items-center justify-center rounded-full
          w-12 h-12 sm:w-14 sm:h-14
          border-2 border-[#8F67E8]/60
          bg-[#F3EFF5]
          hover:bg-[#8F67E8]/8
          hover:scale-105
          transition-all duration-200
          active:scale-95
        "
        aria-label="WhatsApp"
      >
        {/* SVG WhatsApp clásico, color oficial */}
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366" />
          <path
            d="M16 7C11.03 7 7 11.03 7 16c0 1.2.22 2.36.66 3.45l-1.15 4.21 4.3-1.13A8.976 8.976 0 0016 25c4.97 0 9-4.03 9-9s-4.03-9-9-9zm4.81 12.37c-.2.56-1.15 1.09-1.57 1.16-.41.07-.92.1-1.48-.1-.34-.11-.77-.25-1.3-.49-2.29-1-3.79-3.45-3.9-3.61-.11-.16-.93-1.25-.93-2.39 0-1.13.59-1.69.8-1.91.21-.22.46-.28.61-.28.15 0 .31.01.45.01.14 0 .34-.05.53.4.2.48.68 1.64.74 1.76.06.13.1.28.02.44-.08.16-.13.25-.25.38-.11.13-.22.29-.32.39-.1.1-.21.21-.09.42.12.22.53.87 1.15 1.42.79.7 1.46.92 1.69 1.03.22.09.35.08.48-.05.13-.13.56-.65.71-.87.16-.21.3-.18.5-.11.21.07 1.35.64 1.57.76.22.12.37.18.43.28.07.1.07.58-.13 1.14z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
};

export default ScrollToTopAndWhatsapp;
