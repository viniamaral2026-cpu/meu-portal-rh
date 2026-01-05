
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function AssistenteAiPage() {
    return (
        <div className="p-4 h-full flex flex-col">
            <Card className='h-full flex flex-col'>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Image src="https://www.gstatic.com/apps/signup/resources/gemini-color-v3-24dp.svg" width={32} height={32} alt="Gemini Icon" />
                    <div>
                        <CardTitle>Assistente Gemini</CardTitle>
                        <CardDescription>Pergunte qualquer coisa sobre seus dados de RH ou peça ajuda para realizar tarefas.</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                    <div className='flex-grow overflow-auto p-4 border rounded-lg bg-muted/30'>
                        {/* Chat history will go here */}
                        <div className='text-center text-muted-foreground'>
                            <p>Como posso ajudar hoje?</p>
                            <p className='text-xs'>Ex: "Qual o total da folha de pagamento de Junho?"</p>
                        </div>
                    </div>
                    <div className='relative mt-4'>
                        <Textarea 
                            placeholder='Digite sua mensagem...'
                            className='pr-12'
                            rows={2}
                        />
                        <Button size='icon' className='absolute bottom-2 right-2'>
                            <ArrowUp className='h-4 w-4' />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
