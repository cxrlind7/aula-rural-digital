import type { Lesson } from '@/types'

export const module1Intro =
  'En este módulo darás tus primeros pasos para fortalecer tus competencias digitales: vas a explorar qué son los recursos educativos digitales, a conocer herramientas gratuitas para crearlos, a adaptarlos a la conectividad real de tu comunidad y a usarlos de forma ética. No necesitas experiencia previa con tecnología: cada lección incluye ejemplos concretos y pensados para el contexto rural, multigrado y con acceso limitado a internet.'

export const module1Lessons: Lesson[] = [
  {
    id: 'l1',
    title: '¿Qué son los recursos educativos digitales?',
    body: [
      'Un recurso educativo digital (RED) es cualquier material de apoyo a la enseñanza creado o adaptado con una herramienta digital: una ficha de trabajo, una infografía, una presentación, un audio o un video breve. La clave no es la tecnología en sí, sino que el recurso te ayude a explicar mejor un tema o a que tus estudiantes practiquen de forma más clara.',
      'En el aula rural multigrado, un recurso digital bien diseñado tiene una ventaja extra: se puede adaptar rápido para distintos grados, reutilizar ciclo tras ciclo, e imprimir cuando no haya forma de proyectarlo. No se trata de sustituir tus materiales de papel, sino de tener una versión editable que te ahorre tiempo a futuro.',
      'No todo recurso digital requiere internet para usarse en clase: puedes crear el material una sola vez, cuando tengas señal, y después proyectarlo o imprimirlo sin conexión. La meta de este módulo es justamente esa: perder el miedo a la herramienta y aprender a planear con la conectividad real de tu comunidad en mente.',
      'Antes de seguir, piensa en una actividad que ya usas en papel (una ficha, un juego, una lámina) y que te gustaría convertir en un recurso digital. La usarás como ejemplo práctico a lo largo de este módulo.',
    ],
  },
  {
    id: 'l2',
    title: 'Herramientas gratuitas para crear materiales',
    body: [
      'Existen herramientas gratuitas, pensadas para docentes, que no requieren instalar nada ni saber diseño: solo necesitas una cuenta de correo y elegir una plantilla. Canva para Educación, por ejemplo, ofrece plantillas listas para fichas, infografías y presentaciones, con acceso gratuito para docentes de educación básica.',
      'Google Slides y Google Docs son otra opción sencilla: permiten crear presentaciones y documentos que se guardan automáticamente y se pueden exportar como PDF o imagen para compartirlos sin necesidad de que tus estudiantes tengan cuenta de Google.',
      'Si tu material necesita imágenes, evita descargar cualquier imagen de internet: usa bancos de imágenes gratuitas y de uso libre, como Pixabay, que no requieren pago ni dan problemas de derechos de autor.',
      'Un buen primer ejercicio es tomar la actividad de papel que elegiste en la lección anterior y recrearla en una sola plantilla, sin buscar que quede perfecta. La práctica repetida, no la perfección, es lo que construye tu competencia digital.',
    ],
    resources: [
      {
        type: 'link',
        title: 'Canva para Docentes (gratis)',
        url: 'https://www.canva.com/education/teachers/',
      },
    ],
  },
  {
    id: 'l3',
    title: 'Adaptar recursos a la conectividad de tu comunidad',
    body: [
      'La conectividad limitada no debe ser un obstáculo para usar recursos digitales, sino una condición que hay que planear con anticipación. Aprovecha los momentos en que tienes señal (en la cabecera municipal, en casa, en la escuela si hay internet) para descargar, exportar o imprimir los materiales que usarás durante la semana.',
      'Prefiere formatos ligeros: una imagen o un PDF pesan mucho menos que un video, y se pueden compartir por USB o Bluetooth entre dispositivos sin gastar datos móviles. Guarda tus materiales en una carpeta organizada por módulo o por semana para encontrarlos rápido, incluso sin conexión.',
      'Si en tu comunidad hay pocos dispositivos disponibles, no es necesario que cada estudiante tenga uno: puedes proyectar el recurso desde un solo dispositivo, imprimir copias reducidas, o trabajar por equipos rotando el acceso a la pantalla.',
      'Documenta qué estrategia de conectividad usaste con cada recurso (impreso, proyectado, compartido por USB): esa información te servirá para planear con más realismo el siguiente ciclo escolar.',
    ],
  },
  {
    id: 'l4',
    title: 'Uso ético y derechos de autor',
    body: [
      'Cuando uses imágenes, textos o plantillas de otras personas, es importante dar crédito y respetar las licencias de uso. Las licencias Creative Commons son un sistema sencillo que indica qué se puede hacer con una obra (usarla, adaptarla, compartirla) sin necesidad de pedir permiso directo al autor.',
      'Evita publicar fotografías o trabajos de tus estudiantes en internet sin el consentimiento de sus familias, y cuando lo hagas, procura no incluir datos personales visibles (nombre completo, ubicación exacta de la escuela).',
      'Estas mismas buenas prácticas —dar crédito, cuidar la privacidad, revisar antes de compartir— son la base para usar herramientas más avanzadas, como la inteligencia artificial, de forma responsable: lo verás con más detalle en un módulo próximo.',
      'Antes de compartir cualquier recurso que crees, revisa una checklist breve: ¿di crédito a las fuentes que usé?, ¿protegí la identidad de mis estudiantes?, ¿el recurso es útil también sin conexión?',
    ],
    resources: [
      {
        type: 'link',
        title: 'Licencias Creative Commons, explicadas',
        url: 'https://creativecommons.org/licenses/?lang=es',
      },
    ],
  },
]

export const module1Video = {
  title: 'Competencia digital docente: claves para integrar la tecnología en el aula',
  url: 'https://www.youtube.com/watch?v=Hr1wejLfkKY',
}

export const module1Resource = {
  label: 'Marco de Referencia de la Competencia Digital Docente (INTEF)',
  description: 'Documento PDF · Marco de competencias digitales para docentes',
  url: 'https://intef.es/wp-content/uploads/2023/05/MRCDD_GTTA_2022.pdf',
}
