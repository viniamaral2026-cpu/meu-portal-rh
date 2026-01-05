import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const advantagesList = [
  "Aumente a segurança jurídica e compliance",
  "Consolide a transparência otimizando processos.",
  "Reduza custos através da economia de tempo.",
  "Crie times de sucesso e retenha seus talentos."
];

export function Advantages() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase">Vantagens</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 font-headline">Seus colaboradores e seus resultados vão agradecer</h2>
            <ul className="space-y-4">
              {advantagesList.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-8 bg-background rounded-lg shadow-lg">
            <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">Pronto para transformar sua gestão de RH?</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#demonstracao">Agende sua demonstração</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
