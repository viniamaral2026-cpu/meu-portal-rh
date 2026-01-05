
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog } from 'lucide-react';

export default function SistemaPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Cog />
                        Configurações do Sistema
                    </CardTitle>
                    <CardDescription>Parâmetros gerais, integrações e manutenção do sistema.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Esta área é dedicada a configurações técnicas, como parâmetros de integração, gerenciamento de usuários e permissões, e manutenção da base de dados. A personalização da aparência do sistema foi movida para o menu "Customização".</p>
                </CardContent>
            </Card>
        </div>
    );
}