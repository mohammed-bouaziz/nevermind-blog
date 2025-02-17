"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

// Mock data for development
const post = {
  title: "Getting Started with Next.js",
  description: "Learn how to build modern web applications with Next.js, React, and TypeScript.",
  date: "2024-02-17",
  readTime: "5 min read",
  category: "Development",
  content: `
    This is where your article content will go. You can include:
    - Different sections
    - Code snippets
    - Images
    - And more
  `,
  coverImage: "/placeholder-cover.jpg"
};

const BlogPost = ({ slug }: {slug: string}) => {
  return (
    <article className="min-h-screen">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="font-rocknroll text-4xl md:text-5xl mb-4">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {post.description}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-rocknroll">Back to Articles</span>
        </Link>
      </div>

      {/* Article Metadata */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center">
            <Clock size={18} className="mr-2" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center">
            <Tag size={18} className="mr-2" />
            <span>{post.category}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none">
          {/* Rich text content will go here */}
          <p>
            {post.content}
          </p>

          {/* Example of other content types */}
          <h2>Code Example</h2>
          <pre className="bg-gray-50 p-4 rounded-lg">
            <code>
              {`const HelloWorld = () => {
  return <div>Hello, World!</div>;
};`}
            </code>
          </pre>

          <h2>Key Points</h2>
          <ul>
            <li>Point 1 with detailed explanation</li>
            <li>Point 2 with detailed explanation</li>
            <li>Point 3 with detailed explanation</li>
          </ul>

          <blockquote>
            Important note or quote that deserves attention
          </blockquote>
        </div>

        {/* Tags and Categories */}
        <div className="mt-12 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;