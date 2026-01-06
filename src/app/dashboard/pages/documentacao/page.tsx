'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';

const topics = [
    { 
        value: "item-1",
        title: "Como cadastrar um novo colaborador?",
        content: "Navegue até Administração de Pessoal, clique em 'Novo Colaborador', preencha os dados e salve. O novo colaborador receberá um e-mail para definir sua senha de acesso ao portal."
    },
    { 
        value: "item-2",
        title: "Como gerar a folha de pagamento?",
        content: "Acesse o módulo 'Folha Mensal', selecione a competência (mês/ano) e o tipo de folha (mensal, adiantamento, 13º). Clique em 'Processar Folha' e aguarde a conclusão. Após o processamento, você poderá visualizar os detalhes e exportar os relatórios."
    },
    { 
        value: "item-3",
        title: "Como funciona a integração com o ERP?",
        content: "Vá para 'RM Conector'. Lá, você pode configurar os endpoints do seu ERP (Senior, etc.). A sincronização pode ser agendada para rodar automaticamente ou pode ser disparada manualmente para importar/exportar dados de funcionários e produção."
    },
     { 
        value: "item-4",
        title: "Onde eu configuro a aparência do sistema?",
        content: "Na página de 'Customização' (acessível pelo menu principal), você pode fazer o upload da logo da sua empresa e definir a cor primária que será usada em todo o sistema."
    },
];

export default function DocumentacaoPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-3 h-8 w-8" />
            Central de Ajuda e Documentação
          </CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Encontre respostas para suas perguntas e aprenda a usar todas as funcionalidades do MeuRH.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-background/70" />
                <Input placeholder="Buscar por um tópico..." className="pl-10 bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 border-0" />
            </div>
        </CardContent>
      </Card>
      
      <Accordion type="single" collapsible className="w-full">
        {topics.map(topic => (
            <AccordionItem value={topic.value} key={topic.value}>
                <AccordionTrigger>
                    <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-muted flex items-center justify-center mr-4">
                            <span className="text-primary font-bold text-lg">?</span>
                        </div>
                        <span className="text-left font-semibold text-base">{topic.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[70px] text-base">
                   {topic.content}
                </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
