
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlusCircle, MapPin, Users, Building } from 'lucide-react';

const filiais = [
    { id: 1, nome: 'Unidade Matriz', cidade: 'São Paulo', estado: 'SP', colaboradores: 450, tipo: 'Matriz' },
    { id: 2, nome: 'Filial Rio de Janeiro', cidade: 'Rio de Janeiro', estado: 'RJ', colaboradores: 210, tipo: 'Filial' },
    { id: 3, nome: 'Filial Belo Horizonte', cidade: 'Belo Horizonte', estado: 'MG', colaboradores: 150, tipo: 'Filial' },
    { id: 4, nome: 'Centro de Distribuição', cidade: 'Curitiba', estado: 'PR', colaboradores: 85, tipo: 'CD' },
]

export default function FiliaisPage() {
  return (
    <div className="space-y-6">
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-bold">Gerenciamento de Filiais</h1>
                <p className="text-muted-foreground">Adicione, edite e visualize as unidades da sua empresa.</p>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Filial
            </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filiais.map(filial => (
                <Card key={filial.id}>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{filial.nome}</CardTitle>
                            <Building className="h-5 w-5 text-muted-foreground"/>
                        </div>
                        <CardDescription>{filial.tipo}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>{filial.cidade}, {filial.estado}</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground"/>
                            <span>{filial.colaboradores} colaboradores</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-2">Ver Detalhes</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}
