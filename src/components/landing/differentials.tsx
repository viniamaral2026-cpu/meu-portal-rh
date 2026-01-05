import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartHandshake, Puzzle, Rocket, Wand2 } from "lucide-react";
import React from "react";

const differentialsList = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    title: "Suporte humanizado",
    description: "Oferecemos suporte técnico para garantir que você possa tirar o máximo proveito de nosso software.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: "Integração",
    description: "Integramos com plataforma Senior e todos que utilizam extensões Java, REST e SOAP, para que você possa transitar dados.",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "Personalização",
    description: "Personalize e solicite novas funcionalidades de acordo com as suas necessidades.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Fácil e intuitivo",
    description: "É intuitivo e fácil de aprender, mesmo para usuários sem experiência em tecnologia.",
  },
];

export function Differentials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase">Diferenciais</span>
            <h2 className="text-3xl font-bold mt-2 font-headline">Por que escolher o software GPWay?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentialsList.map((item, index) => (
                <Card key={index} className="text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            {item.icon}
                        </div>
                        <CardTitle className="font-headline">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
