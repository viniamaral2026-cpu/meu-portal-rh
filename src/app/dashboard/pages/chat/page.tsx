'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Bot, Search, SendHorizonal } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const conversations = [
  { id: 'conv1', name: 'Carla (Gerente RH)', lastMessage: 'Ok, combinado. Fico no aguardo.', time: '10:32', unread: 0, avatar: '/avatars/02.png' },
  { id: 'conv2', name: 'Roberto (Supervisor)', lastMessage: 'Precisamos revisar as metas de produção.', time: 'Ontem', unread: 2, avatar: '/avatars/03.png' },
  { id: 'conv3', name: 'Suporte TI', lastMessage: 'Seu chamado foi aberto (TKT-1589).', time: '2d', unread: 0, avatar: '/avatars/04.png' },
];

const messages = [
    { id: 'msg1', author: 'other', text: 'Bom dia! Gostaria de verificar o status da minha solicitação de ajuste de ponto do dia 15.', time: '10:30' },
    { id: 'msg2', author: 'me', text: 'Bom dia! Claro, só um momento.', time: '10:31' },
    { id: 'msg3', author: 'other', text: 'Ok, combinado. Fico no aguardo.', time: '10:32' },
]

export default function ChatPage() {
  const [selectedConv, setSelectedConv] = useState('conv1');
  const [message, setMessage] = useState('');

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
                     onClick={() => setSelectedConv(conv.id)}
                     className={cn("flex items-start gap-4 p-4 cursor-pointer border-l-4",
                        selectedConv === conv.id ? 'bg-muted border-primary' : 'border-transparent hover:bg-muted/50'
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
                <AvatarFallback>{conversations.find(c => c.id === selectedConv)?.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className='font-bold'>{conversations.find(c => c.id === selectedConv)?.name}</p>
                <p className='text-xs text-green-500'>Online</p>
            </div>
        </div>
        <ScrollArea className="flex-grow p-6 bg-muted/30">
            <div className='space-y-6'>
                {messages.map(msg => (
                    <div key={msg.id} className={cn("flex items-end gap-2", msg.author === 'me' ? 'justify-end' : 'justify-start')}>
                        {msg.author === 'other' && <Avatar className='h-8 w-8'><AvatarFallback>C</AvatarFallback></Avatar>}
                        <div className={cn("max-w-xs lg:max-w-md p-3 rounded-xl", msg.author === 'me' ? 'bg-primary text-primary-foreground' : 'bg-card')}>
                            <p className='text-sm'>{msg.text}</p>
                            <p className='text-xs opacity-70 text-right mt-1'>{msg.time}</p>
                        </div>
                         {msg.author === 'me' && <Avatar className='h-8 w-8'><AvatarFallback>A</AvatarFallback></Avatar>}
                    </div>
                ))}
            </div>
        </ScrollArea>
        <div className="p-4 border-t bg-card">
            <div className='relative'>
                 <Input 
                    placeholder='Digite sua mensagem...' 
                    className='pr-24 h-12' 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                 />
                 <div className='absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1'>
                    <Button variant="ghost" size="icon">
                       <Image src="https://www.gstatic.com/apps/signup/resources/gemini-color-v3-24dp.svg" width={20} height={20} alt="Gemini Icon" />
                    </Button>
                    <Button size="icon">
                        <SendHorizonal />
                    </Button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
