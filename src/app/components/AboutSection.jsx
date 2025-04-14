"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen w-full p-6 sm:p-8 bg-white text-[#111418] flex flex-col items-center overflow-x-hidden"
    >
      {/* Encabezado con texto grande de fondo */}
      <div className="relative w-full h-[150px] flex items-center justify-center mb-1 overflow-hidden">
        {/* Texto grande de fondo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-extrabold tracking-widest opacity-5 text-[#111418] max-w-full text-center break-words">
            ACERCA DE MÍ
          </h2>
        </div>

        {/* Título principal superpuesto */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#BF8173]">
            Conóceme
          </h3>
          <div className="mx-auto w-16 h-[3px] bg-[#BF8173]"></div>
        </div>
      </div>

      {/* Contenedor con imagen y datos */}
      <div className="flex flex-col items-center gap-4 w-full max-w-4xl">
        {/* Imagen de perfil circular */}
        <div className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full overflow-hidden flex-shrink-0 shadow-2xl">
          <img
            src="/image/about.jpg"
            alt="Foto de Verónica Cruces"
            className="object-cover w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Nombre y correo */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#BF8173] text-center">
            VERÓNICA CRUCES
          </h2>
          <p className="text-sm sm:text-base text-[#457431] text-center">
            crucessveronica@gmail.com
          </p>
        </div>
      </div>

      {/* Breve introducción */}
      <div className="mt-8 max-w-3xl text-center leading-relaxed mb-1 px-2">
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
      <div className="mt-6">
        <a
          href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BF8173] hover:bg-[#457431] text-white px-6 py-3 rounded font-semibold text-sm sm:text-base transition-colors"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
