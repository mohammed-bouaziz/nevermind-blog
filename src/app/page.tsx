// app/page.tsx
import { getAllPosts } from './lib/markdown';
import HomePage from './components/homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Your Blog',
  description: 'Explore articles about AI, development, and technology',
};

export default async function Home() {
  const posts = await getAllPosts();
  
  return <HomePage posts={posts} />;
}