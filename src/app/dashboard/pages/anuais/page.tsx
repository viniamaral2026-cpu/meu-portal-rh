
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnuaisPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Obrigações Anuais</CardTitle>
                    <CardDescription>Gerencie as obrigações anuais como 13º salário, DIRF e RAIS.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Controle e geração de relatórios para as principais obrigações anuais.</p>
                </CardContent>
            </Card>
        </div>
    );
}
