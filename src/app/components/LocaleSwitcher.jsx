"use client";
import { useLang } from "./LanguageProvider";

export default function LocaleSwitch() {
  const { lang, setLang } = useLang();
  const next = lang === "es" ? "en" : "es";
  return (
    <button
      onClick={() => setLang(next)}
      className="text-xs px-2 py-1 rounded border border-white/20 hover:opacity-80"
    >
      {next.toUpperCase()}
    </button>
  );
}
