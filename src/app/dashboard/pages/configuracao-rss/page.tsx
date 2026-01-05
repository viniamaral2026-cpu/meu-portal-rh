
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConfiguracaoRssPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Configuração RSS</CardTitle>
                    <CardDescription>Configure os parâmetros do serviço de RSS, como frequência de atualização.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ajustes gerais do serviço de RSS.</p>
                </CardContent>
            </Card>
        </div>
    );
}
