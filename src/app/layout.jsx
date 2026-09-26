import "./globals.css";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import "@fontsource-variable/hanken-grotesk/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import ClientRoot from "./ClientRoot";


const SITE = "https://veronicadev.com";
const TITLE = "Verónica Cruces · Desarrolladora full-stack y consultora Odoo";
const DESC =
  "Desarrollo aplicaciones y webs a medida, integraciones y automatizaciones. Especialista en Odoo: implementación, desarrollo de módulos y consultoría para empresas de España y Latinoamérica.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  keywords: ["consultora Odoo", "desarrolladora Odoo", "Odoo freelance", "desarrolladora full-stack", "integraciones API", "automatización", "Next.js", "React", "Odoo España"],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    url: SITE,
    title: TITLE,
    description: DESC,
    siteName: "Verónica Cruces",
    locale: "es_ES",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Verónica Cruces" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["/og.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Verónica Cruces",
  url: SITE,
  image: `${SITE}/og.jpg`,
  description: DESC,
  telephone: "+34674002395",
  areaServed: ["ES", "Latinoamérica"],
  founder: {
    "@type": "Person",
    name: "Verónica Cruces",
    jobTitle: "Desarrolladora full-stack y consultora Odoo",
    sameAs: [
      "https://www.linkedin.com/in/desarrollador-ver%C3%B3nicac/",
      "https://www.instagram.com/veronicadev.web/",
      "https://github.com/VeronicaC-Fuentes",
    ],
  },
  knowsAbout: ["Odoo", "Python", "React", "Next.js", "Node.js", "Supabase", "API integrations", "SEO"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
