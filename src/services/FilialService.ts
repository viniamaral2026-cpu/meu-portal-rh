/**
 * @file Camada de serviço para as operações relacionadas a Filiais.
 * Contém a lógica de negócio e coordena o uso do repositório.
 */

import { Filial } from "@/domain/Filial";
import { FilialRepository } from "@/domain/FilialRepository";
import { inMemoryFilialRepository } from "@/infra/InMemoryFilialRepository";

class FilialService {
  // A injeção de dependência acontece aqui. Trocando a implementação
  // no construtor, podemos mudar de "em memória" para "PostgreSQL" sem
  // alterar a lógica do serviço.
  constructor(private repository: FilialRepository) {}

  async listarFiliais(): Promise<Filial[]> {
    // No futuro, o ID da empresa viria do AuthContext.
    const empresaId = "minha-empresa-mock";
    return this.repository.listarTodas(empresaId);
  }

  async criarFilial(dados: {
    nome: string;
    cnpj: string;
    localizacao: string;
  }): Promise<Filial> {
    const empresaId = "minha-empresa-mock";
    
    // A regra de negócio para criar uma filial fica na própria entidade.
    const novaFilial = Filial.create({ ...dados, empresaId });

    // O serviço coordena a persistência.
    await this.repository.salvar(novaFilial);

    return novaFilial;
  }
}

// Exporta uma instância singleton do serviço, já configurada com o repositório em memória.
// Em uma aplicação real, isso seria gerenciado por um container de injeção de dependência.
export const filialService = new FilialService(inMemoryFilialRepository);
