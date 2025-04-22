"use client";

// Sección de Currículum + Habilidades — totalmente responsive
export default function ResumeSection() {
  const skills = [
    { name: 'Desarrollo Web', pct: 85 },
    { name: 'React JS', pct: 80 },
    { name: 'HTML / CSS', pct: 95 },
    { name: 'Bases de Datos', pct: 75 },
    { name: 'JavaScript', pct: 90 },
    { name: 'Soporte de ERP', pct: 85 },
    { name: 'Node JS', pct: 80 },
    { name: 'Bootstrap', pct: 95 },
  ];

  return (
    <section id="curriculum" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F2F2F2] text-[#457431]">
      {/* Encabezado principal */}
      <div className="relative text-center mb-16 sm:mb-20 lg:mb-24">
        <h2 className="font-extrabold uppercase tracking-widest select-none opacity-50 text-[#E6E6E6] text-5xl sm:text-7xl lg:text-9xl">
          CURRÍCULUM
        </h2>
        <span className="absolute inset-0 flex items-center justify-center font-bold drop-shadow-sm text-[#BF8173] text-2xl sm:text-4xl lg:text-5xl">
          Mi&nbsp;Resumen
        </span>
      </div>

      {/* Educación y Experiencia */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 max-w-6xl mx-auto mb-20 lg:mb-24">
        {/* EDUCACIÓN */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#324024]">Educación</h3>

          {[{
            period: '2022 – 2024',
            title: 'Técnico en Desarrollo de Software',
            place: 'Instituto San Ignacio de Loyola',
          }, {
            period: 'PROM 2017',
            title: 'Técnico en Comercio y Servicios Administrativos',
            place: 'U.E. Trina de Medina',
            extra: 'Mención: Informática',
          }].map((edu) => (
            <div
              key={edu.title}
              className="bg-white rounded-xl p-4 sm:p-6 mb-6 border border-[#BF8173]/40 hover:border-[#BF8173] shadow-sm hover:shadow-md transition-all"
            >
              <span className="inline-block bg-[#BF8173]/90 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-3">
                {edu.period}
              </span>
              <h4 className="text-base sm:text-lg font-semibold text-[#324024] leading-snug">
                {edu.title}
              </h4>
              <p className="text-[#BF8173] text-sm sm:text-base">{edu.place}</p>
              {edu.extra && <p className="text-sm mt-1">{edu.extra}</p>}
            </div>
          ))}
        </div>

        {/* EXPERIENCIA */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#324024]">Experiencia</h3>

          {[{
            period: '2022 – Actualidad',
            title: 'Desarrolladora Web',
            place: 'Freelance',
          }, {
            period: '2024',
            title: 'Analista de Soporte de ERP – Odoo',
            place: 'Representaciones BROL SAC',
          }, {
            period: '2023',
            title: 'Especialista en KPIs y Análisis de Datos',
            place: 'RE/MAX Talento',
          }, {
            period: '2022',
            title: 'Analista de Procesos & Administradora de Base de Datos',
            place: 'WyDMEx SAC',
          }].map((job) => (
            <div
              key={job.title}
              className="bg-white rounded-xl p-4 sm:p-6 mb-6 border border-[#BF8173]/40 hover:border-[#BF8173] shadow-sm hover:shadow-md transition-all"
            >
              <span className="inline-block bg-[#BF8173]/90 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-3">
                {job.period}
              </span>
              <h4 className="text-base sm:text-lg font-semibold text-[#324024] leading-snug">
                {job.title}
              </h4>
              <p className="text-[#BF8173] text-sm sm:text-base">{job.place}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HABILIDADES */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10 text-[#324024]">Habilidades</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex justify-between items-center border-b border-[#BF8173]/30 pb-2"
            >
              <span className="font-medium text-sm sm:text-base text-[#457431]">{skill.name}</span>
              <span className="font-semibold text-sm sm:text-base text-[#BF8173]">{skill.pct}%</span>
            </div>
          ))}
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BF8173] hover:bg-[#457431] text-white px-6 py-3 sm:px-8 sm:py-3 rounded font-semibold text-sm sm:text-base transition-colors cursor-pointer"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
