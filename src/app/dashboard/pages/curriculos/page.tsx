'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FilePlus, Search, MoreHorizontal, Video } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDashboard } from '../../layout'; // Import the hook

const candidatos = [
  {
    id: 'CAND-001',
    name: 'Maria Oliveira',
    vaga: 'Desenvolvedor Júnior',
    email: 'maria.o@email.com',
    phone: '(11) 98765-4321',
    status: 'Triagem',
    score: 85,
  },
  {
    id: 'CAND-002',
    name: 'João Santos',
    vaga: 'Desenvolvedor Júnior',
    status: 'Entrevista RH',
    score: 92,
    email: 'joao.s@email.com',
    phone: '(21) 91234-5678',
  },
  {
    id: 'CAND-003',
    name: 'Ana Pereira',
    vaga: 'Designer UX/UI',
    status: 'Entrevista Técnica',
    score: 78,
    email: 'ana.p@email.com',
    phone: '(31) 95555-4444',
  },
  {
    id: 'CAND-004',
    name: 'Pedro Costa',
    vaga: 'Desenvolvedor Pleno',
    status: 'Aprovado',
    score: 95,
    email: 'pedro.c@email.com',
    phone: '(41) 98888-7777',
  },
  {
    id: 'CAND-005',
    name: 'Luiza Lima',
    vaga: 'Desenvolvedor Júnior',
    status: 'Rejeitado',
    score: 65,
    email: 'luiza.l@email.com',
    phone: '(51) 97777-8888',
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Aprovado':
      return 'bg-green-500';
    case 'Rejeitado':
      return 'bg-red-500 text-white';
    case 'Entrevista RH':
    case 'Entrevista Técnica':
      return 'bg-blue-500';
    case 'Triagem':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

export default function CurriculosPage() {
  const { openModal } = useDashboard();
  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Banco de Currículos</CardTitle>
              <CardDescription>
                Gerencie os candidatos para as vagas em aberto.
              </CardDescription>
            </div>
            <Button>
              <FilePlus className="mr-2 h-4 w-4" /> Adicionar Currículo
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Input
              placeholder="Buscar por nome, vaga ou status..."
              className="max-w-sm"
            />
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidato</TableHead>
                <TableHead>Vaga</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidatos.map(candidato => (
                <TableRow key={candidato.id}>
                  <TableCell className="font-medium">{candidato.name}</TableCell>
                  <TableCell>{candidato.vaga}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(candidato.status)}>
                      {candidato.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{candidato.score}%</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver Currículo</DropdownMenuItem>
                        <DropdownMenuItem>Mover</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => openModal(candidato)}>
                            <Video className="mr-2 h-4 w-4" />
                            Agendar Entrevista
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
