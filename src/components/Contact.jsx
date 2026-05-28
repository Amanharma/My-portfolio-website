import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulating form submission
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden" id="Contact">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase text-center mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-10 text-center">
          Open to collaboration, projects, and opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg space-y-5"
        >
          <div>
            <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-cyan-400 text-sm">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
