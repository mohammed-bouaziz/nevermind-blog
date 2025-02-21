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
    <div className='mt-24'>
       <div className="container mx-auto px-4 py-8">
        {/* Search and Category Section - Minimalist */}
        <div className="max-w-2xl mx-auto text-left mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Search Input - Minimal, Border Bottom Only */}
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="font-rocknroll bottom-border-input w-full text-foreground"
              />
              <Search className="absolute right-0 top-2.5 text-muted" size={18} />
            </div>

            {/* Category Dropdown - Minimal */}
            <div className="relative w-full md:w-1/3">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bottom-border-input w-full text-left flex items-center justify-between font-rocknroll text-foreground"
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={18} className="text-muted" />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-card border border-muted/20">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-muted/20 font-rocknroll
                        ${selectedCategory === category ? 'text-accent' : 'text-foreground'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Articles List - Minimalist */}
        <div className="max-w-2xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-left text-muted py-12">
              No articles found matching your criteria.
            </div>
          ) : (
            <div className="space-y-12">
              {filteredPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="minimalist-card"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-rocknroll mb-2 text-accent hover:text-accent/80 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-foreground/70 mb-4">
                        {post.description}
                      </p>
                      {post.category && (
                        <span className="inline-block bg-muted/20 text-foreground/60 text-sm py-1">
                          {post.category}
                        </span>
                      )}
                    </div>
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