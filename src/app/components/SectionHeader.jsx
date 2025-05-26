"use client";

export default function SectionHeader({
  id,
  title,
  bgText,
  titleColor,
  bgColor,
  bgOpacityClass 
}) {
  return (
    <div id={id} className="relative mb-16 sm:mb-20 text-center px-4">
      {/* Título principal */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-10"
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      {/* Texto de fondo */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1
          className={`font-extrabold uppercase leading-none text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${bgOpacityClass}`}
          style={{ color: bgColor }}
        >
          {bgText}
        </h1>
      </div>
    </div>
  );
}
