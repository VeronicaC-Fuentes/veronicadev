"use client";
import React, {createContext, useContext, useEffect, useMemo, useState, useCallback} from "react";
import es from "../messages/es.json";
import en from "../messages/en.json";

const LangCtx = createContext({ lang: "es", t: (k)=>k, setLang: ()=>{} });
const MESSAGES = { es, en };

export function useLang() { return useContext(LangCtx); }

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useCallback((key, vars) => {
    const dict = MESSAGES[lang] || MESSAGES.es;
    let val = key.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
    if (val === undefined) return key;
    if (vars && typeof val === "string") {
      for (const [k, v] of Object.entries(vars)) {
        val = val.replace(new RegExp(`{${k}}`, "g"), String(v));
      }
    }
    return val;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    t,
    setLang: (l) => { setLang(l); localStorage.setItem("lang", l); }
  }), [lang, t]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}
