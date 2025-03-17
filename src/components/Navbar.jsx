import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
