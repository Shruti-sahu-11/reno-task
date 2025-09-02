import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">SchoolPortal</h2>
          <p className="mt-2 text-sm">
            Connecting schools and students with seamless digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">123 School Street, Bhopal, India</p>
          <p className="text-sm">Email: support@schoolportal.com</p>
          <p className="text-sm mb-3">Phone: +91 98765 43210</p>

          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/uniformapplication" target='_blank' className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/unavailable/" target='_blank' className="hover:text-sky-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/uniformapplication/" target='_blank' className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UCByRFtqYDRxaTx6r7r9TvTQ" target='_blank' className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} SchoolPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;