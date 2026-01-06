/**
 * @file Implementação em memória do repositório de Filiais.
 * Ideal para prototipagem e testes, pois não requer um banco de dados.
 * Os dados são perdidos quando o servidor é reiniciado.
 */

import { Filial, FilialStatus } from "@/domain/Filial";
import type { FilialRepository } from "@/domain/FilialRepository";

class InMemoryFilialRepository implements FilialRepository {
  // Simula uma tabela de banco de dados em memória.
  private filiais: Map<string, Filial> = new Map();

  constructor() {
    // Populamos com dados iniciais para a demonstração.
    const initialBranches: { id: string; name: string; location: string; cnpj: string; status: FilialStatus; }[] = [
      { id: 'matriz', name: 'Unidade Matriz', location: 'Franca, SP', cnpj: '00.000.000/0001-00', status: 'active' },
      { id: 'filial_mg', name: 'Filial Nova Serrana', location: 'Nova Serrana, MG', cnpj: '00.000.000/0002-00', status: 'active' },
      { id: 'filial_rs', name: 'Filial Sapiranga', location: 'Sapiranga, RS', cnpj: '00.000.000/0003-00', status: 'setup' },
    ];
    
    initialBranches.forEach(branch => {
        const filial = new Filial(branch.id, branch.name, branch.cnpj, branch.location, branch.status, "minha-empresa-mock");
        this.filiais.set(filial.id, filial);
    });
  }

  async listarTodas(empresaId: string): Promise<Filial[]> {
    // Filtra por empresaId para simular multi-tenancy.
    const todas = Array.from(this.filiais.values());
    return todas.filter(f => f.empresaId === empresaId);
  }

  async encontrarPorId(id: string): Promise<Filial | null> {
    const filial = this.filiais.get(id);
    return filial || null;
  }

  async salvar(filial: Filial): Promise<void> {
    this.filiais.set(filial.id, filial);
  }

  async excluir(id: string): Promise<void> {
    this.filiais.delete(id);
  }
}

// Exporta uma instância singleton do repositório.
export const inMemoryFilialRepository = new InMemoryFilialRepository();
