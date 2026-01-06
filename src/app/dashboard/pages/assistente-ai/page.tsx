'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Bot } from 'lucide-react';

type Message = {
  text: string;
  sender: 'user' | 'bot';
  avatar: string;
}

export default function AssistenteAiPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Olá! Sou o assistente de IA do MeuRH. Como posso ajudar você hoje a otimizar a gestão da sua fábrica?', sender: 'bot', avatar: '🤖' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages: Message[] = [...messages, { text: input, sender: 'user', avatar: '🧑' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `Você perguntou sobre: "${input}". Estou processando sua solicitação...`, sender: 'bot', avatar: '🤖' }]);
      }, 1000);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
          <Bot className="h-8 w-8 text-primary"/>
          <div>
            <CardTitle>Assistente de IA</CardTitle>
            <CardDescription>Use a inteligência artificial para obter insights e automatizar tarefas.</CardDescription>
          </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'bot' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary text-primary-foreground">{msg.avatar}</AvatarFallback>
                            </Avatar>
                        )}
                         <div className={`rounded-lg p-3 max-w-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                         {msg.sender === 'user' && (
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>{msg.avatar}</AvatarFallback>
                            </Avatar>
                        )}
                    </div>
                ))}
            </div>
        </ScrollArea>
        <div className="flex items-center gap-2 pt-4 border-t">
          <Input 
            placeholder="Pergunte algo sobre produção, RH ou estoque..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
          <Button onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
