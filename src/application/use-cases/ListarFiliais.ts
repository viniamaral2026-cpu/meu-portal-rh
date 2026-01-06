/**
 * @fileoverview Caso de Uso para listar todas as filiais de uma empresa.
 */

import type { FilialRepository } from "@/domain/FilialRepository";
import type { FilialDTO } from "../dtos/FilialDTO";

export class ListarFiliais {
  constructor(private filialRepository: FilialRepository) {}

  /**
   * Executa a listagem de filiais.
   * @param empresaId O ID da empresa para filtrar as filiais.
   * @returns Uma promessa com uma lista de FilialDTOs.
   */
  async execute(empresaId: string): Promise<FilialDTO[]> {
    // 1. Busca as entidades de domínio através do repositório.
    const filiais = await this.filialRepository.listarTodas(empresaId);

    // 2. Mapeia as entidades de domínio para DTOs antes de retorná-las.
    // Isso garante que a camada de domínio não "vaze" para a UI.
    return filiais.map((filial) => ({
      id: filial.id,
      nome: filial.nome,
      cnpj: filial.cnpj,
      localizacao: filial.localizacao,
      status: filial.status,
    }));
  }
}
