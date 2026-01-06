-- Tabela para armazenar informações detalhadas dos funcionários.
CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    departamento_id UUID REFERENCES departments(id) ON DELETE SET NULL,
    cargo VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2),
    data_admissao DATE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE employees IS 'Dados cadastrais e profissionais dos funcionários, vinculados a um usuário.';

-- Agora, podemos adicionar a referência do gerente na tabela de departamentos,
-- pois a tabela 'employees' já existe.
ALTER TABLE departments ADD COLUMN gerente_id UUID REFERENCES employees(id) ON DELETE SET NULL;
COMMENT ON COLUMN departments.gerente_id IS 'ID do funcionário que gerencia o departamento.';
