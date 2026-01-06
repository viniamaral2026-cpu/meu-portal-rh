/**
 * @fileoverview Define as interfaces (modelos) para as entidades do sistema.
 * Essas interfaces garantem a consistência e a tipagem dos dados em toda a aplicação.
 */

export interface Colaborador {
    id: string;
    nome: string;
    cargoId: string;
    setorId: string;
    status: 'Ativo' | 'Férias' | 'Afastado';
    filialId: string;
}

export interface Cargo {
    id: string;
    nome: string;
    departamentoId: string;
    salarioMin: number;
    salarioMax: number;
}

export interface Departamento {
    id: string;
    nome: string;
}

export interface Vaga {
    id: string;
    titulo: string;
    departamentoId: string;
}

export interface Candidato {
    id: string;
    nome: string;
    vagaId: string;
    status: 'Triagem' | 'Entrevista RH' | 'Entrevista Técnica' | 'Proposta' | 'Rejeitado';
    score: number;
    avatar: string;
    email: string;
    telefone: string;
}

export interface Filial {
    id: string;
    nome: string;
    cnpj: string;
    localizacao: string;
    status: 'active' | 'inactive' | 'setup';
}
