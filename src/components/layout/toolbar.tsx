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
  Eye,
  BarChart2,
  GitBranch,
  Settings2,
  Rss,
  File,
  Gem,
  LayoutGrid,
} from 'lucide-react';

const toolbarItems = [
  { icon: Calculator, label: 'Calcul...' },
  { icon: Calendar, label: 'Agenda' },
  { icon: ClipboardList, label: 'Curric...' },
  { icon: Share2, label: 'Comp...' },
  { icon: Box, label: 'Cubo' },
  { icon: Sheet, label: 'Planilha' },
  { icon: FunctionSquare, label: 'Fórmula' },
  { icon: Users, label: 'Colab...' },
  { icon: FileText, label: 'Relató...' },
  { icon: GitBranch, label: 'Gerador' },
  { icon: Eye, label: 'Visõe...' },
  { icon: BarChart2, label: 'Gráfico' },
  { icon: Settings2, label: 'Confi...' },
  { icon: Rss, label: 'Canai...' },
  { icon: File, label: 'Excel' },
  { icon: File, label: 'Word' },
  { icon: Gem, label: 'Gemini' },
];

export function Toolbar() {
  return (
    <div className="bg-card px-4 py-2 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
            {toolbarItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-16">
                    <item.icon className="h-5 w-5 text-gray-600 mb-1" />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
        <div className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-16">
            <LayoutGrid className="h-5 w-5 text-gray-600 mb-1" />
            <span>Painéis</span>
        </div>
    </div>
  );
}
