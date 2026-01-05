
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PortalLogin() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/portal-colaborador');
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://matoleitao.rs.gov.br/wp-content/uploads/2021/04/beira-1-scaled-750x450.jpg')]">
      <div className="absolute inset-0 bg-black/50"></div>
      <Card className="w-full max-w-sm z-10">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-2">
                <Building className="h-10 w-10 text-primary" />
            </div>
          <CardTitle className="text-2xl">Portal do Colaborador</CardTitle>
          <CardDescription>Acesse seu perfil e informações.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="Digite seu CPF" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <Button className="w-full">Entrar</Button>
            <div className="text-center text-sm mt-4">
                <Link href="#" className="underline">
                    Esqueceu sua senha?
                </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
