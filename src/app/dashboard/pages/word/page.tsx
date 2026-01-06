'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Save } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function WordPage() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="border-b">
        <div className="flex justify-between items-center">
            <Input defaultValue="Comunicado Interno - Feriado.docx" className="text-lg font-semibold border-none focus-visible:ring-0 p-0 h-auto" />
            <Button><Save className="mr-2 h-4 w-4" /> Salvar</Button>
        </div>
        <div className="flex items-center gap-1 border-t pt-2 mt-2 flex-wrap">
            <Select defaultValue="12pt">
                <SelectTrigger className="w-[80px] h-8"><SelectValue /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="10pt">10</SelectItem>
                    <SelectItem value="12pt">12</SelectItem>
                    <SelectItem value="14pt">14</SelectItem>
                    <SelectItem value="16pt">16</SelectItem>
                </SelectContent>
            </Select>
             <Select defaultValue="arial">
                <SelectTrigger className="w-[120px] h-8"><SelectValue /></SelectTrigger>
                <SelectContent>
                    <SelectItem value="arial">Arial</SelectItem>
                    <SelectItem value="times">Times New Roman</SelectItem>
                    <SelectItem value="calibri">Calibri</SelectItem>
                </SelectContent>
            </Select>
            <div className="w-px h-6 bg-border mx-1"></div>
            <button className="p-2 rounded hover:bg-muted"><Bold className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><Italic className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><Underline className="h-4 w-4"/></button>
            <div className="w-px h-6 bg-border mx-1"></div>
            <button className="p-2 rounded hover:bg-muted"><AlignLeft className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><AlignCenter className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><AlignRight className="h-4 w-4"/></button>
             <div className="w-px h-6 bg-border mx-1"></div>
            <button className="p-2 rounded hover:bg-muted"><List className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><ListOrdered className="h-4 w-4"/></button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <div className="p-8 md:p-16 bg-muted h-full overflow-y-auto">
            <div className="bg-card shadow-lg mx-auto max-w-4xl p-16" style={{minHeight: '29.7cm'}}>
                <textarea className="w-full h-full resize-none outline-none text-base" defaultValue="Prezados colaboradores, Gostaríamos de comunicar que na próxima segunda-feira, dia 12 de Agosto, não haverá expediente em nossa unidade de São Paulo devido ao feriado municipal. As atividades retornarão ao normal na terça-feira, dia 13. Atenciosamente, A Direção."></textarea>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
