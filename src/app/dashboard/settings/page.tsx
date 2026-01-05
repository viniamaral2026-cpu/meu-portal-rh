import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Perfil</CardTitle>
                    <CardDescription>Atualize as informações do seu perfil e preferências de conta.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" defaultValue="Usuário Admin" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="admin@gpway.com" />
                    </div>
                    <Button>Salvar Alterações</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Personalização da Interface</CardTitle>
                    <CardDescription>Ajuste a aparência do seu dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="dark-mode">Modo Escuro</Label>
                            <p className="text-sm text-muted-foreground">Alterne entre o tema claro e escuro.</p>
                        </div>
                        <Switch id="dark-mode" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div>
                            <Label htmlFor="compact-view">Visão Compacta</Label>
                            <p className="text-sm text-muted-foreground">Exibir mais informações em menos espaço.</p>
                        </div>
                        <Switch id="compact-view" />
                    </div>
                     <Separator />
                    <div>
                        <Label>Módulos na Tela Inicial</Label>
                        <p className="text-sm text-muted-foreground mb-4">Selecione os cards de atalho para exibir no dashboard principal.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="module-performance" defaultChecked />
                                <label htmlFor="module-performance" className="text-sm font-medium leading-none">Desempenho</label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="module-attendance" defaultChecked />
                                <label htmlFor="module-attendance" className="text-sm font-medium leading-none">Ponto</label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="module-recruiting" />
                                <label htmlFor="module-recruiting" className="text-sm font-medium leading-none">Recrutamento</label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="module-reports" defaultChecked />
                                <label htmlFor="module-reports" className="text-sm font-medium leading-none">Relatórios</label>
                            </div>
                        </div>
                    </div>
                </CardContent>
                 <CardContent>
                    <Button>Salvar Preferências</Button>
                </CardContent>
            </Card>
        </div>
    );
}
