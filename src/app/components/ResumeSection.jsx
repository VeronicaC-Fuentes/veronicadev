"use client";
import { FiDownload } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { useLang } from "./LanguageProvider";

export default function ResumeSection() {
  const { t } = useLang();

  const education  = Array.isArray(t("resume.education"))  ? t("resume.education")  : [];
  const experience = Array.isArray(t("resume.experience")) ? t("resume.experience") : [];
  const skills     = Array.isArray(t("resume.skills"))     ? t("resume.skills")     : [];

  return (
    <section
      id="curriculum"
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 bg-[#F3EFF5] text-[#232338] overflow-x-hidden"
    >
      {/* Glow decorativo */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-14 pointer-events-none z-0"
        style={{
          width: 500,
          height: 140,
          background: "radial-gradient(circle, #8F67E870 0%, transparent 72%)",
          filter: "blur(32px)"
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        {/* Encabezado */}
        <div className="w-full mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          <SectionHeader
            id="curriculum"
            title={t("resume.header.title")}
            bgText={t("resume.header.bg")}
            titleColor="#5E60CE"
            bgColor="#8F67E8"
            bgOpacityClass="opacity-10"
          />
        </div>

        {/* Educación y Experiencia */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full mb-12">
          {/* EDUCACIÓN */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#3F3351]">
              {t("resume.educationTitle")}
            </h3>

            {education.map((edu, i) => (
              <div
                key={`${edu.title}-${i}`}
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
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#3F3351]">
              {t("resume.experienceTitle")}
            </h3>

            {experience.map((job, i) => (
              <div
                key={`${job.title}-${i}`}
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
          <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-8 text-[#3F3351]">
            {t("resume.skillsTitle")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={`${skill.name}-${i}`} className="flex flex-col">
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
            {t("resume.download")} <FiDownload size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
