/**
 * @fileoverview Caso de Uso para a criação de uma nova Filial.
 * Contém a lógica de orquestração para criar uma filial, interagindo
 * com o domínio e o repositório.
 */

import { Filial } from "@/domain/Filial";
import type { FilialRepository } from "@/domain/FilialRepository";
import type { FilialDTO } from "../dtos/FilialDTO";

// Define a estrutura de dados de entrada para este caso de uso.
export interface CriarFilialInput {
  nome: string;
  cnpj: string;
  localizacao: string;
  empresaId: string;
}

export class CriarFilial {
  constructor(private filialRepository: FilialRepository) {}

  /**
   * Executa a lógica para criar uma nova filial.
   * @param input Os dados necessários para criar a filial.
   * @returns Uma promessa com o DTO da filial recém-criada.
   */
  async execute(input: CriarFilialInput): Promise<FilialDTO> {
    // 1. A regra de negócio para a criação da entidade é delegada ao próprio domínio.
    const novaFilial = Filial.create(input);

    // 2. O caso de uso orquestra a persistência através do repositório.
    await this.filialRepository.salvar(novaFilial);

    // 3. Retorna um DTO, e não a entidade de domínio, para a camada de serviço/UI.
    return {
      id: novaFilial.id,
      nome: novaFilial.nome,
      cnpj: novaFilial.cnpj,
      localizacao: novaFilial.localizacao,
      status: novaFilial.status,
    };
  }
}
