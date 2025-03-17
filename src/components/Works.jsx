import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "A4apple Website",
    description: "A full-stack news website with full functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/zomato-clone",
    demo: "https://a4applenews.com/",
  },
  {
    title: "Tablet- A Disease Detector AI",
    description:
      "AI-powered disease detection app using machine learning models.",
    technologies: ["TensorFlow", "Django", "React"],
    github: "https://github.com/Amanharma/Tablet",
    demo: "https://disease-detector-demo.com",
  },
  {
    title: "DecentraFL",
    description:
      "A federated learning system with blockchain integration for privacy-preserving AI training.",
    technologies: ["Solidity", "TensorFlow Lite", "Docker", "React"],
    github: "https://github.com/yourusername/decentraFL",
    demo: "https://decentraFL-demo.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
