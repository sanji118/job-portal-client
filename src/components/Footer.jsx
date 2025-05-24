import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-bold mb-2">MyCompany</h3>
          <p>
            We provide the best services to our clients. Our mission is to deliver quality and satisfaction. Contact us for more information.
          </p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-bold mb-2">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="hover:text-indigo-400">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-indigo-400">Terms of Service</Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-indigo-400">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
