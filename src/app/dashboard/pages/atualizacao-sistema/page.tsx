
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Phone, ServerCrash } from 'lucide-react';

export default function AtualizacaoSistemaPage() {
    return (
        <div className="p-4">
            <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                    <ServerCrash className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="text-2xl mt-4">Atualizações e Suporte do Sistema</CardTitle>
                    <CardDescription>Informações sobre a versão atual e canais de suporte.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center bg-muted/50 p-6 rounded-lg">
                        <p className="text-lg">Estamos trabalhando constantemente para manter seu sistema seguro, estável e sempre online.</p>
                        <p className="text-muted-foreground mt-2">Versão Atual do Sistema: 2.1.3-beta</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold flex items-center gap-2"><Phone className="h-5 w-5" /> Contato de Suporte</h3>
                            <p className="text-muted-foreground text-sm mt-2">Em caso de erros críticos ou indisponibilidade, entre em contato:</p>
                            <p className="text-xl font-bold mt-1">0800 123 4567</p>
                        </div>
                         <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
                            <h3 className="font-semibold flex items-center gap-2"><Download className="h-5 w-5" /> Atualizações</h3>
                            <p className="text-muted-foreground text-sm mt-2 text-center">Verifique se há uma nova versão disponível para download.</p>
                            <Button className="mt-4">Verificar Atualizações</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
