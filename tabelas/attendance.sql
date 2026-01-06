-- Tabela para registrar os pontos (batidas de ponto) dos funcionários.
CREATE TABLE attendance (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    employee_id UUID NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
    data DATE NOT NULL,
    entrada TIMESTAMPTZ,
    saida TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE attendance IS 'Registros de entrada e saída dos funcionários para controle de ponto.';
