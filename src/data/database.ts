/**
 * @fileoverview Simulação do banco de dados em memória.
 * Este arquivo atua como uma fonte de dados centralizada para a aplicação,
 * exportando arrays de objetos que representam as tabelas do sistema.
 */

import type { Colaborador, Cargo, Vaga, Candidato, Filial } from './models';

export const colaboradores: Colaborador[] = [
    { id: '001', nome: 'Ana Silva', cargoId: 'c1', setorId: 's1', status: 'Ativo', filialId: 'matriz' },
    { id: '002', nome: 'Bruno Costa', cargoId: 'c2', setorId: 's2', status: 'Ativo', filialId: 'matriz' },
    { id: '003', nome: 'Carlos Dias', cargoId: 'c3', setorId: 's1', status: 'Férias', filialId: 'filial_mg' },
    { id: '004', nome: 'Daniela Souza', cargoId: 'c4', setorId: 's3', status: 'Ativo', filialId: 'matriz' },
    { id: '005', nome: 'Eduardo Lima', cargoId: 'c5', setorId: 's1', status: 'Ativo', filialId: 'filial_rs' },
    { id: '006', nome: 'Fernanda Alves', cargoId: 'c6', setorId: 's4', status: 'Afastado', filialId: 'matriz' },
];

export const cargos: Cargo[] = [
    { id: 'c1', nome: 'Costureira', departamentoId: 'd1', salarioMin: 2200, salarioMax: 3500 },
    { id: 'c2', nome: 'Gerente de RH', departamentoId: 'd2', salarioMin: 8000, salarioMax: 15000 },
    { id: 'c3', nome: 'Operador de Máquinas', departamentoId: 'd1', salarioMin: 2500, salarioMax: 4000 },
    { id: 'c4', nome: 'Analista de TI', departamentoId: 'd3', salarioMin: 5000, salarioMax: 9000 },
    { id: 'c5', nome: 'Supervisor de Produção', departamentoId: 'd1', salarioMin: 6000, salarioMax: 10000 },
    { id: 'c6', nome: 'Auxiliar Administrativo', departamentoId: 'd4', salarioMin: 2000, salarioMax: 3000 },
    { id: 'c7', nome: 'Desenvolvedor Frontend Pl', departamentoId: 'd3', salarioMin: 5000, salarioMax: 9000 },
    { id: 'c8', nome: 'Analista de RH', departamentoId: 'd2', salarioMin: 4000, salarioMax: 7000 },
];

export const departamentos = [
    { id: 'd1', nome: 'Produção' },
    { id: 'd2', nome: 'Recursos Humanos' },
    { id: 'd3', nome: 'TI' },
    { id: 'd4', nome: 'Administrativo' },
    { id: 'd5', nome: 'Financeiro' },
    { id: 'd6', nome: 'Vendas' },
];

export const vagas: Vaga[] = [
    { id: 'v1', titulo: 'Desenvolvedor Frontend Pleno', departamentoId: 'd3' },
    { id: 'v2', titulo: 'Analista de Dados Jr', departamentoId: 'd3' },
    { id: 'v3', titulo: 'UX/UI Designer', departamentoId: 'd3' },
];

export const candidatos: Candidato[] = [
    { id: 'cand1', nome: 'Mariana Oliveira', vagaId: 'v1', status: 'Triagem', score: 85, avatar: 'MO', email: 'mari.oliveira@example.com', telefone: '(11) 98765-4321' },
    { id: 'cand2', nome: 'Rafael Martins', vagaId: 'v2', status: 'Entrevista RH', score: 92, avatar: 'RM', email: 'rafa.martins@example.com', telefone: '(21) 91234-5678' },
    { id: 'cand3', nome: 'Juliana Pereira', vagaId: 'v3', status: 'Rejeitado', score: 70, avatar: 'JP', email: 'ju.pereira@example.com', telefone: '(31) 99999-8888' },
    { id: 'cand4', nome: 'Fernando Costa', vagaId: 'v1', status: 'Entrevista Técnica', score: 88, avatar: 'FC', email: 'fer.costa@example.com', telefone: '(48) 98888-7777' },
    { id: 'cand5', nome: 'Carla Dias', vagaId: 'v2', status: 'Proposta', score: 95, avatar: 'CD', email: 'carla.dias@example.com', telefone: '(51) 98765-1234' },
];

export const filiais: Filial[] = [
    { id: 'matriz', nome: 'Unidade Matriz', localizacao: 'Franca, SP', cnpj: '00.000.000/0001-00', status: 'active' },
    { id: 'filial_mg', nome: 'Filial Nova Serrana', localizacao: 'Nova Serrana, MG', cnpj: '00.000.000/0002-00', status: 'active' },
    { id: 'filial_rs', nome: 'Filial Sapiranga', localizacao: 'Sapiranga, RS', cnpj: '00.000.000/0003-00', status: 'setup' },
];
