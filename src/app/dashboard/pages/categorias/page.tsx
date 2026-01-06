'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { PlusCircle, Trash2, Palette, Edit } from 'lucide-react';
import { useState } from 'react';

const initialCategorias = [
  { id: '1', nome: 'Produção', cor: '#3b82f6' },
  { id: '2', nome: 'Vendas', cor: '#10b981' },
  { id: '3', nome: 'RH', cor: '#f97316' },
  { id: '4', nome: 'Financeiro', cor: '#8b5cf6' },
];

export default function CategoriasPage() {
    const [categorias, setCategorias] = useState(initialCategorias);
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('#000000');

    const handleAddCategoria = () => {
        if(nome && cor) {
            const newCategoria = { id: (categorias.length + 1).toString(), nome, cor };
            setCategorias([...categorias, newCategoria]);
            setNome('');
            setCor('#000000');
        }
    };


  return (
    <Card>
      <CardHeader>
        <CardTitle>Categorias para Gráficos e Relatórios</CardTitle>
        <CardDescription>Crie e gerencie categorias para organizar e colorir seus dados.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6 p-4 border rounded-lg">
            <Input 
                placeholder="Nome da nova categoria" 
                className="flex-1"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <div className="relative">
                <Palette className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                    type="color" 
                    className="pl-10" 
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                />
            </div>
            <Button onClick={handleAddCategoria}><PlusCircle className="mr-2 h-4 w-4" /> Adicionar</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cor</TableHead>
              <TableHead>Nome da Categoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categorias.map(categoria => (
              <TableRow key={categoria.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full" style={{ backgroundColor: categoria.cor }} />
                    <span className="font-mono text-xs">{categoria.cor}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{categoria.nome}</TableCell>
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
  );
}
