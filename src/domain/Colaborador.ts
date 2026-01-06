/**
 * @file Representa a entidade Colaborador, contendo seus atributos e regras de negócio.
 */

export type ColaboradorStatus = 'Ativo' | 'Férias' | 'Afastado';

/**
 * Representa um membro da equipe da empresa.
 */
export class Colaborador {
  readonly id: string;
  readonly nome: string;
  readonly cargoId: string;
  readonly setorId: string;
  readonly status: ColaboradorStatus;
  readonly filialId: string;

  constructor(
    id: string,
    nome: string,
    cargoId: string,
    setorId: string,
    status: ColaboradorStatus,
    filialId: string
  ) {
    if (!nome) throw new Error("O nome do colaborador é obrigatório.");
    this.id = id;
    this.nome = nome;
    this.cargoId = cargoId;
    this.setorId = setorId;
    this.status = status;
    this.filialId = filialId;
  }
}
