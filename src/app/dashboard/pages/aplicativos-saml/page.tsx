'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import {
  PlusCircle,
  Edit,
  Trash2,
  KeyRound,
  ShieldCheck,
  FileCode,
  CheckCircle,
  XCircle,
  Copy,
  Download,
  Upload,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

type SPStatus = 'active' | 'inactive';

type ServiceProvider = {
  id: string;
  name: string;
  logo: string;
  entityId: string;
  acsUrl: string;
  status: SPStatus;
  createdAt: string;
};

const initialSPs: ServiceProvider[] = [
  { id: 'sp1', name: 'Zendesk', logo: 'https://img.icons8.com/?size=48&id=t233grSoKct4&format=png', entityId: 'https://minhaempresa.zendesk.com', acsUrl: 'https://minhaempresa.zendesk.com/access/saml', status: 'active', createdAt: '2023-05-20' },
  { id: 'sp2', name: 'Salesforce', logo: 'https://img.icons8.com/?size=48&id=x6Mr9p2d3i3q&format=png', entityId: 'https://minhaempresa.my.salesforce.com', acsUrl: 'https://minhaempresa.my.salesforce.com/login', status: 'active', createdAt: '2022-11-10' },
  { id: 'sp3', name: 'Plataforma Legada', logo: 'https://img.icons8.com/?size=48&id=13441&format=png', entityId: 'urn:plataforma:legado', acsUrl: 'https://legado.minhaempresa.com.br/sso/acs', status: 'inactive', createdAt: '2021-02-15' },
];

const statusConfig: { [key in SPStatus]: { text: string; badgeVariant: 'default' | 'secondary' } } = {
  active: { text: 'Ativo', badgeVariant: 'default' },
  inactive: { text: 'Inativo', badgeVariant: 'secondary' },
};

const IdPConfig = {
    entityId: 'https://meurh.minhaempresa.com.br/saml/metadata',
    ssoUrl: 'https://meurh.minhaempresa.com.br/saml/sso',
    certificate: 'MIIC... (Certificado X.509) ...'
}

export default function AplicativosSamlPage() {
    const [serviceProviders, setServiceProviders] = useState(initialSPs);
    const { toast } = useToast();

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        toast({ title: 'Copiado!', description: `${label} copiado para a área de transferência.` });
    };

  return (
    <div className="p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <KeyRound className="w-7 h-7" />
            Gerenciador de Aplicativos SAML (SSO)
          </CardTitle>
          <CardDescription>
            Configure o Single Sign-On para permitir que seus usuários acessem aplicativos de terceiros com suas credenciais do MeuRH.
          </CardDescription>
        </CardHeader>
      </Card>
      
      {/* Identity Provider Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'><ShieldCheck className='w-5 h-5 text-primary' /> Informações do Provedor de Identidade (IdP)</CardTitle>
          <CardDescription>Use estas informações para configurar o SAML no seu provedor de serviços (aplicativo externo).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="idp-entity-id">Entity ID</Label>
                <div className="flex gap-2">
                    <Input id="idp-entity-id" readOnly value={IdPConfig.entityId} />
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(IdPConfig.entityId, 'Entity ID')}><Copy className="w-4 h-4"/></Button>
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="idp-sso-url">URL de SSO</Label>
                <div className="flex gap-2">
                    <Input id="idp-sso-url" readOnly value={IdPConfig.ssoUrl} />
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(IdPConfig.ssoUrl, 'URL de SSO')}><Copy className="w-4 h-4"/></Button>
                </div>
            </div>
             <div className="space-y-2">
                <Label>Certificado X.509</Label>
                <div className="flex gap-2">
                    <Input readOnly value="**************************" />
                    <Button variant="outline" size="icon" onClick={() => copyToClipboard(IdPConfig.certificate, 'Certificado')}><Copy className="w-4 h-4"/></Button>
                    <Button variant="secondary"><Download className="w-4 h-4 mr-2" />Baixar</Button>
                </div>
            </div>
        </CardContent>
      </Card>
      
      {/* Service Provider Management */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
            <div>
                <CardTitle>Provedores de Serviço (SP) Conectados</CardTitle>
                <CardDescription>Aplicativos configurados para usar este sistema como provedor de identidade.</CardDescription>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button><PlusCircle className="mr-2 h-4 w-4" /> Adicionar Aplicativo</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Adicionar Aplicativo SAML</DialogTitle>
                        <DialogDescription>
                           Preencha as informações do provedor de serviço (Service Provider).
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="sp-name">Nome do Aplicativo</Label>
                            <Input id="sp-name" placeholder="Ex: Zendesk"/>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="sp-entity-id">Entity ID</Label>
                            <Input id="sp-entity-id" placeholder="Informado pelo provedor de serviço"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sp-acs-url">URL de ACS (Assertion Consumer Service)</Label>
                            <Input id="sp-acs-url" placeholder="Informado pelo provedor de serviço"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sp-nameid">Formato do NameID</Label>
                             <Select defaultValue="emailAddress">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="unspecified">Unspecified</SelectItem>
                                    <SelectItem value="emailAddress">EmailAddress</SelectItem>
                                    <SelectItem value="persistent">Persistent</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="secondary">Cancelar</Button>
                        <Button type="submit">Salvar Aplicativo</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Aplicativo</TableHead>
                        <TableHead>Entity ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {serviceProviders.map((sp) => (
                        <TableRow key={sp.id} className={sp.status === 'inactive' ? 'opacity-60' : ''}>
                            <TableCell className="font-medium">
                                <div className='flex items-center gap-3'>
                                    <Image src={sp.logo} width={24} height={24} alt={`${sp.name} logo`} />
                                    <span>{sp.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground font-mono text-xs">{sp.entityId}</TableCell>
                            <TableCell>
                                <Badge variant={statusConfig[sp.status].badgeVariant}>
                                    {sp.status === 'active' ? <CheckCircle className="mr-2 h-4 w-4" /> : <XCircle className="mr-2 h-4 w-4" />}
                                    {statusConfig[sp.status].text}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="outline" size="icon"><Edit className="h-4 w-4"/></Button>
                                <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4"/></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>

    </div>
  );
}
