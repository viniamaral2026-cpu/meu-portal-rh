'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { File, Printer, FileDown, FileText, Bot, FileX } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const documents = [
  { id: 'doc1', name: 'Descrição de Cargo - Analista de RH.ai', type: 'gemini', size: '12 KB', modified: '26/07/2024 10:30', content: 'Gerado pelo assistente Gemini: Descrição completa para a vaga de Analista de RH Pleno, focada em R&S.' },
  { id: 'doc2', name: 'Contrato Padrão 2024.docx', type: 'word', size: '28 KB', modified: '25/07/2024 15:00', content: 'Este é um modelo de contrato de trabalho padrão...' },
  { id: 'doc3', name: 'Projeção de Custos Q3.xlsx', type: 'excel', size: '45 KB', modified: '24/07/2024 11:00', content: 'Planilha com projeções financeiras para o terceiro trimestre.' },
  { id: 'doc4', name: 'Aviso de Férias Coletivas.docx', type: 'word', size: '18 KB', modified: '22/07/2024 09:00', content: 'Comunicado oficial sobre o período de férias coletivas.' },
];

const getIcon = (type: string) => {
    switch (type) {
        case 'gemini': return <Bot className="h-5 w-5 text-purple-600" />;
        case 'word': return <Image src="https://img.icons8.com/?size=50&id=11571&format=png" width={20} height={20} alt="Word Icon" />;
        case 'excel': return <Image src="https://cdn-icons-png.flaticon.com/512/1/1396.png" width={20} height={20} alt="Excel Icon" />;
        default: return <FileText className="h-5 w-5" />;
    }
}


export default function DocumentosGeradosPage() {
    const [selectedDocument, setSelectedDocument] = useState(documents[0]);
    const { toast } = useToast();
    
    const handlePrint = () => {
        toast({ title: "Imprimindo Documento...", description: "A janela de impressão foi aberta (simulação)." });
    };

    const handleExport = (format: string) => {
        toast({ title: "Exportação Iniciada", description: `O documento está sendo convertido para ${format}. (simulação)` });
    };


  return (
    <div className="p-4 h-full flex gap-4">
        <Card className="w-1/3 flex flex-col">
            <CardHeader>
                <CardTitle>Meus Documentos</CardTitle>
                <CardDescription>Repositório de arquivos criados no sistema.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow overflow-y-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nome</TableHead>
                            <TableHead>Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {documents.map(doc => (
                            <TableRow key={doc.id} onClick={() => setSelectedDocument(doc)} className={`cursor-pointer ${selectedDocument?.id === doc.id ? 'bg-muted' : ''}`}>
                                <TableCell className="font-medium flex items-center gap-2">
                                    {getIcon(doc.type)}
                                    {doc.name}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground">{doc.modified}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card className="w-2/3 flex flex-col">
            {selectedDocument ? (
                <>
                <CardHeader>
                    <div className="flex justify-between items-start">
                         <div className="flex items-center gap-3">
                            {getIcon(selectedDocument.type)}
                            <div>
                                <CardTitle>{selectedDocument.name}</CardTitle>
                                <CardDescription>Tamanho: {selectedDocument.size} | Modificado em: {selectedDocument.modified}</CardDescription>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={handlePrint}><Printer className="mr-2 h-4 w-4" /> Imprimir</Button>
                            <Button onClick={() => handleExport('PDF')}><FileDown className="mr-2 h-4 w-4" /> Exportar como PDF</Button>
                        </div>
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="flex-grow p-6 bg-muted/30">
                    <div className="bg-background p-6 rounded-lg h-full overflow-y-auto">
                        <p className="whitespace-pre-wrap">{selectedDocument.content}</p>
                    </div>
                </CardContent>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <FileX className="h-12 w-12 mb-4" />
                    <h3 className="text-lg font-semibold">Nenhum documento selecionado</h3>
                    <p className="text-sm">Selecione um arquivo da lista para visualizá-lo.</p>
                </div>
            )}
        </Card>

    </div>
  );
}
