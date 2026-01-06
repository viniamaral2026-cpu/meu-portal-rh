/**
 * @file Camada de serviço (fachada) para as operações de Colaboradores.
 */
import type { ColaboradorRepository } from "@/domain/ColaboradorRepository";
import { inMemoryColaboradorRepository } from "@/infra/InMemoryColaboradorRepository";
import { ListarColaboradores } from "@/application/use-cases/ListarColaboradores";
import { ExcluirColaborador } from "@/application/use-cases/ExcluirColaborador";
import type { Colaborador } from "@/domain/Colaborador";

class ColaboradorService {
  private listarColaboradoresUseCase: ListarColaboradores;
  private excluirColaboradorUseCase: ExcluirColaborador;

  constructor(private repository: ColaboradorRepository) {
    this.listarColaboradoresUseCase = new ListarColaboradores(this.repository);
    this.excluirColaboradorUseCase = new ExcluirColaborador(this.repository);
  }

  async listarColaboradores(): Promise<Colaborador[]> {
    const empresaId = "minha-empresa-mock"; // Viria do contexto de autenticação
    return this.listarColaboradoresUseCase.execute(empresaId);
  }

  async excluirColaborador(id: string): Promise<void> {
    return this.excluirColaboradorUseCase.execute(id);
  }
}

export const colaboradorService = new ColaboradorService(inMemoryColaboradorRepository);
