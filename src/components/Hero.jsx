import HeroImage from "./hero/HeroImage";

function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-10 lg:py-20"
>
      {/* Left */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <p className="text-purple-400 font-semibold tracking-widest uppercase mb-5">
          Graduate Engineer
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

          Karthick{" "}

          <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            M
          </span>

        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mt-3">
          AI & Full Stack Developer
        </h2>

        <p className="text-gray-400 mt-8 max-w-xl mx-auto lg:mx-0 leading-8 text-base md:text-lg">

          Passionate Computer Science Engineer specializing in
          Artificial Intelligence & Machine Learning with expertise
          in Full Stack Development.

          I enjoy building scalable applications, solving real-world
          problems and continuously learning modern technologies.

        </p>

        <div className="mt-10 flex justify-center lg:justify-start">

          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]"
          >
            Let's Connect
          </a>

        </div>

      </div>

      {/* Right */}

      <div className="w-full lg:w-1/2 flex justify-center">

        <HeroImage />

      </div>

    </section>
  );
}

export default Hero;