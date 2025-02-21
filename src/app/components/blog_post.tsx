"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';
import { Post } from '../types/blog';

const BlogPost = ({ post }: { post: Post }) => {
  const { title, description, date, readTime, category, tags } = post.meta;

  return (
    <article className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 mb-24">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-foreground/60 hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            <span className="font-rocknroll">Back to Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <h1 className="font-rocknroll text-4xl md:text-5xl text-accent mb-4">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg text-foreground/80 mt-4 mb-6">
              {description}
            </p>
          )}
          
          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-foreground/60 mt-6">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            {readTime && (
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>{readTime}</span>
              </div>
            )}
            {category && (
              <div className="flex items-center">
                <Tag size={18} className="mr-2" />
                <span>{category}</span>
              </div>
            )}
          </div>
        </div>

        {/* Article Content - MDX Rendered Content */}
        <div className="mt-24 prose prose-lg prose-dark max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;