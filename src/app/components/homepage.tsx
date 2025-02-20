/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { PostMeta } from '../types/blog';

// We'll get these from the server component
type HomePageProps = {
  posts: PostMeta[];
};

const HomePage = ({ posts = [] }: HomePageProps) => {
  // Extract unique categories from posts
  const allCategories = ['All', ...new Set(posts.map(post => post.category).filter(Boolean) as string[])];
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState<PostMeta[]>(posts);

  // Filter posts when search query or category changes
  useEffect(() => {
    const filtered = posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory, posts]);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-rocknroll text-4xl md:text-5xl text-gray-900 mb-6">
              Random Noise about AI that somehow makes sense
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              I make cool stuff with AI and deep learning, because I learn by playing. 
              If that's how you learn things, this is your playground.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Category Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-48 px-4 py-3 rounded-lg border border-gray-300 bg-white text-left flex items-center justify-between font-rocknroll"
              >
                <span className="text-gray-700">{selectedCategory}</span>
                <ChevronDown size={20} className="text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 font-rocknroll
                        ${selectedCategory === category ? 'text-blue-500' : 'text-gray-700'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              No articles found matching your criteria.
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-rocknroll mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {post.description}
                      </p>
                      {post.category && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-500 hover:text-blue-600 p-2"
                    >
                      <ArrowRight className="text-black" size={24} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;