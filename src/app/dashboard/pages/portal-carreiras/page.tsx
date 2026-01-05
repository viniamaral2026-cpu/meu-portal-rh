'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function PortalCarreirasPage() {
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
                <Briefcase className="h-8 w-8 text-primary" />
            </div>
          <CardTitle>Portal de Carreiras</CardTitle>
          <CardDescription>
            Acesse sua conta ou cadastre-se para ver nossas oportunidades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="Sua senha" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Entrar</Button>
          <div className="text-center text-sm">
            Não tem uma conta?{' '}
            <a href="#" className="underline">
              Cadastre-se
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
