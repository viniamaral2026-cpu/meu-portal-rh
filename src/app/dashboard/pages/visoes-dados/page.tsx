
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisoesDadosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Visões de Dados</CardTitle>
                    <CardDescription>Crie e gerencie visões de dados personalizadas para consultas rápidas.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Monte suas próprias tabelas e consultas para acessar as informações que mais importam.</p>
                </CardContent>
            </Card>
        </div>
    );
}
