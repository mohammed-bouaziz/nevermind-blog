/* eslint-disable @typescript-eslint/no-explicit-any */
// types/blog.ts
import { ReactNode } from 'react';

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  slug: string;
  coverImage?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  [key: string]: any; // For any additional frontmatter fields
}

export interface Post {
  meta: PostMeta;
  content: ReactNode;
}