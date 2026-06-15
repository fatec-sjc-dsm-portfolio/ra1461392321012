const projects = [
  {
    api: 'API 1',
    period: '1º Semestre · 2023.2',
    title: 'Criança Renal',
    desc: 'Site com blog e informações sobre nefrologia pediátrica, idealizado pelo grupo de mães do projeto Rim do Amor. Desenvolvido para informar pais de crianças portadoras de insuficiência renal crônica (IRC) e chamar a atenção da sociedade para as dificuldades enfrentadas. Contribuí na montagem das páginas HTML e na organização geral do código.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
    repo: 'https://github.com/Daiene/Pixels',
  },
  {
    api: 'API 2',
    period: '2º Semestre · 2024.1',
    title: 'Gerenciamento de Chamados',
    desc: 'Aplicação web para gerenciamento de chamados de suporte técnico. Permite que usuários abram tickets, acompanhem o status das solicitações e que a equipe técnica gerencie os atendimentos com controle de SLA. Contribuí na criação de algumas páginas da interface e na lógica por trás delas.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
    repo: 'https://github.com/TeamHiveAPI/API-2024.01',
  },
  {
    api: 'API 3',
    period: '3º Semestre · 2024.2',
    title: 'Portal de Transparência',
    desc: 'Portal de transparência para uma fundação, com foco em inserção de dados de projetos, busca por filtros, portabilidade de dados de sistema legado e geração de estatísticas exibidas em gráficos. Atuei majoritariamente no backend, desenvolvendo a lógica das principais funções da aplicação.',
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL'],
    repo: 'https://github.com/Code-Nine-FTC/API-2024.2',
  },
  {
    api: 'API 4',
    period: '4º Semestre · 2025.1',
    title: 'Monitoramento Meteorológico',
    desc: 'Plataforma de coleta, processamento e visualização em tempo real de dados meteorológicos (temperatura, umidade, pressão, vento e índice pluviométrico) para a Tecsus, com dashboards e sistema de alertas. Trabalhei na lógica dos endpoints e nas respectivas páginas do front-end, como o cadastro de estações (POST /stations), a ingestão de medições dos sensores (POST /measures) e a listagem de alertas críticos (GET /alerts).',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Flask', 'Docker'],
    repo: 'https://github.com/Sync-FATEC/API-2025.1-4SEM',
  },
  {
    api: 'API 5',
    period: '5º Semestre · 2025.2',
    title: 'Controle de Estoque Militar',
    desc: 'Sistema de controle de estoque para o almoxarifado e a farmácia de uma guarnição militar, com cadastro via QR Code, alertas de estoque baixo e gestão de pedidos. Atuei na lógica dos endpoints e nas telas correspondentes, como o cadastro de produtos (POST /products), o registro de movimentações de estoque (POST /movements) e a abertura de notas de empenho (POST /orders).',
    tech: ['React', 'React Native', 'Node.js', 'Express', 'PostgreSQL'],
    repo: 'https://github.com/Sync-FATEC/API-2025.2-5SEM',
  },
  {
    api: 'API 6',
    period: '6º Semestre · 2026.1',
    title: 'Análise ASG de Propriedades Rurais',
    desc: 'Plataforma de análise de aspectos Ambientais, Sociais e de Governança (ASG) de propriedades rurais de São Paulo, integrando dados geoespaciais públicos para identificar desmatamento e queimadas, com consultas em linguagem natural e score de risco. Desenvolvi a lógica dos endpoints e suas páginas no front-end, como a busca de propriedade por código CAR (GET /properties/:car), o cálculo do score de risco (GET /properties/:car/score) e a consulta via chat (POST /chat).',
    tech: ['Vue.js', 'Python', 'GIS'],
    repo: 'https://github.com/Sync-FATEC/API-2026-6SEM',
  },
]

export default projects
