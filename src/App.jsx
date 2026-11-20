import React, { useState } from 'react';
import {
  Terminal,
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
 * ÍCONES SVG NATIVOS PARA REDES SOCIAIS
 * Evita falhas de build nas versões mais recentes do lucide-react que removeram ícones de marcas.
 */
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

/**
 * LISTA DE PROJETOS DO PORTFÓLIO
 * 'featured: true' exibe o card principal (Kaiowá) em destaque.
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
 * COMPETÊNCIAS TÉCNICAS ORGANIZADAS POR ÁREA
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
  // Controla o filtro de categoria dos projetos ('all' | 'fullstack' | 'infra')
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const featuredProject = filteredProjects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* =====================================================================
          1. BARRA DE NAVEGAÇÃO (DESKTOP INALTERADO + MENU RÁPIDO SÓ NO CELULAR)
      ===================================================================== */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold text-white tracking-tight text-sm sm:text-base">
              arialyson<span className="text-emerald-400">.dev</span>
            </span>
          </a>

          {/* Links horizontais no computador (md:flex) */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#perfil" className="hover:text-emerald-400 transition">Perfil</a>
            <a href="#projetos" className="hover:text-emerald-400 transition">Projetos</a>
            <a href="#stack" className="hover:text-emerald-400 transition">Stack</a>
            <a href="#trajetoria" className="hover:text-emerald-400 transition">Trajetória</a>
            <a href="#contato" className="hover:text-emerald-400 transition">Contato</a>
          </div>

          {/* Ícones sociais */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Arialyson"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arialyson-lima"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 transition"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Menu rápido visível APENAS em celulares (md:hidden) */}
        <div className="flex md:hidden items-center justify-between px-5 py-2.5 border-t border-slate-800/80 bg-slate-950/95 text-xs font-medium text-slate-400 overflow-x-auto gap-4">
          <a href="#perfil" className="hover:text-emerald-400 whitespace-nowrap">Perfil</a>
          <a href="#projetos" className="hover:text-emerald-400 whitespace-nowrap">Projetos</a>
          <a href="#stack" className="hover:text-emerald-400 whitespace-nowrap">Stack</a>
          <a href="#trajetoria" className="hover:text-emerald-400 whitespace-nowrap">Trajetória</a>
          <a href="#contato" className="hover:text-emerald-400 whitespace-nowrap">Contato</a>
        </div>
      </nav>

      {/* =====================================================================
          2. HERO SECTION (DESKTOP IDÊNTICO • MOBILE COM FOTO NO TOPO E GRADE SIMÉTRICA)
      ===================================================================== */}
      <header className="relative overflow-hidden border-b border-slate-800/70">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-10 pb-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* COLUNA DA FOTO:
                - Celular: aparece primeiro (order-first), centralizada, tamanho w-44 h-44
                - Computador (lg:): volta para a direita (lg:order-last), tamanho lg:w-80 lg:h-80 */}
            <div className="order-first lg:order-last lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl shadow-emerald-950/20">
                  <img
                    src="/images/perfil.jpg"
                    alt="Arialyson Lima"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Crachá: centralizado no celular; deslocado à esquerda (lg:-left-5) no desktop */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-left-5 bg-slate-900/95 backdrop-blur border border-slate-700 px-3.5 py-1.5 rounded-xl shadow-lg whitespace-nowrap">
                  <p className="text-xs font-semibold text-white">Full-Stack & Redes</p>
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Natal, RN • Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* COLUNA DE TEXTO:
                - Celular: centralizado (text-center) e botões em grade simétrica (grid-cols-2)
                - Computador (lg:): alinhado à esquerda (lg:text-left) e botões em linha (sm:flex) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-mono mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>DISPONÍVEL • ESTÁGIO / JÚNIOR (DEV • INFRA)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
                Arialyson Lima
              </h1>
              <h2 className="text-lg sm:text-2xl font-medium text-emerald-400 mb-5">
                Desenvolvedor Full-Stack & Profissional de Infraestrutura de TI
              </h2>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-7 max-w-2xl mx-auto lg:mx-0">
                Unindo <strong className="text-white">+11 anos de experiência industrial</strong> em
                monitoramento de KPIs e troubleshooting crítico ao desenvolvimento de aplicações web
                modernas (<strong className="text-white">Node.js, Python, React, TypeScript</strong>)
                e administração de redes e servidores Linux.
              </p>

              {/* Botões: grade simétrica de 2 colunas no celular e linha horizontal no computador */}
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
                  <GithubIcon className="w-4 h-4 shrink-0" />
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              02. Portfólio Técnico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Projetos em Produção & Laboratórios
            </h2>
          </div>

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

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 mb-5">
                    <p className="text-xs font-mono text-slate-300">
                      <span className="text-emerald-400 font-semibold">Arquitetura:</span>{' '}
                      {featuredProject.architecture}
                    </p>
                  </div>

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
                    <GithubIcon className="w-4 h-4" />
                    Repositório GitHub
                  </a>
                </div>
              </div>

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

        {/* GRADE DOS DEMAIS PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition group"
            >
              <div>
                <div className="h-48 sm:h-52 bg-slate-950 border-b border-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                    {project.category === 'infra' ? 'Redes & Infraestrutura' : 'Full-Stack & Dados'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">{project.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

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

              <div className="px-6 pb-6 pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition"
                >
                  <GithubIcon className="w-4 h-4" />
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
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Arialyson"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition"
            >
              <GithubIcon className="w-4 h-4" />
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