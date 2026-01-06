'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Globe, Briefcase, Save } from 'lucide-react';

export default function PortalCarreirasPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Globe className="mr-2" />
                        Configuração do Portal de Carreiras
                    </CardTitle>
                    <CardDescription>Personalize a página pública onde os candidatos verão e se aplicarão às vagas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <Label htmlFor="portal-status" className="font-semibold text-base">Ativar Portal de Carreiras</Label>
                            <p className="text-sm text-muted-foreground">Torna sua página de vagas pública.</p>
                        </div>
                        <Switch id="portal-status" defaultChecked />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="portal-title">Título da Página</Label>
                        <Input id="portal-title" defaultValue="Venha Fazer Parte da Nossa Equipe!" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="portal-description">Texto de Boas-Vindas</Label>
                        <Textarea id="portal-description" defaultValue="Somos uma empresa líder no setor calçadista, apaixonados por inovação e qualidade. Se você quer crescer conosco, confira nossas vagas abertas!" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button><Save className="mr-2 h-4 w-4"/> Salvar Alterações</Button>
                </CardFooter>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="flex items-center">
                        <Briefcase className="mr-2" />
                        Vagas Publicadas
                    </CardTitle>
                    <CardDescription>Gerencie quais vagas aparecerão publicamente no portal.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">Desenvolvedor Frontend Pleno</p>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="vaga-1">Publicar</Label>
                            <Switch id="vaga-1" defaultChecked />
                        </div>
                   </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">Analista de Dados Jr</p>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="vaga-2">Publicar</Label>
                            <Switch id="vaga-2" defaultChecked />
                        </div>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                        <p className="font-medium">UX/UI Designer</p>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="vaga-3">Publicar</Label>
                            <Switch id="vaga-3" />
                        </div>
                   </div>
                </CardContent>
            </Card>
        </div>
    );
}
