-- Tabela para armazenar os usuários do sistema, com suas credenciais e permissões.
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Em um ambiente real, isso armazenaria um hash da senha.
    cargo VARCHAR(100),
    permissoes JSONB, -- Permite armazenar um conjunto flexível de regras de permissão.
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE users IS 'Armazena os dados de login e permissões dos usuários do sistema.';
