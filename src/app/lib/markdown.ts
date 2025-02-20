/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { Post, PostMeta } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function ensureDirectoryExists() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }
  } catch (error) {
    console.error('Error ensuring directory exists:', error);
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  ensureDirectoryExists();
  
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const filePath = path.join(postsDirectory, `${realSlug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`Post file not found: ${filePath}`);
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    const result = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeHighlight as any,
            rehypeSlug as any,
          ],
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      meta: {
        ...data,
        slug: realSlug,
      } as PostMeta,
      content: result.content,
    };
  } catch (error) {
    console.error(`Error getting post by slug "${slug}":`, error);
    throw error;
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  ensureDirectoryExists();
  
  try {
    const files = fs.readdirSync(postsDirectory);
    
    const posts = await Promise.all(
      files
        .filter(file => /\.mdx?$/.test(file))
        .map(async (file) => {
          try {
            const { meta } = await getPostBySlug(file);
            return meta;
          } catch (error) {
            console.error(`Error processing file ${file}:`, error);
            return null;
          }
        })
    );
    
    // Remove any null entries and sort by date
    const filteredPosts = posts.filter((post): post is PostMeta => Boolean(post));
    return filteredPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}
