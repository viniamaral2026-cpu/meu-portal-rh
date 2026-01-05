import { getBlogPosts, getPostBySlug } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  return {
    title: `${post.title} | GPWay Blog`,
    description: post.summary,
  };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.image_id);

  return (
    <article className="container max-w-3xl mx-auto py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline mb-4">{post.title}</h1>
        {image && (
          <div className="relative h-72 w-full rounded-lg overflow-hidden my-8">
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              priority
              style={{ objectFit: 'cover' }}
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </header>
      <div
        className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-p:text-muted-foreground prose-headings:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
      />
    </article>
  );
}
