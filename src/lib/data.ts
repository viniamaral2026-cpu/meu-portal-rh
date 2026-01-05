export type Post = {
  slug: string;
  title: string;
  content: string;
  summary: string;
  image_id: string;
};

export const blogPosts: Post[] = [
  {
    slug: 'gamificacao-no-rh',
    title: 'Gamificação no RH: Transformando a Gestão de Pessoas com Jogos',
    content: `Nos últimos anos, a gamificação tem se consolidado como uma das principais tendências no setor de Recursos Humanos (RH). Ao incorporar elementos de jogos em processos corporativos, as empresas conseguem aumentar o engajamento, a motivação e a produtividade de seus colaboradores. A gamificação pode ser aplicada em diversas áreas do RH, desde o recrutamento e seleção até o treinamento e desenvolvimento. Por exemplo, um processo seletivo pode incluir desafios e missões que avaliam as habilidades dos candidatos de forma mais dinâmica e interativa. Já em treinamentos, a utilização de pontos, medalhas e rankings pode estimular a participação e o aprendizado contínuo. Além disso, a gamificação promove um ambiente de trabalho mais colaborativo e divertido, o que contribui para a retenção de talentos e a melhoria do clima organizacional.`,
    summary: 'Ao incorporar elementos de jogos em processos corporativos, a gamificação tem se consolidado como uma das principais tendências no setor de Recursos Humanos (RH).',
    image_id: 'blog-gamification',
  },
  {
    slug: 'lideranca-empatica',
    title: 'Liderança Empática: A Chave para um Ambiente de Trabalho Saudável e Produtivo',
    content: `A liderança no mundo corporativo está evoluindo. Se antes os líderes eram vistos como figuras autoritárias focadas exclusivamente em resultados, hoje, o conceito de liderança empática ganha cada vez mais destaque. Um líder empático é aquele que consegue se colocar no lugar do outro, compreendendo suas emoções, necessidades e perspectivas. Essa habilidade é fundamental para criar um ambiente de trabalho saudável, onde os colaboradores se sintam valorizados, seguros e motivados. A empatia na liderança se traduz em ações como a escuta ativa, o feedback construtivo e o apoio ao desenvolvimento pessoal e profissional da equipe. Empresas com líderes empáticos tendem a ter equipes mais engajadas, inovadoras e resilientes, o que impacta positivamente nos resultados do negócio.`,
    summary: 'Se antes os líderes eram vistos como figuras autoritárias focadas exclusivamente em resultados, hoje, o conceito de liderança empática ganha cada vez mais destaque.',
    image_id: 'blog-leadership',
  },
  {
    slug: 'people-analytics',
    title: 'People Analytics: O Poder dos Dados na Gestão de Pessoas',
    content: `O People Analytics é uma ferramenta poderosa que vem transformando a forma como as empresas gerenciam seus colaboradores. Ao utilizar dados para tomar decisões estratégicas sobre gestão de pessoas, o RH deixa de se basear em intuições e passa a agir de forma mais assertiva e eficiente. Com o People Analytics, é possível analisar uma grande variedade de informações, como dados de desempenho, engajamento, rotatividade, absenteísmo, entre outros. Essas análises permitem identificar padrões, prever tendências e desenvolver ações direcionadas para melhorar a experiência do colaborador e otimizar os processos de RH. Por exemplo, ao analisar os dados de rotatividade, a empresa pode identificar as principais causas e criar estratégias para reter talentos.`,
    summary: 'Ao utilizar dados para tomar decisões estratégicas sobre gestão de pessoas, o People Analytics é uma ferramenta poderosa que vem transformando a forma como as empresas gerenciam seus colaboradores.',
    image_id: 'blog-analytics',
  },
];

export function getBlogPosts(): Post[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return blogPosts.find((post) => post.slug === slug);
}


export const faqs = [
    {
      question: 'A GPWay faz a implementação e migração de informações?',
      answer: 'Sim, nossa equipe especializada cuida de todo o processo de implementação e migração de dados para garantir uma transição suave e segura para o nosso sistema.'
    },
    {
      question: 'Todos na empresa acessam às mesmas funcionalidades do sistema?',
      answer: 'Não, o acesso é baseado em perfis e permissões. Você pode configurar diferentes níveis de acesso para gestores, colaboradores e equipe de RH, garantindo que cada um veja apenas as informações e funcionalidades relevantes para sua função.'
    },
    {
      question: 'O GPWAY proporciona segurança jurídica aos clientes?',
      answer: 'Sim, total segurança jurídica. Segurança dos dados em conformidade com a LGPD. Compliance, gerando segurança jurídica para o negócio. Registro de ponto, de acordo com a portaria 671 e 1486, que dispensa a empresa de fazer acordo coletivo com o Sindicato.'
    },
    {
      question: 'É possível personalizar o sistema às necessidades da empresa?',
      answer: 'Com certeza. A plataforma GPWay é altamente personalizável. Você pode solicitar novas funcionalidades e ajustes para que o software se adeque perfeitamente aos processos e necessidades da sua empresa.'
    },
    {
      question: 'Posso consultar o sistema de qualquer lugar ou somente na minha empresa?',
      answer: 'Você pode acessar o GPWay de qualquer lugar. Nosso sistema é baseado na nuvem, permitindo que você e sua equipe gerenciem as informações de RH de forma segura a partir de qualquer dispositivo com acesso à internet.'
    }
];

export const stats = [
    {
        percentage: '56%',
        description: 'dos líderes de RH dizem que os softwares de gestão atual não atendem todas necessidades do negócio'
    },
    {
        percentage: '63%',
        description: 'dos colaboradores trocariam de trabalho em busca de melhores benefícios'
    },
    {
        percentage: '41%',
        description: 'das lideranças de mercado se preocupam com retenção de bons profissionais e escassez de talentos'
    },
    {
        percentage: '67%',
        description: 'dos líderes de RH definiram a integração da gestão como uma das TOP 5 prioridades para 2024.'
    }
];
