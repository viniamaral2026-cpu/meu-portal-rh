'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GPWayLogo } from '@/components/icons';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Módulos' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center space-x-6 text-sm font-medium', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GPWayLogo className="w-20" />
          </Link>
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                    <GPWayLogo className="w-20" />
                </Link>
                <NavLinks className="flex-col space-y-4 space-x-0 items-start" />
              </SheetContent>
            </Sheet>
          </div>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Can add a search bar here later */}
          </div>
          <nav className="flex items-center">
            <Button asChild size="sm">
              <Link href="#demonstracao">Agende sua demonstração</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
