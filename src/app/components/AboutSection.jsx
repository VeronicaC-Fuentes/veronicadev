"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 py-10 sm:px-8 bg-white text-[#111418] flex flex-col items-center overflow-x-hidden"
    >
      {/* Encabezado con texto grande de fondo */}
      <div className="relative w-full py-16 sm:py-20 flex items-center justify-center overflow-hidden">
        {/* Texto grande de fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[2.5rem] sm:text-[5rem] md:text-[6rem] font-extrabold tracking-widest opacity-5 text-[#111418] text-center break-words max-w-full">
            ACERCA DE MÍ
          </h2>
        </div>

        {/* Título principal superpuesto */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#BF8173]">
            Conóceme
          </h3>
          <div className="mx-auto w-16 h-[3px] bg-[#BF8173]"></div>
        </div>
      </div>

      {/* Contenedor con imagen y datos */}
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl px-4">
        {/* Imagen de perfil circular */}
        <div className="w-52 sm:w-72 md:w-96 h-52 sm:h-72 md:h-96 rounded-full overflow-hidden shadow-2xl">
          <img
            src="/image/about.jpg"
            alt="Foto de Verónica Cruces"
            className="object-cover w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Nombre y correo */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BF8173]">
            VERÓNICA CRUCES
          </h2>
          <p className="text-sm sm:text-base text-[#457431]">
            crucessveronica@gmail.com
          </p>
        </div>
      </div>

      {/* Breve introducción */}
      <div className="mt-4 max-w-3xl text-center leading-relaxed px-4">
        <p className="text-base sm:text-lg">
          Soy una desarrolladora de software comprometida con la innovación y la
          creación de soluciones digitales de alto impacto. Con amplia
          experiencia en React, Next.js y Tailwind CSS, me dedico a diseñar
          interfaces que combinan estética y funcionalidad. Siempre en constante
          aprendizaje, busco proyectos desafiantes que potencien mi crecimiento
          profesional y me permitan aportar valor a través de la tecnología.
        </p>
      </div>

      {/* Botón para descargar el CV */}
      <div className="mt-10">
        <a
          href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BF8173] hover:bg-[#457431] text-white px-6 py-3 rounded font-semibold text-sm sm:text-base transition-colors cursor-pointer"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
