"use client";
import { FiDownload } from "react-icons/fi";
import SectionHeader from './SectionHeader';

export default function ResumeSection() {
  const education = [
    { period: '2022 – 2024', title: 'Técnico en Desarrollo de Software', place: 'Instituto San Ignacio de Loyola' },
    { period: 'PROM 2017', title: 'Técnico en Comercio y Servicios Administrativos', place: 'U.E. Trina de Medina', extra: 'Mención: Informática' }
  ];

  const experience = [
    { period: '2022 – Actualidad', title: 'Desarrolladora Web', place: 'Freelance' },
    { period: '2024', title: 'Desarrollador de ODOO - ERP ', place: 'Representaciones BROL SAC' },
    { period: '2023', title: 'Especialista en KPIs y Análisis de Datos', place: 'RE/MAX Talento' },
    { period: '2022', title: 'Analista de Procesos & Administradora de Base de Datos', place: 'WYDNEX SAC' }
  ];

  const skills = [
    { name: 'Desarrollo Web', pct: 85 },
    { name: 'JavaScript', pct: 90 },
    { name: 'TypeScript', pct: 70 },
    { name: 'Python', pct: 50 },
    { name: 'React JS', pct: 80 },
    { name: 'Next.js', pct: 85 },
    { name: 'Node JS', pct: 80 },
    { name: 'Express.js', pct: 80 },
    { name: 'HTML / CSS', pct: 95 },
    { name: 'Tailwind CSS', pct: 85 },
    { name: 'Bootstrap', pct: 95 },
    { name: 'SQL / PostgreSQL', pct: 75 },
    { name: 'RESTful APIs / GraphQL', pct: 85 },
    { name: 'Git / GitHub', pct: 90 },
    { name: 'Linux básico', pct: 65 },
    { name: 'Metodologías Ágiles / Scrum', pct: 80 },
    { name: 'Power BI / Excel avanzado', pct: 75 },
    { name: 'BPMN / UML', pct: 70 },
    { name: 'Soporte de ERP', pct: 85 },
    { name: 'Capacitación y formación', pct: 90 },
    { name: 'Analisis de Datos', pct: 85 }
  ];

  return (
      <section
      id="curriculum"
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 bg-[#F3EFF5] text-[#232338] overflow-x-hidden"
    >
      {/* Glow blur decorativo para el título */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 pointer-events-none z-0"
        style={{
          width: 500,
          height: 140,
          background: "radial-gradient(circle, #8F67E870 0%, transparent 72%)",
          filter: "blur(32px)",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Encabezado principal */}
        <div className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative z-10">
          <SectionHeader
            id="curriculum"
            title="Mi currículum"
            bgText="CURRICULUM"
            titleColor="#5E60CE"
            bgColor="#8F67E8"
            bgOpacityClass="opacity-10"
          />
        </div>

        {/* Educación y Experiencia */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full mb-12">
          {/* EDUCACIÓN */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#3F3351]">Educación</h3>
            {education.map((edu) => (
              <div
                key={edu.title}
                className="bg-white rounded-xl p-4 sm:p-6 mb-6 border border-[#8F67E8]/40 hover:border-[#5E60CE] shadow-sm hover:shadow-[0_0_18px_1px_#5E60CE33] transition-all"
              >
                <span className="inline-block bg-[#8F67E8]/90 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-3">
                  {edu.period}
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#3F3351] leading-snug">
                  {edu.title}
                </h4>
                <p className="text-[#8F67E8] text-sm sm:text-base">{edu.place}</p>
                {edu.extra && <p className="text-sm mt-1">{edu.extra}</p>}
              </div>
            ))}
          </div>

          {/* EXPERIENCIA */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#3F3351]">Experiencia</h3>
            {experience.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl p-4 sm:p-6 mb-6 border border-[#8F67E8]/40 hover:border-[#5E60CE] shadow-sm hover:shadow-[0_0_18px_1px_#5E60CE33] transition-all"
              >
                <span className="inline-block bg-[#5E60CE]/90 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium mb-3">
                  {job.period}
                </span>
                <h4 className="text-base sm:text-lg font-semibold text-[#3F3351] leading-snug">
                  {job.title}
                </h4>
                <p className="text-[#5E60CE] text-sm sm:text-base">{job.place}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HABILIDADES */}
        <div className="w-full mb-12">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8 text-[#3F3351]">Habilidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm sm:text-base text-[#3F3351]">{skill.name}</span>
                  <span className="text-xs text-[#8F67E8] font-semibold">{skill.pct}%</span>
                </div>
                <div className="w-full bg-[#E7E3F3] rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-[#8F67E8] to-[#5E60CE] h-2.5 rounded-full transition-all"
                    style={{ width: `${skill.pct}%` }}
                    aria-label={`${skill.name} proficiency ${skill.pct}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTÓN */}
        <div className="text-center mt-8 sm:mt-10">
          <a
            href="https://drive.google.com/file/d/17zxFIhnMEHViqL8LxuWdB06rUtAFEtda/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#232338] border-2 border-[#5E60CE] text-[#F3EFF5] font-semibold text-base shadow-md hover:bg-[#5E60CE] hover:text-[#F3EFF5] hover:scale-105 transition-all"
          >
            Descargar CV <FiDownload size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
