
'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const activityLog = [
  {
    user: 'Alice',
    action: 'LOGIN',
    details: 'Login successful from IP 192.168.1.10',
    timestamp: '2023-10-27 09:00:15',
    status: 'Success',
  },
  {
    user: 'Bob',
    action: 'UPDATE_SALARY',
    details: 'Failed to update salary for employee #123. Insufficient permissions.',
    timestamp: '2023-10-27 09:05:22',
    status: 'Failure',
  },
  {
    user: 'Alice',
    action: 'VIEW_REPORT',
    details: 'Viewed financial report for Q3 2023',
    timestamp: '2023-10-27 09:08:41',
    status: 'Success',
  },
  {
    user: 'Charlie',
    action: 'CREATE_USER',
    details: 'Created new user: "dave"',
    timestamp: '2023-10-27 09:15:03',
    status: 'Success',
  },
  {
    user: 'Bob',
    action: 'LOGIN_ATTEMPT',
    details: 'Failed login attempt from IP 203.0.113.45',
    timestamp: '2023-10-27 09:20:50',
    status: 'Failure',
  },
];

export default function UserMonitoringPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLogs = activityLog.filter(log =>
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.details.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monitoramento de Atividade dos Usuários</CardTitle>
        <CardDescription>
          Acompanhe as ações e eventos importantes realizados pelos usuários no sistema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Filtrar por usuário, ação ou detalhes..."
            className="w-full pl-8"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>Ação</TableHead>
              <TableHead>Detalhes</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.user}</TableCell>
                <TableCell>
                  <Badge variant="outline">{log.action}</Badge>
                </TableCell>
                <TableCell>{log.details}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>
                  <Badge variant={log.status === 'Success' ? 'default' : 'destructive'}>
                    {log.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
