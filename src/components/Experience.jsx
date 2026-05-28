import React from "react";

const experiences = [
  {
    company: "ASTRAFASH",
    role: "Founder & CTO",
    duration: "Feb 2026 – Present",
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
    points: [
      "Architecting and building the company's e-commerce web platform using Next.js, Node.js, and PostgreSQL.",
      "Designing full-stack web dashboards and REST APIs, owning both frontend and backend implementation.",
      "Leading all web development decisions across UI, server logic, database design, and deployment.",
    ],
  },
  {
    company: "Caviar Technologies Pvt. Ltd.",
    role: "Full-Stack Web Developer",
    duration: "Nov 2025 – Feb 2026",
    color: "from-blue-500 to-purple-600",
    glow: "rgba(99,102,241,0.3)",
    points: [
      "Built and maintained full-stack web features and automated deployment pipelines for production applications.",
      "Developed backend services and optimized application performance for real-world web workloads.",
    ],
  },
  {
    company: "Roinent Solutions",
    role: "Web Development Coordination Intern",
    duration: "Jun 2025 – Aug 2025",
    color: "from-purple-500 to-pink-600",
    glow: "rgba(168,85,247,0.3)",
    points: [
      "Coordinated web application development sprints across cross-functional engineering teams.",
      "Supported delivery of web features, timelines, and communication between technical and business stakeholders.",
    ],
  },
  {
    company: "Himalayan Yogi, Himachal Pradesh",
    role: "Co-Founder & Web Lead",
    duration: "2019 – 2022",
    color: "from-green-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    points: [
      "Built and maintained the platform's website and web application, growing the user base to 10,000+.",
      "Led a small web development team and shipped features that improved user retention by 40%.",
    ],
  },
  {
    company: "a4apple",
    role: "Web Developer",
    duration: "2017 – 2018",
    color: "from-orange-500 to-red-600",
    glow: "rgba(249,115,22,0.3)",
    points: [
      "Built and deployed the company website using HTML, CSS, and JavaScript with a PHP/MySQL backend.",
      "Handled end-to-end web development from layout and styling to backend integration.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase text-center mb-2">
          What I've Done
        </p>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2">
                  <div
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group"
                    style={{
                      boxShadow: `0 0 0 rgba(0,0,0,0)`,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = `0 0 30px ${exp.glow}`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)
                    }
                  >
                    <div className="flex items-start gap-4">
                      {/* Gradient dot */}
                      <div
                        className={`mt-1 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 shadow-lg`}
                      />
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <p
                          className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                        >
                          {exp.company}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 mb-3">
                          {exp.duration}
                        </p>
                        <ul className="space-y-2">
                          {exp.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-sm leading-relaxed flex gap-2"
                            >
                              <span className="text-cyan-500 mt-1 flex-shrink-0">▸</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot on timeline */}
                <div className="hidden md:flex w-0 items-center justify-center relative">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-[0_0_10px_rgba(6,182,212,0.5)] absolute left-1/2 -translate-x-1/2 z-10`}
                  />
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
