import type { ResourceCategory } from '@/types'

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'consulta',
    icon: 'DocumentTextIcon',
    title: 'Materiales de consulta',
    description: 'Marcos de referencia y guías para profundizar en cada módulo.',
    items: [
      {
        label: 'Marco de Referencia de la Competencia Digital Docente',
        description: 'Documento PDF · INTEF · Módulo 1',
        url: 'https://intef.es/wp-content/uploads/2023/05/MRCDD_GTTA_2022.pdf',
      },
      {
        label: 'Guía de la UNESCO sobre IA generativa en educación',
        description: 'Documento (en inglés) · UNESCO · Módulo 3 (próximamente)',
        url: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',
      },
      {
        label: 'Revista Aula Digital · TIC en la educación',
        description: 'Revista digital (Calameo) · Ver en Acerca del curso',
        url: 'https://www.calameo.com/read/007767652e7feef96a561',
      },
    ],
  },
  {
    id: 'videos',
    icon: 'PlayCircleIcon',
    title: 'Videos educativos',
    description: 'Cápsulas y conferencias por tema.',
    items: [
      {
        label: 'Competencia digital docente: claves para integrar la tecnología en el aula',
        description: 'Video · Módulo 1',
        url: 'https://www.youtube.com/watch?v=Hr1wejLfkKY',
      },
    ],
  },
  {
    id: 'herramientas',
    icon: 'WrenchScrewdriverIcon',
    title: 'Herramientas digitales',
    description: 'Aplicaciones y plataformas gratuitas para diseñar materiales y organizar tareas administrativas.',
    items: [
      {
        label: 'Canva para Docentes',
        description: 'Diseño de fichas, infografías y presentaciones · Gratis',
        url: 'https://www.canva.com/education/teachers/',
      },
      {
        label: 'Google Classroom',
        description: 'Organización de tareas, avisos y materiales',
        url: 'https://edu.google.com/intl/ALL_us/workspace-for-education/products/classroom/',
      },
      {
        label: 'Pixabay',
        description: 'Banco de imágenes gratuitas y de uso libre',
        url: 'https://pixabay.com/es/',
      },
    ],
  },
  {
    id: 'descargables',
    icon: 'ArrowDownTrayIcon',
    title: 'Recursos descargables',
    description: 'Plantillas y fichas listas para imprimir o adaptar en tu salón.',
    items: [
      { label: 'Checklist de uso ético de recursos digitales', description: 'Documento editable' },
      { label: 'Plantilla de planeación con recursos digitales', description: 'Documento editable' },
    ],
  },
  {
    id: 'bibliografia',
    icon: 'BookOpenIcon',
    title: 'Bibliografía y enlaces recomendados',
    description: 'Lecturas y sitios externos para ampliar cada tema.',
    items: [
      {
        label: 'Licencias Creative Commons, explicadas',
        description: 'Sitio oficial · Uso ético y derechos de autor',
        url: 'https://creativecommons.org/licenses/?lang=es',
      },
      {
        label: 'Recomendación de la UNESCO sobre la ética de la inteligencia artificial',
        description: 'Documento · UNESCO · Módulo 3 (próximamente)',
        url: 'https://www.unesco.org/es/articles/recomendacion-sobre-la-etica-de-la-inteligencia-artificial',
      },
    ],
  },
]
