// app/blog/page.tsx
import React from 'react';
import { getAllPosts } from '../lib/markdown';
import { PostMeta } from '../types/blog';
import BlogIndexContent from '../components/blog-index-content';

export const metadata = {
  title: 'Blog | Your Site Name',
  description: 'Explore articles about AI, development, and technology',
};

export default async function BlogIndexPage() {
  let posts: PostMeta[] = [];
  
  try {
    posts = await getAllPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return <BlogIndexContent posts={posts} />;
}