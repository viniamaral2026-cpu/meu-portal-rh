'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { PlusCircle, Trash2, Edit } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const canais = [
  { id: '1', nome: 'Notícias de Calçados', url: 'https://exame.com/noticias-sobre/calcados/feed/', categoria: 'Mercado', status: 'Ativo' },
  { id: '2', nome: 'Blog de RH', url: 'https://www.gupy.io/blog/feed', categoria: 'RH', status: 'Ativo' },
  { id: '3', nome: 'Tecnologia Industrial', url: 'http://www.industria40.com.br/feed', categoria: 'Tecnologia', status: 'Pausado' },
  { id: '4', nome: 'Economia - G1', url: 'https://g1.globo.com/economia/rss.xml', categoria: 'Economia', status: 'Ativo' },
];

export default function CanaisRssPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Gerenciador de Canais RSS</CardTitle>
              <CardDescription>Adicione, edite ou remova os feeds de notícias do seu leitor.</CardDescription>
            </div>
            <Button><PlusCircle className="mr-2 h-4 w-4" /> Adicionar Canal</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Input placeholder="Nome do Canal" />
            <Input placeholder="URL do Feed RSS" />
            <Input placeholder="Categoria" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome do Canal</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {canais.map(canal => (
                <TableRow key={canal.id}>
                  <TableCell className="font-medium">{canal.nome}</TableCell>
                  <TableCell className="text-muted-foreground">{canal.url}</TableCell>
                  <TableCell><Badge variant="outline">{canal.categoria}</Badge></TableCell>
                  <TableCell><Badge variant={canal.status === 'Ativo' ? 'default' : 'secondary'}>{canal.status}</Badge></TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
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
