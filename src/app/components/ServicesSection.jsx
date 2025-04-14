"use client";
import {
  FaLaptopCode,
  FaGlobe,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";

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
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-[#2B3324] text-[#F2F2F2] flex items-center"
    >
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* TÍTULO */}
        <div className="relative mb-16 sm:mb-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#BF8173] relative z-10">
            ¿Qué hago?
          </h2>
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <h1 className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] font-extrabold text-[#F2F2F2] opacity-5 leading-none">
              SERVICIOS
            </h1>
          </div>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full px-2 sm:px-4">
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
