
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, PlusCircle, Upload, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const curriculosData = [
    { id: 1, nome: 'Mariana Oliveira', vaga: 'Desenvolvedor Frontend Pleno', status: 'Em Análise', score: 85 },
    { id: 2, nome: 'Rafael Martins', vaga: 'Analista de Dados Jr', status: 'Aprovado', score: 92 },
    { id: 3, nome: 'Juliana Pereira', vaga: 'UX/UI Designer', status: 'Rejeitado', score: 70 },
    { id: 4, nome: 'Fernando Costa', vaga: 'Desenvolvedor Frontend Pleno', status: 'Entrevista Agendada', score: 88 },
];

const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Aprovado':
        return 'default';
      case 'Rejeitado':
        return 'destructive';
      case 'Em Análise':
        return 'secondary';
      default:
        return 'outline';
    }
  };

export default function GestaoCurriculosPage() {
    const [curriculos, setCurriculos] = useState(curriculosData);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Gestão de Currículos</CardTitle>
            <CardDescription>Gerencie e avalie os currículos recebidos.</CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Adicionar Currículo
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Novo Currículo</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <Input placeholder="Nome do Candidato"/>
                    <Input placeholder="Vaga Aplicada"/>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground">Arraste e solte ou clique para enviar</p>
                            </div>
                            <Input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <Button className="w-full">Salvar</Button>
                </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center pb-4">
            <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome ou vaga..." className="pl-8" />
            </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Vaga</TableHead>
              <TableHead>Score IA</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {curriculos.map(c => (
                <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.nome}</TableCell>
                    <TableCell>{c.vaga}</TableCell>
                    <TableCell>{c.score}%</TableCell>
                    <TableCell><Badge variant={getStatusVariant(c.status)}>{c.status}</Badge></TableCell>
                    <TableCell className="text-right space-x-2">
                        <Button variant="ghost" size="icon"><Eye className="h-4 w-4"/></Button>
                        <Button variant="ghost" size="icon"><ThumbsUp className="h-4 w-4"/></Button>
                        <Button variant="ghost" size="icon"><ThumbsDown className="h-4 w-4"/></Button>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
