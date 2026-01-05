import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline animate-fade-in-up">
          Melhore a gestão de pessoas com <span className="text-primary">agilidade</span> e <span className="text-primary">informação.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          O GPway é um Portal de RH, um software completo que utiliza a tecnologia para facilitar a gestão de pessoas. Nosso software auxilia o RH das empresas nas rotinas trabalhistas, tornando-as mais eficientes e produtivas.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#demonstracao">Agende sua demonstração</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
