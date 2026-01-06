/**
 * @file Implementação em memória do repositório de Colaboradores.
 */

import { Colaborador, ColaboradorStatus } from "@/domain/Colaborador";
import type { ColaboradorRepository } from "@/domain/ColaboradorRepository";
import { colaboradores as initialColaboradores } from '@/data/database';

class InMemoryColaboradorRepository implements ColaboradorRepository {
  private colaboradores: Map<string, Colaborador> = new Map();

  constructor() {
    initialColaboradores.forEach(c => {
      const colaborador = new Colaborador(c.id, c.nome, c.cargoId, c.setorId, c.status, c.filialId);
      this.colaboradores.set(colaborador.id, colaborador);
    });
  }

  async listarTodos(empresaId: string): Promise<Colaborador[]> {
    // Simplesmente retorna todos para este mock. Em um caso real, filtraria por empresaId.
    return Array.from(this.colaboradores.values());
  }

  async encontrarPorId(id: string): Promise<Colaborador | null> {
    const colaborador = this.colaboradores.get(id);
    return colaborador || null;
  }

  async salvar(colaborador: Colaborador): Promise<void> {
    this.colaboradores.set(colaborador.id, colaborador);
  }

  async excluir(id: string): Promise<void> {
    if (!this.colaboradores.has(id)) {
        throw new Error("Colaborador não encontrado.");
    }
    this.colaboradores.delete(id);
  }
}

export const inMemoryColaboradorRepository = new InMemoryColaboradorRepository();
