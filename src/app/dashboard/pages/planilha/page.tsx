'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Undo, Redo, Printer, Percent, Bold, Italic, Strikethrough, PaintBucket,
  Merge, AlignLeft, AlignCenter, AlignRight, MoreVertical, Star, MessageSquare, Video,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerUpLeft, Sigma, TextColor, Braces, WrapText,
  File, Edit, Eye, Plus, Table as TableIcon, BarChart2,
  Trash2, Copy, Scissors, Minus, ZoomIn, ZoomOut, FileUp, FileDown as FileDownIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const COLS = 26; // A-Z
const ROWS = 50;

export default function PlanilhaPage() {
  const [gridData, setGridData] = useState(
    Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill(''))
  );
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const [formulaValue, setFormulaValue] = useState('');

  const handleCellChange = (row: number, col: number, value: string) => {
    const newData = [...gridData.map(r => [...r])];
    newData[row][col] = value;
    setGridData(newData);
    if(selectedCell.row === row && selectedCell.col === col) {
      setFormulaValue(value);
    }
  };

  const handleSelectCell = (row: number, col: number) => {
    setSelectedCell({ row, col });
    setFormulaValue(gridData[row][col]);
  };
  
  const handleFormulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulaValue(e.target.value);
  }

  const handleFormulaBlur = () => {
    handleCellChange(selectedCell.row, selectedCell.col, formulaValue);
  }

  const getColumnName = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className="flex flex-col h-full bg-background text-foreground text-sm">
      {/* Top Header with title and main actions */}
      <div className="p-2 flex items-center justify-between border-b bg-card">
        <div className="flex items-center gap-2">
            <File className='w-8 h-8 text-green-600'/>
            <div>
                <div className='flex items-center gap-2'>
                    <Input defaultValue="Planilha sem título" className='border-none focus-visible:ring-1 focus-visible:ring-ring h-7 p-1 text-lg' />
                    <Star size={18} className='cursor-pointer hover:text-yellow-500' />
                </div>
                <Menubar className='border-none p-0 h-auto bg-transparent'>
                    {['Arquivo', 'Editar', 'Ver', 'Inserir', 'Formatar', 'Dados', 'Ferramentas', 'Extensões', 'Ajuda'].map(item => (
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
        <div className='flex items-center gap-2'>
             <Button variant='ghost' size='icon'><MessageSquare size={20} /></Button>
             <Button variant='ghost' size='icon'><Video size={20} /></Button>
             <Button className='bg-blue-100 text-blue-800 hover:bg-blue-200'>Compartilhar</Button>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="p-1 flex items-center gap-1 border-b bg-card flex-wrap">
        <Button variant="ghost" size="icon" className='h-7 w-7'><Undo size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><Redo size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><Printer size={18} /></Button>
        <Separator orientation='vertical' className='h-5' />
        <Input type="text" readOnly value="100%" className="h-7 w-20 px-2" />
        <Separator orientation='vertical' className='h-5' />
        <Button variant="ghost" size="icon" className='h-7 w-10'>R$</Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><Percent size={18} /></Button>
        <Separator orientation='vertical' className='h-5' />
        <Button variant="ghost" size="icon" className='h-7 w-7'><Bold size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><Italic size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><Strikethrough size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><TextColor size={18} /></Button>
         <Separator orientation='vertical' className='h-5' />
        <Button variant="ghost" size="icon" className='h-7 w-7'><PaintBucket size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><TableIcon size={18} /></Button>
        <Separator orientation='vertical' className='h-5' />
        <Button variant="ghost" size="icon" className='h-7 w-7'><Merge size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><AlignCenter size={18} /></Button>
        <Button variant="ghost" size="icon" className='h-7 w-7'><WrapText size={18} /></Button>
        <Separator orientation='vertical' className='h-5' />
        <Button variant="ghost" size="icon" className='h-7 w-7'><Sigma size={18} /></Button>
      </div>

      {/* Formula Bar */}
      <div className="flex items-center p-1 bg-card">
        <div className="px-2 py-1 border-r text-muted-foreground w-16 text-center">{getColumnName(selectedCell.col)}{selectedCell.row + 1}</div>
        <div className="px-2 text-muted-foreground italic">fx</div>
        <Input
          type="text"
          className="flex-1 border-none focus-visible:ring-0 h-8"
          value={formulaValue}
          onChange={handleFormulaChange}
          onBlur={handleFormulaBlur}
        />
      </div>

      {/* Spreadsheet Grid */}
      <div className="flex-1 overflow-auto">
        <div className="relative">
          <table className="w-full border-collapse table-fixed">
            <thead className="sticky top-0 bg-card z-10">
              <tr>
                <th className="w-16 sticky left-0 bg-card z-20 border-r border-b"></th>
                {Array.from({ length: COLS }).map((_, colIndex) => (
                  <th key={colIndex} className="p-1 border text-center font-medium w-32">
                    {getColumnName(colIndex)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: ROWS }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="w-16 sticky left-0 bg-card z-20 border-r border-b text-center font-medium text-muted-foreground">{rowIndex + 1}</td>
                  {Array.from({ length: COLS }).map((_, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => handleSelectCell(rowIndex, colIndex)}
                      className={cn('border p-0 relative', {
                        'ring-2 ring-blue-500 z-10': selectedCell.row === rowIndex && selectedCell.col === colIndex
                      })}
                    >
                      <Input
                        type="text"
                        value={gridData[rowIndex][colIndex]}
                        onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                        onFocus={() => handleSelectCell(rowIndex, colIndex)}
                        className="w-full h-full border-none rounded-none focus-visible:ring-0 p-1"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

       {/* Bottom Bar for Sheets */}
        <div className="p-1 flex items-center gap-2 border-t bg-card">
            <Button variant='ghost' size='icon' className='h-7 w-7'><Plus size={18} /></Button>
            <Button variant='ghost' size='icon' className='h-7 w-7'><Braces size={18} /></Button>
            <Button variant='ghost' className='h-7 px-3 bg-green-100 text-green-800 border-b-2 border-green-600 rounded-b-none'>Página1</Button>
        </div>
    </div>
  );
}