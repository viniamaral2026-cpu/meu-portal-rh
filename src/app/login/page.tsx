'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de login com múltiplas credenciais
    setTimeout(() => {
      if (email === 'viniamaral2026@gmail.com' && password === 'Ma596220@') {
        toast({
          title: 'Login de Administrador!',
          description: 'Acesso total concedido. Redirecionando para o painel de controle.',
        });
        router.push('/dashboard');
      } else if (email === 'demo2026@minhaempresa.com.br' && password === 'demo2026') {
        toast({
          title: 'Login de Demonstração!',
          description: 'Bem-vindo, usuário Demo Master. Redirecionando para o painel.',
        });
        router.push('/dashboard');
      }
      else {
        toast({
          variant: 'destructive',
          title: 'Erro de login',
          description: 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.',
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-muted/40">
      <div className="flex flex-col gap-6">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Meu Rh</CardTitle>
            <CardDescription>Software de Gestão para Fábricas de Calçados</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@empresa.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Entrando...' : 'Entrar'}
              </Button>
              <Button variant="link" size="sm" className="w-full" type="button">
                Esqueceu a senha?
              </Button>
            </CardFooter>
          </form>
        </Card>
        
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-lg">Credenciais de Teste</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-4">
                 <div>
                    <p className="font-semibold">Usuário Administrador:</p>
                    <p>Email: <code className="bg-muted px-1 rounded">viniamaral2026@gmail.com</code></p>
                    <p>Senha: <code className="bg-muted px-1 rounded">Ma596220@</code></p>
                 </div>
                 <Separator />
                 <div>
                    <p className="font-semibold">Usuário Demo Master:</p>
                    <p>Email: <code className="bg-muted px-1 rounded">demo2026@minhaempresa.com.br</code></p>
                    <p>Senha: <code className="bg-muted px-1 rounded">demo2026</code></p>
                 </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
