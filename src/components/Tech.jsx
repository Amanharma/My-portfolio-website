import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiLinux,
  SiFigma,
  SiGithubcopilot,
} from "react-icons/si";

const techGroups = [
  {
    label: "Frontend",
    color: "text-cyan-400",
    items: [
      { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript size={32} className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-500" /> },
      { name: "React", icon: <FaReact size={32} className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-400" /> },
    ],
  },
  {
    label: "Backend",
    color: "text-purple-400",
    items: [
      { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress size={32} className="text-gray-300" /> },
      { name: "Python", icon: <FaPython size={32} className="text-yellow-300" /> },
      { name: "Django", icon: <SiDjango size={32} className="text-green-600" /> },
      { name: "Flask", icon: <SiFlask size={32} className="text-gray-300" /> },
    ],
  },
  {
    label: "Databases",
    color: "text-green-400",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={32} className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-500" /> },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "text-orange-400",
    items: [
      { name: "Git", icon: <FaGitAlt size={32} className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker size={32} className="text-blue-400" /> },
      { name: "AWS", icon: <FaAws size={32} className="text-yellow-500" /> },
      { name: "Linux", icon: <SiLinux size={32} className="text-gray-300" /> },
      { name: "Figma", icon: <SiFigma size={32} className="text-pink-400" /> },
    ],
  },
  {
    label: "AI Engineering",
    color: "text-pink-400",
    items: [
      { name: "GitHub Copilot", icon: <SiGithubcopilot size={32} className="text-gray-200" /> },
      { name: "Prompt Eng.", icon: <span className="text-2xl">🤖</span> },
      { name: "Claude Code", icon: <span className="text-2xl">⚡</span> },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase text-center mb-2">
          My Arsenal
        </p>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Tech Stack
        </h2>

        <div className="mt-14 space-y-10">
          {techGroups.map((group) => (
            <div key={group.label}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${group.color}`}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex flex-col items-center gap-2 hover:border-cyan-400/40 hover:bg-white/10 transition-all cursor-default group min-w-[90px]"
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <p className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors text-center whitespace-nowrap">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
