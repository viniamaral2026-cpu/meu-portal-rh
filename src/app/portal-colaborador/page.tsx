'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileText, Calendar, MessageSquare } from 'lucide-react';

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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Olá, {employeeData.name}!</h1>
        <Avatar className="h-14 w-14">
          <AvatarImage src={employeeData.avatarUrl} alt={employeeData.name} />
          <AvatarFallback>{employeeData.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>

      {/* Registro de Ponto */}
      <Card className="shadow-sm">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Registro de Ponto</h2>
          </div>
          <Button size="lg" className="h-12 px-10 text-base">Iniciar Jornada</Button>
        </CardContent>
      </Card>

      {/* Acesso Rápido */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickAccessItems.map(item => (
                <Card key={item.label} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                        <item.icon className="h-8 w-8 text-primary" />
                        <span className="font-medium text-sm">{item.label}</span>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
      
      {/* Últimos Comunicados */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Últimos Comunicados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comunicados.map((com, index) => (
             <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                    <div className='flex items-center gap-2 mb-2'>
                        {com.isNew && <div className='w-2.5 h-2.5 rounded-full bg-primary'/>}
                        <h3 className="font-semibold">{com.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{com.content}</p>
                    <p className="text-xs text-gray-500">{com.date}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}