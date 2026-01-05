import { GPWayLogo } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <GPWayLogo className="w-24 mb-4" />
            <p className="text-sm max-w-sm">
              Avenida Presidente Castelo Branco, 50, Sala 218, Centro, Igrejinha | RS – CEP: 95650-000
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:comercial@aporttsistemas.com.br" className="hover:text-primary transition-colors">
                  comercial@aporttsistemas.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5551933801885" className="hover:text-primary transition-colors">
                  (51) 9 3380-1885
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Páginas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Módulos</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container py-4 text-center text-sm text-muted-foreground">
        <p>© GPWay – Soluções em RH – Todos direitos reservados</p>
      </div>
    </footer>
  );
}
