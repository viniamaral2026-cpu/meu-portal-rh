-- Tabela para organizar os departamentos da empresa.
CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(255) NOT NULL,
    -- A chave estrangeira 'gerente_id' será adicionada após a criação da tabela 'employees'.
    -- gerente_id UUID REFERENCES employees(id), 
    localizacao VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE departments IS 'Define os departamentos da empresa, como RH, TI, Produção, etc.';
