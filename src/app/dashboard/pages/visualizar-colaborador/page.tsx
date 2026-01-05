import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisualizarColaboradorPage({ tab }: { tab: { id: string, title: string } }) {
    // In a real app, you would fetch employee data based on the ID from tab.id
    const employeeId = tab.id.split('-').pop();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Visualizar Colaborador</CardTitle>
                <CardDescription>Detalhes de: {tab.title.replace('Vis. ', '')} (ID: {employeeId})</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Conteúdo da página de visualização do colaborador em breve.</p>
                 {/* TODO: Add employee details here */}
            </CardContent>
        </Card>
    );
}
