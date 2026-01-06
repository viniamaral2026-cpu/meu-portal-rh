# Meu RH - Sistema de Gestão para Indústria de Calçados

Bem-vindo ao **Meu RH**, um sistema de gestão de recursos humanos e ERP completo, projetado especificamente para as necessidades da indústria de calçados. A plataforma integra desde a administração de pessoal e folha de pagamento até a gestão de produção e recrutamento, tudo em uma interface moderna e intuitiva.

Este projeto foi desenvolvido utilizando tecnologias de ponta para garantir performance, escalabilidade e uma excelente experiência de usuário.

## ✨ Funcionalidades Principais

O sistema é modular e abrange diversas áreas da gestão empresarial:

### Módulos de RH e Pessoal
- **Dashboard Principal:** Visão geral com KPIs de produção, ausências, pedidos e alertas de estoque.
- **Administração de Pessoal:** Cadastro e gerenciamento completo do perfil dos colaboradores.
- **Folha de Pagamento:** Cálculo, processamento e emissão de relatórios da folha mensal.
- **Controle de Jornada (REP-P):** Módulo para tratamento de ponto eletrônico, com painel de monitoramento da comunicação com os relógios (REP-P) e conformidade com a Portaria 671.
- **Portal do Colaborador:** Uma interface moderna para que os funcionários acessem holerites, espelho de ponto, solicitem férias e assinem documentos digitalmente.
- **Gestão de Férias e Rescisão:** Módulos para aprovar solicitações de férias e calcular rescisões contratuais.
- **Cargos e Salários:** Gerenciamento das estruturas de cargos e faixas salariais da empresa.
- **eSocial e Encargos:** Painéis para monitorar o envio de eventos ao eSocial e visualizar os encargos sociais.

### Gestão e BI
- **Gestão de Pessoas:** Dashboard com KPIs de RH, como headcount, turnover e avaliação de desempenho.
- **Gestão Financeira:** Análise de custos da folha de pagamento por setor e evolução histórica.
- **Gestão de Produção:** Acompanhamento em tempo real de ordens de produção, eficiência (OEE) e status das linhas.
- **BI de RH:** Painel de Business Intelligence com gráficos interativos sobre a composição da força de trabalho.

### Ferramentas e Utilitários
- **Gestão de Currículos (ATS):** Um sistema de rastreamento de candidatos completo, com pipeline kanban para vagas.
- **Gerador de Relatórios e Visões:** Ferramentas para criar relatórios e consultas personalizadas a partir dos dados do sistema.
- **Calculadora de Custos:** Ferramenta para calcular o custo de produção detalhado por modelo de calçado.
- **Agenda de Produção:** Calendário para planejamento de ordens de produção, manutenções e entregas.
- **Integração Office & IA:** Módulos que simulam a integração com Planilhas, Documentos de Texto e um assistente de IA (Gemini).

### Administração e Configuração
- **Gestão de Filiais:** Cadastro e gerenciamento de múltiplas unidades da empresa.
- **Monitoramento de Usuários:** Acompanhamento em tempo real dos usuários ativos no sistema.
- **Painel de Auditoria:** Logs de atividades críticas e status dos serviços para fins de suporte.
- **Customização (White Label):** Ferramentas para personalizar a aparência do sistema com a marca da empresa.

## ⚖️ Conformidade Legal (Portaria 671/MTP)

O desenvolvimento do sistema de ponto eletrônico segue rigorosamente as diretrizes da **Portaria 671 do Ministério do Trabalho e Previdência**, garantindo total segurança jurídica para a empresa.

- **Imutabilidade dos Registros:** Nenhum registro de ponto pode ser alterado ou excluído. Ajustes são sempre lançados como novas informações auditáveis.
- **Formatos Oficiais:** O sistema é capaz de ler o **Arquivo Fonte de Dados (AFD)** dos relógios e exportar o **Arquivo Eletrônico de Jornada (AEJ)**, seguindo os layouts oficiais.
- **Integração com REP-P:** A comunicação com os relógios de ponto (REP-P) é feita via SDKs dos fabricantes, com um serviço de fundo que garante a coleta dos dados em tempo real.
- **Assinatura Digital:** Todos os arquivos fiscais e comprovantes gerados possuem assinatura digital no padrão ICP-Brasil, assegurando sua validade legal.

Estamos comprometidos em manter o sistema sempre atualizado com as últimas exigências do MTE.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN/UI](https://ui.shadcn.com/)
- **Gráficos:** [Recharts](https://recharts.org/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) com [Zod](https://zod.dev/)
- **Inteligência Artificial (GenAI):** [Genkit (Google)](https://firebase.google.com/docs/genkit)

## 🛠️ Como Começar

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos
- [Node.js](https://nodejs.org/en) (versão 20.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação
1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto:
   ```bash
   cd meu-rh-project
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute o comando:
```bash
npm run dev
```
O sistema estará disponível em [http://localhost:9002](http://localhost:9002).

## 📂 Estrutura do Projeto

A estrutura de pastas segue as convenções do Next.js App Router:

```
src
├── app/                  # Rotas principais da aplicação
│   ├── dashboard/        # Layout principal e páginas do sistema de gestão
│   │   ├── pages/        # Telas e módulos específicos do dashboard
│   │   └── layout.tsx
│   ├── portal-colaborador/ # Telas do portal do colaborador
│   ├── login/            # Página de login para administradores/RH
│   └── layout.tsx        # Layout raiz
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes do ShadCN (Button, Card, etc.)
│   └── icons.tsx         # Ícones personalizados
├── hooks/                # Hooks React customizados (ex: useToast)
├── lib/                  # Funções utilitárias e configurações
└── styles/               # Estilos globais (globals.css)
```

## 🤝 Contribuindo

Este projeto é um protótipo e um trabalho em andamento. Sinta-se à vontade para explorar, modificar e expandir suas funcionalidades.
