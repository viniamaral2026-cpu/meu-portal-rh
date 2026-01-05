
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AplicativosExternosPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Aplicativos Externos (OAuth)</CardTitle>
                    <CardDescription>Gerencie a integração com aplicativos externos via OAuth.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Conecte e autorize o acesso a outros serviços na nuvem.</p>
                </CardContent>
            </Card>
        </div>
    );
}
