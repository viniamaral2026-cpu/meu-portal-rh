'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MeuRHLogo } from '@/components/icons';
import { Fingerprint } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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
      // Simulação para o usuário de teste
      if (cpf === 'demo' && pin === 'demo') {
         toast({
          title: 'Login de Demonstração!',
          description: 'Acessando o portal como um colaborador de teste.',
        });
        router.push('/portal-colaborador');
        return;
      }

      if (cpf && pin) {
        toast({
          title: 'Login bem-sucedido!',
          description: 'Redirecionando para o seu painel.',
        });
        router.push('/portal-colaborador');
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
      className="flex min-h-screen items-center justify-center p-4 bg-muted/40"
    >
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <Card className="z-10">
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
              <Button variant="link" size="sm" type="button" onClick={handleFirstAccess} className="text-xs">
                Primeiro acesso ou esqueceu o PIN?
              </Button>
              <Separator />
              <Button variant="outline" className="w-full" type="button">
                  <Fingerprint className="mr-2 h-4 w-4" /> Login Biométrico
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <Card>
           <CardHeader>
                <CardTitle className="text-lg">Credenciais de Teste</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
                 <div>
                    <p className="font-semibold">Usuário Colaborador de Teste:</p>
                    <p>CPF: <code className="bg-muted px-1 rounded">demo</code></p>
                    <p>PIN: <code className="bg-muted px-1 rounded">demo</code></p>
                 </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
