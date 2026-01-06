'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Shield, Copy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const samlApps = [
  { name: 'Azure AD', issuer: 'urn:federation:MicrosoftOnline', entityId: 'https://sts.windows.net/1234-abcd/', status: 'Ativo' },
  { name: 'Okta', issuer: 'http://www.okta.com/exkabcdef123', entityId: 'http://www.okta.com/exkabcdef123', status: 'Ativo' },
  { name: 'Google Workspace', issuer: 'https://accounts.google.com/o/saml2?idpid=C0123abcd', entityId: 'google.com/a/suaempresa.com', status: 'Inativo' },
]

export default function AplicativosSamlPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
            <div>
                <CardTitle>Aplicativos SAML (Single Sign-On)</CardTitle>
                <CardDescription>Configure provedores de identidade para login unificado.</CardDescription>
            </div>
             <Dialog>
                <DialogTrigger asChild>
                    <Button><PlusCircle className="mr-2 h-4 w-4"/> Configurar Provedor</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Configurar Novo Provedor SAML</DialogTitle>
                        <DialogDescription>Preencha os metadados fornecidos pelo seu provedor de identidade (IdP).</DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div>
                            <Label htmlFor="idp-name">Nome do Provedor (Ex: Azure AD)</Label>
                            <Input id="idp-name" />
                        </div>
                        <div>
                            <Label htmlFor="idp-issuer">IdP Issuer (Emissor)</Label>
                            <Input id="idp-issuer" placeholder="https://sts.windows.net/your-tenant-id/" />
                        </div>
                        <div>
                            <Label htmlFor="idp-sso-url">IdP SSO URL (Endpoint de Login)</Label>
                            <Input id="idp-sso-url" placeholder="https://login.microsoftonline.com/your-tenant-id/saml2" />
                        </div>
                        <div>
                            <Label htmlFor="idp-certificate">Certificado X.509</Label>
                            <textarea id="idp-certificate" className="w-full h-32 border rounded-md p-2 text-xs" placeholder="Cole o certificado público aqui..."></textarea>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" variant="secondary">Testar Conexão</Button>
                        <Button type="submit">Salvar Configuração</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome do Provedor</TableHead>
                        <TableHead>Issuer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {samlApps.map(app => (
                        <TableRow key={app.name}>
                            <TableCell className="font-medium">{app.name}</TableCell>
                            <TableCell>{app.issuer}</TableCell>
                            <TableCell><Badge variant={app.status === 'Ativo' ? 'default' : 'destructive'}>{app.status}</Badge></TableCell>
                            <TableCell>
                                <Button variant="outline" size="sm">Editar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
      <Card>
          <CardHeader>
            <CardTitle>Informações do Service Provider (MeuRH)</CardTitle>
            <CardDescription>Use estas informações para configurar o MeuRH no seu provedor de identidade.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                  <span className="text-sm font-medium">Entity ID</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs">urn:firebase:meurh-prod</code>
                    <Copy className="h-4 w-4 cursor-pointer text-muted-foreground" />
                  </div>
              </div>
               <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                  <span className="text-sm font-medium">ACS URL (Reply URL)</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs">https://meurh-prod.firebaseapp.com/__/auth/handler</code>
                    <Copy className="h-4 w-4 cursor-pointer text-muted-foreground" />
                  </div>
              </div>
          </CardContent>
      </Card>
    </div>
  );
}
