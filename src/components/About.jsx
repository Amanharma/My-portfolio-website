import React from "react";
import myImage from "../assets/Images/Image2.png";
import myResume from "../assets/Images/Aman_Sharma_Resume_Updated.pdf";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={myImage}
            alt="Aman Sharma"
            className="w-60 h-60 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I'm Aman Sharma, a passionate **Web Developer** & **Blockchain
            Enthusiast**. I love building modern, scalable, and secure web
            applications. My expertise lies in **React, Solidity, TensorFlow
            Federated**, and backend technologies.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Currently, I’m working on a project that integrates **Federated
            Learning with Blockchain**, aiming to revolutionize decentralized
            AI. 🚀
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-300">Skills:</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                React.js
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Solidity
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                TensorFlow
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Django
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Spring Boot
              </span>
            </div>
          </div>

          {/* Resume & Contact Buttons */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href={myResume}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
              download
            >
              Download Resume
            </a>
            <a
              href="#Contact"
              className="border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
