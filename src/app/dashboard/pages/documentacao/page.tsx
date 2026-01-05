'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Search } from 'lucide-react';

const documentationItems = [
    {
        value: 'item-1',
        title: 'Painel Principal (Início)',
        content: 'O painel principal oferece uma visão geral do sistema, com atalhos e indicadores importantes. Aqui você encontra as principais métricas de RH, como total de colaboradores, e um gráfico de turnover.'
    },
    {
        value: 'item-2',
        title: 'Gestão de Currículos',
        content: 'A seção de currículos permite gerenciar todo o processo de recrutamento. Você pode adicionar novos currículos, buscar por candidatos, filtrar por vagas e acompanhar o status de cada um, desde a triagem até a aprovação.'
    },
    {
        value: 'item-3',
        title: 'Cubo (Análise OLAP)',
        content: 'A ferramenta de Cubo é uma poderosa interface de análise de dados (OLAP). Arraste e solte dimensões (como Setor, Cargo) e métricas (como Média Salarial) para as áreas de Linhas, Colunas e Valores para criar tabelas dinâmicas e extrair insights profundos.'
    },
    {
        value: 'item-4',
        title: 'Compartilhamento e Permissões',
        content: 'Na área de compartilhamento, você pode gerenciar quem tem acesso a quais relatórios e dashboards. É possível compartilhar com usuários específicos ou grupos, definindo permissões de "Visualizar" ou "Editar".'
    },
    {
        value: 'item-5',
        title: 'Atualizações e Suporte',
        content: 'Utilize os ícones no cabeçalho para acessar páginas de suporte. O ícone de globo mostra o status do sistema, o de documento abre esta documentação, e o relógio permite controlar a jornada de trabalho.'
    }
]

export default function DocumentacaoPage() {
  return (
    <div className="flex items-center justify-center h-full bg-muted/40 p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
            <BookOpen className="h-10 w-10" />
          </div>
          <CardTitle className="mt-4 text-2xl">Documentação do Sistema</CardTitle>
          <CardDescription className="text-base">
            Encontre guias e tutoriais sobre como utilizar as funcionalidades do MeuRH.
          </CardDescription>
           <div className="mt-4 flex items-center gap-2 max-w-md mx-auto">
                <input placeholder="Buscar na documentação..." className="w-full p-2 border rounded-md" />
                <button className="p-2 border rounded-md bg-primary text-white">
                    <Search className="h-5 w-5" />
                </button>
            </div>
        </CardHeader>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {documentationItems.map(item => (
                 <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger className="text-lg font-semibold">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground p-4">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
