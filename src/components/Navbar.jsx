import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/918544724304";
const EMAIL = "amnsharma786@gmail.com";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#techstack", label: "Tech" },
  { href: "#projects", label: "Projects" },
];

const ContactModal = ({ onClose }) => createPortal(
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-[#0d1b2a] border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm shadow-2xl relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
      >
        <X size={20} />
      </button>
      <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-1">
        Get In Touch
      </p>
      <h3 className="text-2xl font-bold text-white mb-2">Contact Me</h3>
      <p className="text-gray-400 text-sm mb-7">
        Choose how you'd like to reach out.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <FaWhatsapp size={22} />
          WhatsApp Me
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <FaEnvelope size={20} />
          Send Email
        </a>
      </div>
    </div>
  </div>,
  document.body
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide"
        >
          Aman Sharma
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowContact(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold py-2 px-5 rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold py-2 px-5 rounded-lg text-center"
            onClick={() => { setIsOpen(false); setShowContact(true); }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
