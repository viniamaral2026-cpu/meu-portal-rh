/**
 * @fileoverview Define o Data Transfer Object (DTO) para a entidade Filial.
 * DTOs são usados para controlar quais dados são expostos para as camadas externas,
 * como a UI, desacoplando a interface da entidade de domínio.
 */

import type { FilialStatus } from "@/domain/Filial";

export interface FilialDTO {
  readonly id: string;
  readonly nome: string;
  readonly cnpj: string;
  readonly localizacao: string;
  readonly status: FilialStatus;
}
