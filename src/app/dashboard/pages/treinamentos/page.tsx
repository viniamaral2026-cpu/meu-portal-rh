'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Clock } from 'lucide-react';

const treinamentos = [
  {
    title: 'Comunicação Efetiva',
    category: 'Comportamental',
    progress: 100,
    status: 'Concluído',
  },
  {
    title: 'Gestão Ágil com Scrum',
    category: 'Técnico',
    progress: 75,
    status: 'Em Andamento',
  },
  {
    title: 'Liderança Inspiradora',
    category: 'Liderança',
    progress: 0,
    status: 'Não Iniciado',
  },
  {
    title: 'Segurança da Informação',
    category: 'Técnico',
    progress: 100,
    status: 'Concluído',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Concluído':
      return 'bg-green-500';
    case 'Em Andamento':
      return 'bg-blue-500';
    case 'Não Iniciado':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

export default function TreinamentosPage() {
  return (
    <div className="p-4 space-y-4">
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2">
          <GraduationCap /> Meus Treinamentos
        </CardTitle>
        <CardDescription>
          Acompanhe seu progresso e desenvolva novas habilidades.
        </CardDescription>
      </CardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {treinamentos.map(treinamento => (
          <Card key={treinamento.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{treinamento.title}</CardTitle>
                <Badge variant="secondary">{treinamento.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Progresso</p>
                  <Badge className={getStatusBadge(treinamento.status)}>
                    {treinamento.status}
                  </Badge>
                </div>
                <Progress value={treinamento.progress} />
                <p className="text-xs text-muted-foreground mt-1">
                  {treinamento.progress}% completo
                </p>
              </div>
              <Button
                className="w-full"
                disabled={treinamento.status === 'Concluído'}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                {treinamento.status === 'Não Iniciado'
                  ? 'Iniciar Agora'
                  : 'Continuar'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
