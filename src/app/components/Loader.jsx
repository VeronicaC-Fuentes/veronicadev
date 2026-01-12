"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function Loader({ onFinish }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Referencia al elemento de video para chequear su estado manual
  const videoRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Control de finalización
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [canFinish, setCanFinish] = useState(false);

  const intervalRef = useRef(null);
  const timeoutsRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    timeoutsRef.current.forEach((t) => window.clearTimeout(t));
    timeoutsRef.current = [];
  }, []);

  const finish = useCallback(() => {
    clearAllTimers();
    setFadeOut(true);
    const t = window.setTimeout(() => onFinish?.(), 700);
    timeoutsRef.current.push(t);
  }, [clearAllTimers, onFinish]);

  // 1. TIEMPO MÍNIMO (Estética)
  useEffect(() => {
    const t = window.setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1800);
    timeoutsRef.current.push(t);
    return () => window.clearTimeout(t);
  }, []);

  // 2. SALVAVIDAS (SEGURIDAD CRÍTICA)
  useEffect(() => {
    const t = window.setTimeout(() => {
      setVideoLoaded(true);
    }, 4000);
    timeoutsRef.current.push(t);
    return () => window.clearTimeout(t);
  }, []);

  // 3. CHEQUEO MANUAL AL MONTAR
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
    }
  }, []);

  // 4. COORDINADOR PRINCIPAL
  useEffect(() => {
    if (minTimeElapsed && (videoLoaded || prefersReducedMotion)) {
      setCanFinish(true);
    }
  }, [minTimeElapsed, videoLoaded, prefersReducedMotion]);

  // 5. BARRA DE PROGRESO (Fase A)
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setProgress((old) => {
        if (canFinish) return old;
        const next = old + 1;
        return next >= 95 ? 95 : next;
      });
    }, 20);
    return () => intervalRef.current && window.clearInterval(intervalRef.current);
  }, [canFinish]);

  // 6. BARRA DE PROGRESO (Fase B - Final)
  useEffect(() => {
    if (!canFinish) return;

    const t1 = window.setInterval(() => {
      setProgress((old) => {
        const next = old + 8;
        return next >= 100 ? 100 : next;
      });
    }, 10);

    const t2 = window.setTimeout(() => finish(), 200);

    timeoutsRef.current.push(t1);
    timeoutsRef.current.push(t2);

    return () => {
      window.clearInterval(t1);
      window.clearTimeout(t2);
    };
  }, [canFinish, finish]);

  const handleVideoReady = () => setVideoLoaded(true);

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] bg-black h-[100dvh] w-screen overflow-hidden",
        "flex items-end justify-start px-6 pb-10 pt-10 md:p-16",
        "transition-opacity duration-700 ease-in-out",
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100",
        "antialiased",
      ].join(" ")}
      role="status"
      aria-live="polite"
    >
      {!prefersReducedMotion ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/intro-poster.jpg"
          // AQUÍ ESTÁ EL CAMBIO: Agregué 'grayscale' al final de las clases
          className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
          onCanPlayThrough={handleVideoReady}
          onLoadedData={handleVideoReady}
          onError={() => setVideoLoaded(true)}
        >
          <source
            src="/intro-mobile.webm"
            type="video/webm"
            media="(max-width: 768px)"
          />
          <source
            src="/intro-mobile.mp4"
            type="video/mp4"
            media="(max-width: 768px)"
          />
          <source src="/intro.webm" type="video/webm" />
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-center bg-cover opacity-80 grayscale"
          style={{ backgroundImage: "url(/intro-poster.jpg)" }}
        />
      )}

      {/* Oscuridad moderada + legibilidad */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-0" />

      <div
        className="relative z-10 text-white font-sans max-w-xl w-full select-none"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.01em] mb-2 leading-[1.02]"
          style={{ textShadow: "0 6px 30px rgba(0,0,0,0.35)" }}
        >
          VERÓNICA CRUCES
        </h2>

        <h3
          className="text-xs sm:text-sm md:text-base text-white/70 tracking-[0.12em] uppercase mb-6 font-semibold"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.28)" }}
        >
          Odoo Consulting & Software Developer
        </h3>

        <div className="flex items-center gap-4 text-xs md:text-sm text-white/65 font-mono">
          <span className="animate-pulse whitespace-nowrap">Cargando portafolio</span>

          <div className="h-[2px] flex-grow md:w-28 md:flex-grow-0 bg-white/15 relative overflow-hidden rounded-full">
            <div
              className="absolute inset-y-0 left-0 bg-white transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="w-10 text-right tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
}