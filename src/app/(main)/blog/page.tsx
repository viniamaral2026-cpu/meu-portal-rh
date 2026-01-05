import { getBlogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | GPWay Portal',
  description: 'Leia nossos últimos artigos sobre gestão de RH, liderança e tecnologia.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline">Nosso Blog</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Artigos e insights sobre o futuro da gestão de pessoas.
        </p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const image = PlaceHolderImages.find((img) => img.id === post.image_id);
          return (
            <Card key={post.slug} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              {image && (
                <Link href={`/blog/${post.slug}`} className="block relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={image.imageHint}
                  />
                </Link>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-lg">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.summary}</p>
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
    </div>
  );
}
