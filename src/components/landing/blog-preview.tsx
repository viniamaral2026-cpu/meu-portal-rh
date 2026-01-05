import { summarizeBlogPosts } from '@/ai/flows/summarize-blog-posts';
import { getBlogPosts, type Post } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

async function getSummarizedPosts() {
  const posts = getBlogPosts().slice(0, 3);
  try {
    const result = await summarizeBlogPosts({
      blogPostTitles: posts.map((p) => p.title),
      blogPostContents: posts.map((p) => p.content),
    });

    return posts.map((post, index) => ({
      ...post,
      summary: result.summaries[index] || post.summary,
    }));
  } catch (error) {
    console.error('Failed to summarize blog posts, using fallback summaries.', error);
    return posts;
  }
}

export async function BlogPreview() {
  const summarizedPosts = await getSummarizedPosts();

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-headline">Conteúdos mais lidos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {summarizedPosts.map((post) => {
            const image = PlaceHolderImages.find((img) => img.id === post.image_id);
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{post.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/blog/${post.slug}`}>
                      Leia mais <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blog">Ver todos conteúdos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
