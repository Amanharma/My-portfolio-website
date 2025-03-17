import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jagmohan Sharma",
      role: "CEO at A4apple",
      feedback:
        "Aman is a highly skilled developer with a great problem-solving ability. It was a pleasure working with him.",
    },
    {
      name: "Ashok Sharma",
      role: "Project Manager",
      feedback:
        "Very professional and delivers quality work on time. Highly recommended!",
    },
    {
      name: "Sumit Kumar",
      role: "AI expert",
      feedback:
        "Great experience working with Aman. His technical skills and dedication stand out.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Feedback</h2>
        <p className="text-gray-300 mb-8">
          Here’s what people have to say about my work and contributions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {feedbacks.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <p className="text-lg italic text-gray-200">"{item.feedback}"</p>
              <div className="mt-4">
                <h4 className="font-semibold text-yellow-400">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
