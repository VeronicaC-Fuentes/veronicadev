"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../LanguageProvider";
import SiteNav from "./SiteNav";
import { Arrow, Label, ProjectCard, WhatsAppFloat, PhotoImg, callUrl, useReveal } from "./ui";
import { CLIENTS, PROJECTS, PHONE_DISPLAY, PHONE_RAW, WHATSAPP_URL, SOCIALS } from "../../content";

function Hero({ c }) {
  return (
    <section className="wrap hero">
      <div className="hero-copy">
        <span className="label fade-in">
          <span className="n">●</span> {c.hero.eyebrow}
        </span>
        <h1 className="fade-in d2">
          {c.hero.title[0]} <em className="accent">{c.hero.title[1]}</em>
        </h1>
        <p className="lead fade-in d3">{c.hero.lead}</p>
        <div className="hero-actions fade-in d3">
          <a href="#contacto" className="btn btn-ink">
            {c.hero.primary} <Arrow />
          </a>
          <a href="#proyectos" className="btn btn-line">
            {c.hero.secondary}
          </a>
        </div>
      </div>
      <div className="hero-art fade-in d2">
        <PhotoImg src="/img/hero-door.jpg" alt={c.hero.alt} className="arch" priority sizes="(max-width: 900px) 90vw, 540px" />
      </div>
    </section>
  );
}

function Clients({ c }) {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <div className="wrap clients" aria-label={c.clients}>
      <span className="label">{c.clients}</span>
      <div className="marquee">
        <div className="track logos">
          {list.map((cl, i) => (
            <Image
              key={i}
              src={cl.logo}
              alt={i < CLIENTS.length ? cl.name : ""}
              aria-hidden={i >= CLIENTS.length ? "true" : undefined}
              width={cl.w}
              height={cl.h}
              style={{ height: cl.height, width: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Services({ c }) {
  const s = c.services;
  return (
    <section className="white" id="servicios">
      <div className="wrap services">
        <div className="sec-head reveal">
          <div className="l">
            <Label n="01">{s.label}</Label>
            <h2 className="h2">
              {s.title[0]} <em className="accent">{s.title[1]}</em>
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: "42ch" }}>{s.lead}</p>
        </div>
        <span className="swipe" aria-hidden="true">{c.swipe} →</span>
        <div className="svc-grid">
          {s.items.map((it, i) => (
            <article key={it.title} className={`card reveal${it.featured ? " feat" : ""}`}>
              <div className="top">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                {it.isNew && <span className="new">{s.newLabel}</span>}
              </div>
              <h3>{it.title}</h3>
              <p className="for">
                <b>{s.forLabel}</b> {it.for}
              </p>
              <ul>
                {it.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <div className="tech">{it.tech}</div>
            </article>
          ))}
        </div>
        <div className="skills reveal">
          <h3>
            {s.stackTitle}
            <small>{s.stackSub}</small>
          </h3>
          <div className="sk-grid">
            {s.stack.map(([k, v]) => (
              <div key={k}>
                <span>{k}</span>
                <b>{v}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="svc-cta reveal">
          <p>
            {s.ctaText[0]} <em className="accent">{s.ctaText[1]}</em>
          </p>
          <a href={callUrl(c.callText)} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
            {c.nav.cta} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Strip({ c }) {
  const list = [...c.strip, ...c.strip];
  return (
    <div className="strip" aria-hidden="true">
      <div className="track">
        {list.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Process({ c }) {
  const p = c.process;
  return (
    <section id="metodologia">
      <div className="wrap process">
        <div className="proc-top">
          <PhotoImg src="/img/book-column.jpg" alt={p.alt} className="proc-photo reveal" />
          <div className="proc-body">
            <div className="l reveal" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Label n="02">{p.label}</Label>
              <h2 className="h2">
                {p.title[0]} <em className="accent">{p.title[1]}</em>
              </h2>
              <p className="lead">{p.lead}</p>
            </div>
            <div className="flow two reveal">
              {p.steps.map(([t, d], i) => (
                <div key={t}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="sub reveal">{p.modesTitle}</h3>
        <span className="swipe" aria-hidden="true">{c.swipe} →</span>
        <div className="mode-grid reveal">
          {p.modes.map((m, i) => (
            <article key={m.title} className={`mode${m.inv ? " inv" : ""}`}>
              <span className="label">{String.fromCharCode(65 + i)}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <ul>
                {m.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <span className="price">{m.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ c }) {
  return (
    <section className="white" id="proyectos">
      <div className="wrap projects">
        <div className="sec-head reveal">
          <div className="l">
            <Label n="03">{c.projects.label}</Label>
            <h2 className="h2">
              {c.projects.title[0]} <em className="accent">{c.projects.title[1]}</em>
            </h2>
          </div>
          <Link href="/portfolio" className="btn btn-line">
            {c.projects.all}
          </Link>
        </div>
        <span className="swipe" aria-hidden="true">{c.swipe} →</span>
        <div className="proj-grid">
          {PROJECTS.filter((p) => p.home).map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ c }) {
  const a = c.about;
  const photos = ["/img/alley-lean.jpg", "/img/lean-arm.jpg", "/img/look-up.jpg"];
  return (
    <section className="dark" id="sobre-mi">
      <div className="wrap about">
        <div className="sec-head reveal">
          <div className="l">
            <Label n="04">{a.label}</Label>
            <h2 className="h2">
              {a.title[0]} <em className="accent">{a.title[1]}</em>
            </h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="trip reveal">
            {photos.map((src, i) => (
              <PhotoImg key={src} src={src} alt={a.alts[i]} sizes="(max-width: 900px) 33vw, 18vw" />
            ))}
          </div>
          <div className="about-txt reveal">
            <p className="first">{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ c }) {
  const r = c.reviews;
  if (!r.items || r.items.length === 0) return null;
  const [first, ...rest] = r.items;
  return (
    <section id="recomendaciones">
      <div className="wrap reviews">
        <div className="sec-head reveal">
          <div className="l">
            <Label n="05">{r.label}</Label>
            <h2 className="h2">
              {r.title[0]} <em className="accent">{r.title[1]}</em>
            </h2>
          </div>
        </div>
        <div className="rv-grid">
          <PhotoImg src="/img/book-peek.jpg" alt={r.alt} className="photo reveal" />
          <div className="rv-main reveal">
            <article className="quote-big">
              <span className="mark" aria-hidden="true">“</span>
              <p>{first.text}</p>
              <div className="author">
                <span className="av">{first.name[0]}</span>
                <span>
                  <b>{first.name}</b>
                  <small>{first.role}</small>
                </span>
              </div>
            </article>
            {rest.length > 0 && (
              <div className="rv-pair">
                {rest.slice(0, 2).map((it) => (
                  <article className="rv-small" key={it.name}>
                    <span className="stars" aria-hidden="true">★★★★★</span>
                    <p>{it.text}</p>
                    <div className="author">
                      <span className="av">{it.name[0]}</span>
                      <span>
                        <b>{it.name}</b>
                        <small>{it.role}</small>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
            {r.googleUrl && (
              <div className="svc-cta" style={{ background: "transparent", padding: 0 }}>
                <p style={{ fontSize: 20 }}>{r.ask}</p>
                <a href={r.googleUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                  {r.askBtn}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Band({ c }) {
  return (
    <section className="band" aria-label={c.band.label}>
      <Image src="/img/door-blazer.jpg" alt={c.band.alt} width={3200} height={2133} sizes="100vw" quality={90} />
      <div className="card">
        <span className="label">
          <span className="n">●</span> {c.band.label}
        </span>
        <p>
          {c.band.text[0]} <em className="accent">{c.band.text[1]}</em>
        </p>
      </div>
    </section>
  );
}

function Contact({ c, n }) {
  const k = c.contact;
  const [copied, setCopied] = useState(false);
  const copy = () => {
    try {
      navigator.clipboard.writeText(`+${PHONE_RAW}`).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    } catch {}
  };
  return (
    <section className="dark" id="contacto">
      <div className="wrap cta">
        <div className="cta-grid">
          <div className="copy">
            <Label n={n}>{k.label}</Label>
            <h2>{k.title}</h2>
            <p className="lead">{k.lead}</p>
            <div className="hero-actions">
              <a href={callUrl(c.callText)} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                {k.call} <Arrow />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                WhatsApp
              </a>
            </div>
            <div className="contact">
              <span>{k.phone}</span>
              <div className="ph-row">
                <b style={{ fontWeight: 500 }}>{PHONE_DISPLAY}</b>
                <button type="button" onClick={copy}>
                  {copied ? k.copied : k.copy}
                </button>
              </div>
              <span>LinkedIn</span>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500 }}>
                Verónica Cruces
              </a>
            </div>
          </div>
          <PhotoImg src="/img/smile-tree.jpg" alt={k.alt} className="photo reveal" />
        </div>
        <footer className="foot">
          <span>© {new Date().getFullYear()} Verónica Cruces</span>
          <nav aria-label="Redes">
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}

export default function Home() {
  const { lang, c } = useLang();
  useReveal(lang);
  const hasReviews = c.reviews.items && c.reviews.items.length > 0;
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero c={c} />
        <Clients c={c} />
        <Services c={c} />
        <Strip c={c} />
        <Process c={c} />
        <Projects c={c} />
        <About c={c} />
        <Reviews c={c} />
        <Band c={c} />
        <Contact c={c} n={hasReviews ? "06" : "05"} />
      </main>
      <WhatsAppFloat />
    </>
  );
}
