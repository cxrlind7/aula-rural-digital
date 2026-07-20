import type { Lesson } from '@/types'

export const module1Intro =
  'En este módulo reflexionarás a fondo sobre las particularidades de enseñar en un aula rural, muchas veces multigrado, y conocerás estrategias pedagógicas pensadas específicamente para ese contexto. No se trata de replicar el modelo de una escuela urbana con menos recursos, sino de reconocer y aprovechar las fortalezas propias de la comunidad rural. A lo largo de cuatro lecciones encontrarás fundamentos, ejemplos prácticos y materiales oficiales de la SEP y el CONAFE para profundizar en cada tema.'

export const module1Lessons: Lesson[] = [
  {
    id: 'l1',
    title: 'Características del aula multigrado',
    body: [
      'Un aula multigrado reúne en un mismo espacio y tiempo a estudiantes de distintos grados, edades y niveles de desarrollo, a cargo de una sola maestra o maestro. Esto exige organizar la enseñanza de manera muy distinta a la de un aula graduada tradicional, donde todos los alumnos comparten edad y nivel curricular.',
      'Lejos de ser una limitación, el aula multigrado favorece de forma natural el aprendizaje entre pares: los estudiantes de grados más avanzados apoyan a los más pequeños, y todos aprenden a trabajar con autonomía mientras la o el docente atiende a un grupo específico. Este modelo se conoce como tutoría entre iguales y es una de las bases de propuestas como Dialogar y Descubrir del CONAFE.',
      'Reconocer estas características es el primer paso para planear con realismo: no busques una sesión idéntica para todos, sino actividades con distintos niveles de complejidad que convivan en el mismo momento de clase.',
      'Antes de planear, dedica tiempo a elaborar un diagnóstico de tu grupo: qué saben hacer tus estudiantes de cada grado, qué similitudes existen entre grados distintos y qué temas del programa pueden abordarse de forma conjunta. Este diagnóstico será la base de toda tu planeación diferenciada en las siguientes lecciones.',
    ],
    resources: [
      {
        type: 'video',
        title: 'Retos y ventajas de la educación rural multigrado en México',
        url: 'https://www.youtube.com/watch?v=PlJnDHcmyOg',
      },
    ],
  },
  {
    id: 'l2',
    title: 'Planeación diferenciada',
    body: [
      'Planear de forma diferenciada significa diseñar una misma sesión con distintas rutas de trabajo, según el grado o el nivel de cada estudiante, en lugar de repetir la clase varias veces.',
      'Una estrategia práctica es partir de un tema común para todo el grupo (por ejemplo, "el agua en nuestra comunidad") y, a partir de ahí, plantear consignas con distinto grado de exigencia: los más pequeños dibujan y describen, los intermedios escriben un párrafo, y los más grandes investigan y argumentan. Esta estrategia se conoce como "tema común con actividades diferenciadas" y es una de las más usadas en las guías oficiales de la SEP para escuelas multigrado.',
      'Organizar "rincones" o estaciones de trabajo por nivel dentro del aula permite que cada estudiante avance en la actividad que le corresponde mientras tú te desplazas para apoyar a quien más lo necesita en ese momento. Esta forma de organizar el espacio físico es tan importante como la planeación de contenidos.',
      'Documentar tu planeación diferenciada —aunque sea en un formato sencillo— te permite dar seguimiento al avance real de cada estudiante y ajustar la siguiente sesión con base en evidencia, no solo en intuición.',
    ],
    resources: [
      {
        type: 'pdf',
        title: 'Secuencias didácticas multigrado para docentes de escuelas primarias (SEP)',
        url: 'https://dgeiib.basica.sep.gob.mx/files/fondo-editorial/multigrado/m_00005.pdf',
      },
      {
        type: 'pdf',
        title: 'Planeación didáctica multigrado · Orientaciones CTE (SEP)',
        url: 'https://gestion.cte.sep.gob.mx/insumos/docs/2526_s6_multi_orientaciones_Tema2.pdf',
      },
    ],
  },
  {
    id: 'l3',
    title: 'Aprendizaje situado y comunitario',
    body: [
      'El aprendizaje situado propone que los contenidos escolares cobren sentido cuando se conectan con la vida cotidiana y el entorno inmediato de las y los estudiantes: el campo, el mercado local, las tradiciones familiares, el ciclo agrícola.',
      'En la escuela rural, la comunidad es un recurso pedagógico en sí misma. Invitar a madres, padres o personas mayores de la comunidad a compartir un saber (un oficio, una receta, una técnica de siembra) puede convertirse en el punto de partida de una secuencia didáctica completa.',
      'Una herramienta útil es el calendario sociocultural de la comunidad: un registro de las actividades productivas, festividades y ciclos naturales propios de la localidad a lo largo del año. Alinear tu planeación con este calendario te permite anticipar los mejores momentos para trabajar cada tema con pertinencia cultural.',
      'Este enfoque no solo enriquece el aprendizaje: también fortalece el vínculo entre la escuela y la comunidad, y da a las niñas y los niños un motivo concreto para valorar su propio entorno.',
    ],
    resources: [
      {
        type: 'video',
        title: 'La escuela como centro de aprendizaje comunitario · Soy Docente (SEP)',
        url: 'https://www.youtube.com/watch?v=-Alz892H9Xg',
      },
    ],
  },
  {
    id: 'l4',
    title: 'Gestión del tiempo y organización del aula',
    body: [
      'Uno de los mayores retos del aula multigrado es repartir tu tiempo entre varios grados sin que ninguno quede desatendido demasiado tiempo. Dividir la sesión en bloques breves y alternar la atención directa con el trabajo autónomo es clave para lograrlo.',
      'Establecer rutinas claras —cómo pedir ayuda, qué hacer al terminar una actividad, dónde entregar el trabajo— reduce las interrupciones y da a tus estudiantes mayor autonomía, liberando tiempo para que atiendas al grupo que más lo necesita en cada momento.',
      'Un horario visual, pegado en el salón, ayuda a que cada grado sepa qué actividad le corresponde en cada bloque sin depender de que se lo repitas constantemente. Esto es especialmente útil en grupos con más de dos grados.',
      'La organización del tiempo no es rígida: revisa semanalmente qué funcionó y qué no, y ajusta tus bloques y rutinas con base en lo que observas en tu grupo.',
    ],
    resources: [
      {
        type: 'pdf',
        title: 'La Propuesta Educativa Multigrado · Reorganización curricular (SEP)',
        url: 'https://tabasco.gob.mx/sites/default/files/users/setabasco/Gu%C3%ADa%20Multigrado_compressed.pdf',
      },
    ],
  },
]

export const module1Video = {
  title: 'Enseñanza en las escuelas rurales multigrado',
  url: 'https://www.youtube.com/watch?v=gM7QbldT4zg',
}

export const module1Resource = {
  label: 'Pedagogía y didáctica del aula multigrado (SEP)',
  description: 'Documento PDF oficial · Módulo 1',
  url: 'https://dgesum.sep.gob.mx/storage/recursos/planes2022/HzMMlgcAPs-4442.pdf',
}
