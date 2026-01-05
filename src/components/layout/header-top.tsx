import {
  ChevronDown,
  Bell,
  HelpCircle,
  Settings,
  Clock,
  Users,
  FilePlus,
  LayoutGrid,
  Globe,
  MessageSquare,
  X,
  Minus,
  Maximize2,
  Minimize2,
} from 'lucide-react';

export function HeaderTop() {
  return (
    <header className="bg-header-top-background text-header-foreground px-2 py-1 flex items-center justify-between text-xs h-8">
      <div className="flex items-center gap-1">
        <button className="p-1 rounded-sm hover:bg-black/10">
          <Clock className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <Users className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <FilePlus className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <LayoutGrid className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span>Minha Empresa Calçados | Unidade Matriz | Usuário: Admin</span>
        <ChevronDown className="h-3 w-3 cursor-pointer" />
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">Sistema</span>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <Globe className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <MessageSquare className="h-4 w-4" />
        </button>
         <button className="p-1 rounded-sm hover:bg-black/10">
          <HelpCircle className="h-4 w-4" />
        </button>
        <div className="w-px h-4 bg-white/20 mx-1"></div>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <Minimize2 className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-black/10">
          <Maximize2 className="h-4 w-4" />
        </button>
        <button className="p-1 rounded-sm hover:bg-red-500/80">
          <X className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
