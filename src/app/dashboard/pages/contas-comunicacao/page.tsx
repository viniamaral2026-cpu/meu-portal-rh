
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContasComunicacaoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Contas de Comunicação</CardTitle>
                    <CardDescription>Gerencie as contas e credenciais para as integrações.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Configuração de contas de email, SMS, etc.</p>
                </CardContent>
            </Card>
        </div>
    );
}
