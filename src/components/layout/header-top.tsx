import { ChevronDown, Bell, HelpCircle, Settings, Power } from 'lucide-react';

export function HeaderTop() {
  return (
    <header className="bg-header-background text-header-foreground px-4 py-1 flex items-center justify-between text-xs">
      <div className="flex items-center gap-4">
        <div className="font-bold">Sistema</div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Gestão</span>
          <ChevronDown className="h-3 w-3" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Ambiente</span>
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>Minha Empresa Calçados | Unidade Matriz | Usuário: Admin</span>
        <ChevronDown className="h-3 w-3 cursor-pointer" />
        <Bell className="h-4 w-4 cursor-pointer" />
        <HelpCircle className="h-4 w-4 cursor-pointer" />
        <Settings className="h-4 w-4 cursor-pointer" />
        <Power className="h-4 w-4 cursor-pointer" />
      </div>
    </header>
  );
}
