
'use client';
import {
  Calculator,
  Calendar,
  Share2,
  Box,
  Sheet,
  FunctionSquare,
  Users,
  FileText,
  Database,
  BarChart2,
  PieChart,
  Sigma,
  Rss,
  Play,
  Settings,
  Mail,
  ChevronUp,
  ChevronDown,
  BookUser,
  Factory,
  UserSquare,
  FileDown,
  Globe,
  MessageSquare,
  HelpCircle,
  Clock,
  FilePlus,
  LayoutGrid,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';

const toolbarGroups = [
  {
    label: 'Utilitários',
    items: [
      { icon: Calculator, label: 'Calcul...', id: 'calculadora' },
      { icon: Calendar, label: 'Agenda', id: 'agenda' },
      { icon: BookUser, label: 'Curric...', id: 'curriculos' },
      { icon: Share2, label: 'Comp...', id: 'compartilhamento' },
      { icon: Box, label: 'Cubo', id: 'cubo' },
      { icon: Sheet, label: 'Planilha', id: 'planilha' },
      { icon: FunctionSquare, label: 'Fórmula', id: 'formula' },
    ],
  },
  {
    label: 'Ferramentas de Análise',
    items: [
      { icon: Users, label: 'Colab...', id: 'colaboradores' },
      { icon: FileText, label: 'Relató...', id: 'relatorios' },
      { icon: FilePlus, label: 'Gerador', id: 'gerador-saidas' },
      { icon: Database, label: 'Visõe...', id: 'visoes-dados' },
    ],
  },
  {
    label: 'Gráficos',
    items: [
      { icon: Mail, label: 'Gerad...', id: 'gerador-saidas' },
      { icon: BarChart2, label: 'Gráfico', id: 'bi' },
      { icon: PieChart, label: 'Categ...', id: 'categorias' },
      { icon: Sigma, label: 'Fontes', id: 'fontes-graficos' },
    ],
  },
  {
    label: 'RSS',
    items: [
      { icon: Rss, label: 'Leitor ...', id: 'leitor-rss' },
      { icon: Play, label: 'Iniciar ...', id: 'iniciar-servico-rss' },
      { icon: Settings, label: 'Confi...', id: 'configuracao-rss' },
      { icon: Rss, label: 'Canai...', id: 'canais-rss' },
      {
        icon: () => <Image src="https://cdn-icons-png.flaticon.com/512/1/1396.png" width={16} height={16} alt="Excel" />,
        label: 'Excel',
        id: 'planilha',
      },
      {
        icon: () => <Image src="https://img.icons8.com/?size=50&id=11571&format=png" width={16} height={16} alt="Word" />,
        label: 'Word',
        id: 'word',
      },
      {
        icon: () => <Image src="https://www.gstatic.com/apps/signup/resources/gemini-color-v3-24dp.svg" width={16} height={16} alt="Gemini" />,
        label: 'Gemini',
        id: 'assistente-ai',
      },
    ],
  },
];

const ToolbarItem = ({
  item,
  openTab,
}: {
  item: { icon: React.ElementType; label: string; id: string };
  openTab: (id: string, title: string) => void;
}) => {
  const content = (
    <div
      className="flex flex-col items-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-12"
      onClick={() => openTab(item.id, item.label.replace('...', ''))}
    >
      <item.icon className="h-4 w-4 text-gray-600 mb-0.5" />
      <span className="text-gray-700 leading-tight text-[11px]">
        {item.label}
      </span>
    </div>
  );

  return content;
};


export function Toolbar({ openTab }: { openTab: (id: string, title?: string, data?: any) => void }) {
  const handleDownload = () => {
    const content = `
Relatório Técnico do Sistema MeuRH
Versão: 1.0.0 (beta)
Data de Geração: ${new Date().toISOString()}

================================
Resumo do Ambiente
================================
- URL: https://meurh.example.com
- Banco de Dados: Firestore (us-central1)
- Autenticação: Firebase Auth
- Frontend: Next.js 15
- UI: ShadCN, TailwindCSS

================================
Relatório de Uso
================================
- Usuários Ativos (últimas 24h): 15
- Páginas mais acessadas:
  1. Dashboard Principal
  2. Consulta de Colaboradores
  3. Folha Mensal
- Ações Recentes:
  - [${new Date(Date.now() - 5 * 60000).toLocaleTimeString()}] Usuário 'admin' acessou 'Gestão de Férias'.
  - [${new Date(Date.now() - 10 * 60000).toLocaleTimeString()}] Sistema executou sincronização com ERP.
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relatorio_tecnico_meurh.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="bg-card px-2 py-1 border-b flex items-start justify-between h-[68px]">
      <div className="flex items-start gap-1">
        {toolbarGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex items-start h-full">
            <div className="flex flex-col items-center justify-between h-full">
              <div className="flex items-center gap-0.5">
                {group.items.map((item, itemIndex) => (
                  <ToolbarItem key={itemIndex} item={item as any} openTab={openTab} />
                ))}
              </div>
              <span className="text-[10px] text-gray-500 font-semibold -mt-1">
                {group.label}
              </span>
            </div>
            {groupIndex < toolbarGroups.length - 1 && (
              <Separator orientation="vertical" className="h-full mx-1" />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center h-full">
        <Separator orientation="vertical" className="h-full mx-1" />
        <div className="flex flex-col items-center justify-center h-full px-1">
          <button className="p-0.5 hover:bg-accent rounded-sm">
            <ChevronUp className="h-3.5 w-3.5" />
          </button>
          <div className="w-0.5 h-4 bg-gray-300 my-1 rounded-full"></div>
          <button className="p-0.5 hover:bg-accent rounded-sm">
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-xs text-center cursor-pointer p-1 rounded hover:bg-accent w-14 h-full">
          <LayoutGrid className="h-4 w-4 text-gray-600 mb-0.5" />
          <span className="text-gray-700 leading-tight text-[11px]">
            Painéis
          </span>
        </div>
      </div>
    </div>
  );
}
