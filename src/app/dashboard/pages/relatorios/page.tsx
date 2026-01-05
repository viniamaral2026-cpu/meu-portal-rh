
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RelatoriosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Central de Relatórios</CardTitle>
                    <CardDescription>Acesse a biblioteca de relatórios pré-definidos do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Relatórios de folha, férias, encargos, dados cadastrais e muito mais.</p>
                </CardContent>
            </Card>
        </div>
    );
}
