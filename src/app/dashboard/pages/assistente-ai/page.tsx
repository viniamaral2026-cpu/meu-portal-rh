'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PanelLeft, Pencil, Search, User, Grid, Plus } from 'lucide-react';

function SoundWaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C11.45 2 11 2.45 11 3V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V3C13 2.45 12.55 2 12 2Z" />
      <path d="M6 7C5.45 7 5 7.45 5 8V16C5 16.55 5.45 17 6 17C6.55 17 7 16.55 7 16V8C7 7.45 6.55 7 6 7Z" />
      <path d="M18 7C17.45 7 17 7.45 17 8V16C17 16.55 17.45 17 18 17C18.55 17 19 16.55 19 16V8C19 7.45 18.55 7 18 7Z" />
      <path d="M2 11C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13H3V11H2Z" />
      <path d="M21 11V13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H21Z" />
    </svg>
  );
}

export default function AssistenteAiPage() {
  return (
    <div className="flex h-full bg-card text-card-foreground">
      {/* Sidebar */}
      <aside className="flex flex-col items-center justify-between w-16 p-4 border-r">
        <div>
          <Button variant="ghost" size="icon">
            <PanelLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button variant="ghost" size="icon">
            <Pencil className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-grow"></div>
        <div>
          <Avatar>
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="flex justify-end p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid className="h-6 w-6" />
            </Button>
          </div>
        </header>

        <div className="flex-grow flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl font-medium text-center mb-10 text-muted-foreground">Por onde começamos?</h1>
            <div className="relative flex items-center">
              <div className="absolute left-4">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <Input
                placeholder="Pergunte alguma coisa"
                className="w-full h-14 pl-14 pr-20 rounded-full bg-background text-lg border-2"
              />
              <Button size="icon" className="absolute right-2 h-10 w-10 rounded-full bg-green-500 hover:bg-green-600">
                <SoundWaveIcon className="h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
        
        <footer className="p-4 text-center text-xs text-muted-foreground">
          <p>O Gemini pode apresentar informações imprecisas. Verifique os fatos importantes.</p>
        </footer>
      </main>
    </div>
  );
}
