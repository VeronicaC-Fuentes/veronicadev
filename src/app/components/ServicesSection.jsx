"use client";
import {
  FaLaptopCode,
  FaGlobe,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "Diseño y Desarrollo Web",
      description: "Páginas responsivas, modernas y funcionales.",
    },
    {
      icon: <FaPaintBrush size={28} />,
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas para el usuario.",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Diseño y Desarrollo de Apps",
      description: "Aplicaciones webs adaptadas a tus necesidades.",
    },
    {
      icon: <FaChartLine size={28} />,
      title: "Posicionamiento SEO",
      description: "Estrategias para mejorar tu presencia en buscadores.",
    },
    {
      icon: <FaProjectDiagram size={28} />,
      title: "Análisis de Negocio",
      description: "Estudio de procesos y oportunidades de mejora.",
    },
    {
      icon: <FaCogs size={28} />,
      title: "Soporte de ERP",
      description: "Acompañamiento y mejora continua de sistemas.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen px-2 sm:px-4 md:px-8 py-10 sm:py-14 md:py-20 bg-[#2B3324] text-[#F2F2F2] flex items-center"
    >
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
            <div className="w-full mt-8 sm:mt-0">

        {/* TÍTULO */}
        <SectionHeader
          id="services"
          title="¿Qué hago?"
          bgText="SERVICIOS"
          titleColor="#BF8173"
          bgColor="#F2F2F2"
          bgOpacityClass="opacity-5"
        />
        </div>

        {/* TARJETAS */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6 sm:gap-8
          w-full
          px-1 sm:px-2
        ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border border-[#BF8173] px-5 py-6 rounded-md bg-[#324024] hover:shadow-lg transition-shadow"
            >
              <div className="text-[#BF8173] mt-1">{service.icon}</div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#F2F2F2]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
