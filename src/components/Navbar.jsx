import { Moon, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import resume from "../assets/resume/Karthick_M_Resume.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="w-full h-20 md:h-24 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            KM
          </h1>
        </a>

        {/* Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center gap-10 text-gray-300 text-lg">

          <li>
            <a
              href="#home"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-white transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="hover:text-white transition duration-300"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          <button
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition"
          >
            <Moon size={18} />
          </button>

          <a
            href={resume}
            download
            className="hidden md:inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_#8b5cf6]"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>
        <div className="lg:hidden">
  <button onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <X size={30} /> : <Menu size={30} />}
  </button>
</div>
       {menuOpen && (
  <div className="absolute top-24 left-0 w-full bg-[#111426] border-t border-purple-500/20 lg:hidden z-50">

    <ul className="flex flex-col items-center py-6 gap-6 text-lg">

      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>

      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

      <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>

      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      <a
        href={resume}
        download
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500"
      >
        Download CV
      </a>

    </ul>

  </div>
)} 

      </nav>
    </header>
  );
}

export default Navbar;