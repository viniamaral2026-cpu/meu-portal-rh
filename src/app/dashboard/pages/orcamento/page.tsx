import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function OrcamentoPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Orçamento (beta)</CardTitle>
                <CardDescription>Planejamento e controle orçamentário de pessoal.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de Orçamento em breve.</p>
            </CardContent>
        </Card>
    );
}
