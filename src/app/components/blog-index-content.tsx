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
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-rocknroll mb-12 text-left max-w-2xl">
        <span className="text-accent">Blog</span>
      </h1>
      
      <div className="max-w-2xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-left py-12">
            <p className="text-foreground/60">No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="minimalist-card">
                <div className="space-y-6">
                  <div className="flex items-center text-sm text-foreground/50 space-x-4">
                    <time dateTime={post.date} className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {post.category && (
                      <span className="inline-block text-foreground/50">
                        {post.category}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-rocknroll mb-3 text-accent">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent/80 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-foreground/70 mb-4">
                      {post.description}
                    </p>
                  </div>
                  
                  {post.coverImage && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        onError={handleImageError}
                      />
                    </div>
                  )}
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-muted/20 text-foreground/60 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                  >
                    <span className="font-medium mr-2">Read more</span>
                    <ArrowRight size={16} />
                  </Link>
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