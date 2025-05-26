"use client";
import React from 'react';
import SectionHeader from './SectionHeader';

export default function ResumeSection() {
  const education = [
    { period: '2022 – 2024', title: 'Técnico en Desarrollo de Software', place: 'Instituto San Ignacio de Loyola' },
    { period: 'PROM 2017', title: 'Técnico en Comercio y Servicios Administrativos', place: 'U.E. Trina de Medina', extra: 'Mención: Informática' }
  ];

  const experience = [
    { period: '2022 – Actualidad', title: 'Desarrolladora Web', place: 'Freelance' },
    { period: '2024', title: 'Analista de Soporte de ERP – Odoo', place: 'Representaciones BROL SAC' },
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
      className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 bg-[#F2F2F2] text-[#457431]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Encabezado principal con espacio extra arriba */}
        <div className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          <SectionHeader
            id="curriculum"
            title="Mi currículum"
            bgText="CURRICULUM"
            titleColor="#BF8173"
            bgColor="#E6E6E6"
            bgOpacityClass="opacity-50"
          />
        </div>


        {/* Educación y Experiencia */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full mb-12">
          {/* EDUCACIÓN */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#324024]">Educación</h3>
            {education.map((edu) => (
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
            {experience.map((job) => (
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
        <div className="w-full mb-12">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8 text-[#324024]">Habilidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-sm sm:text-base text-[#457431]">{skill.name}</span>
                </div>
                <div className="w-full bg-[#BF8173]/30 rounded-full h-2.5">
                  <div
                    className="bg-[#BF8173] h-2.5 rounded-full"
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
            href="https://drive.google.com/file/d/1sZmMvY2UN2OC9VAcdhDbj7j8lTHEZMSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#BF8173] hover:bg-[#457431] text-white px-6 py-3 sm:px-8 sm:py-4 rounded font-semibold text-sm sm:text-base transition-colors cursor-pointer"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
