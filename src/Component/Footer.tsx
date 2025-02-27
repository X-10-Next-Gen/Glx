// import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ companyName }: { companyName: string }) => {
  return (
    <footer className="bg-black text-cyan-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold">{companyName}</h2>
        
        {/* Navigation Links */}
        <div className="mt-3 flex flex-wrap justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-pink-400 transition">Home</a>
          <a href="#" className="hover:text-pink-400 transition">Shop</a>
          <a href="#" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-4 text-xl">
          <a href="#" className="hover:text-pink-400 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm  hover:text-purple-600">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
