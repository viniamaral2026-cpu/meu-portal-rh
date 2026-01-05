
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CompartilhamentoPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Compartilhamento</CardTitle>
                    <CardDescription>Compartilhe relatórios, visões de dados e outras informações com segurança.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gerencie permissões de acesso e compartilhe informações com outros usuários.</p>
                </CardContent>
            </Card>
        </div>
    );
}
