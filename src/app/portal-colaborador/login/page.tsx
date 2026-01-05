'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MeuRHLogo } from '@/components/icons';

export default function PortalLogin() {
  const router = useRouter();
  const { toast } = useToast();
  const [cpf, setCpf] = useState('');
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (cpf && pin) {
        toast({
          title: 'Login bem-sucedido!',
          description: 'Redirecionando para o seu painel.',
        });
        // Redirect to the actual portal dashboard
        router.push('/portal-colaborador/dashboard');
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro de login',
          description: 'Por favor, verifique seu CPF e PIN.',
        });
        setIsLoading(false);
      }
    }, 1000);
  };
  
  const handleFirstAccess = () => {
    toast({
        title: "Primeiro Acesso",
        description: "Um email com seu PIN de acesso foi enviado para seu email cadastrado. (Simulação)"
    })
  }

  return (
    <div 
      className="flex min-h-screen items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Card className="w-full max-w-sm z-10">
        <CardHeader className="text-center">
          <MeuRHLogo className="w-24 mx-auto mb-4" />
          <CardTitle className="text-2xl">Portal do Colaborador</CardTitle>
          <CardDescription>Acesse seu painel pessoal.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                required
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pin">PIN ou Senha</Label>
              <Input
                id="pin"
                type="password"
                required
                placeholder='PIN de 6 dígitos ou sua senha'
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
            <div className='flex justify-center w-full gap-4'>
                <Button variant="link" size="sm" type="button" onClick={handleFirstAccess}>
                  Primeiro acesso ou esqueceu o PIN?
                </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
