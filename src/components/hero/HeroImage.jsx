import profile from "../../assets/images/profile.png";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center w-full">

      {/* Glow */}

      <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-full bg-violet-600/20 blur-[100px] md:blur-[140px]"></div>

      <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full bg-purple-500/10 blur-[60px] md:blur-[90px]"></div>

      <img
        src={profile}
        alt="Karthick"
        className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[520px] max-w-full z-10"

      />

    </div>
  );
}

export default HeroImage;