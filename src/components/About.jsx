function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="text-purple-400 font-semibold mb-3">
            ● About Me
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Building Intelligent
            <br />
            Software Solutions
          </h2>

          <p className="text-gray-400 leading-8 text-base md:text-lg">
            I'm a passionate Computer Science Engineer specializing in
            Artificial Intelligence & Machine Learning with a strong
            interest in Full Stack Development.

            <br /><br />

            I enjoy solving real-world problems, building scalable
            applications and continuously learning modern technologies.

            <br /><br />

            My goal is to become a Software Engineer capable of creating
            impactful AI-powered products that improve people's lives.
          </p>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-[#111426] rounded-3xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500 transition">

            <div className="text-4xl mb-4">🎓</div>

            <h3 className="text-white text-lg md:text-xl font-semibold">
              B.Tech CSE (AI & ML)
            </h3>

            <p className="text-gray-400 mt-2">
              Kalasalingam Academy of Research & Education
            </p>

          </div>

          <div className="bg-[#111426] rounded-3xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500 transition">

            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-white text-lg md:text-xl font-semibold">
              Full Stack
            </h3>

            <p className="text-gray-400 mt-2">
              React • Java • Python • Flask
            </p>

          </div>

          <div className="bg-[#111426] rounded-3xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500 transition">

            <div className="text-4xl mb-4">🧠</div>

            <h3 className="text-white text-lg md:text-xl font-semibold">
              AI & ML
            </h3>

            <p className="text-gray-400 mt-2">
              Intelligent systems & Machine Learning
            </p>

          </div>

          <div className="bg-[#111426] rounded-3xl p-6 md:p-8 border border-purple-500/20 hover:border-purple-500 transition">

            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-white text-lg md:text-xl font-semibold">
              Location
            </h3>

            <p className="text-gray-400 mt-2">
              Madurai, Tamil Nadu
            </p>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

        <div className="bg-[#111426] rounded-3xl p-6 md:p-8 text-center border border-purple-500/20">
          <h3 className="text-5xl font-bold text-purple-400">
            8.69
          </h3>

          <p className="text-gray-400 mt-3">
            CGPA
          </p>
        </div>

        <div className="bg-[#111426] rounded-3xl p-6 md:p-8 text-center border border-purple-500/20">
          <h3 className="text-5xl font-bold text-purple-400">
            10+
          </h3>

          <p className="text-gray-400 mt-3">
            Certifications
          </p>
        </div>

        <div className="bg-[#111426] rounded-3xl p-6 md:p-8 text-center border border-purple-500/20">
          <h3 className="text-5xl font-bold text-purple-400">
            100+
          </h3>

          <p className="text-gray-400 mt-3">
            Problems Solved
          </p>
        </div>

        <div className="bg-[#111426] rounded-3xl p-6 md:p-8 text-center border border-purple-500/20">
          <h3 className="text-5xl font-bold text-purple-400">
            15+
          </h3>

          <p className="text-gray-400 mt-3">
            Technologies
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;