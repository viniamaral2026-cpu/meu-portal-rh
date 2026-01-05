
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function EsocialPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>eSocial</CardTitle>
                    <CardDescription>Central de gerenciamento e envio de eventos para o eSocial.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Painel para monitoramento de status, validação e transmissão de eventos.</p>
                </CardContent>
            </Card>
        </div>
    );
}
