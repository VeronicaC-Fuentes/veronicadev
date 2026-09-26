"use client";
import Link from "next/link";
import { useLang } from "../LanguageProvider";
import SiteNav from "./SiteNav";
import { ProjectCard, WhatsAppFloat, useReveal } from "./ui";
import { PROJECTS } from "../../content";

export default function Portfolio() {
  const { lang, c } = useLang();
  useReveal(lang);
  return (
    <>
      <SiteNav base="/" />
      <main className="white" style={{ minHeight: "100vh" }}>
        <div className="wrap pf-head">
          <Link href="/" className="pf-back">← {c.portfolio.back}</Link>
          <h1 className="h2">
            {c.portfolio.title[0]} <em className="accent">{c.portfolio.title[1]}</em>
          </h1>
          <p className="lead">{c.portfolio.lead}</p>
        </div>
        <div className="wrap pf-grid">
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </main>
      <WhatsAppFloat />
    </>
  );
}
