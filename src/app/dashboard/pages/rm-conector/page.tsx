
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RmConectorPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>RM Conector</CardTitle>
                    <CardDescription>Gerencie a conexão e sincronização de dados com o ERP TOTVS RM.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Painel de status da integração, logs e configurações do conector.</p>
                </CardContent>
            </Card>
        </div>
    );
}
