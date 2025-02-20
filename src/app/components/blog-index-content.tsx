"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { PostMeta } from '../types/blog';

const DEFAULT_COVER_IMAGE = '/placeholder-cover.jpg';

interface BlogIndexContentProps {
  posts: PostMeta[];
}

const BlogIndexContent = ({ posts }: BlogIndexContentProps) => {
  // Function to handle image error inside client component
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imgElement = e.currentTarget;
    imgElement.src = DEFAULT_COVER_IMAGE;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-rocknroll mb-8 text-center">Blog</h1>
      
      <div className="max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3 relative h-56 md:h-auto">
                    <Image
                      src={post.coverImage || DEFAULT_COVER_IMAGE}
                      alt={post.title}
                      fill
                      className="object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 md:flex-1 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.category && (
                          <>
                            <span className="mx-2">•</span>
                            <span>{post.category}</span>
                          </>
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-rocknroll mb-3">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-4">
                        {post.description}
                      </p>
                      
                      {post.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-600"
                    >
                      <span className="font-medium mr-2">Read more</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogIndexContent;