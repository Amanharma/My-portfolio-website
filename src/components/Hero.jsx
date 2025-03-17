import React from "react";
import myImage from "../assets/Images/Image1.png";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-b from-blue-900 to-black text-white px-6 md:px-20">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Hi, I'm <span className="text-blue-400">Aman Sharma</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          A passionate Web Developer, AI & Blockchain Enthusiast 🚀. I build
          modern and secure applications.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            View My Work
          </a>
          <a
            href="#Contact"
            className="border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={myImage}
          alt="Aman Sharma"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
