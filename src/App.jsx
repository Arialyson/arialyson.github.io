import React, { useState } from 'react';
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Server,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Layers,
  CheckCircle2,
  FolderGit2,
  Cpu,
  MapPin,
} from 'lucide-react';

/**
 * LISTA DE PROJETOS DO PORTFÓLIO
 * Cada objeto representa um card na seção de projetos.
 * 'featured: true' destaca o projeto principal (Kaiowá) em largura total no desktop.
 */
const PROJECTS = [
  {
    id: 'kaiowa',
    title: 'Kaiowá — Rede Social Nativa',
    subtitle: 'Plataforma Full-Stack Open-Source',
    category: 'fullstack',
    featured: true,
    description:
      'Rede social completa desenvolvida do zero e mantida em produção. Conta com feed dinâmico, sistema de stories, incorporação de vídeos do YouTube, curtidas, comentários em tempo real, notificações, busca de usuários e upload seguro de mídias.',
    architecture:
      'React + Vite (Vercel) • API REST Node.js/Express (Render) • PostgreSQL & Storage (Supabase)',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Bcrypt', 'Multer'],
    image: '/images/kaiowa-preview.png',
    liveUrl: 'https://kaiowa-flame.vercel.app',
    repoUrl: 'https://github.com/Arialyson',
  },
  {
    id: 'taperto',
    title: 'TáPerto — Rastreamento Logístico',
    subtitle: 'Sistema de Gestão & QR Code em Tempo Real',
    category: 'fullstack',
    featured: false,
    description:
      'Plataforma logística completa para controle de entregas e encomendas, com painéis administrativos, atualização de status em tempo real, autenticação JWT e páginas públicas de rastreamento via QR Code.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma ORM', 'PostgreSQL', 'JWT', 'QRCode'],
    image: '/images/taperto-preview.png',
    repoUrl: 'https://github.com/Arialyson',
    secondaryRepoUrl: 'https://github.com/Arialyson',
    secondaryRepoLabel: 'Back-end (API)',
    primaryRepoLabel: 'Front-end',
  },
  {
    id: 'samba',
    title: 'Servidor de Arquivos Corporativo Samba',
    subtitle: 'Infraestrutura Linux & Controle de Acesso',
    category: 'infra',
    featured: false,
    description:
      'Implementação de servidor de arquivos em ambiente Linux Debian para compartilhamento seguro em rede local, com autenticação individualizada e políticas de permissão por diretório.',
    tags: ['Debian Linux', 'Samba', 'SSH', 'Bash', 'Permissões', 'Redes'],
    image: '/images/servidor-samba-terminal.png',
    repoUrl: 'https://github.com/Arialyson',
  },
  {
    id: 'crud-python',
    title: 'Sistema CRUD Modularizado',
    subtitle: 'Integração Python & Banco Relacional MySQL',
    category: 'fullstack',
    featured: false,
    description:
      'Aplicação back-end modularizada em Python para cadastro, consulta, atualização e remoção de registros com validação de usuários e persistência transacional em banco de dados relacional MySQL.',
    tags: ['Python', 'MySQL', 'SQL', 'Git', 'Back-end'],
    image: '/images/crud-python.png',
    repoUrl: 'https://github.com/Arialyson',
  },
  {
    id: 'packet-tracer',
    title: 'Topologia de Rede Corporativa',
    subtitle: 'Segmentação VLAN, Roteamento & NAT',
    category: 'infra',
    featured: false,
    description:
      'Projeto e simulação de arquitetura de rede empresarial completa no Cisco Packet Tracer, implementando segmentação lógica com VLANs, roteamento inter-VLAN, atribuição dinâmica via DHCP e tradução de endereços NAT.',
    tags: ['Cisco Packet Tracer', 'VLAN', 'TCP/IP', 'DHCP', 'NAT', 'IPv4/IPv6'],
    image: '/images/rede-packet-tracer.png',
    repoUrl: 'https://github.com/Arialyson',
  },
];

/**
 * HABILIDADES TÉCNICAS DIVIDIDAS POR PILAR
 */
const STACK_GROUPS = [
  {
    title: 'Desenvolvimento Front-End',
    icon: Code2,
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite'],
  },
  {
    title: 'Back-End & Bancos de Dados',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'APIs RESTful'],
  },
  {
    title: 'Infraestrutura, Redes & Linux',
    icon: Server,
    skills: ['Linux (Debian/Ubuntu)', 'Administração Samba', 'TCP/IP, VLAN, DHCP, NAT', 'Cisco Packet Tracer', 'SSH & Bash'],
  },
  {
    title: 'DevOps, Cloud & Ferramentas',
    icon: ShieldCheck,
    skills: ['Git & GitHub Actions', 'Vercel & Render', 'Supabase', 'JWT & Autenticação', 'Troubleshooting Crítico'],
  },
];

export default function App() {
  // Estado que controla o filtro ativo na seção de projetos ('all' | 'fullstack' | 'infra')
  const [activeFilter, setActiveFilter] = useState('all');

  // Filtra os projetos com base na aba selecionada
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  // Separa o projeto principal em destaque (Kaiowá) dos demais cards
  const featuredProject = filteredProjects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* =====================================================================
          1. BARRA DE NAVEGAÇÃO FIXA (DESKTOP + MENU RÁPIDO MOBILE)
      ===================================================================== */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
        {/* Linha principal do cabeçalho */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Logotipo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold text-white tracking-tight text-sm sm:text-base">
              arialyson<span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Links de navegação para telas médias/grandes (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#perfil" className="hover:text-emerald-400 transition">Perfil</a>
            <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
            <a href="#stack" className="hover:text-emerald-400 transition">Stack</a>
            <a href="#trajetoria" className="hover:text-emerald-400 transition">Trajetória</a>
            <a href="#contato" className="hover:text-emerald-400 transition">Contato</a>
          </div>

          {/* Ícones sociais à direita */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Arialyson"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arialyson-lima"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Barra de acesso rápido exclusiva para smartphones (< 768px) */}
        <div className="flex md:hidden items-center justify-between px-5 py-2.5 border-t border-slate-800/80 bg-slate-950/95 text-xs font-medium text-slate-400 overflow-x-auto gap-4">
          <a href="#perfil" className="hover:text-emerald-400 whitespace-nowrap">Perfil</a>
          <a href="#projetos" className="hover:text-emerald-400 whitespace-nowrap">Projetos</a>
          <a href="#stack" className="hover:text-emerald-400 whitespace-nowrap">Stack</a>
          <a href="#trajetoria" className="hover:text-emerald-400 whitespace-nowrap">Trajetória</a>
          <a href="#contato" className="hover:text-emerald-400 whitespace-nowrap">Contato</a>
        </div>
      </nav>

      {/* =====================================================================
          2. HERO SECTION (CAPA RESPONSIVA: FOTO NO TOPO NO CELULAR)
      ===================================================================== */}
      <header className="relative overflow-hidden border-b border-slate-800/70">
        {/* Grade decorativa sutil no fundo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* COLUNA DA FOTO: 'order-first' faz ela aparecer no topo no celular; 'lg:order-last' mantém à direita no desktop */}
            <div className="order-first lg:order-last lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Moldura quadrada arredondada com tamanho proporcional para mobile e desktop */}
                <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl shadow-emerald-950/20">
                  <img
                    src="/images/perfil.jpg"
                    alt="Arialyson Lima"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Crachá flutuante centralizado no celular e deslocado à esquerda no desktop */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-5 bg-slate-900/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-lg whitespace-nowrap">
                  <p className="text-xs font-semibold text-white">Full-Stack & Redes</p>
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Natal, RN • Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* COLUNA DE APRESENTAÇÃO E BOTÕES DE AÇÃO */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge de disponibilidade */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-mono mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>DISPONÍVEL • ESTÁGIO / JÚNIOR (DEV • INFRA)</span>
              </div>

              {/* Nome e Título */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
                Arialyson Lima
              </h1>
              <h2 className="text-lg sm:text-2xl font-medium text-emerald-400 mb-5">
                Desenvolvedor Full-Stack & Profissional de Infraestrutura de TI
              </h2>

              {/* Resumo profissional */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-7 max-w-2xl mx-auto lg:mx-0">
                Unindo <strong className="text-white">+11 anos de experiência industrial</strong> em
                monitoramento de KPIs e troubleshooting crítico ao desenvolvimento de aplicações web
                modernas (<strong className="text-white">Node.js, Python, React, TypeScript</strong>)
                e administração de redes e servidores Linux.
              </p>

              {/* Grade de botões: 2 colunas simétricas no celular (botão principal ocupa a largura toda) e em linha no desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="col-span-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition shadow-lg shadow-emerald-500/15"
                >
                  <Layers className="w-4 h-4" />
                  Explorar Projetos
                </a>

                <a
                  href="/images/curriculo-arialyson.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium text-xs sm:text-sm transition"
                >
                  <Download className="w-4 h-4 text-emerald-400 shrink-0" />
                  Currículo (PDF)
                </a>

                <a
                  href="https://github.com/Arialyson"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-medium text-xs sm:text-sm transition"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* =====================================================================
          3. SEÇÃO PERFIL & DIFERENCIAL (BENTO GRID)
      ===================================================================== */}
      <section id="perfil" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 border-b border-slate-800/70">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            01. Proposta de Valor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Código Limpo + Mentalidade de Disponibilidade Crítica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Engenharia Full-Stack</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Construção ponta a ponta de aplicações web escaláveis, desde a modelagem relacional
              (PostgreSQL/MySQL) e APIs seguras até interfaces responsivas em React e TypeScript.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Redes & Servidores Linux</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Domínio prático de infraestrutura: configuração de servidores Debian/Samba,
              segmentação com VLANs, roteamento, DHCP, NAT e diagnóstico de conectividade.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rigor Analítico Industrial</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mais de uma década operando processos industriais de alta precisão, trazendo análise
              de causa raiz, controle de indicadores (KPIs) e calma sob pressão para ambientes de TI.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SEÇÃO DE PROJETOS (COM FILTROS INTERATIVOS)
      ===================================================================== */}
      <section id="projetos" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 border-b border-slate-800/70">
        {/* Cabeçalho e botões de filtro */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              02. Portfólio Técnico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Projetos em Produção & Laboratórios
            </h2>
          </div>

          {/* Botões de filtro por categoria */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos (5)' },
              { id: 'fullstack', label: 'Full-Stack & Dados' },
              { id: 'infra', label: 'Infraestrutura & Redes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CARD EM DESTAQUE (KAIOWÁ) */}
        {featuredProject && (
          <div className="mb-8 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden hover:border-emerald-500/40 transition">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Informações do Projeto */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                      PROJETO EM DESTAQUE
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {featuredProject.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {featuredProject.description}
                  </p>

                  {/* Bloco de Arquitetura */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 mb-5">
                    <p className="text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-semibold">Arquitetura:</span>{' '}
                      {featuredProject.architecture}
                    </p>
                  </div>

                  {/* Tags de Tecnologias */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Acessar Aplicação ao Vivo
                  </a>
                  <a
                    href={featuredProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition"
                  >
                    <Github className="w-4 h-4" />
                    Repositório GitHub
                  </a>
                </div>
              </div>

              {/* Imagem de Pré-visualização */}
              <div className="lg:col-span-5 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-auto max-h-80 object-cover rounded-xl border border-slate-800 shadow-xl"
                />
              </div>
            </div>
          </div>
        )}

        {/* GRADE DOS DEMAIS PROJETOS (2 COLUNAS NO DESKTOP, 1 NO CELULAR) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition group"
            >
              <div>
                {/* Imagem de capa do card */}
                <div className="h-48 sm:h-52 bg-slate-950 border-b border-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Conteúdo textual */}
                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                    {project.category === 'infra' ? 'Redes & Infraestrutura' : 'Full-Stack & Dados'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rodapé do Card com Links */}
              <div className="px-6 pb-6 pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition"
                >
                  <Github className="w-4 h-4" />
                  {project.primaryRepoLabel || 'Ver no GitHub'}
                </a>

                {project.secondaryRepoUrl && (
                  <a
                    href={project.secondaryRepoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    {project.secondaryRepoLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. STACK TECNOLÓGICA
      ===================================================================== */}
      <section id="stack" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 border-b border-slate-800/70">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            03. Competências Técnicas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Stack de Desenvolvimento & Infraestrutura
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {STACK_GROUPS.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          6. TRAJETÓRIA ACADÊMICA E PROFISSIONAL
      ===================================================================== */}
      <section id="trajetoria" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 border-b border-slate-800/70">
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            04. Histórico
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Formação & Experiência Profissional
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna Formação */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-white font-semibold mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3>Formação Acadêmica & Técnica</h3>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400">Em andamento</span>
              <h4 className="font-bold text-white mt-1">
                Análise e Desenvolvimento de Sistemas (ADS)
              </h4>
              <p className="text-xs text-slate-400 mt-1">Ensino Superior • Foco em Engenharia de Software e Arquitetura de Sistemas</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400">Formação Técnica</span>
              <h4 className="font-bold text-white mt-1">
                Técnico em Redes de Computadores
              </h4>
              <p className="text-xs text-slate-400 mt-1">Administração de Servidores Linux, Protocolos TCP/IP, Cabeamento e Segurança de Redes</p>
            </div>
          </div>

          {/* Coluna Experiência */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-white font-semibold mb-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <h3>Experiência Consolidada</h3>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <span className="text-xs font-mono text-emerald-400">+11 Anos de Experiência</span>
              <h4 className="font-bold text-white mt-1">
                Operação Industrial & Monitoramento de Processos Críticos
              </h4>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Atuação contínua em ambiente de alta exigência operacional, com foco em controle de
                indicadores de desempenho (KPIs), diagnóstico rápido de falhas (troubleshooting),
                melhoria contínua e trabalho colaborativo em equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. CONTATO & RODAPÉ
      ===================================================================== */}
      <footer id="contato" className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 p-7 sm:p-10 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            05. Próximo Passo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
            Vamos conversar sobre tecnologia?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-7">
            Estou aberto a oportunidades de estágio ou posição júnior em Desenvolvimento Full-Stack,
            Back-End, Suporte Técnico N2/N3 ou Infraestrutura de Redes.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:arialyson@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition"
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/arialyson-lima"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Arialyson"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Arialyson Lima. Todos os direitos reservados.</p>
          <p className="font-mono">Desenvolvido com React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}