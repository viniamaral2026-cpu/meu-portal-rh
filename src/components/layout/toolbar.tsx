import {
  Calculator,
  Calendar,
  ClipboardList,
  Share2,
  Box,
  Sheet,
  FunctionSquare,
  Users,
  FileText,
  FilePlus,
  Database,
  Eye,
  BarChart2,
  PieChart,
  Sigma,
  Rss,
  FileCode2,
  Gem,
  LayoutGrid,
  Play,
  Settings,
  Mail,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const toolbarGroups = [
  {
    label: 'Utilitários',
    items: [
      { icon: Calculator, label: 'Calcul...' },
      { icon: Calendar, label: 'Agenda' },
      { icon: ClipboardList, label: 'Curric...' },
      { icon: Share2, label: 'Comp...' },
      { icon: Box, label: 'Cubo' },
      { icon: Sheet, label: 'Planilha' },
      { icon: FunctionSquare, label: 'Fórmula' },
    ],
  },
  {
    label: 'Ferramentas de Análise',
    items: [
      { icon: Users, label: 'Colab...' },
      { icon: FileText, label: 'Relató...' },
      { icon: FilePlus, label: 'Gerador' },
      { icon: Database, label: 'Visõe...' },
    ],
  },
  {
    label: 'Gráficos',
    items: [
      { icon: Mail, label: 'Gerad...' },
      { icon: BarChart2, label: 'Gráfico' },
      { icon: PieChart, label: 'Categ...' },
      { icon: Sigma, label: 'Fontes' },
    ],
  },
  {
    label: 'RSS',
    items: [
      { icon: Rss, label: 'Leitor ...' },
      { icon: Play, label: 'Iniciar ...' },
      { icon: Settings, label: 'Confi...' },
      { icon: Rss, label: 'Canai...' },
      { icon: FileCode2, label: 'Excel' },
      { icon: FileCode2, label: 'Word' },
      { icon: Gem, label: 'Gemini' },
    ],
  },
];

export function Toolbar() {
  return (
    <div className="bg-card px-2 py-1 border-b flex items-start justify-between h-[68px]">
      <div className="flex items-start gap-1">
        {toolbarGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-start h-full">
            <div className="flex flex-col items-center justify-between h-full">
              <div className="flex items-center gap-0.5">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-12"
                  >
                    <item.icon className="h-4 w-4 text-gray-600 mb-0.5" />
                    <span className="text-gray-700 leading-tight text-[11px]">{item.label}</span>
                  </div>
                ))}
              </div>
              <span className="text-[10px] text-gray-500 font-semibold -mt-1">
                {group.label}
              </span>
            </div>
            {groupIndex < toolbarGroups.length -1 && <Separator orientation="vertical" className="h-full mx-1" />}
          </div>
        ))}
      </div>
      <div className="flex items-center h-full">
         <Separator orientation="vertical" className="h-full mx-1" />
          <div className="flex flex-col items-center justify-center h-full px-1">
            <button className="p-0.5 hover:bg-accent rounded-sm"><ChevronUp className="h-3.5 w-3.5" /></button>
            <div className="w-0.5 h-4 bg-gray-300 my-1 rounded-full"></div>
            <button className="p-0.5 hover:bg-accent rounded-sm"><ChevronDown className="h-3.5 w-3.5" /></button>
          </div>
        <div className="flex flex-col items-center justify-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-14 h-full">
          <LayoutGrid className="h-4 w-4 text-gray-600 mb-0.5" />
          <span className="text-gray-700 leading-tight text-[11px]">Painéis</span>
        </div>
      </div>
    </div>
  );
}
