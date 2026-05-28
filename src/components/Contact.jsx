import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/918544724304";
const EMAIL = "amnsharma786@gmail.com";

const Contact = () => {
  return (
    <section className="py-20 bg-[#050816] text-white px-6 md:px-20 relative overflow-hidden" id="Contact">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10 text-center">
        <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-12">
          Open to collaboration, projects, and opportunities. Reach out directly via WhatsApp or Email.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] text-lg"
          >
            <FaWhatsapp size={24} />
            WhatsApp Me
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] text-lg"
          >
            <FaEnvelope size={22} />
            Send Email
          </a>
        </div>

        <p className="mt-8 text-gray-600 text-sm">+91-8544724304 · amnsharma786@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
