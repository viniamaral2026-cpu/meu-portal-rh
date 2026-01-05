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
    <header className="bg-card text-foreground px-2 py-0.5 flex items-center justify-between text-xs h-7 border-b">
      <div className="flex items-center gap-1">
        <button className="p-1 rounded-sm hover:bg-accent">
          <Clock className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <Users className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <FilePlus className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <LayoutGrid className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center gap-2 text-muted-foreground">
        <span>Minha Empresa Calçados | Unidade Matriz | Usuário: Admin</span>
        <ChevronDown className="h-3 w-3 cursor-pointer" />
      </div>

      <div className="flex items-center gap-1">
        <span className="font-semibold text-muted-foreground">Sistema</span>
        <button className="p-1 rounded-sm hover:bg-accent">
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <Globe className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
         <button className="p-1 rounded-sm hover:bg-accent">
          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <div className="w-px h-4 bg-border mx-1"></div>
        <button className="p-1 rounded-sm hover:bg-accent">
          <Minimize2 className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="p-1 rounded-sm hover:bg-accent">
          <Maximize2 className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="p-1 rounded-sm hover:bg-red-500/80 hover:bg-red-500">
          <X className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </header>
  );
}
