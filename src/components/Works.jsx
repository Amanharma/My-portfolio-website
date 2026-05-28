import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ASTRAFASH",
    subtitle: "Smart-Garment E-Commerce Platform",
    description:
      "Full e-commerce web app with product catalog, collections, cart, and IoT health-monitoring dashboard integration.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    demo: "https://astrafash.com",
    github: null,
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.25)",
  },
  {
    title: "Tonzo India",
    subtitle: "E-Commerce & Product Catalog",
    description:
      "Online store for projectors, interactive panels, and hologram displays with cart, order tracking, and admin catalog.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    demo: "https://tonzo.in",
    github: null,
    gradient: "from-purple-500 to-pink-600",
    glow: "rgba(168,85,247,0.25)",
  },
  {
    title: "a4apple",
    subtitle: "Company Website",
    description:
      "Responsive company website with a PHP/MySQL backend, owning layout, styling, and backend integration.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    demo: "https://a4applenews.com",
    github: null,
    gradient: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.25)",
  },
  {
    title: "Ecosathi",
    subtitle: "AI-Powered Complaint Management Platform",
    description:
      "Full-stack AI-powered web platform with intelligent complaint classification, routing, and automated response generation.",
    technologies: ["Next.js", "Node.js", "LLM Integration"],
    demo: "https://ecosathi.vercel.app",
    github: null,
    gradient: "from-green-500 to-teal-600",
    glow: "rgba(16,185,129,0.25)",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase text-center mb-2">
          What I've Built
        </p>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group"
              style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 30px ${project.glow}`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)
              }
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3
                      className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3 mt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full border bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border-white/10`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
