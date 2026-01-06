
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Rss, Folder, CheckCheck, RefreshCw, ExternalLink, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// --- Mock Data ---

type Article = {
  id: string;
  feedId: string;
  title: string;
  source: string;
  date: string;
  link: string;
  snippet: string;
  content: string;
  isRead: boolean;
};

type Feed = {
  id: string;
  name: string;
  url: string;
};

type Folder = {
  id: string;
  name: string;
  feeds: Feed[];
};

const folders: Folder[] = [
  {
    id: 'folder1',
    name: 'Legislação e eSocial',
    feeds: [
      { id: 'feed1', name: 'Portal eSocial', url: '#' },
      { id: 'feed2', name: 'Diário Oficial da União', url: '#' },
    ],
  },
  {
    id: 'folder2',
    name: 'Notícias de RH',
    feeds: [
      { id: 'feed3', name: 'RH Pra Você', url: '#' },
      { id: 'feed4', name: 'Mundo RH', url: '#' },
    ],
  },
  {
    id: 'folder3',
    name: 'Economia',
    feeds: [
      { id: 'feed5', name: 'Infomoney', url: '#' },
    ]
  }
];

const articles: Article[] = [
  { id: 'art1', feedId: 'feed1', title: 'eSocial: Nova versão S-1.3 entra em produção em setembro', source: 'Portal eSocial', date: '2024-07-15', link: '#', isRead: false, snippet: 'A nova versão do eSocial Simplificado S-1.3 trará mudanças significativas nos leiautes de eventos de SST...', content: '<h3>eSocial: Nova versão S-1.3 entra em produção em setembro</h3><p>A nova versão do eSocial Simplificado S-1.3 trará mudanças significativas nos leiautes de eventos de Segurança e Saúde no Trabalho (SST), com o objetivo de simplificar o envio de informações e melhorar a qualidade dos dados.</p><p>Fique atento aos prazos para adaptação dos sistemas de folha de pagamento.</p>' },
  { id: 'art2', feedId: 'feed1', title: 'Publicada Nota Técnica com ajustes no evento S-2230', source: 'Portal eSocial', date: '2024-07-14', link: '#', isRead: false, snippet: 'Ajustes visam corrigir inconsistências no processamento de afastamentos temporários por motivo de doença...', content: '<h3>Publicada Nota Técnica com ajustes no evento S-2230</h3><p>Ajustes visam corrigir inconsistências no processamento de afastamentos temporários por motivo de doença, principalmente em casos de múltiplos atestados sequenciais.</p>' },
  { id: 'art3', feedId: 'feed3', title: 'As 5 tendências de gestão de pessoas para o segundo semestre', source: 'RH Pra Você', date: '2024-07-15', link: '#', isRead: true, snippet: 'Flexibilidade, bem-estar e uso de IA para recrutamento estão entre as principais apostas para o mercado de RH...', content: '<h3>As 5 tendências de gestão de pessoas para o segundo semestre</h3><p>Flexibilidade, bem-estar e uso de IA para recrutamento estão entre as principais apostas para o mercado de RH. Empresas que não se adaptarem podem perder talentos.', },
  { id: 'art4', feedId: 'feed2', title: 'INSS: Portaria define novo teto para contribuição', source: 'Diário Oficial da União', date: '2024-07-12', link: '#', isRead: false, snippet: 'O valor máximo do salário de contribuição foi reajustado para R$ 7.850,25 a partir de agosto...', content: '<h3>INSS: Portaria define novo teto para contribuição</h3><p>O valor máximo do salário de contribuição foi reajustado para R$ 7.850,25 a partir de agosto. O reajuste impacta o cálculo da contribuição previdenciária de todos os trabalhadores.</p>' },
];

// --- Component ---

export default function LeitorRssPage() {
  const { toast } = useToast();
  const [selectedFeedId, setSelectedFeedId] = useState<string | null>('feed1');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>('art1');
  const [articleList, setArticleList] = useState(articles);

  const getUnreadCount = (feedId: string) => articleList.filter(a => a.feedId === feedId && !a.isRead).length;

  const filteredArticles = articleList.filter(a => selectedFeedId ? a.feedId === selectedFeedId : true);
  const selectedArticle = articleList.find(a => a.id === selectedArticleId);

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setArticleList(prev => prev.map(a => a.id === articleId ? { ...a, isRead: true } : a));
  };
  
  const handleRefresh = () => {
    toast({
        title: 'Atualizando Feeds...',
        description: 'Buscando novas notícias. (Esta é uma simulação)',
    });
  };

  return (
    <div className="h-full flex gap-4 p-4">
      {/* Feeds Panel */}
      <Card className="w-[300px] flex-shrink-0 flex flex-col">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2"><Rss size={20} /> Fontes</CardTitle>
          <div className='flex items-center gap-1'>
            <Button variant="ghost" size="icon" className='h-7 w-7' onClick={handleRefresh}><RefreshCw size={16} /></Button>
            <Button variant="ghost" size="icon" className='h-7 w-7'><CheckCheck size={16} /></Button>
          </div>
        </CardHeader>
        <ScrollArea className="flex-grow">
          <div className="p-2 space-y-2">
            {folders.map(folder => (
              <div key={folder.id}>
                <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase flex items-center gap-2"><Folder size={14} /> {folder.name}</h3>
                <div className="mt-1 space-y-1">
                  {folder.feeds.map(feed => {
                    const unreadCount = getUnreadCount(feed.id);
                    return (
                      <Button
                        key={feed.id}
                        variant={selectedFeedId === feed.id ? 'secondary' : 'ghost'}
                        className="w-full justify-between h-auto py-2"
                        onClick={() => setSelectedFeedId(feed.id)}
                      >
                        <span className="truncate text-left">{feed.name}</span>
                        {unreadCount > 0 && <Badge variant="default" className="flex-shrink-0">{unreadCount}</Badge>}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {/* Articles List Panel */}
      <Card className="flex-1 flex flex-col">
        <CardHeader>
            <div className="flex w-full items-center space-x-2">
                <Input type="text" placeholder="Pesquisar artigos..." />
                <Button variant="outline" size="icon"><Search size={18}/></Button>
            </div>
        </CardHeader>
        <ScrollArea className="flex-grow">
          {filteredArticles.map(article => (
            <div
              key={article.id}
              onClick={() => handleSelectArticle(article.id)}
              className={cn(
                'p-4 border-b cursor-pointer hover:bg-muted/50',
                selectedArticleId === article.id && 'bg-muted'
              )}
            >
              <p className="text-xs text-muted-foreground">{article.source} - {article.date}</p>
              <p className={cn("font-semibold mt-1", !article.isRead && "text-primary")}>{article.title}</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">{article.snippet}</p>
            </div>
          ))}
        </ScrollArea>
      </Card>

      {/* Article Content Panel */}
      <Card className="w-1/2 flex-shrink-0 flex flex-col">
        {selectedArticle ? (
          <>
            <CardHeader className="flex-row items-start justify-between">
                <div className='flex-grow'>
                    <CardTitle className="text-xl leading-tight">{selectedArticle.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{selectedArticle.source} - {selectedArticle.date}</p>
                </div>
                <Button asChild variant="outline" size="sm">
                    <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className='mr-2' /> Ver Original
                    </a>
                </Button>
            </CardHeader>
            <Separator />
            <ScrollArea className="flex-grow">
                <CardContent className="py-6">
                    <div
                        className="prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />
                </CardContent>
            </ScrollArea>
          </>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-muted-foreground">Selecione um artigo para ler</p>
          </div>
        )}
      </Card>
    </div>
  );
}
