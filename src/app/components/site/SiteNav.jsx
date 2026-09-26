"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../LanguageProvider";
import { callUrl } from "./ui";

export default function SiteNav({ base = "" }) {
  const { lang, c, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <Link href="/" className="logo" aria-label="Verónica Cruces">
          <span className="v">VC</span>
          <span className="d">.</span>
        </Link>
        <nav className="nav-links" aria-label="Principal">
          <a href={`${base}#servicios`}>{c.nav.services}</a>
          <a href={`${base}#metodologia`}>{c.nav.process}</a>
          <a href={`${base}#proyectos`}>{c.nav.projects}</a>
          <a href={`${base}#sobre-mi`}>{c.nav.about}</a>
          <button type="button" className="lang-btn" onClick={() => setLang(lang === "es" ? "en" : "es")} aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}>
            {c.nav.lang}
          </button>
          <a href={callUrl(c.callText)} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
            {c.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
