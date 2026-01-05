
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function IniciarServicoRssPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Serviço RSS</CardTitle>
                    <CardDescription>Inicie, pare e monitore o serviço de atualização dos feeds RSS.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Painel de controle para o serviço de RSS.</p>
                </CardContent>
            </Card>
        </div>
    );
}
