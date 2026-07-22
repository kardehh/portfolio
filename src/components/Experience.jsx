function Experience() {
  const timeline = [
    {
      year: "2026 - Present",
      title: "Graduate Engineer Trainee",
      company: "LTIMindtree",
      description:
        "Selected as Graduate Engineer Trainee. Preparing for enterprise software development with Java, AI and Full Stack technologies.",
    },

    {
      year: "2025",
      title: "AI Powered Programming Language Learning Platform",
      company: "Academic Project",
      description:
        "Developed a full-stack learning platform with AI-powered code explanation, chatbot assistance, authentication and REST APIs.",
    },

    {
      year: "2025",
      title: "Plant Leaf Disease Detection",
      company: "Deep Learning Project",
      description:
        "Built a CNN model capable of detecting 38 plant diseases with multilingual voice assistance using Flask and TensorFlow.",
    },
  ];

  return (
    <section id="experience" className="py-28">

      <p className="text-purple-400 font-semibold mb-3">
        ● Experience
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
        My Journey
      </h2>

      <div className="relative border-l-2 border-purple-500 ml-3 md:ml-6">

        {timeline.map((item, index) => (

          <div
  key={index}
  className="mb-10 md:mb-16 ml-8 md:ml-10 relative bg-[#111426] border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300"
>

            <div className="absolute -left-[38px] md:-left-[49px] top-2 w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full border-4 border-[#070B1A]"></div>

            <span className="text-purple-400 font-semibold">
              {item.year}
            </span>

            <h3 className="text-xl md:text-2xl font-bold mt-2">
              {item.title}
            </h3>

            <p className="text-purple-300 mt-1">
              {item.company}
            </p>

            <p className="text-gray-400 mt-4 leading-7 md:leading-8 text-sm md:text-base">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;