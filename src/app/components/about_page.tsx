"use client";

import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="/profile.jpg"  // Replace with your image path
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-rocknroll mb-4">
                Hello, I'm Mohammed
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-rocknroll">
                Computer Scientist & Software Engineer
              </h2>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                I'm passionate about artificial intelligence and its potential to transform how we interact with technology. 
                My approach is hands-on – I believe in learning through experimentation and building real-world applications.
              </p>
              
              <p>
                With a background in [Your Background], I've spent years exploring the intersection of AI and practical applications. 
                My work focuses on making complex AI concepts accessible and useful in everyday scenarios.
              </p>

              <p>
                When I'm not coding or training models, you can find me [Your Interests/Hobbies]. 
                I'm always excited to collaborate on innovative projects and share knowledge with fellow enthusiasts.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-rocknroll text-lg mb-3">
                Current Focus Areas:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Deep Learning & Neural Networks</li>
                <li>Computer Vision Applications</li>
                <li>Natural Language Processing</li>
                <li>AI for Creative Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;