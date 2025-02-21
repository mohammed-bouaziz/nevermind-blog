"use client";

import React from 'react';
import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  const renderSocialIcons = () => (
    <div className="flex items-center space-x-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/60 hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/60 hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/60 hover:text-accent transition-colors"
        aria-label="Twitter"
      >
        <Twitter size={18} />
      </a>
    </div>
  );

  return (
    <footer className="mt-auto bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Date */}
          <div className="text-foreground/60 mb-4 md:mb-0 font-rocknroll">
            {currentDate}
          </div>

          {/* Copyright and Location */}
          <div className="flex items-center space-x-2 text-foreground/60 mb-4 md:mb-0 font-rocknroll">
            <span>© All rights reserved</span>
            <span className="px-2">•</span>
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>Paris</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;