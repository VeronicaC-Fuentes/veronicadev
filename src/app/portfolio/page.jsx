import Portfolio from "../components/site/Portfolio";

export const metadata = {
  title: "Portafolio · Verónica Cruces",
  description: "Webs, aplicaciones, integraciones y módulos Odoo desarrollados por Verónica Cruces.",
  alternates: { canonical: "/portfolio" },
};

export default function Page() {
  return <Portfolio />;
}
