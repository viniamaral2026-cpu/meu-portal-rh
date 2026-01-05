
'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, LifeBuoy } from 'lucide-react';

const documentationSections = [
    {
        id: 'intro',
        title: 'Introdução ao MeuRH',
        content: `
            <p>Bem-vindo à documentação oficial do <strong>MeuRH - Software de Gestão para Fábricas de Calçados</strong>. Este guia foi projetado para ajudá-lo a navegar e utilizar todas as funcionalidades que o sistema oferece.</p>
            <p class="mt-2">Use o menu lateral para navegar entre os tópicos. Cada seção aborda um módulo específico do sistema, com explicações detalhadas sobre suas funcionalidades e como utilizá-las da melhor forma.</p>
        `
    },
    {
        id: 'dashboard',
        title: 'Dashboard Principal',
        content: `
            <p>O Dashboard Principal é sua porta de entrada para o sistema, oferecendo uma visão geral dos indicadores mais importantes da sua operação.</p>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Cards de Resumo:</strong> Acesso rápido a dados como produção do dia, funcionários ausentes, pedidos pendentes e alertas de estoque.</li>
                <li><strong>Gráficos de Performance:</strong> Análise visual da produção mensal, taxa de absenteísmo e composição do headcount.</li>
            </ul>
        `
    },
    {
        id: 'administracao-pessoal',
        title: 'Administração de Pessoal',
        content: `
            <p>Este módulo centraliza todas as operações relacionadas ao cadastro e gerenciamento de colaboradores.</p>
            <h4 class="font-semibold mt-3">Consulta de Colaboradores</h4>
            <p>Acesse a tela "Consulta de Colaboradores" na barra de abas ou pelo menu de ferramentas para buscar, visualizar, editar e excluir informações de colaboradores. Use os filtros para refinar sua busca por código, nome, CPF ou matrícula.</p>
            <h4 class="font-semibold mt-3">Ações na Tabela</h4>
            <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Selecionar:</strong> Clique em uma linha da tabela para selecionar um colaborador.</li>
                <li><strong>Visualizar/Editar:</strong> Com um colaborador selecionado, use os botões "Visualizar" ou "Alterar" para abrir uma nova aba com os detalhes.</li>
                <li><strong>Excluir:</strong> Remove o colaborador selecionado do sistema. Esta ação requer confirmação.</li>
                <li><strong>Baixar Arquivo:</strong> Exporta os dados da tabela (já filtrados) para um arquivo .csv.</li>
            </ul>
        `
    },
    {
        id: 'folha-pagamento',
        title: 'Folha de Pagamento e Rotinas',
        content: `
            <p>O sistema automatiza e simplifica as rotinas de folha de pagamento e encargos.</p>
            <h4 class="font-semibold mt-3">Folha Mensal</h4>
            <p>Calcule e gerencie a folha de pagamento mensal. Filtre por competência e colaborador, e realize ações como "Calcular Folha", "Exportar PDF" e "Imprimir Holerites".</p>
            <h4 class="font-semibold mt-3">Férias, Rescisão e Encargos</h4>
            <p>Módulos dedicados permitem o controle completo de períodos aquisitivos de férias, cálculo de rescisões e apuração de encargos como INSS e FGTS, com geração das respectivas guias.</p>
            <h4 class="font-semibold mt-3">eSocial</h4>
            <p>Monitore o status dos eventos enviados ao eSocial, filtre por status (sucesso, erro, processando) e envie eventos pendentes em lote.</p>
        `
    },
    {
        id: 'ferramentas-analise',
        title: 'Ferramentas de Análise',
        content: `
            <p>O MeuRH oferece ferramentas poderosas para análise de dados.</p>
            <h4 class="font-semibold mt-3">Cubo (OLAP)</h4>
            <p>Crie tabelas dinâmicas arrastando dimensões (ex: Setor, Cargo) e métricas (ex: Média Salarial) para os eixos de linha, coluna e valores. Uma ferramenta poderosa para análises multidimensionais.</p>
            <h4 class="font-semibold mt-3">Visões de Dados</h4>
            <p>Um construtor de consultas (query builder) que permite criar fontes de dados personalizadas, selecionando tabelas, campos e filtros, que podem ser salvas para uso posterior em relatórios e gráficos.</p>
            <h4 class="font-semibold mt-3">Gerador de Gráficos e Relatórios</h4>
            <p>Crie relatórios e gráficos personalizados a partir das fontes de dados salvas nas "Visões de Dados" ou de tabelas padrão do sistema.</p>
        `
    },
     {
        id: 'configuracoes',
        title: 'Configuração e Customização',
        content: `
            <p>Adapte o sistema às necessidades da sua empresa.</p>
            <h4 class="font-semibold mt-3">Customização (White Label)</h4>
            <p>Acesse o menu "Customização" para personalizar a aparência do sistema. Você pode alterar a cor principal, o logo da empresa e a imagem de fundo da tela de login, além de inserir os dados cadastrais da sua empresa.</p>
            <h4 class="font-semibold mt-3">Configurações Gerais</h4>
            <p>Acesse o menu "Configurações" para ajustes técnicos, como parâmetros de cálculo, regras de negócio, perfis de permissão e configurações de integração.</p>
            <h4 class="font-semibold mt-3">Integrações (RM Conector, SAML, OAuth)</h4>
            <p>No menu "Painéis", você encontrará as ferramentas para gerenciar a integração com sistemas TOTVS RM, configurar Single Sign-On (SSO) com SAML e autorizar aplicativos externos via OAuth.</p>
        `
    },
];

export default function DocumentacaoPage() {
    return (
        <div className="p-4 h-full">
            <Card className="h-full flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <LifeBuoy className="h-8 w-8 text-primary" />
                        Documentação e Ajuda do Sistema
                    </CardTitle>
                    <CardDescription>
                        Encontre guias, tutoriais e respostas para as principais dúvidas sobre o uso do MeuRH.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="h-full pr-4">
                        <Accordion type="single" collapsible defaultValue="intro" className="w-full">
                            {documentationSections.map(section => (
                                <AccordionItem key={section.id} value={section.id}>
                                    <AccordionTrigger className="text-lg hover:no-underline">
                                        {section.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div
                                            className="prose prose-sm dark:prose-invert max-w-none"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    );
}
