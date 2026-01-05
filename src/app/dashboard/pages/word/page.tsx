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
  Undo, Redo, Printer, PaintRoller, Bold, Italic, Underline, CaseSensitive,
  AlignCenter, AlignLeft, AlignRight, AlignJustify,
  File, MessageSquare, Image as ImageIcon, Link, ChevronDown, Check, ArrowLeft, Plus, MoreVertical, Minus, Pilcrow, List, ListOrdered, Indent, Outdent, WrapText, Eraser
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils';
import Image from 'next/image';


function HorizontalRuler() {
  return (
    <div className="sticky top-0 z-10 h-7 w-full bg-secondary" style={{ paddingLeft: 'calc(50% - 10.5cm)', paddingRight: 'calc(50% - 10.5cm)' }}>
      <div className="relative h-full w-full border-b border-l border-r bg-card shadow-sm pl-[1cm] pr-[1cm]">
        {/* Ruler ticks - assuming 1cm is approx 37.8px */}
        {Array.from({ length: 19 }).map((_, i) => (
          <div key={`cm-${i}`} className="absolute top-2 h-5" style={{ left: `calc(1cm + ${i * 37.8}px)` }}>
            <span className="absolute -translate-x-1/2 bottom-0 text-xs text-muted-foreground">{i + 1}</span>
            <div className="h-2 border-l"></div>
          </div>
        ))}
         {Array.from({ length: 19 * 4 }).map((_, i) => (
            <div key={`mm-${i}`} className="absolute top-4 h-1 border-l" style={{ left: `calc(1cm + ${i * 9.45}px)` }}></div>
        ))}
      </div>
    </div>
  );
}

function VerticalRuler() {
    return (
        <div className="absolute left-0 top-0 h-full w-7 bg-secondary" style={{paddingTop: 'calc(118px + 2rem + 1cm)'}}>
             <div className="relative h-full w-full border-r bg-card shadow-sm">
                 {/* Ruler ticks - assuming 1cm is approx 37.8px */}
                {Array.from({ length: 25 }).map((_, i) => (
                <div key={`v-cm-${i}`} className="absolute left-2 w-5" style={{ top: `${(i) * 37.8}px` }}>
                    <span className="absolute -translate-y-1/2 right-0 text-xs text-muted-foreground">{i + 1}</span>
                    <div className="w-2 border-t"></div>
                </div>
                ))}
                {Array.from({ length: 25 * 2 }).map((_, i) => (
                    <div key={`v-mm-${i}`} className="absolute left-4 w-1 border-t" style={{ top: `${(i + 1) * 18.9}px` }}></div>
                ))}
             </div>
        </div>
    )
}


export default function WordPage() {
  const [documentContent, setDocumentContent] = useState('');
  const [documentTitle, setDocumentTitle] = useState('Documento sem título');

  return (
    <div className="flex flex-col h-full bg-secondary text-sm">
      {/* Header with Menubar */}
      <div className="p-2 flex items-center justify-between border-b bg-card text-card-foreground shadow-sm">
            <div className="flex items-center gap-2">
                <File className='w-10 h-10 text-blue-600'/>
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
                <Button variant="ghost" size="icon">
                    <MessageSquare size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                     <Image src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-32dp/logo_meet_2020q4_color_2x_web_32dp.png" alt="Meet" width={20} height={20} />
                </Button>
                <Button className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-medium">
                    <Lock className="mr-2 h-4 w-4" />
                    Compartilhar
                </Button>
            </div>
      </div>
      
      {/* Toolbar */}
       <div className="p-1 flex items-center gap-1 border-b bg-card flex-wrap text-card-foreground">
            <Button variant="ghost" size="icon" className='h-8 w-8'><Undo size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Redo size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Printer size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><CaseSensitive size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><PaintRoller size={18} /></Button>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Select defaultValue='100'>
                <SelectTrigger className="w-24 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="75">75%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Select defaultValue='normal'>
                <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="normal">Texto normal</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Select defaultValue='arial'>
                <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="arial">Arial</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='h-6 mx-1' />
            <div className='flex items-center border rounded-md h-8'>
                <Button variant="ghost" size="icon" className='h-7 w-7'><Minus size={16}/></Button>
                <Input type="number" defaultValue={11} className="w-10 h-full text-center border-x p-0 rounded-none focus-visible:ring-0" />
                <Button variant="ghost" size="icon" className='h-7 w-7'><Plus size={16}/></Button>
            </div>
            <Separator orientation='vertical' className='h-6 mx-1' />
            <Button variant="ghost" size="icon" className='h-8 w-8'><Bold size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Italic size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Underline size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><CaseSensitive size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Pilcrow size={18} /></Button>
             <Separator orientation='vertical' className='h-6 mx-1' />
            <Button variant="ghost" size="icon" className='h-8 w-8'><Link size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><MessageSquare size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><ImageIcon size={18} /></Button>
            <Separator orientation='vertical' className='h-6 mx-1' />
            <Button variant="ghost" size="icon" className='h-8 w-8'><AlignLeft size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><AlignCenter size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><AlignRight size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><AlignJustify size={18} /></Button>
            <Separator orientation='vertical' className='h-6 mx-1' />
             <Button variant="ghost" size="icon" className='h-8 w-8'><WrapText size={18} /></Button>
            <Separator orientation='vertical' className='h-6 mx-1' />
            <Button variant="ghost" size="icon" className='h-8 w-8'><ListOrdered size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><List size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Outdent size={18} /></Button>
            <Button variant="ghost" size="icon" className='h-8 w-8'><Indent size={18} /></Button>
             <Separator orientation='vertical' className='h-6 mx-1' />
            <Button variant="ghost" size="icon" className='h-8 w-8'><Eraser size={18} /></Button>

            <div className='flex-grow' />

            <Button variant="ghost" className='h-8 px-3 text-sm'>
                <Pilcrow className='mr-2 h-4 w-4' />
                Edição
                <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto p-8 relative">
        <aside className='absolute top-8 left-8 w-60 bg-card rounded-lg shadow-sm p-4'>
            <div className='flex items-center justify-between'>
                <Button variant="ghost" size="icon"><ArrowLeft /></Button>
                <div className='flex-grow' />
                <Button variant="ghost" size="icon"><Plus /></Button>
                <Button variant="ghost" size="icon"><MoreVertical /></Button>
            </div>
            <div className='mt-4'>
                <p className='text-sm font-medium'>Guias no documento</p>
                <div className='mt-2 bg-blue-100 border-l-4 border-blue-500 p-2 rounded-r-md flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <ListOrdered size={16} className='text-muted-foreground' />
                        <span className='text-sm text-blue-900 font-medium'>Guia 1</span>
                    </div>
                    <Button variant="ghost" size="icon" className='h-6 w-6'><MoreVertical size={16} /></Button>
                </div>
                <p className='text-xs text-muted-foreground mt-2'>Os títulos que forem adicionados ao documento aparecerão aqui.</p>
            </div>
        </aside>

        <VerticalRuler />
        <HorizontalRuler />
        <div className="bg-white text-black shadow-lg mx-auto relative" style={{width: '21cm', minHeight: '29.7cm', paddingTop: '1cm', paddingBottom: '1cm', paddingLeft: '1cm', paddingRight: '1cm' }}>
            <Textarea
                value={documentContent}
                onChange={(e) => setDocumentContent(e.target.value)}
                className="w-full h-full resize-none border-none focus-visible:ring-0 text-base p-4"
                placeholder="Comece a escrever seu documento..."
            />
        </div>
      </div>
    </div>
  );
}
