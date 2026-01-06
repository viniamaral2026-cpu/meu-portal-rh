'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Palette } from 'lucide-react';

const rows = 100;
const cols = 26; // A-Z

export default function PlanilhaPage() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Editor de Planilha</CardTitle>
        <div className="flex items-center gap-2 border-t pt-2 mt-2">
            <button className="p-2 rounded hover:bg-muted"><Bold className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><Italic className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><Underline className="h-4 w-4"/></button>
            <div className="w-px h-6 bg-border mx-2"></div>
            <button className="p-2 rounded hover:bg-muted"><AlignLeft className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><AlignCenter className="h-4 w-4"/></button>
            <button className="p-2 rounded hover:bg-muted"><AlignRight className="h-4 w-4"/></button>
            <div className="w-px h-6 bg-border mx-2"></div>
             <button className="p-2 rounded hover:bg-muted"><Palette className="h-4 w-4"/></button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="border p-1 w-12 bg-muted"></th>
                    {Array.from({length: cols}).map((_, i) => (
                        <th key={i} className="border p-1 min-w-[100px] bg-muted">{String.fromCharCode(65 + i)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                 {Array.from({length: rows}).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className="border p-1 text-center bg-muted font-semibold">{rowIndex + 1}</td>
                        {Array.from({length: cols}).map((_, colIndex) => (
                            <td key={colIndex} className="border p-0">
                                <input type="text" className="w-full h-full p-1 outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
                            </td>
                        ))}
                    </tr>
                 ))}
            </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
