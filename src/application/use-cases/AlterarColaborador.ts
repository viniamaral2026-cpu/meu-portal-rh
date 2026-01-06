/**
 * @fileoverview Caso de Uso para a alteração de um Colaborador.
 */

import { Colaborador } from "@/domain/Colaborador";
import type { ColaboradorRepository } from "@/domain/ColaboradorRepository";

export interface AlterarColaboradorInput {
  id: string;
  nome: string;
  cargoId: string;
  setorId: string;
  status: 'Ativo' | 'Férias' | 'Afastado';
  filialId: string;
}

export class AlterarColaborador {
  constructor(private colaboradorRepository: ColaboradorRepository) {}

  /**
   * Executa a lógica para alterar um colaborador.
   * @param input Os dados do colaborador a serem alterados.
   */
  async execute(input: AlterarColaboradorInput): Promise<void> {
    const colaboradorExistente = await this.colaboradorRepository.encontrarPorId(input.id);
    if (!colaboradorExistente) {
      throw new Error("Colaborador não encontrado para alteração.");
    }
    
    // Cria uma nova instância com os dados atualizados
    // Em um sistema real com mais regras, poderiam existir métodos como `colaborador.alterarNome(novoNome)`
    const colaboradorAtualizado = new Colaborador(
        input.id,
        input.nome,
        input.cargoId,
        input.setorId,
        input.status,
        input.filialId
    );

    await this.colaboradorRepository.salvar(colaboradorAtualizado);
  }
}
