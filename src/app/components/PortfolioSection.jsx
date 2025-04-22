"use client";

import Image from "next/image";

export default function PortafolioSection() {
  // Rutas reales en /public/portfolio/
  const projects = [
    { title: "Landing Page", img: "/portfolio/landing-1.jpg" },
    { title: "Página Web", img: "/portfolio/web-1.jpg" },
    { title: "Aplicación Web", img: "/portfolio/app-1.jpg" },
    { title: "Landing Page", img: "/portfolio/landing-2.jpg" },
    { title: "Página Web", img: "/portfolio/web-2.jpg" },
    { title: "Página Web", img: "/portfolio/web-3.jpg" }
  ];

  return (
    <section
      id="portfolio"
      className="py-28 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#263321] text-[#F2F2F2]"
    >
      {/* Contenedor centrado */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
        {/* Cabecera */}
        <div className="relative mb-20 sm:mb-24 text-center w-full">
          {/* Marca de agua */}
          <h1 className="absolute inset-0 flex items-center justify-center font-extrabold select-none leading-none text-[#324024] opacity-15 text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            PORTAFOLIO
          </h1>
          {/* Título frontal */}
          <h2 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#BF8173]">
            Mis Trabajos
          </h2>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map(({ title, img }) => (
            <figure key={title + img} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-video rounded-xl border border-[#BF8173] bg-[#111418] overflow-hidden transition-colors group-hover:border-[#6ca12b]">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-lg font-semibold text-[#F2F2F2] group-hover:text-[#6ca12b]">
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
