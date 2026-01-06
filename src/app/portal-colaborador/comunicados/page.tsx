'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const comunicados = [
    { title: "Feriado Municipal - Aniversário da Cidade", data: "10/07/2024", tag: "Avisos", lido: false, conteudo: "Informamos que na próxima segunda-feira, dia 15/07, não haverá expediente devido ao feriado de aniversário da cidade." },
    { title: "Campanha de Vacinação contra a Gripe", data: "08/07/2024", tag: "Saúde", lido: false, conteudo: "A campanha de vacinação ocorrerá nos dias 20 e 21 de julho no ambulatório da empresa. Agende seu horário." },
    { title: "Atualização na Política de Home Office", data: "01/07/2024", tag: "Políticas", lido: true, conteudo: "A política de home office foi atualizada. Acesse o portal de documentos para conferir a nova versão." },
    { title: "Resultados da Produção de Junho", data: "28/06/2024", tag: "Produção", lido: true, conteudo: "Parabéns a todas as equipes! Atingimos 105% da meta de produção no mês de junho. " },
];

export default function ComunicadosPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Mural de Comunicados</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comunicados.map(com => (
                    <Card key={com.title} className={com.lido ? "opacity-70" : ""}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{com.title}</CardTitle>
                                {!com.lido && <Badge>Novo</Badge>}
                            </div>
                            <CardDescription>{com.data} | <span className='font-semibold'>{com.tag}</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{com.conteudo}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
