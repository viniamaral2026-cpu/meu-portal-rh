'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, CheckCircle2, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';

const versions = [
  { version: '2.1.0', date: '25/07/2024', type: 'new', changes: ['Adicionado módulo de Gestão de Currículos (ATS).', 'Novo dashboard de BI para RH.'] },
  { version: '2.0.5', date: '15/07/2024', type: 'fix', changes: ['Correção no cálculo de horas extras.', 'Melhoria de performance na exportação de relatórios.'] },
  { version: '2.0.0', date: '01/07/2024', type: 'major', changes: ['Lançamento do novo layout do sistema.', 'Integração com Portal do Colaborador.'] },
];

const getTypeInfo = (type: string) => {
    switch(type) {
        case 'new': return { icon: <Rocket className="h-4 w-4 mr-2"/>, label: 'Nova Funcionalidade', color: 'bg-blue-500' };
        case 'fix': return { icon: <Wrench className="h-4 w-4 mr-2"/>, label: 'Correção', color: 'bg-yellow-500' };
        case 'major': return { icon: <AlertTriangle className="h-4 w-4 mr-2"/>, label: 'Versão Maior', color: 'bg-purple-500' };
        default: return { icon: <CheckCircle2 className="h-4 w-4 mr-2"/>, label: 'Melhoria', color: 'bg-green-500' };
    }
}

export default function AtualizacaoSistemaPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Atualização do Sistema</CardTitle>
              <CardDescription>Você está na versão mais recente do MeuRH.</CardDescription>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">Versão Atual</p>
                <Badge variant="default" className="text-lg">2.1.0</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <Button>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Verificar Atualizações
            </Button>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Histórico de Versões</h2>
        <div className="space-y-6">
            {versions.map(v => {
                const typeInfo = getTypeInfo(v.type);
                return (
                    <Card key={v.version}>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <span className={`flex items-center justify-center h-8 w-8 rounded-full ${typeInfo.color} text-white mr-3`}>
                                        {typeInfo.icon}
                                    </span>
                                    <div>
                                        <CardTitle>Versão {v.version}</CardTitle>
                                        <CardDescription>Lançada em {v.date}</CardDescription>
                                    </div>
                                </div>
                                <Badge variant="secondary">{typeInfo.label}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold mb-2">Principais mudanças:</p>
                            <ul className="list-none space-y-2">
                                {v.changes.map((change, index) => (
                                    <li key={index} className="flex items-start">
                                        <ArrowRight className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                                        <span>{change}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </div>
  );
}
