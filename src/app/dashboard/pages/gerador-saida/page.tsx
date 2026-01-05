
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GeradorSaidaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gerador de Saídas</CardTitle>
                    <CardDescription>Ferramenta para gerar arquivos de saída para integrações.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Exporte dados para sistemas contábeis, bancários e outros layouts específicos.</p>
                </CardContent>
            </Card>
        </div>
    );
}
