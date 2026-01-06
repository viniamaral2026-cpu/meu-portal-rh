/**
 * @fileoverview Caso de Uso para listar todos os colaboradores.
 */

import type { ColaboradorRepository } from "@/domain/ColaboradorRepository";
import type { Colaborador } from "@/domain/Colaborador";

export class ListarColaboradores {
  constructor(private colaboradorRepository: ColaboradorRepository) {}

  /**
   * Executa a listagem de colaboradores.
   * @param empresaId O ID da empresa para filtrar os colaboradores.
   * @returns Uma promessa com uma lista de entidades Colaborador.
   */
  async execute(empresaId: string): Promise<Colaborador[]> {
    return this.colaboradorRepository.listarTodos(empresaId);
  }
}
