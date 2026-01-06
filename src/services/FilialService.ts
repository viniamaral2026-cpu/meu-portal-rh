/**
 * @file Camada de serviço (fachada) para as operações de Filiais.
 * Orquestra a execução dos casos de uso e serve como uma fronteira
 * para a camada de UI (controllers).
 */
import { FilialRepository } from "@/domain/FilialRepository";
import { inMemoryFilialRepository } from "@/infra/InMemoryFilialRepository";
import type { FilialDTO } from "@/application/dtos/FilialDTO";
import { ListarFiliais } from "@/application/use-cases/ListarFiliais";
import { CriarFilial } from "@/application/use-cases/CriarFilial";

// Define a interface para os dados de criação, usada pelo serviço.
export interface CriarFilialData {
  nome: string;
  cnpj: string;
  localizacao: string;
}

class FilialService {
  private listarFiliaisUseCase: ListarFiliais;
  private criarFilialUseCase: CriarFilial;

  // A injeção de dependência acontece aqui.
  constructor(private repository: FilialRepository) {
    this.listarFiliaisUseCase = new ListarFiliais(this.repository);
    this.criarFilialUseCase = new CriarFilial(this.repository);
  }

  /**
   * Executa o caso de uso para listar todas as filiais.
   * @returns Uma promessa com a lista de FilialDTOs.
   */
  async listarFiliais(): Promise<FilialDTO[]> {
    // No futuro, o ID da empresa viria do AuthContext.
    const empresaId = "minha-empresa-mock";
    return this.listarFiliaisUseCase.execute(empresaId);
  }

  /**
   * Executa o caso de uso para criar uma nova filial.
   * @param dados Os dados para a nova filial.
   * @returns Uma promessa com o DTO da filial criada.
   */
  async criarFilial(dados: CriarFilialData): Promise<FilialDTO> {
    const empresaId = "minha-empresa-mock";
    return this.criarFilialUseCase.execute({ ...dados, empresaId });
  }
}

// Exporta uma instância singleton do serviço, já configurada com o repositório.
export const filialService = new FilialService(inMemoryFilialRepository);