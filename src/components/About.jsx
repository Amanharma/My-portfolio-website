import React from "react";
import myImage from "../assets/Images/Image2.png";

const RESUME_URL =
  "https://drive.google.com/file/d/1RTbG4YblDqMOrF3iNKY_7J9UH-WdHvqI/view?usp=drivesdk";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Django", "Flask", "REST API"],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "AWS", "Linux", "Figma", "Jira"],
  },
  {
    label: "AI Engineering",
    skills: ["Claude Code", "GitHub Copilot", "Prompt Engineering"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side - Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 blur-lg opacity-30 scale-105" />
            <img
              src={myImage}
              alt="Aman Sharma"
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-xl shadow-lg object-cover border border-white/10"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-5 text-gray-300 leading-relaxed text-lg">
            I'm a full-stack web developer with hands-on experience building and deploying
            production web applications using <span className="text-cyan-400 font-medium">React</span>,{" "}
            <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
            <span className="text-cyan-400 font-medium">Node.js</span>, Express, and SQL/NoSQL
            databases. I'm comfortable owning frontend, backend, REST APIs, and deployment end to end.
          </p>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Currently serving as <span className="text-white font-medium">Founder &amp; CTO at ASTRAFASH</span>,
            architecting a smart-garment e-commerce platform. Experienced in mentoring junior
            developers and explaining complex web concepts clearly.
          </p>

          {/* Skills */}
          <div className="mt-8 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-white/10 text-gray-200 text-sm px-3 py-1 rounded-full hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-7 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View Resume
            </a>
            <a
              href="#Contact"
              className="border border-white/30 text-white py-3 px-7 rounded-lg hover:bg-white/10 transition-all"
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
