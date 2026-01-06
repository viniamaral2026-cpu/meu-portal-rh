'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, SendHorizonal } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useChat } from 'ai/react';
import { Bot, User } from 'lucide-react';

const conversations = [
  { id: 'conv1', name: 'Carla (Gerente RH)', lastMessage: 'Ok, combinado. Fico no aguardo.', time: '10:32', unread: 0, avatar: '/avatars/02.png' },
  { id: 'conv2', name: 'Roberto (Supervisor)', lastMessage: 'Precisamos revisar as metas de produção.', time: 'Ontem', unread: 2, avatar: '/avatars/03.png' },
  { id: 'conv3', name: 'Suporte TI', lastMessage: 'Seu chamado foi aberto (TKT-1589).', time: '2d', unread: 0, avatar: '/avatars/04.png' },
];

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="h-full flex">
      {/* Sidebar com conversas */}
      <div className="w-[350px] border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Chat Interno</h2>
          <div className="relative mt-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Pesquisar conversas..." className="pl-8" />
          </div>
        </div>
        <ScrollArea className="flex-grow">
            {conversations.map(conv => (
                <div key={conv.id}
                     className={cn("flex items-start gap-4 p-4 cursor-pointer border-l-4",
                        'conv1' === conv.id ? 'bg-muted border-primary' : 'border-transparent hover:bg-muted/50'
                     )}>
                    <Avatar>
                        <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className='flex-grow'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold'>{conv.name}</p>
                            <p className='text-xs text-muted-foreground'>{conv.time}</p>
                        </div>
                        <div className='flex justify-between items-center mt-1'>
                             <p className='text-sm text-muted-foreground truncate'>{conv.lastMessage}</p>
                             {conv.unread > 0 && <span className='text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center'>{conv.unread}</span>}
                        </div>
                    </div>
                </div>
            ))}
        </ScrollArea>
      </div>

      {/* Janela de chat ativa */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center gap-4">
            <Avatar>
                <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div>
                <p className='font-bold'>Assistente de RH (IA)</p>
                <p className='text-xs text-green-500'>Online</p>
            </div>
        </div>
        <ScrollArea className="flex-grow p-6 bg-muted/30">
            <div className='space-y-6'>
                {messages.map(m => (
                    <div key={m.id} className={cn("flex items-end gap-2", m.role === 'user' ? 'justify-end' : 'justify-start')}>
                        {m.role === 'assistant' && <Avatar className='h-8 w-8'><AvatarFallback><Bot/></AvatarFallback></Avatar>}
                        <div className={cn("max-w-xs lg:max-w-2xl p-3 rounded-xl whitespace-pre-wrap", m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card')}>
                            <p className='text-sm'>{m.content}</p>
                        </div>
                         {m.role === 'user' && <Avatar className='h-8 w-8'><AvatarFallback><User /></AvatarFallback></Avatar>}
                    </div>
                ))}
            </div>
        </ScrollArea>
        <div className="p-4 border-t bg-card">
            <form onSubmit={handleSubmit} className='relative'>
                 <Input 
                    placeholder='Pergunte algo sobre RH, leis trabalhistas ou sobre a empresa...' 
                    className='pr-12 h-12' 
                    value={input}
                    onChange={handleInputChange}
                 />
                 <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1'>
                    <Button type="submit" size="icon">
                        <SendHorizonal />
                    </Button>
                 </div>
            </form>
        </div>
      </div>
    </div>
  );
}
