# Meu RH - Sistema de Gestão para Indústria de Calçados

Bem-vindo ao **Meu RH**, um sistema de gestão de recursos humanos e ERP completo, projetado especificamente para as necessidades da indústria de calçados. A plataforma integra desde a administração de pessoal e folha de pagamento até a gestão de produção e recrutamento, tudo em uma interface moderna e intuitiva.

A arquitetura do sistema é focada em **segurança e soberania de dados**, sendo 100% **On-Premise** (instalado no servidor do cliente) e entregue via tecnologia de **containers (Docker)**, garantindo performance, controle total sobre as informações e resiliência operacional.

## ✨ Arquitetura e Diferenciais Estratégicos

Nosso sistema foi projetado para atender às mais rigorosas políticas de segurança e escalabilidade das grandes indústrias, com foco em três pilares:

### 1. Soberania e Segurança de Dados (On-Premise)
Diferente de sistemas SaaS tradicionais que armazenam seus dados em nuvens públicas, o Meu RH é instalado **dentro do seu datacenter**.
- **Controle Total:** O banco de dados é seu, as chaves de segurança são suas e nenhum dado sensível (folha de pagamento, dados de produção) sai da sua rede interna sem autorização.
- **Performance Máxima:** O acesso aos dados é ultrarrápido, pois não depende da velocidade ou da disponibilidade da internet externa.
- **Conformidade com a LGPD:** Garante o mais alto nível de conformidade, mantendo os dados pessoais dos colaboradores sob sua custódia física e lógica.

### 2. Escalabilidade e Manutenção Simplificada (Docker)
O sistema é entregue em um **container Docker isolado**, o que permite uma gestão de TI moderna e eficiente.
- **Instalação Rápida:** Ativar o sistema em um novo servidor ou filial se resume a executar um comando, sem conflitos com outros softwares.
- **Atualizações Seguras:** As atualizações são aplicadas de forma atômica dentro do container, garantindo estabilidade e reduzindo o tempo de inatividade.
- **Multi-Filiais:** A arquitetura de *tenancy* isolado permite que a matriz tenha uma visão consolidada, enquanto cada filial acessa apenas seus próprios dados, com espelhamento em tempo real.

### 3. Resiliência e Experiência Moderna (PWA & Offline-First)
Oferecemos o melhor dos dois mundos: a segurança de um sistema local com a usabilidade de uma aplicação web moderna.
- **Funciona sem Internet:** Se a conexão externa da fábrica cair, o sistema continua 100% operacional na rede interna. O RH continua trabalhando e os relógios de ponto continuam sincronizando.
- **Acesso Universal (PWA):** O sistema é acessado via navegador, mas pode ser "instalado" como um atalho (Progressive Web App) no desktop ou celular de qualquer funcionário, funcionando como um programa nativo sem a necessidade de instalação via `.exe`.
- **Independência de Hardware:** Funciona em qualquer dispositivo, desde totens no chão de fábrica e tablets na linha de produção até os computadores do escritório.

## ⚖️ Conformidade Legal (Portaria 671/MTP)

O desenvolvimento do sistema de ponto eletrônico segue rigorosamente as diretrizes da **Portaria 671 do Ministério do Trabalho e Previdência**, garantindo total segurança jurídica para a empresa.

- **Imutabilidade dos Registros:** Nenhum registro de ponto pode ser alterado ou excluído. Ajustes são sempre lançados como novas informações auditáveis.
- **Formatos Oficiais:** O sistema é capaz de ler o **Arquivo Fonte de Dados (AFD)** dos relógios e exportar o **Arquivo Eletrônico de Jornada (AEPS)**, seguindo os layouts oficiais.
- **Integração com REP-P:** A comunicação com os relógios de ponto (REP-P) é feita via SDKs dos fabricantes, com um serviço de fundo que garante a coleta dos dados em tempo real.
- **Assinatura Digital:** Todos os arquivos fiscais e comprovantes gerados possuem assinatura digital no padrão ICP-Brasil, assegurando sua validade legal.
- **Backup e Ransomware:** Recomendamos uma rotina de backup offline (em fitas ou HDs externos) para proteger o banco de dados local contra ataques de ransomware que possam atingir a rede interna.


## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN/UI](https://ui.shadcn.com/)
- **Gráficos:** [Recharts](https://recharts.org/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) com [Zod](https://zod.dev/)
- **Inteligência Artificial (GenAI):** [Genkit (Google)](https://firebase.google.com/docs/genkit)
- **Containerização:** [Docker](https://www.docker.com/)

## 🛠️ Como Começar

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos
- [Node.js](https://nodejs.org/en) (versão 20.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/products/docker-desktop/) (para simular o ambiente On-Premise)

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
