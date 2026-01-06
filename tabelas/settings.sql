-- Tabela para armazenar configurações de preferência da interface para cada usuário.
CREATE TABLE settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tema VARCHAR(50) DEFAULT 'light',
    borda VARCHAR(50) DEFAULT 'arredondada',
    notificacoes BOOLEAN DEFAULT true,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE settings IS 'Preferências de interface e notificações personalizadas por usuário.';
