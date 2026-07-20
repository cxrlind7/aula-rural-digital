import type { ResourceCategory } from '@/types'

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'consulta',
    icon: 'DocumentTextIcon',
    title: 'Materiales de consulta',
    description: 'Guías y documentos en PDF para profundizar en cada módulo.',
    items: [
      {
        label: 'Secuencias didácticas multigrado para docentes de escuelas primarias',
        description: 'Documento PDF · SEP · Módulo 1',
        url: 'https://dgeiib.basica.sep.gob.mx/files/fondo-editorial/multigrado/m_00005.pdf',
      },
      {
        label: 'Manual de educación en línea para docentes',
        description: 'Documento PDF · Módulo 2 (próximamente)',
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
        label: 'Enseñanza en las escuelas rurales multigrado',
        description: 'Video · Módulo 1',
        url: 'https://www.youtube.com/watch?v=gM7QbldT4zg',
      },
      {
        label: 'La escuela como centro de aprendizaje comunitario · Soy Docente',
        description: 'Video · SEP · Módulo 1',
        url: 'https://www.youtube.com/watch?v=-Alz892H9Xg',
      },
    ],
  },
  {
    id: 'herramientas',
    icon: 'WrenchScrewdriverIcon',
    title: 'Herramientas digitales',
    description: 'Aplicaciones y plataformas recomendadas, con versión ligera para zonas de baja conectividad.',
    items: [
      { label: 'Google Classroom (modo offline)', description: 'Herramienta recomendada' },
      { label: 'Canva para material didáctico', description: 'Herramienta recomendada' },
    ],
  },
  {
    id: 'descargables',
    icon: 'ArrowDownTrayIcon',
    title: 'Recursos descargables',
    description: 'Plantillas y fichas listas para imprimir o adaptar en tu salón.',
    items: [
      { label: 'Plantilla de planeación diferenciada', description: 'Documento editable' },
      { label: 'Fichas de trabajo colaborativo', description: 'Documento editable' },
    ],
  },
  {
    id: 'bibliografia',
    icon: 'BookOpenIcon',
    title: 'Bibliografía y enlaces recomendados',
    description: 'Lecturas y sitios externos para ampliar cada tema.',
    items: [
      {
        label: 'Pedagogía y didáctica del aula multigrado',
        description: 'Documento PDF · SEP · Módulo 1',
        url: 'https://dgesum.sep.gob.mx/storage/recursos/planes2022/HzMMlgcAPs-4442.pdf',
      },
      {
        label: 'Planeación didáctica multigrado · Orientaciones CTE',
        description: 'Documento PDF · SEP · Módulo 1',
        url: 'https://gestion.cte.sep.gob.mx/insumos/docs/2526_s6_multi_orientaciones_Tema2.pdf',
      },
    ],
  },
]
