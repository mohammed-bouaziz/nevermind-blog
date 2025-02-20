/* eslint-disable @typescript-eslint/no-unused-vars */
import { getPostBySlug, getAllPosts } from '@/app/lib/markdown';
import BlogPost from '@/app/components/blog_post';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for SEO
export async function generateMetadata(props: Props): Promise<Metadata> {
  try {
    // Properly await params following Next.js 15 pattern
    const { slug } = await props.params;
    
    const post = await getPostBySlug(slug);
    return {
      title: `${post.meta.title} | Your Blog Name`,
      description: post.meta.description,
      openGraph: {
        title: post.meta.title,
        description: post.meta.description,
        images: post.meta.coverImage ? [post.meta.coverImage] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(props: Props) {
  try {
    // Properly await params following Next.js 15 pattern
    const { slug } = await props.params;
    
    const post = await getPostBySlug(slug);
    return <BlogPost post={post} />;
  } catch (error) {
    notFound();
  }
}