
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FontesComunicacaoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Fontes de Comunicação</CardTitle>
                    <CardDescription>Gerencie as fontes de dados para comunicação e integração.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Configure as origens de dados para as integrações.</p>
                </CardContent>
            </Card>
        </div>
    );
}
