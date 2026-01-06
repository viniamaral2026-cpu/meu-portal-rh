'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const contratos = [
    { nome: "Contrato de Trabalho Inicial", data: "15/01/2022" },
    { nome: "Aditivo de Alteração de Cargo", data: "01/06/2023" },
    { nome: "Acordo de Banco de Horas", data: "20/01/2022" },
];

export default function ContratosPage() {
    return (
         <div className="space-y-6">
             <h1 className="text-3xl font-bold">Meus Contratos</h1>
             <Card>
                <CardHeader>
                    <CardTitle>Documentos Contratuais</CardTitle>
                    <CardDescription>Acesse seu contrato de trabalho e outros documentos importantes.</CardDescription>
                </CardHeader>
                <CardContent className='space-y-3'>
                     {contratos.map(c => (
                        <Card key={c.nome} className="p-4 flex items-center justify-between bg-muted/50">
                            <div className='flex items-center gap-4'>
                                <FileText className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">{c.nome}</p>
                                    <p className="text-sm text-muted-foreground">Emitido em: {c.data}</p>
                                </div>
                            </div>
                            <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Baixar
                            </Button>
                        </Card>
                    ))}
                </CardContent>
             </Card>
        </div>
    )
}
