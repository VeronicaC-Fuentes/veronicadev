"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT } from "../content";

const LangCtx = createContext({ lang: "es", c: CONTENT.es, setLang: () => {} });

export function useLang() {
  return useContext(LangCtx);
}

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      c: CONTENT[lang] || CONTENT.es,
      setLang: (l) => {
        setLangState(l);
        try {
          localStorage.setItem("lang", l);
        } catch {}
      },
    }),
    [lang]
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}
