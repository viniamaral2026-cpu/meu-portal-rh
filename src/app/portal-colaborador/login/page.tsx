'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { KeyRound, User, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PortalColaboradorLoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        // Here you would have your authentication logic
        // For now, we'll just navigate to the dashboard
        router.push('/portal-colaborador/dashboard');
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <div className="absolute top-0 left-0 p-4">
        <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="MeuRH Logo" width={32} height={32} />
            <span className="text-lg font-semibold">MeuRH</span>
        </div>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className='mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2'>
                <User className="h-8 w-8 text-primary" />
            </div>
          <CardTitle>Portal do Colaborador</CardTitle>
          <CardDescription>
            Use seu CPF e o PIN enviado por email para acessar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cpf">CPF</Label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="cpf" placeholder="Digite seu CPF" className="pl-10" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pin">PIN</Label>
                 <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="pin" type="password" placeholder="4 a 6 dígitos" className="pl-10" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={handleLogin}>
            <LogIn className="mr-2 h-4 w-4" /> Entrar
          </Button>
          <div className="text-center text-sm">
            <a href="#" className="underline">
              Problemas com o primeiro acesso?
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
