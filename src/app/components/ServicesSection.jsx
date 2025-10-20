"use client";
import {
  FaLaptopCode,
  FaGlobe,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
  FaProjectDiagram,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

const ICONS = {
  web: <FaLaptopCode size={34} />,
  uiux: <FaPaintBrush size={34} />,
  apps: <FaGlobe size={34} />,
  seo: <FaChartLine size={34} />,
  biz: <FaProjectDiagram size={34} />,
  erp: <FaCogs size={34} />,
};

export default function ServicesSection() {
  const { t } = useLang();

  // items viene del JSON; si no existe, usa array vacío
  const items = Array.isArray(t("services.items")) ? t("services.items") : [];

  return (
    <section
      id="services"
      className="
        relative w-full
        px-2 sm:px-4 md:px-8
        py-12 sm:py-16 md:py-24
        bg-[#3F3351] text-[#F3EFF5]
        flex flex-col min-h-screen justify-start
        overflow-x-hidden
      "
    >
      {/* Glow decorativo */}
      <div
        className="absolute left-1/2 top-8 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: 500,
          height: 140,
          background: "radial-gradient(circle, #8F67E86d 0%, transparent 74%)",
          filter: "blur(44px)",
        }}
      />

      <div className="flex flex-col items-center w-full mx-auto relative z-10">
        {/* Título */}
        <div className="w-full mb-12">
          <SectionHeader
            id="services"
            title={t("services.header.title")}
            bgText={t("services.header.bg")}
            titleColor="#5E60CE"
            bgColor="#8F67E8"
            bgOpacityClass="opacity-10"
          />
        </div>

        {/* Tarjetas */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-6 sm:gap-10 w-full
            max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto
          "
        >
          {items.map((svc, idx) => (
            <div
              key={idx}
              className="
                group flex items-start gap-5 border-2 border-[#5E60CE]
                px-7 py-7 rounded-2xl bg-[#181828]
                shadow-[0_4px_40px_0_rgba(94,96,206,0.08)]
                transition-all duration-200
                hover:scale-[1.035] hover:shadow-[0_0_34px_6px_#8F67E8cc]
                hover:border-[#8F67E8] cursor-pointer
              "
              style={{ boxShadow: '0 2px 20px 0 #3F335111' }}
            >
              <div className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-[#232338] group-hover:bg-[#5E60CE] shadow-[0_0_24px_0_#8F67E8aa] transition-all">
                <span className="text-[#8F67E8] group-hover:text-[#F3EFF5]">
                  {ICONS[svc.icon] || <FaLaptopCode size={34} />}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#5E60CE] group-hover:text-[#8F67E8] tracking-tight transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm sm:text-base text-[#B9B6D3] group-hover:text-[#F3EFF5] transition-colors">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
