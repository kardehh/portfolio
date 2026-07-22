import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-sky-400" /> },
    { name: "Java", icon: <FaJava size={45} className="text-orange-400" /> },
    { name: "Python", icon: <FaPython size={45} className="text-yellow-300" /> },
    { name: "Flask", icon: <SiFlask size={45} className="text-white" /> },
    { name: "MySQL", icon: <SiMysql size={45} className="text-blue-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={45} className="text-orange-500" /> },
    { name: "Pandas", icon: <SiPandas size={45} className="text-purple-400" /> },
    { name: "NumPy", icon: <SiNumpy size={45} className="text-blue-300" /> },
    { name: "Git", icon: <FaGitAlt size={45} className="text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-28">

      <p className="text-purple-400 font-semibold mb-3">
        ● Skills
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
  Technologies I Work With
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8 mt-12">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#111426] rounded-3xl p-5 md:p-8 border border-purple-500/20 flex flex-col items-center transition-all duration-300 hover:border-purple-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
          >

            {skill.icon}

            <h3 className="mt-5 text-lg font-semibold">
              {skill.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;