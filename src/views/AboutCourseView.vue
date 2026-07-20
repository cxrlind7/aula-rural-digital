<script setup lang="ts">
import { motion } from 'motion-v'
import { ClockIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'

const facts = [
  { icon: ClockIcon, label: 'Modalidad', value: 'En línea, autoadministrado (asíncrono)' },
  { icon: ClockIcon, label: 'Duración estimada', value: '20 horas' },
  { icon: UserGroupIcon, label: 'Dirigido a', value: 'Docentes frente a grupo de educación primaria en contextos rurales' },
  { icon: AcademicCapIcon, label: 'Autora', value: 'Mtra. Nora Torres' },
]
</script>

<template>
  <div class="container-page space-y-10 py-14">
    <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }" class="text-center">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Acerca del curso</span>
      <h1 class="mt-4 text-3xl md:text-4xl">¿Qué es este curso?</h1>
      <p class="mx-auto mt-3 max-w-2xl text-(--color-ink)/80">
        Aula Rural Digital es un curso de autocapacitación en línea, diseñado para que lo tomes a tu propio ritmo,
        sin horarios fijos ni conexión constante a internet. Está pensado específicamente para la realidad de las
        escuelas primarias rurales: aulas multigrado, conectividad limitada y jornadas exigentes.
      </p>
    </motion.div>

    <motion.div
      class="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.35, delay: 0.1 }"
    >
      <div v-for="fact in facts" :key="fact.label" class="card flex items-start gap-3 p-5">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--color-primary)/12 text-(--color-primary-dark)">
          <component :is="fact.icon" class="h-5 w-5" />
        </span>
        <div>
          <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">{{ fact.label }}</p>
          <p class="mt-0.5 text-sm font-medium">{{ fact.value }}</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      class="card mx-auto max-w-3xl p-8"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35 }"
    >
      <h2 class="text-xl">Propósito</h2>
      <p class="mt-3 text-(--color-ink)/80">
        Que las y los docentes fortalezcan sus competencias digitales y pedagógicas a través de contenidos
        prácticos, aplicables de inmediato en su salón de clases, sin importar los recursos tecnológicos
        disponibles en su comunidad.
      </p>
    </motion.div>

    <motion.div
      class="card mx-auto max-w-3xl p-8"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35, delay: 0.05 }"
    >
      <h2 class="text-xl">Metodología</h2>
      <p class="mt-3 text-(--color-ink)/80">
        El curso se organiza en 4 módulos progresivos. Cada módulo incluye materiales de consulta, un video o
        infografía de apoyo, una actividad práctica y un espacio de reflexión. Al finalizar cada módulo podrás
        registrar tu evidencia de trabajo en la sección correspondiente.
      </p>
    </motion.div>

    <motion.div
      class="card mx-auto max-w-3xl p-8 text-center"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35, delay: 0.1 }"
    >
      <h2 class="text-xl">Sobre la autora</h2>
      <p class="mt-3 text-sm text-(--color-muted)">
        Mtra. Nora Torres — espacio para una breve semblanza: años de experiencia, funciones y formación
        académica.
      </p>
    </motion.div>
  </div>
</template>
