// ============================================================================
// 1. IMPORTAÇÕES (Imports)
// ============================================================================
// Importamos o React e o Hook 'useState', que permite ao componente guardar
// informações na memória e atualizar a tela automaticamente quando mudam.
import React, { useState } from 'react';

// Importamos os ícones da biblioteca 'lucide-react' para usar nos botões e cards.
import {
  Terminal,
  ExternalLink,
  Download,
  Server,
  Code2,
  ShieldCheck,
  Cpu,
  Network,
  Database,
  Cloud,
  Check,
  Copy,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  MessageSquare
} from 'lucide-react';

// ============================================================================
// 2. COMPONENTES DE ÍCONES SVG PERSONALIZADOS
// ============================================================================
// Como o lucide-react removeu marcas comerciais (GitHub/LinkedIn), criamos
// nossos próprios componentes reutilizáveis recebendo 'className' via props.
const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// ============================================================================
// 3. CAMADA DE DADOS (Arrays de Objetos)
// ============================================================================
// Separar os dados da interface (JSX) é uma boa prática: para adicionar ou
// editar um projeto no futuro, você mexe apenas aqui, sem tocar no HTML/CSS.

const PROJECTS = [
  {
    id: 'kaiowa',
    featured: true, // Define este projeto como o "Case Principal" em destaque
    category: 'dev', // Usado pelo filtro ('dev' ou 'infra')
    status: 'EM PRODUÇÃO',
    title: 'Kaiowá — Rede Social Nativa',
    subtitle: 'Plataforma Full-Stack Open-Source',
    description:
      'Rede social completa desenvolvida do zero e mantida em produção. Conta com feed dinâmico, sistema de stories, incorporação de vídeos do YouTube, curtidas, comentários em tempo real, notificações, busca de usuários e upload seguro de mídias.',
    architecture: 'React + Vite (Vercel) → API REST Node.js/Express (Render) → PostgreSQL & Storage (Supabase)',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'bcrypt', 'Multer'],
    github: 'https://github.com/Arialyson/kaiowa',
    live: 'https://kaiowa-flame.vercel.app',
    image: '/images/kaiowa-preview.png', // Aponta para public/images/kaiowa-preview.png
  },
  {
    id: 'taperto',
    featured: false,
    category: 'dev',
    status: 'FULL-STACK • LOGÍSTICA',
    title: 'TáPerto — Gestão de Fretes & Rastreamento',
    subtitle: 'Dashboard Web (React + TS) & API RESTful (Node + Prisma)',
    description:
      'Plataforma logística completa para empresas gerenciarem fretes, motoristas e frotas. Conta com painel de controle com calculadora de cotação e métricas em tempo real, autenticação JWT e páginas públicas de rastreamento via QR Code.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'JWT', 'QRCode'],
    github: 'https://github.com/Arialyson/aperto-frontend',
    githubBackend: 'https://github.com/Arialyson/taperto-backend', // Link extra exclusivo para o repositório da API
    live: null,
    image: '/images/taperto-preview.png',
  },
  {
    id: 'samba-linux',
    featured: false,
    category: 'infra',
    status: 'INFRAESTRUTURA',
    title: 'Servidor de Arquivos Multiplataforma',
    subtitle: 'Linux Debian + Samba + Controle de Acesso',
    description:
      'Implantação e administração de servidor de arquivos em ambiente Linux Debian integrando estações Windows 11, Linux e dispositivos Android na mesma rede, com autenticação individualizada e políticas de permissão por diretório.',
    tags: ['Debian Linux', 'Samba', 'SSH', 'Bash', 'Permissões', 'Redes'],
    github: 'https://github.com/Arialyson',
    live: null,
    image: '/images/servidor-samba-terminal.png',
  },
  {
    id: 'crud-python',
    featured: false,
    category: 'dev',
    status: 'BACK-END & DADOS',
    title: 'Sistema CRUD Modularizado',
    subtitle: 'Integração Python & Banco Relacional MySQL',
    description:
      'Aplicação back-end modularizada em Python para cadastro, consulta, atualização e remoção de registros com validação de usuários e persistência transacional em banco de dados relacional MySQL.',
    tags: ['Python', 'MySQL', 'SQL', 'Git', 'Back-end'],
    github: 'https://github.com/Arialyson/Crud_Python_MySQL',
    live: null,
    image: '/images/crud-python.png',
  },
  {
    id: 'rede-corporativa',
    featured: false,
    category: 'infra',
    status: 'REDES & SEGURANÇA',
    title: 'Topologia de Rede Corporativa',
    subtitle: 'Segmentação VLAN, Roteamento & NAT',
    description:
      'Projeto e simulação de arquitetura de rede empresarial completa no Cisco Packet Tracer, implementando segmentação lógica com VLANs, roteamento inter-VLAN, atribuição dinâmica via DHCP e tradução de endereços NAT.',
    tags: ['Cisco Packet Tracer', 'VLAN', 'TCP/IP', 'DHCP', 'NAT', 'IPv4/IPv6'],
    github: 'https://github.com/Arialyson',
    live: null,
    image: '/images/rede-packet-tracer.png',
  },
];

// Matriz de competências técnicas agrupadas por área
const TECH_STACK = [
  {
    title: 'Back-end & Bancos de Dados',
    icon: Database, // Referência ao componente de ícone do Lucide
    color: 'text-emerald-400',
    items: ['Node.js', 'TypeScript', 'Python', 'Express', 'Flask', 'Prisma ORM', 'PostgreSQL', 'MySQL', 'MariaDB', 'SQL'],
  },
  {
    title: 'Front-end & Interfaces',
    icon: Code2,
    color: 'text-sky-400',
    items: ['React', 'TypeScript', 'Vite', 'React Router', 'Axios', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Redes & Servidores Linux',
    icon: Network,
    color: 'text-amber-400',
    items: ['Debian', 'Ubuntu Server', 'Bash', 'Systemctl / Cron', 'TCP/IP (IPv4/IPv6)', 'VLAN', 'DNS / DHCP', 'SSH / Samba', 'Cisco Packet Tracer'],
  },
  {
    title: 'Cloud, Containers & DevOps',
    icon: Cloud,
    color: 'text-purple-400',
    items: ['Docker', 'Docker Compose', 'AWS (IAM, EC2, S3)', 'Git & GitHub', 'Vercel / Render', 'Supabase', 'VirtualBox'],
  },
];

// Linha do tempo combinando formações acadêmicas, certificações e experiência industrial
const TIMELINE = [
  {
    period: '2025 — 2027 (Prev.)',
    role: 'Técnico em Redes de Computadores',
    org: 'IFRN — Instituto Federal do Rio Grande do Norte',
    type: 'education',
    description: 'Formação técnica focada em arquitetura de redes, administração de servidores Linux, protocolos TCP/IP, segurança e infraestrutura.',
  },
  {
    period: '2025 — 2027 (Prev.)',
    role: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    org: 'Gran Centro Universitário',
    type: 'education',
    description: 'Graduação voltada para engenharia de software, bancos de dados relacionais, desenvolvimento web full-stack e metodologias ágeis.',
  },
  {
    period: '10/2025 — 11/2025',
    role: 'Certificações: Back-end com Python (62h) & Power BI (37h)',
    org: 'DIO / Luizalabs & Fundação Bradesco',
    type: 'cert',
    description: 'Desenvolvimento de APIs e lógica back-end com Python; modelagem e análise de indicadores de desempenho (KPIs) com Power BI.',
  },
  {
    period: '03/2013 — 11/2024 (11 anos)',
    role: 'Operador de Equipamentos Industriais & Controle de KPIs',
    org: 'Amcor Flexíveis do Brasil — Parnamirim, RN',
    type: 'work',
    description: 'Monitoramento contínuo de indicadores críticos de produção (KPIs), diagnóstico preventivo de falhas operacionais complexas (troubleshooting) e cumprimento rigoroso de procedimentos técnicos para evitar paradas não planejadas.',
  },
  {
    period: '08/2008 — 08/2012 (4 anos)',
    role: 'Auxiliar de Produção / Operador',
    org: 'Coats Corrente Têxtil LTDA — Macaíba, RN',
    type: 'work',
    description: 'Controle técnico de parâmetros operacionais, padronização de processos e trabalho colaborativo em ambiente de alta exigência.',
  },
];

// ============================================================================
// 4. COMPONENTE PRINCIPAL DA APLICAÇÃO (App)
// ============================================================================
export default function App() {
  // --- ESTADOS (States) ---
  // 'filter' guarda qual aba está selecionada ('all', 'dev' ou 'infra').
  // Quando 'setFilter' é chamado, o React re-renderiza apenas os cards necessários.
  const [filter, setFilter] = useState('all');

  // 'copied' controla o feedback visual do botão de copiar e-mail (true/false).
  const [copied, setCopied] = useState(false);

  // Constantes de contato
  const email = 'arialyson@gmail.com';
  const whatsappUrl = 'https://wa.me/5584994715070?text=Ol%C3%A1%20Arialyson!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.';

  // --- FUNÇÕES AUXILIARES (Handlers) ---
  // Copia o e-mail para a área de transferência do sistema operacional e
  // volta o botão ao normal após 2,5 segundos (2500 ms).
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // --- LÓGICA DE FILTRAGEM ---
  // Busca o projeto em destaque (Kaiowá)
  const featuredProject = PROJECTS.find((p) => p.featured);

  // Filtra os demais projetos conforme a categoria escolhida nos botões
  const regularProjects = PROJECTS.filter(
    (p) => !p.featured && (filter === 'all' || p.category === filter)
  );

  // ==========================================================================
  // 5. RENDERIZAÇÃO DA INTERFACE (JSX + Tailwind CSS)
  // ==========================================================================
  return (
    // Container raiz: fundo escuro (bg-slate-950), texto claro e altura mínima de 100% da tela
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Grade decorativa sutil no fundo da página (pointer-events-none impede que bloqueie cliques) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* ====================================================================
          CABEÇALHO FIXO (Navbar)
          'sticky top-0 z-50' mantém o menu preso no topo ao rolar a página
         ==================================================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo estilo terminal */}
          <a href="#" className="flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight text-slate-100">
            <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Terminal className="w-4 h-4" />
            </span>
            <span>arialyson<span className="text-emerald-400">.dev</span></span>
          </a>

          {/* Links de navegação âncora (ocultos em telas pequenas, visíveis a partir de 'md') */}
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            <a href="#sobre" className="hover:text-emerald-400 transition">Perfil</a>
            <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
            <a href="#stack" className="hover:text-emerald-400 transition">Stack</a>
            <a href="#trajetoria" className="hover:text-emerald-400 transition">Trajetória</a>
            <a href="#contato" className="hover:text-emerald-400 transition">Contato</a>
          </nav>

          {/* Ícones sociais no canto direito */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Arialyson"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arialyson-lima"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-900 transition"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Container principal centralizado com largura máxima de 6xl (1152px) */}
      <main className="relative max-w-6xl mx-auto px-6">
        
        {/* ==================================================================
            SEÇÃO 1: CAPA (Hero Section com Apresentação + Foto de Perfil)
           ================================================================== */}
        <section className="pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Grid de 12 colunas no desktop (7 para texto, 5 para foto) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Coluna da Esquerda: Texto, Resumo e Botões de Ação */}
            <div className="lg:col-span-7">
              {/* Badge de disponibilidade com bolinha verde pulsante ('animate-ping') */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                STATUS: DISPONÍVEL PARA ESTÁGIO / JÚNIOR (DEV • INFRA • CLOUD)
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
                Arialyson Lima
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mb-6">
                Desenvolvedor Full-Stack & Profissional de Infraestrutura de TI
              </h2>

              <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                Unindo <strong className="text-slate-200 font-semibold">+11 anos de experiência industrial</strong> em monitoramento de KPIs e <em className="text-slate-200">troubleshooting</em> crítico ao desenvolvimento de aplicações web modernas (<strong className="text-slate-200 font-semibold">Node.js, Python, React, TypeScript</strong>) e administração de <strong className="text-slate-200 font-semibold">redes e servidores Linux</strong>.
              </p>

              {/* Botões principais */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projetos"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition flex items-center gap-2 shadow-lg shadow-emerald-500/10"
                >
                  <Layers className="w-4 h-4" />
                  Explorar Projetos
                </a>
                <a
                  href="/curriculo-arialyson.pdf"
                  download="Arialyson_Lima_Curriculo.pdf"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  Baixar Currículo (PDF)
                </a>
                <a
                  href="https://github.com/Arialyson"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 text-slate-300 font-medium transition flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Coluna da Direita: Foto de Perfil com Moldura Estilizada */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Efeito de brilho gradiente atrás da foto */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-sky-500/30 to-emerald-500/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

                {/* Caixa da imagem (salve sua foto em public/images/perfil.jpg) */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
                  <img
                    src="/images/perfil.jpg"
                    alt="Arialyson Lima"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Crachá técnico flutuante no canto inferior esquerdo da foto */}
                <div className="absolute -bottom-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400">
                    <Terminal className="w-4 h-4" />
                  </span>
                  <div className="text-xs font-mono">
                    <div className="text-white font-semibold">Full-Stack & Redes</div>
                    <div className="text-slate-400 text-[11px]">Natal, RN • Brasil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SEÇÃO 2: BENTO GRID (Diferenciais & Formação Resumida)
           ================================================================== */}
        <section id="sobre" className="py-12 border-t border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Bloco Esquerdo (ocupa 2 colunas): Experiência e Métricas */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  Diferencial Competitivo
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Mentalidade de Alta Disponibilidade & Diagnóstico Rápido
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  Antes de migrar para a área de Tecnologia, atuei por mais de uma década garantindo a continuidade operacional de linhas industriais de alta precisão. Trago para TI a cultura de análise de causa raiz, prevenção de falhas, documentação técnica rigorosa e calma sob pressão — competências vitais tanto para sustentação de infraestrutura quanto para arquitetura de software.
                </p>
              </div>
              
              {/* Linha de indicadores numéricos */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl font-bold text-white font-mono">11+</div>
                  <div className="text-xs text-slate-400">Anos em operações & KPIs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400 font-mono">2</div>
                  <div className="text-xs text-slate-400">Formações de TI em curso</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sky-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400">Foco em código & infra</div>
                </div>
              </div>
            </div>

            {/* Bloco Direito (ocupa 1 coluna): Cursos atuais e Localização */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider mb-3">
                  <Cpu className="w-4 h-4" />
                  Base Acadêmica
                </div>
                <ul className="space-y-4">
                  <li className="border-l-2 border-emerald-500 pl-3">
                    <div className="text-sm font-semibold text-white">Técnico em Redes de Computadores</div>
                    <div className="text-xs text-slate-400">IFRN • Conclusão 07/2027</div>
                  </li>
                  <li className="border-l-2 border-sky-500 pl-3">
                    <div className="text-sm font-semibold text-white">Análise e Desenv. de Sistemas</div>
                    <div className="text-xs text-slate-400">Gran • Conclusão 04/2027</div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Natal, RN — Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Remoto, Híbrido ou Presencial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SEÇÃO 3: PROJETOS (Com Filtros Interativos + Case Principal)
           ================================================================== */}
        <section id="projetos" className="py-16 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Portfólio Técnico</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Projetos em Destaque</h2>
            </div>

            {/* Botões de filtro que alteram o estado 'filter' ao serem clicados */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 self-start">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'dev', label: 'Full-Stack & Back-end' },
                { id: 'infra', label: 'Infraestrutura & Redes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    filter === tab.id
                      ? 'bg-emerald-500 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* CARD GIGANTE DE DESTAQUE: KAIOWÁ (Exibido apenas em 'Todos' ou 'Full-Stack') */}
          {featuredProject && (filter === 'all' || filter === 'dev') && (
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20 border border-emerald-500/30 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
                
                {/* Detalhes técnicos à esquerda */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                      ★ CASE PRINCIPAL • {featuredProject.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{featuredProject.title}</h3>
                    <p className="text-sm text-emerald-400/90 font-medium mt-0.5">{featuredProject.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Caixa destacando o fluxo da arquitetura */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300">
                    <span className="text-emerald-400 font-semibold">Arquitetura: </span>
                    {featuredProject.architecture}
                  </div>

                  {/* Tags de tecnologias */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 font-mono text-xs border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links de acesso */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Acessar Aplicação ao Vivo
                    </a>
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm flex items-center gap-2 transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Repositório GitHub
                    </a>
                  </div>
                </div>

                {/* Janela estilo navegador mostrando o print do Kaiowá */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
                    {/* Barra superior simulando janela de browser */}
                    <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-[11px] font-mono text-slate-400 truncate">
                        kaiowa-flame.vercel.app
                      </span>
                    </div>
                    
                    {/* Imagem do Kaiowá com tratamento de erro (onError) caso o arquivo não exista */}
                    <img
                      src={featuredProject.image}
                      alt="Interface da rede social Kaiowá"
                      className="w-full h-60 object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback visual exibido apenas se a imagem não for encontrada */}
                    <div
                      style={{ display: 'none' }}
                      className="h-60 flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-emerald-950/40 to-slate-950"
                    >
                      <span className="text-3xl mb-2">🌱</span>
                      <span className="font-bold text-white text-lg">Kaiowá Social</span>
                      <span className="text-xs text-slate-400 mt-1">
                        Feed • Stories • Upload de Mídia • Notificações
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GRADE DOS DEMAIS PROJETOS */}
          <div className="grid md:grid-cols-2 gap-6">
            {regularProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Renderiza a imagem do card e oculta o container se o arquivo ainda não existir */}
                  {project.image && (
                    <div className="overflow-hidden border-b border-slate-800 bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-top group-hover:scale-105 transition duration-500"
                        onError={(e) => {
                          e.currentTarget.parentElement.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700/70">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-slate-400 font-medium mb-3">{project.subtitle}</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-5">{project.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {/* Tags das tecnologias do projeto */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links de código-fonte (Front-end, Back-end se houver, ou Demo) */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                      {project.githubBackend ? 'Front-end' : 'Ver no GitHub'}
                    </a>

                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 font-medium transition"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Back-end (API)
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 font-medium transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SEÇÃO 4: MATRIZ DE TECNOLOGIAS (Stack & Ferramentas)
           ================================================================== */}
        <section id="stack" className="py-16 border-t border-slate-800/80">
          <div className="mb-10">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Competências Técnicas</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Stack & Ferramentas</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {TECH_STACK.map((group) => {
              // Atribui o componente de ícone a uma variável com letra maiúscula para renderizar como tag JSX
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon className={`w-5 h-5 ${group.color}`} />
                    <h3 className="font-bold text-white text-lg">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            SEÇÃO 5: LINHA DO TEMPO (Formação & Experiência Profissional)
           ================================================================== */}
        <section id="trajetoria" className="py-16 border-t border-slate-800/80">
          <div className="mb-10">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Evolução</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Formação & Experiência</h2>
          </div>

          {/* Linha vertical à esquerda ('border-l border-slate-800') */}
          <div className="relative border-l border-slate-800 ml-3 space-y-8">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* Ícone circular posicionado exatamente sobre a linha vertical */}
                <span className="absolute -left-3.5 top-1 p-1.5 rounded-full bg-slate-900 border border-slate-700 text-emerald-400">
                  {item.type === 'education' && <GraduationCap className="w-3.5 h-3.5" />}
                  {item.type === 'work' && <Briefcase className="w-3.5 h-3.5 text-sky-400" />}
                  {item.type === 'cert' && <Award className="w-3.5 h-3.5 text-amber-400" />}
                </span>

                <span className="font-mono text-xs text-emerald-400">{item.period}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{item.role}</h3>
                <div className="text-sm font-medium text-slate-400 mb-2">{item.org}</div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            SEÇÃO 6: CONTATO DIRETO
           ================================================================== */}
        <section id="contato" className="py-20 border-t border-slate-800/80">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/40 border border-slate-800 text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Próximo Passo</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Vamos conversar sobre tecnologia?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Estou aberto a oportunidades de estágio ou posição júnior em Desenvolvimento Full-Stack, Back-end, Infraestrutura de TI, Redes ou Cloud.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Botão interativo que copia o e-mail e muda de texto/ícone */}
              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'E-mail copiado!' : email}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/arialyson-lima"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm flex items-center gap-2 transition"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          RODAPÉ (Footer)
         ==================================================================== */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-500">
        © {new Date().getFullYear()} Arialyson Lima • Hospedado via GitHub Pages (arialyson.github.io)
      </footer>
    </div>
  );
}