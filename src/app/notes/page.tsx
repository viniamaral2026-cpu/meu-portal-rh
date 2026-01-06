"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

async function getNotes() {
  // Nota: Em um app de produção, as variáveis de ambiente não estariam expostas diretamente no client-side.
  // Como este é um Server Component, a chamada é segura no servidor.
  const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/notes?select=*`, {
    headers: {
      'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
    },
    // O Next.js gerencia o cache para nós. Podemos ser mais explícitos se necessário.
    // cache: 'no-store' // Para garantir dados sempre frescos
  });

  if (!res.ok) {
    // Lidar com erros, talvez logar e retornar um array vazio.
    console.error('Failed to fetch notes from Supabase');
    return [];
  }

  return res.json();
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notas do Supabase (via REST API)</CardTitle>
        <CardDescription>Esta página busca dados diretamente da API REST do Supabase usando fetch.</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-4 rounded-lg">{JSON.stringify(notes, null, 2)}</pre>
      </CardContent>
    </Card>
  )
}
