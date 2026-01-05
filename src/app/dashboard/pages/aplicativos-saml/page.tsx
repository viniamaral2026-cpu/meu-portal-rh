
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AplicativosSamlPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Aplicativos SAML</CardTitle>
                    <CardDescription>Gerencie a integração e o Single Sign-On (SSO) com aplicativos SAML.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Configure provedores de identidade e serviços para autenticação unificada.</p>
                </CardContent>
            </Card>
        </div>
    );
}
