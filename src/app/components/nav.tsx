"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const renderSocialIcons = () => (
    <>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={20} />
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <Image width={150} height={40} src="/logo.png" priority className='object-contain' alt='Logo' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-rocknroll  text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {renderSocialIcons()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-rocknroll block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-2">
              {renderSocialIcons()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;