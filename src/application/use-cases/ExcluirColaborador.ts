/**
 * @fileoverview Caso de Uso para a exclusão de um Colaborador.
 */

import type { ColaboradorRepository } from "@/domain/ColaboradorRepository";

export class ExcluirColaborador {
  constructor(private colaboradorRepository: ColaboradorRepository) {}

  /**
   * Executa a lógica para excluir um colaborador.
   * @param id O ID do colaborador a ser excluído.
   */
  async execute(id: string): Promise<void> {
    const colaborador = await this.colaboradorRepository.encontrarPorId(id);
    if (!colaborador) {
        throw new Error("Colaborador não encontrado para exclusão.");
    }
    await this.colaboradorRepository.excluir(id);
  }
}
