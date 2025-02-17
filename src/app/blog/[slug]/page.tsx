import BlogPost from "../../components/blog_post";
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const isValidSlug = ['getting-started-with-nextjs'].includes(params.slug);
  if (!isValidSlug) {
    notFound();
  }
  return <BlogPost slug={params.slug} />;
  }