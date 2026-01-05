import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, PlusCircle } from "lucide-react";

const evaluations = [
    { id: 'USR-001', name: 'Alice Johnson', date: '2023-11-15', score: 4.8, status: 'Completed' },
    { id: 'USR-002', name: 'Bob Williams', date: '2023-11-20', score: 4.5, status: 'Completed' },
    { id: 'USR-003', name: 'Charlie Brown', date: '2023-12-01', score: 0, status: 'Pending' },
    { id: 'USR-004', name: 'Diana Miller', date: '2023-11-25', score: 4.9, status: 'Completed' },
    { id: 'USR-005', name: 'Ethan Davis', date: '2023-12-05', score: 0, status: 'Pending' },
]

export default function PerformancePage() {
    return (
        <Tabs defaultValue="all">
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="all">Visão Geral</TabsTrigger>
                    <TabsTrigger value="add">Adicionar Avaliação</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8 gap-1">
                        <FileUp className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Importar
                        </span>
                    </Button>
                    <Button size="sm" className="h-8 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Nova Avaliação
                        </span>
                    </Button>
                </div>
            </div>
            <TabsContent value="all">
                <Card>
                    <CardHeader>
                        <CardTitle>Avaliações de Desempenho</CardTitle>
                        <CardDescription>Gerencie e visualize as avaliações de desempenho da sua equipe.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Colaborador</TableHead>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Pontuação</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {evaluations.map(evalItem => (
                                    <TableRow key={evalItem.id}>
                                        <TableCell className="font-medium">{evalItem.name}</TableCell>
                                        <TableCell>{evalItem.date}</TableCell>
                                        <TableCell>{evalItem.score > 0 ? evalItem.score : 'N/A'}</TableCell>
                                        <TableCell>{evalItem.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="add">
                 <Card>
                    <CardHeader>
                        <CardTitle>Adicionar Nova Avaliação</CardTitle>
                        <CardDescription>Preencha os campos para adicionar uma nova avaliação manualmente.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="employee">Colaborador</Label>
                            <Select>
                                <SelectTrigger id="employee">
                                    <SelectValue placeholder="Selecione um colaborador" />
                                </SelectTrigger>
                                <SelectContent>
                                    {evaluations.map(e => <SelectItem key={e.id} value={e.id}>{e.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="date">Data da Avaliação</Label>
                            <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="score">Pontuação (0 a 5)</Label>
                            <Input id="score" type="number" min="0" max="5" step="0.1" />
                        </div>
                        <Button>Salvar Avaliação</Button>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
