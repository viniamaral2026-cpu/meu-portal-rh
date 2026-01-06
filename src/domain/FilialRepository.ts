/**
 * @file Define a interface (contrato) para o repositório de Filiais.
 * Esta abstração permite que a camada de serviço não conheça os detalhes
 * de implementação da persistência de dados (seja em memória, banco de dados, etc).
 */

import type { Filial } from './Filial';

export interface FilialRepository {
  /**
   * Lista todas as filiais de uma empresa.
   * @param empresaId O ID da empresa (para futuro uso multi-tenant).
   */
  listarTodas(empresaId: string): Promise<Filial[]>;

  /**
   * Encontra uma filial pelo seu ID.
   * @param id O ID da filial a ser encontrada.
   * @returns A filial encontrada ou null se não existir.
   */
  encontrarPorId(id: string): Promise<Filial | null>;

  /**
   * Salva (cria ou atualiza) uma filial.
   * @param filial A instância da entidade Filial a ser salva.
   */
  salvar(filial: Filial): Promise<void>;

  /**
   * Exclui uma filial pelo seu ID.
   * @param id O ID da filial a ser excluída.
   */
  excluir(id: string): Promise<void>;
}
