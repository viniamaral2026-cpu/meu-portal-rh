import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileUp, Filter } from "lucide-react";

const attendanceRecords = [
    { id: 1, name: 'Alice Johnson', date: '2023-12-04', checkIn: '09:02', checkOut: '18:05', hours: '8h 3m' },
    { id: 2, name: 'Bob Williams', date: '2023-12-04', checkIn: '08:55', checkOut: '17:58', hours: '8h 3m' },
    { id: 3, name: 'Charlie Brown', date: '2023-12-04', checkIn: '09:15', checkOut: '18:10', hours: '7h 55m' },
    { id: 4, name: 'Diana Miller', date: '2023-12-04', checkIn: '08:45', checkOut: '18:00', hours: '8h 15m' },
    { id: 5, name: 'Ethan Davis', date: '2023-12-04', checkIn: '09:00', checkOut: '17:30', hours: '7h 30m' },
];

export default function AttendancePage() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Registro de Ponto</CardTitle>
                    <CardDescription>Visualize e ajuste o histórico de ponto dos colaboradores.</CardDescription>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filtro</span>
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                        <FileUp className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Importar</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Colaborador</TableHead>
                            <TableHead>Data</TableHead>
                            <TableHead>Entrada</TableHead>
                            <TableHead>Saída</TableHead>
                            <TableHead>Horas</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendanceRecords.map(record => (
                            <TableRow key={record.id}>
                                <TableCell className="font-medium">{record.name}</TableCell>
                                <TableCell>{record.date}</TableCell>
                                <TableCell>{record.checkIn}</TableCell>
                                <TableCell>{record.checkOut}</TableCell>
                                <TableCell>{record.hours}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
