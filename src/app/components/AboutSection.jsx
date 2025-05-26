"use client";
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-20 sm:pb-24 md:pb-28 lg:pb-32 bg-white text-[#111418]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* TÍTULO CON FONDO GRANDE */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <SectionHeader
            id="about"
            title="Conóceme"
            bgText="ACERCA DE MI"
            titleColor="#BF8173"
            bgColor="#E6E6E6"
            bgOpacityClass="opacity-50"
          />
        </div>

        {/* FOTO + NOMBRE */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full px-2 sm:px-4 md:px-0">
          <div className="w-44 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] h-44 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-full overflow-hidden shadow-2xl">
            <img
              src="/image/about.jpg"
              alt="Foto de Verónica Cruces"
              className="object-cover w-full h-full"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#BF8173]">
              VERÓNICA CRUCES
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#457431]">
              crucessveronica@gmail.com
            </p>
          </div>
        </div>

        {/* TEXTO */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-w-3xl text-center leading-relaxed px-2 sm:px-4 md:px-0">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Soy una desarrolladora de software comprometida con la innovación y la
            creación de soluciones digitales de alto impacto. Con amplia
            experiencia en React, Next.js y Tailwind CSS, me dedico a diseñar
            interfaces que combinan estética y funcionalidad. Siempre en constante
            aprendizaje, busco proyectos desafiantes que potencien mi crecimiento
            profesional y me permitan aportar valor a través de la tecnología.
          </p>
        </div>

        {/* BOTÓN */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <a
            href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BF8173] hover:bg-[#457431] text-white px-6 py-3 sm:px-8 sm:py-4 rounded font-semibold text-sm sm:text-base md:text-lg transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
