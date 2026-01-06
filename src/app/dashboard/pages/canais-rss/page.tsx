'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Edit, Trash2, Link, CheckCircle, XCircle, RefreshCw, Folder } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type FeedStatus = 'ok' | 'error' | 'pending';

type Feed = {
  id: string;
  name: string;
  url: string;
  folder: string;
  status: FeedStatus;
};

const initialFeeds: Feed[] = [
  { id: 'feed1', name: 'Portal eSocial', url: 'https://www.gov.br/esocial/pt-br/noticias/RSS', folder: 'Legislação', status: 'ok' },
  { id: 'feed2', name: 'Diário Oficial da União - Seção 1', url: 'https://www.in.gov.br/rss/-//asset_publisher/5j2wzAlm0v8e/rss?p_p_cacheability=cacheLevelPage', folder: 'Legislação', status: 'ok' },
  { id: 'feed3', name: 'RH Pra Você', url: 'https://rhpravoce.com.br/feed/', folder: 'Notícias de RH', status: 'ok' },
  { id: 'feed4', name: 'Feed com Problema', url: 'http://url-invalida.com/rss', folder: 'Notícias de RH', status: 'error' },
  { id: 'feed5', name: 'Infomoney', url: 'https://www.infomoney.com.br/feed/', folder: 'Economia', status: 'pending' },
];

const statusConfig: { [key in FeedStatus]: { text: string; icon: React.ReactNode; badgeVariant: 'default' | 'destructive' | 'secondary' } } = {
  ok: { text: 'OK', icon: <CheckCircle className="h-4 w-4 text-green-500" />, badgeVariant: 'default' },
  error: { text: 'Erro', icon: <XCircle className="h-4 w-4 text-red-500" />, badgeVariant: 'destructive' },
  pending: { text: 'Pendente', icon: <RefreshCw className="h-4 w-4 text-yellow-500 animate-spin" />, badgeVariant: 'secondary' },
};

const emptyFeed: Omit<Feed, 'id' | 'status'> = { name: '', url: '', folder: '' };

export default function CanaisRssPage() {
  const [feeds, setFeeds] = useState<Feed[]>(initialFeeds);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFeed, setCurrentFeed] = useState<Omit<Feed, 'id' | 'status'> | Feed>(emptyFeed);
  const { toast } = useToast();

  const folders = [...new Set(feeds.map(f => f.folder))];

  const handleSave = () => {
    if ('id' in currentFeed) { // Editing existing feed
      setFeeds(prev => prev.map(f => f.id === currentFeed.id ? { ...currentFeed } : f));
      toast({ title: "Feed Atualizado", description: `O canal "${currentFeed.name}" foi atualizado.` });
    } else { // Adding new feed
      const newFeed: Feed = { ...currentFeed, id: `feed${Date.now()}`, status: 'pending' };
      setFeeds(prev => [...prev, newFeed]);
      toast({ title: "Feed Adicionado", description: `O canal "${newFeed.name}" foi adicionado.` });
    }
    setIsDialogOpen(false);
    setCurrentFeed(emptyFeed);
  };

  const handleEdit = (feed: Feed) => {
    setCurrentFeed(feed);
    setIsDialogOpen(true);
  };
  
  const handleDelete = (feedId: string) => {
    setFeeds(prev => prev.filter(f => f.id !== feedId));
    toast({ variant: 'destructive', title: "Feed Removido", description: `O canal foi removido com sucesso.` });
  };
  
  const handleAddNew = () => {
      setCurrentFeed(emptyFeed);
      setIsDialogOpen(true);
  }

  const handleTestUrl = () => {
    if (!currentFeed.url) {
        toast({ variant: 'destructive', title: 'URL vazia', description: 'Por favor, insira uma URL para testar.' });
        return;
    }
    toast({ title: 'Testando URL...', description: 'Simulando conexão com o feed.' });
    // Simulate API call to test the URL
    setTimeout(() => {
        // Simulate a successful or failed response
        const success = Math.random() > 0.3; // 70% chance of success
        if (success) {
            toast({ title: 'Sucesso!', description: 'A URL do feed é válida e acessível.' });
        } else {
            toast({ variant: 'destructive', title: 'Falha na Conexão', description: 'Não foi possível acessar a URL do feed. Verifique se está correta.' });
        }
    }, 1500);
  }

  return (
    <div className="p-4 space-y-4">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Card>
          <CardHeader className="flex-row items-start justify-between">
            <div>
              <CardTitle className="text-2xl">Gerenciador de Canais RSS</CardTitle>
              <CardDescription>Adicione, edite e organize suas fontes de notícias.</CardDescription>
            </div>
            <Button onClick={handleAddNew}>
              <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Novo Feed
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Feed</TableHead>
                  <TableHead className="w-[30%]">URL</TableHead>
                  <TableHead><Folder className="inline h-4 w-4 mr-1" />Pasta</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeds.map((feed) => (
                  <TableRow key={feed.id}>
                    <TableCell className="font-medium">{feed.name}</TableCell>
                    <TableCell className="text-muted-foreground truncate">{feed.url}</TableCell>
                    <TableCell>{feed.folder}</TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[feed.status].badgeVariant} className="flex w-fit items-center gap-2">
                        {statusConfig[feed.status].icon}
                        {statusConfig[feed.status].text}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(feed)}><Edit className="h-4 w-4" /></Button>
                       <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta ação não pode ser desfeita. Isso irá remover permanentemente o feed
                                "{feed.name}" do sistema.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(feed.id)}>Confirmar</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
                <DialogTitle>{'id' in currentFeed ? 'Editar Feed' : 'Adicionar Novo Feed'}</DialogTitle>
                <DialogDescription>
                    Preencha os detalhes abaixo. Clique em "Testar URL" para verificar a validade do feed.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Nome</Label>
                    <Input id="name" value={currentFeed.name} onChange={(e) => setCurrentFeed(p => ({...p, name: e.target.value}))} className="col-span-3" placeholder="Ex: Portal do eSocial" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="url" className="text-right">URL do Feed</Label>
                     <div className='col-span-3 flex gap-2'>
                        <Input id="url" value={currentFeed.url} onChange={(e) => setCurrentFeed(p => ({...p, url: e.target.value}))} placeholder="https://..." />
                        <Button variant='outline' onClick={handleTestUrl}><Link className='h-4 w-4 mr-2'/>Testar</Button>
                     </div>
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="folder" className="text-right">Pasta</Label>
                    <div className='col-span-3 flex gap-2'>
                       <Select 
                          value={currentFeed.folder} 
                          onValueChange={(value) => setCurrentFeed(p => ({...p, folder: value}))}
                       >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma pasta" />
                        </SelectTrigger>
                        <SelectContent>
                          {folders.map(folder => <SelectItem key={folder} value={folder}>{folder}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <Input placeholder='Ou crie uma nova pasta...' onChange={(e) => setCurrentFeed(p => ({...p, folder: e.target.value}))}/>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                <Button type="submit" onClick={handleSave}>Salvar Feed</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
