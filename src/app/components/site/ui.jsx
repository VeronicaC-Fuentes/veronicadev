"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useLang } from "../LanguageProvider";
import { WHATSAPP_URL } from "../../content";

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Label({ n, children }) {
  return (
    <span className="label">
      <span className="n">{n}</span> {children}
    </span>
  );
}

// Enlace de WhatsApp con mensaje para agendar llamada
export function callUrl(text) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

// Animación sutil al hacer scroll. El contenido es visible siempre;
// solo los elementos por debajo del pliegue se desplazan un poco al entrar.
export function useReveal(dep) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll(".reveal"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add("pre");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.remove("pre");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

export function ProjectCard({ p }) {
  const { lang, c } = useLang();
  const inner = (
    <>
      <div className="shot" style={{ position: "relative" }}>
        <Image src={p.image} alt={p.title} fill sizes="(max-width: 800px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
      <div className="meta">
        <h3>{p.title}</h3>
        <span className="stack">{p.stack}</span>
      </div>
      <p>{p[lang] || p.es}</p>
      {p.url && (
        <span className="go">
          {c.projects.view} <ArrowUpRight />
        </span>
      )}
    </>
  );
  return p.url ? (
    <a className="proj reveal" href={p.url} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div className="proj reveal">{inner}</div>
  );
}

export function WhatsAppFloat() {
  const { c } = useLang();
  return (
    <a className="wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={c.whatsappAria}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2Zm5.8 14.05c-.24.68-1.42 1.3-1.96 1.35-.5.05-.97.23-3.28-.68-2.77-1.09-4.52-3.93-4.66-4.11-.13-.18-1.1-1.46-1.1-2.79s.7-1.98.95-2.25c.24-.27.53-.34.71-.34l.51.01c.16 0 .38-.06.6.46.23.54.77 1.87.84 2 .07.14.11.3.02.48-.09.18-.13.3-.27.46l-.4.47c-.13.13-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.6-.14.25.09 1.57.74 1.84.88.27.13.45.2.52.31.07.11.07.66-.17 1.3Z" />
      </svg>
    </a>
  );
}

export function PhotoImg({ src, alt, className, priority, sizes = "(max-width: 900px) 100vw, 40vw", style }) {
  // Las fotos tienen proporción 3:4 aprox.; el CSS de cada sección define el recorte final.
  return (
    <Image src={src} alt={alt} width={1050} height={1400} className={className} priority={priority} sizes={sizes} style={style} quality={90} />
  );
}
