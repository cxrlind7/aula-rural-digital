import type { CourseModule } from '@/types'

export const modules: CourseModule[] = [
  {
    id: 1,
    slug: 'diseno-de-recursos-educativos-digitales',
    title: 'Diseño de Recursos Educativos Digitales',
    objective:
      'Explorar y aplicar herramientas digitales gratuitas para crear materiales didácticos propios, adaptados a la conectividad real del aula rural.',
    contents: [
      '¿Qué son los recursos educativos digitales?',
      'Herramientas gratuitas para crear materiales',
      'Adaptar recursos a la conectividad de tu comunidad',
      'Uso ético y derechos de autor',
    ],
    duration: '6 horas',
    icon: 'ComputerDesktopIcon',
    color: '#3CDBD3',
    locked: false,
  },
  {
    id: 2,
    slug: 'optimizacion-de-tareas-administrativas',
    title: 'Optimización de Tareas Administrativas',
    objective:
      'Usar herramientas digitales sencillas para agilizar la planeación, el registro de evidencias y otras tareas administrativas del día a día docente.',
    contents: ['Formularios y listas digitales', 'Organización de archivos en la nube', 'Automatización de tareas repetitivas'],
    duration: '4 horas',
    icon: 'WrenchScrewdriverIcon',
    color: '#7DCE82',
    locked: true,
  },
  {
    id: 3,
    slug: 'ia-etica-en-el-aula',
    title: 'Inteligencia Artificial Ética en el Aula',
    objective:
      'Comprender qué es la inteligencia artificial generativa y cómo incorporarla de forma ética y responsable en la práctica docente.',
    contents: ['¿Qué es la IA generativa?', 'Usos éticos y riesgos en el aula', 'La IA como apoyo, no como reemplazo del docente'],
    duration: '5 horas',
    icon: 'SparklesIcon',
    color: '#E8E288',
    locked: true,
  },
  {
    id: 4,
    slug: 'innovacion-en-la-ensenanza-y-el-aprendizaje',
    title: 'Innovación en la Enseñanza y el Aprendizaje',
    objective:
      'Integrar lo aprendido en los módulos anteriores para enriquecer la práctica docente cotidiana con estrategias innovadoras y contextualizadas.',
    contents: ['Estrategias activas con apoyo digital', 'Evaluación del propio aprendizaje', 'Construir tu portafolio digital docente'],
    duration: '5 horas',
    icon: 'LightBulbIcon',
    color: '#FF8360',
    locked: true,
  },
]
