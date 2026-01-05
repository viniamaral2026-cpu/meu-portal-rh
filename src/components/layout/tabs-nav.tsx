import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = ['Dashboard Principal', 'Consulta de Colaboradores', 'Gerador Saída'];

export function TabsNav() {
  return (
    <div className="mb-4">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`relative -bottom-px rounded-b-none border-b-2 py-2 px-4 text-sm font-medium ${
              tab === 'Gerador Saída'
                ? 'border-primary text-primary bg-background'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
            <X className="ml-2 h-4 w-4" />
          </Button>
        ))}
      </div>
    </div>
  );
}
