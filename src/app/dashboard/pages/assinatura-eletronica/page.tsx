
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AssinaturaEletronicaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Assinatura Eletrônica</CardTitle>
                    <CardDescription>Gerencie e acompanhe documentos enviados para assinatura eletrônica.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Envio de holerites, contratos e outros documentos para assinatura digital.</p>
                </CardContent>
            </Card>
        </div>
    );
}
