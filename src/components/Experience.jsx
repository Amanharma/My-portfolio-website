import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "A4Apple",
    role: "Full Stack Developer",
    duration: "2019 - Present",
    description:
      "Building scalable web applications using React, Django, and node.js.",
  },
  {
    company: "Unified Mentor",
    role: "Part-time Intern",
    duration: "2024 - Present",
    description:
      "Working on AI-driven mentoring platforms using TensorFlow Federated and Solidity.",
  },
  {
    company: "Radical Minds",
    role: "Customer Care Executive",
    duration: "2022 - 2023",
    description:
      "Handled customer queries and provided technical support, improving client satisfaction.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gray-900 text-white px-6 md:px-20"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-blue-400 text-center">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start gap-4"
            >
              {/* Icon */}
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <Briefcase size={28} />
              </div>

              {/* Experience Details */}
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.role} -{" "}
                  <span className="text-blue-300">{exp.company}</span>
                </h3>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
