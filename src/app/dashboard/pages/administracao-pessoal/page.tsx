
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdministracaoPessoalPage() {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Administração de Pessoal</CardTitle>
                    <CardDescription>Gerencie as informações e processos do pessoal.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Funcionalidades de admissão, demissão, gestão de contratos e dados cadastrais dos colaboradores.</p>
                </CardContent>
            </Card>
        </div>
    );
}
