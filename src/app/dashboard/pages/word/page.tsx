'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Undo, Redo, Printer, Bold, Italic, Underline, PaintBucket,
  AlignCenter, AlignLeft, AlignRight, AlignJustify,
  File, ChevronDown, Link, MessageSquare, Image as ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const toolbarItems = [
    { id: 'undo', icon: <Undo size={18} /> },
    { id: 'redo', icon: <Redo size={18} /> },
    { id: 'print', icon: <Printer size={18} /> },
];

const formattingItems = [
    { id: 'bold', icon: <Bold size={18} /> },
    { id: 'italic', icon: <Italic size={18} /> },
    { id: 'underline', icon: <Underline size={18} /> },
    { id: 'color', icon: <PaintBucket size={18} /> },
];

const alignmentItems = [
    { id: 'left', icon: <AlignLeft size={18} /> },
    { id: 'center', icon: <AlignCenter size={18} /> },
    { id: 'right', icon: <AlignRight size={18} /> },
    { id: 'justify', icon: <AlignJustify size={18} /> },
]

const insertItems = [
    { id: 'link', icon: <Link size={18} /> },
    { id: 'comment', icon: <MessageSquare size={18} /> },
    { id: 'image', icon: <ImageIcon size={18} /> },
]


export default function WordPage() {
  const [documentContent, setDocumentContent] = useState('');
  const [documentTitle, setDocumentTitle] = useState('Documento sem título');

  return (
    <div className="flex flex-col h-full bg-secondary text-sm">
      {/* Header with Menubar */}
      <div className="p-2 flex items-center justify-between border-b bg-card text-card-foreground">
            <div className="flex items-center gap-2">
                <File className='w-8 h-8 text-blue-600'/>
                <div>
                    <Input 
                        value={documentTitle} 
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        className='border-none focus-visible:ring-1 focus-visible:ring-ring h-7 p-1 text-lg' />
                    <Menubar className='border-none p-0 h-auto bg-transparent'>
                        {['Arquivo', 'Editar', 'Ver', 'Inserir', 'Formatar', 'Ferramentas', 'Extensões', 'Ajuda'].map(item => (
                        <MenubarMenu key={item}>
                            <MenubarTrigger className='text-sm px-2 py-1 h-auto'>{item}</MenubarTrigger>
                            <MenubarContent>
                            <MenubarItem>Aguardando implementação</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        ))}
                    </Menubar>
                </div>
            </div>
             <div className="flex items-center gap-2">
                <Button>
                    <MessageSquare size={16} />
                </Button>
                <Button>
                    Compartilhar
                </Button>
            </div>
      </div>
      
      {/* Toolbar */}
       <div className="p-1 flex items-center gap-1 border-b bg-card flex-wrap">
            {toolbarItems.map(item => (
                <Button variant="ghost" size="icon" key={item.id} className='h-8 w-8'>{item.icon}</Button>
            ))}
            <Separator orientation='vertical' className='h-6 mx-1' />
            <Select defaultValue='100'>
                <SelectTrigger className="w-24 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                    <SelectItem value="125">125%</SelectItem>
                    <SelectItem value="150">150%</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Select defaultValue='normal'>
                <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="normal">Texto normal</SelectItem>
                    <SelectItem value="title">Título</SelectItem>
                    <SelectItem value="subtitle">Subtítulo</SelectItem>
                    <SelectItem value="h1">Cabeçalho 1</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Select defaultValue='arial'>
                <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                </Trigger>
                <SelectContent>
                    <SelectItem value="arial">Arial</SelectItem>
                    <SelectItem value="times">Times New Roman</SelectItem>
                    <SelectItem value="courier">Courier New</SelectItem>
                </SelectContent>
            </Select>
             <Separator orientation='vertical' className='h-6 mx-1' />
            {formattingItems.map(item => (
                <Button variant="ghost" size="icon" key={item.id} className='h-8 w-8'>{item.icon}</Button>
            ))}
             <Separator orientation='vertical' className='h-6 mx-1' />
             {insertItems.map(item => (
                <Button variant="ghost" size="icon" key={item.id} className='h-8 w-8'>{item.icon}</Button>
            ))}
            <Separator orientation='vertical' className='h-6 mx-1' />
            {alignmentItems.map(item => (
                <Button variant="ghost" size="icon" key={item.id} className='h-8 w-8'>{item.icon}</Button>
            ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-8">
        <div className="bg-white text-black shadow-lg mx-auto" style={{width: '21cm', minHeight: '29.7cm'}}>
            <Textarea
                value={documentContent}
                onChange={(e) => setDocumentContent(e.target.value)}
                className="w-full h-full resize-none border-none focus-visible:ring-0 text-base p-16"
                placeholder="Comece a escrever seu documento..."
            />
        </div>
      </div>
    </div>
  );
}
