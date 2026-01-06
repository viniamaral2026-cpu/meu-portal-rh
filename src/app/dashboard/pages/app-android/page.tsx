'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, BarChart2, Users, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function AppAndroidPage() {
    const stats = [
        { title: "Downloads Totais", value: "1,250", icon: Download },
        { title: "Usuários Ativos (Hoje)", value: "312", icon: Users },
        { title: "Versão Atual", value: "1.0.3", icon: Smartphone },
        { title: "Relatórios de Erro", value: "4", icon: AlertCircle },
    ];

    return (
        <div className="p-4 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Smartphone className="h-7 w-7 text-primary" />
                        Gerenciamento do App Android
                    </CardTitle>
                    <CardDescription>
                        Monitore o uso, envie notificações e gerencie as versões do aplicativo móvel para colaboradores.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <Card className='md:col-span-2'>
                    <CardHeader>
                        <CardTitle>Ações Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Button variant="outline" className="h-20 text-left justify-start p-4">
                            <div>
                                <p className="font-semibold">Enviar Notificação Push</p>
                                <p className="text-xs text-muted-foreground">Envie um alerta para todos os usuários do app.</p>
                            </div>
                        </Button>
                         <Button variant="outline" className="h-20 text-left justify-start p-4">
                            <div>
                                <p className="font-semibold">Publicar Nova Versão</p>
                                <p className="text-xs text-muted-foreground">Faça o upload de um novo APK para a Play Store.</p>
                            </div>
                        </Button>
                         <Button variant="outline" className="h-20 text-left justify-start p-4">
                            <div>
                                <p className="font-semibold">Ver Relatórios de Uso</p>
                                <p className="text-xs text-muted-foreground">Acesse o dashboard de analytics do app.</p>
                            </div>
                        </Button>
                        <Button variant="destructive" className="h-20 text-left justify-start p-4">
                            <div>
                                <p className="font-semibold">Forçar Atualização</p>
                                <p className="text-xs text-muted-foreground">Obrigue os usuários a atualizarem para a última versão.</p>
                            </div>
                        </Button>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>QR Code para Download</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center">
                         <div className="p-4 bg-white rounded-lg">
                            <Image
                                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com/store"
                                width={160}
                                height={160}
                                alt="QR Code para download do app"
                            />
                        </div>
                        <p className="text-center text-xs text-muted-foreground mt-2">
                            Aponte a câmera do celular para baixar o app da Play Store (simulação).
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

    