'use client';
import { MeuRHLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Clock, FileText, Home, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/portal-colaborador', label: 'Início', icon: Home },
  { href: '/portal-colaborador/ponto', label: 'Ponto', icon: Clock },
  { href: '/portal-colaborador/documentos', label: 'Documentos', icon: FileText },
  { href: '/portal-colaborador/perfil', label: 'Perfil', icon: UserIcon },
];

export default function PortalColaboradorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // This layout removes the top bar and integrates the header into the main content area
  // as shown in the new design.
  return (
    <div className="flex h-screen bg-muted/40 text-foreground">
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 bg-card border-r">
        <div className="p-6 flex items-center gap-3 h-[88px] border-b">
          <MeuRHLogo className="w-9 h-9" />
          <span className="font-bold text-xl text-foreground">Meu RH</span>
        </div>
        <nav className="p-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* The top bar is removed, and the header is part of the page content now */}
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
}
