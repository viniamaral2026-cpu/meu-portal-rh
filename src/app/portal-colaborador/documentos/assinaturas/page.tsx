'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { FileSignature, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const documentosPendentes = [
    { id: 'doc1', nome: 'Aditivo Contratual - Banco de Horas 2024', dataEnvio: '15/07/2024' },
    { id: 'doc2', nome: 'Termo de Uso de Equipamentos', dataEnvio: '12/07/2024' },
];

export default function AssinaturasPage() {
    const { toast } = useToast();

    const handleSign = (docName: string) => {
        toast({
            title: "Redirecionando para o gov.br",
            description: `Você será redirecionado para assinar o documento: ${docName}. (Simulação)`,
        });
    };

    return (
        <div className="space-y-6">
             <h1 className="text-3xl font-bold">Assinaturas Pendentes</h1>
             <Card>
                <CardHeader>
                    <CardTitle>Documentos Aguardando sua Assinatura</CardTitle>
                    <CardDescription>
                        A assinatura é feita de forma digital e segura através da sua conta gov.br, garantindo validade jurídica.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {documentosPendentes.map(doc => (
                        <Card key={doc.id} className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <FileSignature className="h-8 w-8 text-primary flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">{doc.nome}</p>
                                    <p className="text-sm text-muted-foreground">Recebido em: {doc.dataEnvio}</p>
                                </div>
                            </div>
                            <Button className="w-full md:w-auto" onClick={() => handleSign(doc.nome)}>
                                <Image src="https://www.gov.br/assets/images/assinador-logo.png" alt="Logo Gov.br" width={24} height={24} className="mr-2" />
                                Assinar com gov.br
                            </Button>
                        </Card>
                    ))}
                </CardContent>
                <CardFooter>
                    <div className="p-4 border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg flex items-center gap-3 text-yellow-700 dark:text-yellow-300 text-sm">
                        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                        <p>
                           Ao clicar em "Assinar", você será redirecionado para o ambiente seguro do Assinador ITI do governo federal.
                        </p>
                    </div>
                </CardFooter>
             </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Documentos Assinados</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-3">
                     <div className="p-4 border rounded-lg flex items-center justify-between opacity-70">
                        <div className="flex items-center gap-3">
                            <FileSignature className="h-5 w-5 text-muted-foreground" />
                            <div>
                               <p className='font-medium'>Contrato de Trabalho</p>
                               <p className='text-xs text-muted-foreground'>Assinado em: 15/01/2023</p>
                            </div>
                        </div>
                        <Badge variant="default">Concluído</Badge>
                     </div>
                 </CardContent>
             </Card>

        </div>
    )
}
