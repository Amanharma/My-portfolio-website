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
    <section className="py-16 bg-gray-900 text-white" id="Contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Feel free to reach out! I'm open to collaboration, projects, and
          opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center mt-4 text-yellow-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
