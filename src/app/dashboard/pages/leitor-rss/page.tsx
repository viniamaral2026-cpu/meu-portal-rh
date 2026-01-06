'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Rss, BookMarked, Eye } from 'lucide-react';
import { useState } from 'react';

const articles = [
    { id: 1, feed: 'Notícias de Calçados', title: 'Exportações de calçados crescem 15% no primeiro semestre', snippet: 'O setor calçadista brasileiro comemora os resultados positivos...', read: false },
    { id: 2, feed: 'Blog de RH', title: '5 tendências para gestão de pessoas em 2024', snippet: 'A tecnologia e o bem-estar dos colaboradores são os pilares para...', read: false },
    { id: 3, feed: 'Notícias de Calçados', title: 'Nova feira de componentes para calçados será em Novembro', snippet: 'O evento reunirá os principais fornecedores de matéria-prima e...', read: true },
    { id: 4, feed: 'Economia - G1', title: 'Dólar fecha em alta e impacta custos de importação', snippet: 'A moeda americana subiu 0.8% nesta terça-feira, o que pode afetar...', read: false },
    { id: 5, feed: 'Blog de RH', title: 'Como implementar uma cultura de feedback contínuo', snippet: 'Esqueça as avaliações anuais. O feedback contínuo é a chave para...', read: true },
];

export default function LeitorRssPage() {
    const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <div className="h-full flex flex-col">
        <CardHeader>
            <CardTitle className="flex items-center"><Rss className="mr-2"/> Leitor de Notícias RSS</CardTitle>
            <CardDescription>Mantenha-se atualizado com as últimas notícias do mercado e de RH.</CardDescription>
        </CardHeader>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden">
            <div className="md:col-span-1 bg-card flex flex-col">
                <div className="p-4 border-b">
                    <h3 className="font-semibold">Caixa de Entrada ({articles.filter(a => !a.read).length} não lidos)</h3>
                </div>
                <ScrollArea className="flex-1">
                    {articles.map((article, index) => (
                        <div key={article.id}>
                            <button className={`w-full text-left p-4 ${selectedArticle.id === article.id ? 'bg-accent' : ''} ${!article.read ? 'font-bold' : ''}`} onClick={() => setSelectedArticle(article)}>
                                <p className="text-sm text-primary">{article.feed}</p>
                                <p className="truncate">{article.title}</p>
                                <p className="text-xs text-muted-foreground truncate">{article.snippet}</p>
                            </button>
                            {index < articles.length - 1 && <Separator />}
                        </div>
                    ))}
                </ScrollArea>
            </div>
            <div className="md:col-span-2 bg-card flex flex-col">
                {selectedArticle ? (
                    <>
                        <div className="p-4 border-b">
                            <p className="text-sm text-primary">{selectedArticle.feed}</p>
                            <h2 className="text-2xl font-bold mt-1">{selectedArticle.title}</h2>
                        </div>
                        <ScrollArea className="flex-1">
                            <div className="p-6 space-y-4">
                               <p className="text-lg">
                                    {selectedArticle.snippet} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                               </p>
                               <p>
                                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                               </p>
                            </div>
                        </ScrollArea>
                         <div className="p-4 border-t flex justify-end gap-2">
                            <button className="flex items-center text-sm gap-2"><BookMarked className="h-4 w-4"/> Marcar como lido</button>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-muted-foreground">Selecione um artigo para ler.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
