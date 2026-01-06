'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileText, Calendar, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const employeeData = {
  name: 'Marcos',
  avatarUrl: '/placeholder.svg?text=M',
};

const quickAccessItems = [
    { label: "Meu Último Holerite", icon: FileText },
    { label: "Solicitar Férias", icon: Calendar },
    { label: "Comunicados", icon: MessageSquare },
];

const comunicados = [
    { title: "Novo comunicado", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "15 abr 2024", isNew: true },
    { title: "Novo comunicado", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "3 abr, 2024", isNew: true },
    { title: "Novo comunicado", content: "Lorem ipsum dolor sit amet, consectetur.", date: "22 mar, 2024", isNew: true },
]

export default function PortalColaboradorPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex justify-between items-center -mt-24 -mb-4">
        <h1 className="text-4xl font-bold">Olá, Marcos!</h1>
        <Image width={56} height={56} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Avatar de Marcos" className="rounded-full h-14 w-14" data-ai-hint="man portrait" />
      </div>

      {/* Registro de Ponto */}
      <Card className="shadow-lg rounded-xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Registro de Ponto</h2>
          <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90">Iniciar Jornada</Button>
        </CardContent>
      </Card>

      {/* Acesso Rápido */}
      <div>
        <h2 className="text-xl font-bold mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickAccessItems.map(item => (
                <Card key={item.label} className="shadow-lg rounded-xl hover:shadow-xl transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-4">
                        <item.icon className="h-8 w-8 text-primary" />
                        <span className="font-semibold text-foreground">{item.label}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
      
      {/* Últimos Comunicados */}
      <div>
        <h2 className="text-xl font-bold mb-4">Últimos Comunicados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comunicados.map((com, index) => (
             <Card key={index} className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                    <div className='flex items-center gap-2 mb-2'>
                        {com.isNew && <div className='w-2.5 h-2.5 rounded-full bg-primary'/>}
                        <h3 className="font-semibold">{com.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{com.content}</p>
                    <p className="text-xs text-muted-foreground">{com.date}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
