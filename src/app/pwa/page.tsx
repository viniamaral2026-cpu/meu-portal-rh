'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { X, ChevronUp } from 'lucide-react';

export default function PwaPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
           <h3 className="text-lg font-semibold text-primary mb-2">Colaborador</h3>
          <div>
            <p className="text-sm text-muted-foreground">Pessoa</p>
            <p className="font-medium text-card-foreground">Alexandre José Barbosa Lima Sobrinho</p>
          </div>
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">Contrato</p>
            <p className="font-medium text-card-foreground">(0001/1) Diretor</p>
          </div>
        </CardContent>
      </Card>

      <Accordion type="multiple" defaultValue={['programacao', 'saldo']} className="w-full space-y-4">
        <AccordionItem value="programacao" className="border-none">
           <Card>
             <AccordionTrigger className="w-full p-4 hover:no-underline data-[state=closed]:rounded-b-lg data-[state=open]:rounded-t-lg">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold text-primary">Programação de Férias</h3>
                    <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-muted-foreground">
                        <ChevronUp className="transition-transform duration-200" />
                        <X />
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="p-0">
                <CardContent className="p-4 pt-2">
                    <p className="text-muted-foreground">Nenhuma programação de férias encontrada.</p>
                </CardContent>
            </AccordionContent>
           </Card>
        </AccordionItem>

        <AccordionItem value="saldo" className="border-none">
          <Card>
            <AccordionTrigger className="w-full p-4 hover:no-underline data-[state=closed]:rounded-b-lg data-[state=open]:rounded-t-lg">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-lg font-semibold text-primary">Saldo de Férias</h3>
                     <div className="flex items-center gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-muted-foreground">
                        <ChevronUp className="transition-transform duration-200" />
                        <X />
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="p-0">
               <CardContent className="p-4 pt-2">
                <p className="text-muted-foreground">
                  No Vínculo Empregatício deste Contrato, está definido que o mesmo não recebe férias.
                </p>
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
