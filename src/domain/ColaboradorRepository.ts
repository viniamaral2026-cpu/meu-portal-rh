/**
 * @file Define a interface (contrato) para o repositório de Colaboradores.
 */

import type { Colaborador } from './Colaborador';

export interface ColaboradorRepository {
  /**
   * Lista todos os colaboradores de uma empresa ou filial.
   * @param empresaId O ID da empresa.
   */
  listarTodos(empresaId: string): Promise<Colaborador[]>;

  /**
   * Encontra um colaborador pelo seu ID.
   * @param id O ID do colaborador.
   * @returns O colaborador encontrado ou null.
   */
  encontrarPorId(id: string): Promise<Colaborador | null>;

  /**
   * Salva (cria ou atualiza) um colaborador.
   * @param colaborador A instância da entidade Colaborador a ser salva.
   */
  salvar(colaborador: Colaborador): Promise<void>;

  /**
   * Exclui um colaborador pelo seu ID.
   * @param id O ID do colaborador a ser excluído.
   */
  excluir(id: string): Promise<void>;
}
