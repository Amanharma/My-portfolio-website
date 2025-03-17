import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaEthereum,
} from "react-icons/fa";
import {
  SiDjango,
  SiTensorflow,
  SiSolidity,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  { name: "Django", icon: <SiDjango size={40} className="text-green-600" /> },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={40} className="text-orange-500" />,
  },
  {
    name: "Solidity",
    icon: <SiSolidity size={40} className="text-gray-400" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={40} className="text-green-400" />,
  },
  { name: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
  {
    name: "Ethereum",
    icon: <FaEthereum size={40} className="text-purple-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} className="text-blue-700" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-16 bg-gray-900 text-white px-6 md:px-20"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-400 text-center">
          Tech Stack
        </h2>

        {/* Tech Stack Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              {tech.icon}
              <p className="mt-3 text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
