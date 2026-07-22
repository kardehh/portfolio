import plantImg from "../assets/images/plant-disease.png";
import learningImg from "../assets/images/ai-learning-platform.png";
function Projects() {
  const projects = [
    
    {
      title: "Plant Disease Detection",
      description:
        "AI-powered plant disease prediction using Deep Learning.",
      image: plantImg,
      tech: ["Python", "TensorFlow", "Flask", "CNN"],
    },
    {
    title: "AI Powered Programming Language Learning Platform",
    description:
      "Built a full-stack learning platform with AI-powered code explanation, chatbot assistance, secure authentication, REST APIs and personalized learning recommendations.",
    image: learningImg,
    tech: [
      "React",
      "Flask",
      "Python",
      "MySQL",
      "JavaScript",
    ],
  },
  ];

  return (
    <section id="projects" className="py-28">

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-14">

        <div>

          <p className="text-purple-400 font-semibold">
            ● Projects
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            Featured Projects
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project) => (

          <div
            key={project.title}
            className="bg-[#111426] rounded-3xl overflow-hidden border border-purple-500/20 transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,.25)]"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 md:h-56 object-cover"
            />

            <div className="p-6 md:p-7">

              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-purple-500/10 border border-purple-500/30 text-purple-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex justify-between mt-8">

                <button className="text-purple-400 font-medium hover:text-purple-300 transition">
  Live Demo →
</button>

<button className="text-purple-400 font-medium hover:text-purple-300 transition">
  GitHub →
</button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;