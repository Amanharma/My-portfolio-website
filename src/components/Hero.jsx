import React from "react";
import myImage from "../assets/Images/Image1.png";

const RESUME_URL =
  "https://drive.google.com/file/d/16oMS-lLR6vMlvrImVD9ZdJcNS3zHIiOL/view?usp=drivesdk";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 overflow-hidden bg-[#050816] pt-20">
      {/* Glowing background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Side - Text Content */}
      <div className="md:w-1/2 z-10">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          Full-Stack Web Developer
        </p>
        <h1 className="text-5xl font-extrabold md:text-6xl leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aman Sharma
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
          MERN &amp; Next.js specialist &amp; Technical Mentor. I build
          production-grade web apps — frontend, backend, APIs, and deployment,
          end to end.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-7 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
          >
            View My Work
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 text-cyan-400 py-3 px-7 rounded-lg hover:bg-cyan-400/10 transition-all font-bold"
          >
            Get Resume
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center z-10 mb-10 md:mb-0">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-xl opacity-40 scale-110" />
          <img
            src={myImage}
            alt="Aman Sharma"
            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
