
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ConfiguracoesPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Configurações Gerais</CardTitle>
                    <CardDescription>Configure os parâmetros, regras e permissões do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ajuste de tabelas, eventos, usuários e integrações do sistema.</p>
                </CardContent>
            </Card>
        </div>
    );
}
