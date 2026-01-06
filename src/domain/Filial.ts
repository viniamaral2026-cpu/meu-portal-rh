/**
 * @file Representa a entidade Filial, contendo seus atributos e regras de negócio.
 */

// Define os possíveis status de uma filial.
export type FilialStatus = 'active' | 'inactive' | 'setup';

/**
 * Representa uma unidade de negócio da empresa.
 * A classe garante a integridade dos dados e encapsula as regras de negócio
 * relacionadas a uma filial.
 */
export class Filial {
  readonly id: string;
  readonly nome: string;
  readonly cnpj: string;
  readonly localizacao: string;
  readonly status: FilialStatus;
  readonly empresaId: string; // Prepara para multi-tenant no futuro.

  constructor(
    id: string,
    nome: string,
    cnpj: string,
    localizacao: string,
    status: FilialStatus,
    empresaId: string
  ) {
    if (!nome) throw new Error("O nome da filial é obrigatório.");
    if (!cnpj) throw new Error("O CNPJ da filial é obrigatório."); // Validação simples, poderia ser mais robusta.

    this.id = id;
    this.nome = nome;
    this.cnpj = cnpj;
    this.localizacao = localizacao;
    this.status = status;
    this.empresaId = empresaId; // Hardcoded por enquanto.
  }

  /**
   * Fábrica estática para criar uma nova filial, gerando um ID e definindo status inicial.
   */
  static create(props: {
    nome: string;
    cnpj: string;
    localizacao: string;
    empresaId: string;
  }): Filial {
    const id = `filial_${new Date().getTime()}`; // Simulação de geração de ID
    return new Filial(id, props.nome, props.cnpj, props.localizacao, 'setup', props.empresaId);
  }

  /**
   * Desativa uma filial. Retorna uma nova instância da filial com o status atualizado.
   * Uma filial já inativa não pode ser desativada novamente.
   */
  desativar(): Filial {
    if (this.status === 'inactive') {
      throw new Error("A filial já está inativa.");
    }
    return new Filial(this.id, this.nome, this.cnpj, this.localizacao, 'inactive', this.empresaId);
  }

  /**
   * Ativa uma filial. Retorna uma nova instância da filial com o status atualizado.
   */
  ativar(): Filial {
    if (this.status === 'active') {
      throw new Error("A filial já está ativa.");
    }
    return new Filial(this.id, this.nome, this.cnpj, this.localizacao, 'active', this.empresaId);
  }
}
