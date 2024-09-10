"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // For mobile menu toggle
import { FaTiktok, FaInstagram, FaTwitter, FaSnapchatGhost } from 'react-icons/fa'; // Social icons

import logo from "@/assets/logo.png";

export default function Header() {
  const [language, setLanguage] = useState('English');
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  return (
    <header className="bg-black text-white">
      {/* Upper Row */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image className='w-[150px] md:w-[200px]' src={logo} alt="Logo" width={1000} height={40} />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="h-8 w-8 text-white" />
            ) : (
              <FiMenu className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Social Icons and Language (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="TikTok">
              <FaTiktok className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Snapchat">
              <FaSnapchatGhost className="h-6 w-6" />
            </a>
          </div>

          {/* Log In Button */}
          <button className="yellow-gradient text-white text-[18px] py-3 px-10 rounded-2xl">
            Log in
          </button>

          {/* Language Dropdown */}
          <div className="relative">
            <button className="flex items-center text-white">
              {language} 
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            {/* Language dropdown */}
            <ul className="absolute bg-black text-white mt-2 w-[150px] shadow-lg hidden group-hover:block">
              <li onClick={() => setLanguage('English')} className="px-4 py-2 cursor-pointer hover:bg-gray-700">English</li>
              <li onClick={() => setLanguage('Arabic')} className="px-4 py-2 cursor-pointer hover:bg-gray-700">Arabic</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Row - Navigation */}
      <nav className={`md:border-t md:border-b md:border-gray-700 ${menuOpen ? "block" : "hidden"} md:block`}>
        <div className="container mx-auto md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:justify-between mx-8 space-y-4 md:space-y-0 md:space-x-4">
            {/* Navigation Links */}
            <a href="#" className="hover:text-yellow-400 text-[20px]">Dine with Us</a>
            <a href="#" className="hover:text-yellow-400 text-[20px]">Plan Your Visit</a>
            <a href="#" className="hover:text-yellow-400 text-[20px]">Events</a>
            <a href="#" className="hover:text-yellow-400 text-[20px]">View Groves Map</a>
            <a href="#" className="hover:text-yellow-400 text-[20px]">Our Story</a>
            <a href="#" className="hover:text-yellow-400 text-[20px]">Contact Us</a>
          </div>
        </div>

        {/* Mobile Social Icons and Language (visible on small screens) */}
        <div className={`flex flex-col items-center space-y-4 mt-4 md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <div className="flex space-x-4">
            <a href="#" aria-label="TikTok">
              <FaTiktok className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Snapchat">
              <FaSnapchatGhost className="h-6 w-6" />
            </a>
          </div>

          <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded">
            Log in
          </button>

          <div className="relative">
            <button className="flex items-center text-white">
              {language} 
              <i className="fas fa-chevron-down ml-2"></i>
            </button>
            <ul className="absolute bg-black text-white mt-2 w-[150px] shadow-lg hidden group-hover:block">
              <li onClick={() => setLanguage('English')} className="px-4 py-2 cursor-pointer hover:bg-gray-700">English</li>
              <li onClick={() => setLanguage('Arabic')} className="px-4 py-2 cursor-pointer hover:bg-gray-700">Arabic</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
