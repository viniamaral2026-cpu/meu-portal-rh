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
  LogOut,
  User,
  Building,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function HeaderTop() {
  return (
    <header className="bg-header-top-background text-header-foreground px-2 py-0.5 flex items-center justify-between text-xs h-7 border-b">
      <div className="flex items-center gap-1">
        <button className="p-1 rounded-sm hover:bg-white/10">
          <Clock className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <Users className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <FilePlus className="h-3.5 w-3.5" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <LayoutGrid className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 text-white/80 cursor-pointer p-1 rounded-md hover:bg-white/10">
                    <span>Minha Empresa Calçados | Unidade Matriz | Usuário: Admin</span>
                    <ChevronDown className="h-3 w-3" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                    <Building className="mr-2 h-4 w-4" />
                    <span>Trocar Filial</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>


      <div className="flex items-center gap-1">
        <span className="font-semibold text-white/80">Sistema</span>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <ChevronDown className="h-3.5 w-3.5 text-white/80" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <Globe className="h-3.5 w-3.5 text-white/80" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <MessageSquare className="h-3.5 w-3.5 text-white/80" />
        </button>
         <button className="p-1 rounded-sm hover:bg-white/10">
          <HelpCircle className="h-3.5 w-3.5 text-white/80" />
        </button>
        <div className="w-px h-4 bg-border mx-1"></div>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <Minimize2 className="h-3.5 w-3.5 text-white/80" />
        </button>
        <button className="p-1 rounded-sm hover:bg-white/10">
          <Maximize2 className="h-3.5 w-3.5 text-white/80" />
        </button>
        <button className="p-1 rounded-sm hover:bg-red-500/80 hover:bg-red-500">
          <X className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </header>
  );
}
