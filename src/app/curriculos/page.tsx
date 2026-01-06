
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, PlusCircle, Upload, Eye, ThumbsUp, ThumbsDown, Mail, Phone, ChevronRight, Video } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { candidatos, vagas } from '@/data/database';

const statusColumns = ['Triagem', 'Entrevista RH', 'Entrevista Técnica', 'Proposta', 'Rejeitado'];


export default function GestaoCurriculosPage() {
    const [selectedVagaId, setSelectedVagaId] = useState("v1");
    const [selectedCandidato, setSelectedCandidato] = useState(candidatos[0]);
    const [interviewDialogOpen, setInterviewDialogOpen] = useState(false);
    
    const getCandidatosPorVaga = (vagaId: string) => candidatos.filter(c => c.vagaId === vagaId);
    
    const selectedVaga = vagas.find(v => v.id === selectedVagaId);

  return (
    <div className="h-full flex flex-col">
        <div className="p-4 border-b">
            <h1 className="text-2xl font-bold">Gestão de Currículos (ATS)</h1>
            <p className="text-muted-foreground">Gerencie suas vagas e o fluxo de candidatos de ponta a ponta.</p>
        </div>
        <div className="flex-1 grid grid-cols-[250px_1fr_350px] overflow-hidden">
            {/* Painel de Vagas */}
            <div className="border-r bg-muted/40 flex flex-col">
                <div className="p-4 space-y-2">
                    <Input placeholder="Buscar vaga..." />
                    <Button className="w-full"><PlusCircle className="mr-2 h-4 w-4"/> Nova Vaga</Button>
                </div>
                <Separator />
                <div className="flex-1 overflow-y-auto">
                    {vagas.map(vaga => (
                        <button key={vaga.id}
                           className={`w-full text-left p-4 text-sm font-medium hover:bg-accent ${selectedVagaId === vaga.id ? 'bg-accent' : ''}`}
                           onClick={() => setSelectedVagaId(vaga.id)}
                        >
                           <p>{vaga.titulo}</p>
                           <p className="text-xs text-muted-foreground">{getCandidatosPorVaga(vaga.id).length} candidatos</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Painel Kanban de Candidatos */}
            <div className="flex-1 p-4 overflow-x-auto">
                <div className="grid grid-cols-5 gap-4 min-w-[1200px]">
                    {statusColumns.map(status => (
                        <div key={status} className="bg-muted/60 rounded-lg p-2">
                            <h3 className="font-semibold p-2">{status} ({getCandidatosPorVaga(selectedVagaId).filter(c => c.status === status).length})</h3>
                            <div className="space-y-2">
                                {getCandidatosPorVaga(selectedVagaId)
                                    .filter(c => c.status === status)
                                    .map(candidato => (
                                        <Card key={candidato.id} className="p-3 cursor-pointer" onClick={() => setSelectedCandidato(candidato)}>
                                            <CardTitle className="text-sm">{candidato.nome}</CardTitle>
                                            <div className="flex justify-between items-center mt-2">
                                                <Badge variant="secondary">Score: {candidato.score}%</Badge>
                                                <Avatar className="h-6 w-6">
                                                    <AvatarFallback>{candidato.avatar}</AvatarFallback>
                                                </Avatar>
                                            </div>
                                        </Card>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Painel de Detalhes do Candidato */}
            {selectedCandidato && (
                <div className="border-l bg-card flex flex-col">
                    <div className="p-4 text-center border-b">
                        <Avatar className="h-20 w-20 mx-auto mb-2">
                            <AvatarFallback className="text-3xl">{selectedCandidato.avatar}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-lg font-bold">{selectedCandidato.nome}</h2>
                        <p className="text-sm text-muted-foreground">{vagas.find(v => v.id === selectedCandidato.vagaId)?.titulo}</p>
                        <div className="flex justify-center gap-2 mt-3">
                            <Button variant="outline" size="icon"><Mail className="h-4 w-4"/></Button>
                            <Button variant="outline" size="icon"><Phone className="h-4 w-4"/></Button>
                            <Dialog open={interviewDialogOpen} onOpenChange={setInterviewDialogOpen}>
                                <DialogTrigger asChild>
                                <Button variant="default" size="icon"><Video className="h-4 w-4"/></Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[90vh]">
                                    <DialogHeader>
                                    <DialogTitle>Entrevista com {selectedCandidato.nome}</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid grid-cols-2 gap-6 h-full overflow-hidden">
                                        <div className="bg-muted rounded-md flex items-center justify-center h-full">
                                            <p className="text-muted-foreground">Área para vídeo da entrevista (Google Meet Link)</p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-base">Guia da Entrevista</CardTitle>
                                                </CardHeader>
                                                <CardContent className="text-sm space-y-2">
                                                    <p>1. Apresentação e quebra-gelo.</p>
                                                    <p>2. Fale sobre sua experiência com React.</p>
                                                    <p>3. Qual seu maior desafio técnico?</p>
                                                    <p>4. Perguntas do candidato.</p>
                                                </CardContent>
                                            </Card>
                                             <Card className="flex-1">
                                                <CardHeader>
                                                    <CardTitle className="text-base">Anotações do Entrevistador</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <textarea className="w-full h-full border rounded-md p-2 text-sm" placeholder="Digite suas anotações aqui..."/>
                                                </CardContent>
                                            </Card>
                                            <DialogFooter>
                                                <Button onClick={() => setInterviewDialogOpen(false)}>Finalizar Entrevista</Button>
                                            </DialogFooter>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto text-sm">
                        <p><strong>Email:</strong> {selectedCandidato.email}</p>
                        <p><strong>Telefone:</strong> {selectedCandidato.telefone}</p>
                        <Separator />
                        <h4 className="font-semibold">Resumo do Currículo</h4>
                        <p className="text-muted-foreground">
                        Desenvolvedor Frontend com 5 anos de experiência em React, Next.js e TypeScript. Focado em criar interfaces de usuário reativas e performáticas. Experiência com testes unitários e CI/CD.
                        </p>
                        <Separator />
                        <h4 className="font-semibold">Histórico de Atividades</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <ChevronRight className="h-4 w-4 mr-2"/> Entrevista técnica agendada para 28/07/2024.
                            </li>
                            <li className="flex items-center">
                                <ChevronRight className="h-4 w-4 mr-2"/> Aprovado na entrevista com RH.
                            </li>
                        </ul>
                    </div>
                     <CardFooter className="p-4 border-t flex gap-2">
                        <Button className="w-full" variant="outline"><ThumbsDown className="mr-2 h-4 w-4"/> Rejeitar</Button>
                        <Button className="w-full"><ThumbsUp className="mr-2 h-4 w-4"/> Aprovar</Button>
                    </CardFooter>
                </div>
            )}
        </div>
    </div>
  )
}
