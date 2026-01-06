"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from '@/lib/supabase'

export default async function NotesPage() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notas do Supabase</CardTitle>
        <CardDescription>Esta é uma página de exemplo que busca dados diretamente da sua tabela 'notes' no Supabase.</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-muted p-4 rounded-lg">{JSON.stringify(notes, null, 2)}</pre>
      </CardContent>
    </Card>
  )
}
