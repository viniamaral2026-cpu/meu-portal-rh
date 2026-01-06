'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Briefcase, Building, Mail, MapPin, Phone, PlusCircle, Search, Star, User, GraduationCap, GripVertical, FileText, Paperclip, MessageSquare, Video } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image';

// --- Mock Data Structures ---

type Candidate = {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: 'triagem' | 'entrevista-rh' | 'entrevista-tecnica' | 'proposta' | 'contratado';
  tags: string[];
  lastUpdate: string;
  details: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    resume: string;
    education: { institution: string; course: string; period: string }[];
    experience: { company: string; role: string; period: string; description: string }[];
    skills: string[];
  };
};

type Vacancy = {
  id: string;
  title: string;
  location: string;
  level: string;
  candidatesCount: number;
};

type Note = {
  id: string;
  author: string;
  timestamp: string;
  content: string;
};


// --- Mock Data ---

const vacancies: Vacancy[] = [
  { id: 'v1', title: 'Analista de RH Pleno', location: 'Matriz (SP)', level: 'Pleno', candidatesCount: 8 },
  { id: 'v2', title: 'Costureira (Pesponto)', location: 'Unidade MG', level: 'Operacional', candidatesCount: 25 },
  { id: 'v3', title: 'Supervisor de Corte', location: 'Matriz (SP)', level: 'Liderança', candidatesCount: 12 },
  { id: 'v4', title: 'Desenvolvedor Full Stack', location: 'Remoto', level: 'Sênior', candidatesCount: 4 },
];

const candidates: Candidate[] = [
  { id: 'c1', name: 'Ana Beatriz', avatar: '/placeholder.svg?text=AB', role: 'Analista de RH', status: 'entrevista-rh', tags: ['eSocial', 'Folha'], lastUpdate: '2 dias atrás', details: { email: 'ana.b@example.com', phone: '(11) 98765-4321', location: 'São Paulo, SP', linkedin: '#', resume: '...', education: [{institution: 'USP', course: 'Psicologia', period: '2015-2019'}], experience: [{company: 'Empresa X', role: 'Analista de RH Jr', period: '2020-2023', description: 'Atuei com R&S e T&D.'}], skills: ['eSocial', 'Folha de Pagamento', 'Entrevistas', 'Power BI'] } },
  { id: 'c2', name: 'Carlos Dantas', avatar: '/placeholder.svg?text=CD', role: 'Analista de RH', status: 'triagem', tags: ['Excel'], lastUpdate: '5 dias atrás', details: { email: 'carlos.d@example.com', phone: '(11) 98765-4322', location: 'São Paulo, SP', linkedin: '#', resume: '...', education: [], experience: [], skills: [] } },
  { id: 'c3', name: 'Mariana Silva', avatar: '/placeholder.svg?text=MS', role: 'Costureira', status: 'triagem', tags: [], lastUpdate: '1 dia atrás', details: { email: 'mariana.s@example.com', phone: '(31) 98765-1111', location: 'Belo Horizonte, MG', linkedin: '#', resume: '...', education: [], experience: [], skills: [] } },
  { id: 'c4', name: 'João Pereira', avatar: '/placeholder.svg?text=JP', role: 'Costureiro', status: 'entrevista-tecnica', tags: ['Couro'], lastUpdate: 'Hoje', details: { email: 'joao.p@example.com', phone: '(31) 98765-2222', location: 'Nova Serrana, MG', linkedin: '#', resume: '...', education: [], experience: [], skills: [] } },
  { id: 'c5', name: 'Felipe Souza', avatar: '/placeholder.svg?text=FS', role: 'Desenvolvedor Sênior', status: 'proposta', tags: ['React', 'Node.js', 'Firebase'], lastUpdate: 'Ontem', details: { email: 'felipe.s@example.com', phone: '(21) 99999-8888', location: 'Rio de Janeiro, RJ', linkedin: '#', resume: '...', education: [{institution: 'UFRJ', course: 'Ciência da Computação', period: '2010-2014'}], experience: [{company: 'Tech Startup Y', role: 'Desenvolvedor Pleno', period: '2018-2022', description: 'Desenvolvimento de aplicação SaaS.'}], skills: ['React', 'Node.js', 'Firebase', 'TypeScript', 'Next.js'] } },
];

const notes: Note[] = [
  { id: 'n1', author: 'Carla (RH)', timestamp: 'Ontem às 15:30', content: 'Candidato demonstrou excelente comunicação e conhecimento profundo em legislação trabalhista.' },
  { id: 'n2', author: 'Roberto (Gestor)', timestamp: 'Hoje às 10:15', content: 'Perfil técnico muito bom, mas parece ter pouca experiência com a máquina de pesponto eletrônica.' },
];

// --- Columns for Kanban ---
const columns = [
  { id: 'triagem', title: 'Triagem' },
  { id: 'entrevista-rh', title: 'Entrevista RH' },
  { id: 'entrevista-tecnica', title: 'Entrevista Técnica' },
  { id: 'proposta', title: 'Proposta' },
  { id: 'contratado', title: 'Contratado' },
];

// --- Components ---

const CandidateCard = ({ candidate }: { candidate: Candidate }) => (
  <Card className="p-3 mb-2 cursor-grab active:cursor-grabbing bg-card">
    <div className="flex items-start gap-3">
      <Avatar className="h-9 w-9">
        <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-sm">{candidate.name}</p>
        <p className="text-xs text-muted-foreground">{candidate.role}</p>
      </div>
    </div>
    <div className="mt-2 flex gap-1 flex-wrap">
      {candidate.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>)}
    </div>
    <p className="text-xs text-muted-foreground mt-2 text-right">Atualizado: {candidate.lastUpdate}</p>
  </Card>
);

const InterviewModal = ({ candidate }: { candidate: Candidate }) => (
    <DialogContent className="max-w-6xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center gap-2">
                <Video /> Entrevista com {candidate.name}
            </DialogTitle>
            <DialogDescription>
                Vaga: {candidate.role}
            </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 flex-grow overflow-hidden">
            {/* Main video and candidate info */}
            <div className="md:col-span-2 flex flex-col gap-4">
                <div className="bg-muted aspect-video w-full rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Área do vídeo da entrevista</p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Informações do Candidato</CardTitle>
                    </CardHeader>
                     <CardContent className="text-sm">
                        <p><strong>Email:</strong> {candidate.details.email}</p>
                        <p><strong>Telefone:</strong> {candidate.details.phone}</p>
                        <p><strong>Localização:</strong> {candidate.details.location}</p>
                    </CardContent>
                </Card>
            </div>
            {/* Notes and guide */}
            <div className="flex flex-col gap-4 overflow-y-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Anotações do Entrevistador</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Textarea placeholder="Digite suas anotações sobre o candidato aqui..." className="h-32"/>
                    </CardContent>
                </Card>
                <Card className="flex-grow">
                    <CardHeader>
                        <CardTitle>Guia de Entrevista</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                        <p className="font-semibold">Perguntas Comportamentais:</p>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li>Fale sobre um desafio que você enfrentou.</li>
                            <li>Como você lida com prazos apertados?</li>
                        </ul>
                        <p className="font-semibold mt-4">Perguntas Técnicas:</p>
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li>Qual sua experiência com a máquina X?</li>
                            <li>Descreva seu conhecimento em eSocial.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
         <div className="p-4 border-t flex justify-end gap-2 bg-background">
            <Button variant="outline">Salvar Anotações</Button>
            <Button>Finalizar e Mover Candidato</Button>
        </div>
    </DialogContent>
);


export default function CurriculosPage() {
    const [selectedVacancy, setSelectedVacancy] = useState<string>('v2');
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(candidates[3]);
    const { toast } = useToast();

    const handleNewNote = () => {
        toast({ title: 'Nova Anotação', description: 'Sua anotação foi salva com sucesso. (Simulação)' });
    }

    return (
        <div className="h-full flex gap-4 p-4">
            {/* Vacancies Panel */}
            <Card className="w-[350px] flex-shrink-0 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        Vagas Abertas <Button size="icon" variant="ghost"><PlusCircle size={20} /></Button>
                    </CardTitle>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Buscar vaga..." className="pl-8" />
                    </div>
                </CardHeader>
                <ScrollArea className="flex-grow">
                    <div className="p-2 space-y-1">
                        {vacancies.map(v => (
                            <div key={v.id}
                                 onClick={() => setSelectedVacancy(v.id)}
                                 className={cn(
                                     "p-3 rounded-lg cursor-pointer border-l-4",
                                     selectedVacancy === v.id ? 'bg-muted border-primary' : 'border-transparent hover:bg-muted/50'
                                 )}>
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-sm">{v.title}</p>
                                    <Badge variant={selectedVacancy === v.id ? 'default' : 'secondary'}>{v.candidatesCount}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">{v.location} - {v.level}</p>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </Card>

            {/* Kanban Board Panel */}
            <div className="flex-grow flex gap-4 overflow-x-auto">
                {columns.map(column => (
                    <div key={column.id} className="w-[280px] flex-shrink-0 bg-muted/60 rounded-lg flex flex-col">
                        <h3 className="font-semibold p-3 text-sm border-b">{column.title}</h3>
                        <ScrollArea className="flex-grow p-2">
                             {candidates.filter(c => c.status === column.id).map(c => (
                                <div key={c.id} onClick={() => setSelectedCandidate(c)}>
                                    <CandidateCard candidate={c} />
                                </div>
                             ))}
                        </ScrollArea>
                    </div>
                ))}
            </div>

            {/* Candidate Details Panel */}
            <Dialog>
                <Card className="w-[450px] flex-shrink-0 flex flex-col">
                    {selectedCandidate ? (
                        <>
                            <CardHeader className="text-center">
                                <Avatar className="h-20 w-20 mx-auto">
                                <AvatarFallback>{selectedCandidate.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="mt-2">{selectedCandidate.name}</CardTitle>
                                <CardDescription>{selectedCandidate.role}</CardDescription>
                                <div className="flex justify-center gap-2 pt-2">
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant="outline">
                                            <Image src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-32dp/logo_meet_2020q4_color_2x_web_32dp.png" alt="Google Meet" width={16} height={16} className="mr-2" />
                                            Agendar Entrevista
                                        </Button>
                                    </DialogTrigger>
                                    <Button size="sm" variant="destructive">Reprovar</Button>
                                    <Button size="sm">Mover</Button>
                                </div>
                            </CardHeader>
                            <Separator />
                            <ScrollArea className="flex-grow">
                                <CardContent className="p-4 space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><User size={16}/> Contato</h4>
                                        <div className="text-xs space-y-1 text-muted-foreground">
                                            <p className="flex items-center gap-2"><Mail size={12}/> {selectedCandidate.details.email}</p>
                                            <p className="flex items-center gap-2"><Phone size={12}/> {selectedCandidate.details.phone}</p>
                                            <p className="flex items-center gap-2"><MapPin size={12}/> {selectedCandidate.details.location}</p>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><FileText size={16}/> Resumo e Documentos</h4>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm"><Paperclip size={14} className="mr-2"/> Currículo.pdf</Button>
                                            <Button variant="outline" size="sm"><Paperclip size={14} className="mr-2"/> Portfólio.zip</Button>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><GraduationCap size={16}/> Formação</h4>
                                        {selectedCandidate.details.education.length > 0 ? selectedCandidate.details.education.map((edu, i) => (
                                            <p key={i} className="text-xs text-muted-foreground">{edu.course} em {edu.institution} ({edu.period})</p>
                                        )) : <p className="text-xs text-muted-foreground">Nenhuma formação informada.</p>}
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Briefcase size={16}/> Experiência</h4>
                                        {selectedCandidate.details.experience.length > 0 ? selectedCandidate.details.experience.map((exp, i) => (
                                            <div key={i} className='mb-2'>
                                                <p className="text-xs font-bold">{exp.role} @ {exp.company}</p>
                                                <p className="text-xs text-muted-foreground">{exp.period}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{exp.description}</p>
                                            </div>
                                        )) : <p className="text-xs text-muted-foreground">Nenhuma experiência informada.</p>}
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><Star size={16}/> Habilidades</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCandidate.details.skills.map(skill => (
                                                <Badge key={skill} variant="default">{skill}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2"><MessageSquare size={16}/> Anotações Internas</h4>
                                        <div className="space-y-3">
                                            {notes.map(note => (
                                                <div key={note.id} className="text-xs p-2 bg-muted/50 rounded-md">
                                                    <p className="font-bold">{note.author} <span className="font-normal text-muted-foreground">- {note.timestamp}</span></p>
                                                    <p>{note.content}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='mt-2 space-y-2'>
                                            <Textarea placeholder='Adicionar uma nova anotação...' className="text-xs" />
                                            <Button size="sm" className='w-full' onClick={handleNewNote}>Salvar Anotação</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </ScrollArea>
                        </>
                    ) : (
                        <div className="flex-grow flex items-center justify-center">
                            <p className="text-muted-foreground">Selecione um candidato para ver os detalhes</p>
                        </div>
                    )}
                </Card>
                {selectedCandidate && <InterviewModal candidate={selectedCandidate} />}
            </Dialog>
        </div>
    );
}