import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Clients() {
  const clientImageIds = ["client-1", "client-2", "client-3", "client-4", "client-5"];
  const clientImages = clientImageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-8 font-headline">Nossos Clientes</h2>
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
          {clientImages.map((image) => (
            image && (
              <Image
                key={image.id}
                src={image.imageUrl}
                alt={image.description}
                width={120}
                height={50}
                className="opacity-60 hover:opacity-100 transition-opacity"
                data-ai-hint={image.imageHint}
              />
            )
          ))}
        </div>
      </div>
    </section>
  );
}
