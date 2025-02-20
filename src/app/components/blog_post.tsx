/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';
import { Post } from '../types/blog';


const DEFAULT_COVER_IMAGE = '/placeholder-cover.jpg';

const BlogPost = ({ post }: { post: Post }) => {
  const { title, description, date, coverImage, readTime, category, tags } = post.meta;
  
  const imageUrl = coverImage || DEFAULT_COVER_IMAGE;

  return (
    <article className="min-h-screen">
      {/* Hero Section with Cover Image */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          onError={(e) => {
            const imgElement = e.currentTarget as HTMLImageElement;
            imgElement.src = DEFAULT_COVER_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="font-rocknroll text-4xl md:text-5xl mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {description}
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
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-12 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;