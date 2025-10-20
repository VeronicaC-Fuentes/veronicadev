"use client";
import LanguageProvider from "./components/LanguageProvider";
export default function ClientRoot({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
