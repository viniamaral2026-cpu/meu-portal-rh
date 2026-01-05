'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function DemoForm() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Demonstração Agendada!",
            description: "Obrigado! Nossa equipe entrará em contato em breve.",
        });
        (e.target as HTMLFormElement).reset();
    }

  return (
    <section id="demonstracao" className="py-20 bg-secondary">
      <div className="container max-w-3xl mx-auto">
        <Card className="shadow-2xl">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-headline">Transforme o desempenho da sua gestão de RH agora mesmo.</CardTitle>
                <CardDescription>O primeiro passo para melhorar é conhecer. Agende uma demonstração e teste gratuitamente.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input id="name" placeholder="Seu nome completo" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Corporativo</Label>
                            <Input id="email" type="email" placeholder="seu.email@empresa.com" required />
                        </div>
                    </div>
                     <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="company">Empresa</Label>
                            <Input id="company" placeholder="Nome da sua empresa" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Agende sua demonstração</Button>
                </form>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
