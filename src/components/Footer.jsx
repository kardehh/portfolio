import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-purple-500/20 mt-24">

      <div className="py-10 flex flex-col md:flex-row items-center justify-between">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            KM
          </h2>

          <p className="text-gray-400 mt-2">
            © 2026 Karthick M. All Rights Reserved.
          </p>

        </div>

        {/* Center */}

        <div className="flex gap-6 my-8 md:my-0">

          <a
            href="https://linkedin.com/in/imkarthickm"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="#"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="mailto:imkarthickmuralidharan@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        {/* Right */}

        <p className="text-gray-500">
          Built with React + Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;