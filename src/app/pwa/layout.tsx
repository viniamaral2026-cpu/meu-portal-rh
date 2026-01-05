'use client';
import { useState } from 'react';
import {
  ArrowLeft,
  BarChart,
  Bell,
  Calculator,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  Home,
  List,
  Lock,
  LogOut,
  Menu,
  Plane,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const sidebarNavItems = [
  { icon: Home, label: 'Home' },
  { icon: Clock, label: 'Frequência' },
  { icon: Calculator, label: 'Folha de Pagamento' },
  { icon: Plane, label: 'Férias' },
  { icon: Send, label: 'Minhas Solicitações' },
  { icon: BarChart, label: 'Desempenho' },
  { icon: List, label: 'Descritivo de Cargo' },
  { icon: GraduationCap, label: 'Treinamentos' },
];

const bottomNavItems = [
  { icon: Home, label: 'Home' },
  { icon: ArrowLeft, label: 'Voltar' },
  { icon: Lock, label: 'Autenticação' },
  { icon: LogOut, label: 'Sair' },
];

export default function PwaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeItem = 'Férias';

  return (
    <div className="flex h-screen w-full bg-background md:p-4 md:py-8 justify-center">
      <div className="flex h-full w-full max-w-sm flex-col overflow-hidden rounded-lg bg-background shadow-2xl md:max-w-6xl md:flex-row">
        {/* Overlay for sidebar on mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            'fixed top-0 left-0 z-50 h-full w-64 transform bg-secondary text-foreground transition-transform duration-300 ease-in-out md:relative md:z-auto md:w-56 md:translate-x-0',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-4 pt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              MEUS DADOS
            </h2>
          </div>
          <nav className="mt-4 flex flex-col gap-2 p-2">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.label}
                variant={item.label === activeItem ? 'secondary' : 'ghost'}
                className={cn(
                  'h-12 justify-start',
                  item.label === activeItem
                    ? 'bg-accent font-bold text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>
        </aside>

        <div className="flex flex-1 flex-col">
          {/* Top Header */}
          <header className="flex items-center justify-between border-b bg-background p-3">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-primary"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center gap-2 text-lg font-bold text-primary">
                <Plane className="h-5 w-5" />
                <h1>Saldo de Férias</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                    A
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Alexandre</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4">{children}</main>

          {/* Bottom Navigation */}
          <footer className="grid grid-cols-4 border-t bg-background md:hidden">
            {bottomNavItems.map((item, index) => (
              <Button
                key={item.label}
                variant="ghost"
                className={cn(
                  'flex h-16 flex-col items-center justify-center rounded-none text-muted-foreground',
                  index === 0 ? 'text-primary' : ''
                )}
              >
                <item.icon className="h-6 w-6" />
                <span className="mt-1 text-xs">{item.label}</span>
              </Button>
            ))}
          </footer>
        </div>
      </div>
    </div>
  );
}
