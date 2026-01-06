
# Meu RH App - Portal do Colaborador (Android Nativo)

Este documento detalha a arquitetura, o design e as funcionalidades do aplicativo nativo para Android do **Meu RH**, projetado para oferecer uma experiência móvel, rápida e segura para todos os colaboradores da indústria.

---

## 🏗️ 1. Visão Arquitetural e Tecnologias (Proposta)

Para garantir escalabilidade, manutenibilidade e uma experiência de usuário fluida, o aplicativo será desenvolvido com as tecnologias e arquiteturas mais modernas do ecossistema Android.

*   **Linguagem:** **Kotlin** (100% Kotlin-first).
*   **Arquitetura:** **Clean Architecture** (MVVM) dividida em camadas:
    *   `Presentation (UI)`: Activities, Fragments, e principalmente **Jetpack Compose** para a construção da UI.
    *   `Domain`: Casos de uso (UseCases) e entidades de negócio puras em Kotlin.
    *   `Data`: Repositórios e fontes de dados (Remote/API e Local/Cache).
*   **UI Toolkit:** **Jetpack Compose** para uma UI declarativa, moderna e reativa.
*   **Gerenciamento de Estado:** StateFlow e SharedFlow do Kotlin Coroutines.
*   **Injeção de Dependência:** **Hilt** para gerenciar dependências de forma robusta.
*   **Comunicação com API:** **Retrofit** para consumir a API REST do Meu RH e **OkHttp** para interceptors.
*   **Persistência Local:** **Room** para cache de dados offline (como holerites e comunicados).
*   **Navegação:** **Jetpack Navigation Component** para gerenciar o fluxo entre as telas.

---

## 📱 2. Design das Telas e Fluxo do Usuário

A interface será limpa, intuitiva e otimizada para acesso rápido às informações mais importantes.

### 2.1. Tela de Login

*   **Descrição:** Primeira tela que o usuário vê. Minimalista e segura.
*   **Componentes:**
    *   Logo da empresa.
    *   Campo para **CPF**.
    *   Campo para **PIN/Senha** com toggle de visibilidade.
    *   **Botão "Entrar"**: Principal call-to-action.
    *   **Opção "Primeiro Acesso / Esqueci a Senha"**: Inicia fluxo de recuperação via e-mail.
    *   **Login Biométrico (Touch ID / Face ID)**: Após o primeiro login bem-sucedido, um diálogo perguntará ao usuário se deseja habilitar o login rápido para acessos futuros.

### 2.2. Tela Principal (Dashboard)

*   **Descrição:** O coração do app, acessado após o login. Utiliza uma **Bottom Navigation Bar** com 4 abas principais.
*   **Navegação Principal (Bottom Bar):**
    1.  **Início:** Visão geral e atalhos.
    2.  **Ponto:** Histórico e espelho de ponto.
    3.  **Documentos:** Holerites e outros arquivos.
    4.  **Perfil:** Dados pessoais e configurações.

---

#### 2.2.1. Aba "Início" (Tela Principal)

*   **Componentes:**
    *   **Header de Saudação:** "Olá, {Nome do Colaborador}!" com foto de perfil.
    *   **Card "Registro de Ponto"**: Um card proeminente com um grande botão **"Registrar Ponto"**.
        *   **Funcionalidade Inteligente**: O botão muda de cor e texto (ex: "Iniciar Jornada", "Pausa Almoço", "Fim de Expediente") baseado no último registro do dia.
        *   **Geolocalização**: O app solicitará permissão de localização para validar se o registro está sendo feito nas dependências da empresa (funcionalidade configurável pelo RH).
    *   **Seção "Acesso Rápido"**: Ícones para as 2-3 ações mais comuns (ex: "Meu Último Holerite", "Solicitar Férias").
    *   **Seção "Últimos Comunicados"**: Um carrossel horizontal com os 3 comunicados mais recentes da empresa, indicando quais ainda não foram lidos.

#### 2-2.2. Aba "Ponto" (Espelho de Ponto)

*   **Componentes:**
    *   **Seletores de Mês/Ano**: Permitem ao usuário filtrar o período desejado.
    *   **Lista de Registros**: Uma lista vertical rolável, agrupada por dia. Cada item da lista mostra:
        *   Data.
        *   Marcações (ex: 08:02, 12:05, 13:08, 18:01).
        *   Total de horas trabalhadas no dia.
        *   Indicador de horas extras ou atrasos.
    *   **Botão Flutuante (FAB)**: Para justificar uma ausência ou solicitar ajuste de ponto.

#### 2.2.3. Aba "Documentos"

*   **Componentes:**
    *   **Filtro por Categoria**: Tabs ou um Dropdown para filtrar entre "Holerites", "Informes de Rendimento", "Contratos".
    *   **Lista de Documentos**: Cada item exibe o nome do documento, a data e um botão para **Download/Visualização**.
        *   **Visualização Segura**: Documentos (PDFs) são abertos dentro do app em um visualizador seguro.
        *   **Cache Offline**: Os últimos 3 holerites são salvos localmente para acesso mesmo sem internet.
    *   **Seção "Envio de Atestados"**: Uma área para o colaborador tirar uma foto ou selecionar um arquivo da galeria para enviar atestados médicos. O app usará a câmera nativa do dispositivo.

#### 2.2.4. Aba "Perfil"

*   **Componentes:**
    *   Foto do perfil e nome completo.
    *   **Dados Pessoais**: Seções distintas para "Informações Pessoais", "Endereço" e "Contato".
    *   **Botão "Editar"**: Leva para uma tela de edição onde o usuário pode atualizar informações (algumas podem necessitar de aprovação do RH).
    *   **Configurações do App**:
        *   Ativar/Desativar login biométrico.
        *   Gerenciar notificações.
    *   **Botão "Sair"**.

---

## ✨ 3. Funcionalidades Nativas e Diferenciais

O app nativo irá além do portal web, aproveitando os recursos do dispositivo.

*   🔔 **Notificações Push:**
    *   Alertas sobre novos holerites disponíveis.
    *   Lembretes para registro de ponto (se o usuário estiver na fábrica e não tiver batido o ponto).
    *   Comunicados urgentes da empresa.
    *   Status de solicitações (férias, ajuste de ponto).

*   📍 **Registro de Ponto com Geolocalização:**
    *   Ao registrar o ponto, o app captura as coordenadas GPS e valida contra as "cercas virtuais" (geofences) das filiais cadastradas.
    *   Se fora da área, o registro é marcado como "externo" e pode exigir justificativa.

*   🔒 **Segurança Aprimorada:**
    *   Uso do **Keystore** do Android para armazenar tokens de autenticação de forma segura.
    *   **Login biométrico** para acesso rápido e seguro.
    *   Detecção de root e outras vulnerabilidades do dispositivo.

*   🚀 **Performance e Acesso Offline:**
    *   Uso de cache local (Room) para que o colaborador possa acessar seus últimos holerites e comunicados mesmo sem conexão com a internet.
    *   A UI em Jetpack Compose garante uma experiência de rolagem e navegação extremamente fluida.
