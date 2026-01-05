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
    <div className="bg-card px-2 py-1 border-b flex items-start justify-between">
      <div className="flex items-start gap-2">
        {toolbarGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-14"
                  >
                    <item.icon className="h-5 w-5 text-gray-600 mb-1" />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-semibold mt-1">
                {group.label}
              </span>
            </div>
            {groupIndex < toolbarGroups.length -1 && <Separator orientation="vertical" className="h-16 mx-2" />}
          </div>
        ))}
      </div>
      <div className="flex items-center h-16">
         <Separator orientation="vertical" className="h-16 mx-2" />
          <div className="flex flex-col items-center justify-center h-full px-2">
            <button className="p-1 hover:bg-accent rounded-md"><ChevronUp className="h-4 w-4" /></button>
            <div className="w-0.5 h-6 bg-gray-300 my-1 rounded-full"></div>
            <button className="p-1 hover:bg-accent rounded-md"><ChevronDown className="h-4 w-4" /></button>
          </div>
        <div className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-16">
          <LayoutGrid className="h-5 w-5 text-gray-600 mb-1" />
          <span className="text-gray-700">Painéis</span>
        </div>
      </div>
    </div>
  );
}
