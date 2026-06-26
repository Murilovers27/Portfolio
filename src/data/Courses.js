export const COURSE_CATEGORIES = [
  { id: 'all',     label: 'Todos'            },
  { id: 'java',    label: 'Java'             },
  { id: 'web',     label: 'Desenvolvimento Web' },
  { id: 'dados',   label: 'Banco de Dados'   },
  { id: 'devops',  label: 'Cloud & DevOps'   },
  { id: 'redes',   label: 'Redes'            },
  { id: 'seguranca', label: 'Segurança'      },
  { id: 'git', label: 'Git/Github'}
];

export const ALL_COURSES = [
  {
    id: 1,
    title: 'Java I',
    platform: 'IFRS - Instituto federal do RIo Grande do Sul',
    year: 2025,
    hours: 40,
    status: 'concluded',
    category: 'java',
    featured: false,
    certificate: '/certificados/java/java-i-programacao.pdf'
  },
  {
    id: 2,
    title: 'Java II',
    platform: 'IFRS - Instituto federal do RIo Grande do Sul',
    year: 2025,
    hours: 40,
    status: 'concluded',
    category: 'java',
    featured: false,
    certificate: '/certificados/java/java-ii-programacao.pdf'
  },
  {
    id: 3,
    title: 'Java III',
    platform: 'IFRS - Instituto federal do RIo Grande do Sul',
    year: 2025,
    hours: 40,
    status: 'concluded',
    category: 'java',
    featured: false,
    certificate: '/certificados/java/java-iii-programacao.pdf'
  },
  {
    id: 4,
    title: 'Spring Boot 3 & Spring Framework 6',
    platform: 'Alura',
    year: 2026,
    hours: 10,
    status: 'ongoing',
    category: 'java',
    featured: false,
    certificate: '/certificados/java/'
  },
  {
    id: 5,
    title: 'LGPD - Léi geral de proteção de dados',
    platform: 'Fundação Bradesco',
    year: 2026,
    hours: 2,
    status: 'concluded',
    category: 'seguranca',
    featured: false,
    certificate: '/certificados/segurança/lgpd.pdf'
  },
  {
    id: 6,
    title: 'OWASP - TOP 10',
    platform: 'Alura',
    year: 2026,
    hours: 10,
    status: 'concluded',
    category: 'seguranca',
    featured: false,
    certificate: '/certificados/segurança/owasp-top-10.pdf'
  },
  {
    id: 7,
    title: 'Boas praticas de segurança',
    platform: 'Fundação Bradesco',
    year: 2026,
    hours: 12,
    status: 'concluded',
    category: 'seguranca',
    featured: false,
    certificate: '/certificados/segurança/seguranca-ti.pdf'
  },
  {
    id: 8,
    title: 'Git e GitHub',
    platform: 'Alura',
    year: 2026,
    hours: 10,
    status: 'concluded',
    category: 'git',
    featured: false,
    certificate: '/certificados/gitHub/git-e-github.pdf'
  },
  {
    id: 9,
    title: 'Ia no github',
    platform: 'Fundação Bradesco',
    year: 2026,
    hours: 15,
    status: 'concluded',
    category: 'git',
    featured: false,
    certificate: '/certificados/gitHub/ia-no-github.pdf'
  },
  {
    id: 10,
    title: 'Fundamentos de banco de dados Relacional',
    platform: 'IFRS - Instituto federal do Rio Grande do Sul',
    year: 2025,
    hours: 20,
    status: 'concluded',
    category: 'dados',
    featured: false,
    certificate: '/certificados/bancoDeDados/fundamentos-banco-dados-relacional.pdf'
  },
  {
    id:11,
    title: 'Banco de Dados: Oracle PL/SQL,',
    platform: 'IFRS - Instituto federal do Rio Grande do Sul',
    year: 2025,
    hours: 20,
    status: 'concluded',
    category: 'dados',
    featured: false,
    certificate: '/certificados/bancoDeDados/oracle-plsql.pdf'
  },
   
];