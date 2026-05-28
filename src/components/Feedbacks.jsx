import React from "react";

const feedbacks = [
  {
    name: "Jagmohan Sharma",
    role: "CEO",
    company: "A4apple",
    feedback:
      "Aman is a highly skilled developer with a great problem-solving ability. It was a pleasure working with him.",
  },
  {
    name: "Ashok Sharma",
    role: "Project Manager",
    company: "",
    feedback:
      "Very professional and delivers quality work on time. Highly recommended!",
  },
  {
    name: "Sumit Kumar",
    role: "AI Expert",
    company: "",
    feedback:
      "Great experience working with Aman. His technical skills and dedication stand out.",
  },
];

const Feedback = () => {
  return (
    <section className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase text-center mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-12">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-400/30 transition-all"
            >
              <p className="text-gray-300 italic leading-relaxed">"{item.feedback}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">
                    {item.role}{item.company ? ` · ${item.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
