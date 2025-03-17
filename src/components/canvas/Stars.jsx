import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aman Sharma. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            GitHub
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-yellow-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
