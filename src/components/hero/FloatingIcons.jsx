import {
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import { SiTensorflow } from "react-icons/si";

function FloatingIcons() {
  return (
    <>
      {/* React */}
      <div className="absolute top-10 right-24 w-16 h-16 rounded-xl bg-[#141625] border border-purple-500/20 flex items-center justify-center shadow-lg">
        <FaReact className="text-cyan-400 text-3xl" />
      </div>

      {/* Java */}
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-xl bg-[#141625] border border-purple-500/20 flex items-center justify-center shadow-lg">
        <FaJava className="text-orange-500 text-3xl" />
      </div>

      {/* Python */}
      <div className="absolute top-36 left-10 w-16 h-16 rounded-xl bg-[#141625] border border-purple-500/20 flex items-center justify-center shadow-lg">
        <FaPython className="text-yellow-400 text-3xl" />
      </div>

      {/* TensorFlow */}
      <div className="absolute bottom-44 left-20 w-16 h-16 rounded-xl bg-[#141625] border border-purple-500/20 flex items-center justify-center shadow-lg">
        <SiTensorflow className="text-orange-400 text-3xl" />
      </div>

      {/* Git */}
      <div className="absolute top-1/2 right-[-20px] w-16 h-16 rounded-xl bg-[#141625] border border-purple-500/20 flex items-center justify-center shadow-lg">
        <FaGitAlt className="text-red-500 text-3xl" />
      </div>
    </>
  );
}

export default FloatingIcons;