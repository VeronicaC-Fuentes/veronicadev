export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/image/banner1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 break-words max-w-full">
          Bienvenido
        </h2>
        <p className="text-lg sm:text-2xl mb-6 break-words max-w-[90vw]">
          Soy Desarrolladora de Software
        </p>

        <a href="#contact">
          <button className="bg-[#457431] hover:bg-[#BF8173] text-white px-5 py-2 rounded-full font-semibold text-sm sm:text-base transition-colors cursor-pointer">
            Contáctame
          </button>
        </a>
      </div>
    </section>
  );
}
