'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MeuRHLogo } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';

export default function PortalCarreirasPage() {
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Login (Simulação)",
        description: "Em um cenário real, o candidato seria redirecionado para seu painel."
    });
  }

  return (
    <div 
      className="flex min-h-screen items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Card className="w-full max-w-md z-10">
        <CardHeader className="text-center">
          <MeuRHLogo className="w-24 mx-auto mb-4" />
          <CardTitle className="text-2xl">Portal de Carreiras</CardTitle>
          <CardDescription>Acesse sua conta ou cadastre-se para ver nossas oportunidades.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" className="w-full">
              Entrar
            </Button>
            <div className='flex justify-center w-full gap-4'>
                <Button variant="link" size="sm" type="button">
                Esqueceu a senha?
                </Button>
                <Button variant="link" size="sm" type="button">
                Não tem uma conta? Cadastre-se
                </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
