
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function OrcamentoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Orçamento de Pessoal (beta)</CardTitle>
                    <CardDescription>Planejamento e controle orçamentário da folha de pagamento e pessoal.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ferramentas para simulação de cenários, projeções e acompanhamento de custos.</p>
                </CardContent>
            </Card>
        </div>
    );
}
