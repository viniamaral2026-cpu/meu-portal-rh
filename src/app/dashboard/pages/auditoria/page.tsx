'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AuditoriaPage() {

    const handleDownloadReport = () => {
        const reportContent = `
Relatório de Auditoria e Uso - Sistema MeuRH
Versão: 2.1.3-beta
Data de Emissão: ${new Date().toLocaleString('pt-BR')}

================================
1. Status dos Serviços
================================
- API Principal: Operacional
- Banco de Dados: Operacional
- Serviço de Email: Performance Degradada
- Conector RM: Operacional
- Serviço de Fila: Fora do Ar

================================
2. Uso Recente (Últimas 24h)
================================
- Usuários Ativos: 3
- Relatórios Gerados: 15
- Sincronizações com ERP: 128
- Admissões Registradas: 2
- Demissões Processadas: 1

================================
3. Atividades Críticas
================================
- [SUCESSO] Fechamento da Folha de Pagamento (Jun/2024) - Usuário: admin - IP: 189.45.12.3
- [FALHA] Tentativa de acesso não autorizado - Usuário: 'desconhecido' - IP: 201.5.67.18
- [INFO] Atualização de Parâmetros do eSocial - Usuário: carla.rh
- [SUCESSO] Envio de lote S-1200 para o eSocial - Usuário: admin

================================
4. Configuração do Ambiente
================================
- Ambiente Ativo: production
- URL Base: https://meurh.minhaempresa.com.br
- Versão do Node.js: 20.x
- Versão do Next.js: 15.x

* Este é um relatório de diagnóstico gerado automaticamente para fins de auditoria.
`;
        const blob = new Blob([reportContent.trim()], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `relatorio_auditoria_meurh_${Date.now()}.txt`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };


  return (
    <div className="p-4">
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Painel de Auditoria do Sistema</CardTitle>
                <CardDescription>
                    Informações de diagnóstico, status dos serviços e logs de atividades críticas para auditoria e suporte técnico.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <section>
                    <h3 className="text-lg font-semibold mb-2">Status dos Serviços</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="flex items-center gap-2"><CheckCircle className="text-green-500"/> API Principal & Banco de Dados</span>
                            <Badge variant="default">Operacional</Badge>
                        </div>
                         <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="flex items-center gap-2"><AlertTriangle className="text-yellow-500"/> Serviço de Email</span>
                            <Badge variant="secondary">Performance Degradada</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <span className="flex items-center gap-2"><CheckCircle className="text-green-500"/> Conector RM</span>
                            <Badge variant="default">Operacional</Badge>
                        </div>
                    </div>
                </section>
                
                <Separator />
                
                <section>
                    <h3 className="text-lg font-semibold mb-2">Logs de Atividade Crítica (Últimas 24h)</h3>
                     <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                            <Info className="h-4 w-4 text-blue-500" />
                            <span className="text-muted-foreground">[10:30]</span>
                            <span>Atualização de tabelas do eSocial por 'admin'.</span>
                        </div>
                         <div className="flex items-center gap-3 text-sm">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-muted-foreground">[08:15]</span>
                            <span>Falha no login do usuário 'carlos.dias' (IP: 177.8.9.10).</span>
                        </div>
                         <div className="flex items-center gap-3 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">[02:00]</span>
                            <span>Job de sincronização noturna iniciado.</span>
                        </div>
                    </div>
                </section>
            </CardContent>
            <CardFooter>
                 <Button onClick={handleDownloadReport}>
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Relatório de Auditoria Completo
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}