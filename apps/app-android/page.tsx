'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function AppAndroidPage() {
    return (
        <div className="p-4 space-y-6 bg-muted min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Smartphone className="h-7 w-7 text-primary" />
                        Página do App Android
                    </CardTitle>
                    <CardDescription>
                        Este é o conteúdo da página do App Android, criada na raiz do projeto.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>O conteúdo específico para o gerenciamento do App Android pode ser adicionado aqui.</p>
                </CardContent>
            </Card>
        </div>
    );
}
