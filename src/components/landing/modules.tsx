import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BarChart2, Clock } from "lucide-react";

const modules = [
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    title: "Avaliação de desempenho",
    description: "Automatize, gerencie o desempenho dos colaboradores para ganhar mais informações e assertividade na gestão das equipes.",
    imageId: "module-performance",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Ponto",
    description: "Mantenha o histórico de pontos para organização, ajuste os pontos e informação de carga horária.",
    imageId: "module-attendance",
  },
];

export function Modules() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => {
            const image = PlaceHolderImages.find(img => img.id === module.imageId);
            return (
              <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {image && (
                   <div className="relative h-60 w-full">
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
                    <div className="flex items-center gap-4">
                        {module.icon}
                        <CardTitle className="font-headline">{module.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
