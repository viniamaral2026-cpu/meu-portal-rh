'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Paperclip } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AtestadosPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Atestado Enviado!",
            description: "Seu atestado foi enviado para análise do RH.",
        })
    }
    
    return (
        <div className="space-y-6">
             <h1 className="text-3xl font-bold">Envio de Atestados</h1>
             <Card>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Enviar Novo Atestado</CardTitle>
                        <CardDescription>Anexe a foto ou o arquivo PDF do seu atestado médico. Ele será enviado ao RH para validação.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="atestado-file">Arquivo do Atestado</Label>
                            <Input id="atestado-file" type="file" required />
                            <p className="text-xs text-muted-foreground">Formatos aceitos: PDF, JPG, PNG.</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit">
                            <Upload className="mr-2 h-4 w-4" />
                            Enviar Atestado
                        </Button>
                    </CardFooter>
                </form>
             </Card>

              <Card>
                <CardHeader>
                    <CardTitle>Histórico de Envios</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-3">
                     <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Paperclip className="h-4 w-4 text-muted-foreground" />
                            <p className='font-medium'>Atestado_20-05-2024.pdf</p>
                        </div>
                        <Badge variant="default">Aprovado</Badge>
                     </div>
                     <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Paperclip className="h-4 w-4 text-muted-foreground" />
                            <p className='font-medium'>IMG_20240310.jpg</p>
                        </div>
                        <Badge variant="destructive">Rejeitado</Badge>
                     </div>
                 </CardContent>
             </Card>

        </div>
    )
}
