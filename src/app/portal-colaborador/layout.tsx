'use client';
import { MeuRHLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Clock, FileText, Home, User as UserIcon, Calendar, Megaphone, Receipt, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/portal-colaborador', label: 'Início', icon: Home },
  { href: '/portal-colaborador/ponto', label: 'Espelho de Ponto', icon: Clock },
  { href: '/portal-colaborador/holerites', label: 'Meus Holerites', icon: Receipt },
  { href: '/portal-colaborador/ferias', label: 'Férias', icon: Calendar },
  {
    label: 'Documentos',
    icon: FileText,
    isCollapsible: true,
    subItems: [
      { href: '/portal-colaborador/documentos/assinaturas', label: 'Assinaturas Pendentes' },
      { href: '/portal-colaborador/documentos/atestados', label: 'Atestados' },
      { href: '/portal-colaborador/documentos/contratos', label: 'Contratos' },
    ],
  },
  { href: '/portal-colaborador/comunicados', label: 'Comunicados', icon: Megaphone },
  { href: '/portal-colaborador/perfil', label: 'Meu Perfil', icon: UserIcon },
];

export default function PortalColaboradorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({
    'Documentos': pathname.startsWith('/portal-colaborador/documentos'),
  });

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({ ...prev, [label]: !prev[label] }));
  };


  return (
    <div className="flex h-screen bg-muted text-foreground">
      <aside className="w-[280px] flex-shrink-0 bg-card border-r flex flex-col">
        <div className="p-6 flex items-center gap-3 h-[88px] border-b">
          <MeuRHLogo className="w-9 h-9" />
          <span className="font-bold text-xl text-foreground">Meu RH</span>
        </div>
        <nav className="p-4 flex-grow">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isCollapsible ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className={cn(
                        'w-full flex items-center justify-between gap-3 px-4 py-3 my-1 rounded-lg text-sm font-medium transition-colors',
                         pathname.startsWith('/portal-colaborador/documentos')
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                      )}
                    >
                      <div className='flex items-center gap-3'>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </div>
                      {openSubmenus[item.label] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                    {openSubmenus[item.label] && (
                        <ul className="pl-8 py-1">
                            {item.subItems?.map(subItem => (
                                <li key={subItem.href}>
                                     <Link
                                      href={subItem.href}
                                      className={cn(
                                        'flex items-center gap-3 px-4 py-2 my-1 rounded-lg text-sm font-medium transition-colors',
                                        pathname === subItem.href
                                          ? 'text-primary'
                                          : 'text-muted-foreground hover:text-foreground'
                                      )}
                                    >
                                      <span>{subItem.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
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
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
}
