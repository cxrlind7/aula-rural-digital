import type { QuizQuestion } from '@/types'

export const module1QuizId = 'm1-quiz-recursos-digitales'

export const module1Quiz: QuizQuestion[] = [
  {
    id: 'q1',
    prompt: '¿Qué es un recurso educativo digital (RED)?',
    options: [
      { id: 'a', text: 'Cualquier material de apoyo a la enseñanza creado o adaptado con una herramienta digital' },
      { id: 'b', text: 'Solo los videos que se ven en internet' },
      { id: 'c', text: 'Un programa que reemplaza al docente' },
      { id: 'd', text: 'Un documento que solo funciona con conexión a internet' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'q2',
    prompt: '¿Qué herramienta gratuita se menciona para crear infografías y presentaciones con plantillas listas?',
    options: [
      { id: 'a', text: 'Canva para Educación' },
      { id: 'b', text: 'Photoshop' },
      { id: 'c', text: 'Excel' },
      { id: 'd', text: 'AutoCAD' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'q3',
    prompt: '¿Cuál es una buena estrategia para usar recursos digitales con conectividad limitada?',
    options: [
      { id: 'a', text: 'Descargar o exportar los materiales cuando haya señal, para usarlos después sin conexión' },
      { id: 'b', text: 'Solo trabajar con materiales impresos y nunca digitales' },
      { id: 'c', text: 'Esperar a que llegue mejor internet a la comunidad' },
      { id: 'd', text: 'Usar siempre video en lugar de imágenes' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'q4',
    prompt: '¿Para qué sirven las licencias Creative Commons?',
    options: [
      { id: 'a', text: 'Para cobrar por el uso de una obra' },
      { id: 'b', text: 'Para indicar qué se puede hacer con una obra sin pedir permiso directo al autor' },
      { id: 'c', text: 'Para bloquear el uso de cualquier imagen' },
      { id: 'd', text: 'Solo aplican a software, no a imágenes o textos' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'q5',
    prompt: 'Si no hay suficientes dispositivos para cada estudiante, ¿qué estrategia puede funcionar?',
    options: [
      { id: 'a', text: 'Cancelar la actividad digital' },
      { id: 'b', text: 'Proyectar desde un solo dispositivo o trabajar por equipos rotando el acceso' },
      { id: 'c', text: 'Pedir a las familias que compren un dispositivo por estudiante' },
      { id: 'd', text: 'Solo usar la actividad con el grado más avanzado' },
    ],
    correctOptionId: 'b',
  },
]
