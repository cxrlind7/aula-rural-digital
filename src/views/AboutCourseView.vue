<script setup lang="ts">
import { motion } from 'motion-v'
import { ClockIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/vue/24/outline'
import CalameoViewer from '@/components/course/CalameoViewer.vue'

const facts = [
  { icon: ClockIcon, label: 'Modalidad', value: 'En línea, autoadministrado (asíncrono)' },
  { icon: ClockIcon, label: 'Duración estimada', value: '20 horas' },
  { icon: UserGroupIcon, label: 'Dirigido a', value: 'Docentes frente a grupo de educación primaria en contextos rurales' },
  { icon: AcademicCapIcon, label: 'Autora', value: 'Mtra. Nora Yeny Torres Robles' },
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
        Fortalecer las competencias digitales de las y los docentes de educación primaria rural mediante una
        experiencia de aprendizaje gamificada que promueva la exploración, el uso y la aplicación de herramientas
        digitales útiles para su práctica profesional: diseñar recursos educativos, optimizar tareas
        administrativas, incorporar la inteligencia artificial de forma ética y enriquecer sus procesos de
        enseñanza y aprendizaje.
      </p>
    </motion.div>

    <motion.div
      class="mx-auto max-w-3xl"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35, delay: 0.05 }"
    >
      <CalameoViewer
        bkcode="007767652e7feef96a561"
        title="Revista Aula Digital · TIC en la educación"
        description="Como parte de la investigación de este proyecto, te compartimos esta revista digital que explora el impacto de las Tecnologías de la Información y la Comunicación en el ámbito educativo. Puedes leerla directamente aquí, sin salir de la página."
      />
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
        El curso se organiza en 4 módulos progresivos, cada uno enfocado en una habilidad digital distinta: diseño
        de recursos educativos, optimización de tareas administrativas, inteligencia artificial ética, e
        innovación en la enseñanza. Dentro de cada módulo recorrerás un camino de niveles, al estilo de un
        videojuego, con lecciones, retos gamificados y recompensas que se van desbloqueando conforme avanzas. Al
        finalizar cada módulo podrás registrar tu evidencia de trabajo en la sección correspondiente.
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
      <p class="mx-auto mt-3 max-w-2xl text-(--color-ink)/80">
        La Mtra. Nora Yeny Torres Robles cuenta con 24 años de servicio en el sistema educativo, 19 de los cuales se ha
        desempeñado como Asesora Técnica Pedagógica (ATP), acompañando de cerca a docentes de educación primaria
        en el fortalecimiento de su práctica diaria. Es Maestra en Educación, con formación en el campo de la
        Intervención Didáctica, cuenta con una especialidad en Docencia y, más recientemente, concluyó un
        diplomado en Comunidades de Aprendizaje y el Plan de Estudios 2022. Esta trayectoria —entre el aula, la
        asesoría técnica y la formación continua— es la base de Aula Rural Digital: un curso pensado desde la
        experiencia real de la escuela rural.
      </p>
      <div class="mt-5 flex flex-wrap justify-center gap-2">
        <span class="badge-pill bg-(--color-primary)/12 text-(--color-primary-dark)">24 años de servicio</span>
        <span class="badge-pill bg-(--color-primary)/12 text-(--color-primary-dark)">19 años como ATP</span>
        <span class="badge-pill bg-(--color-secondary)/15 text-(--color-secondary-dark)">Maestría en Intervención Didáctica</span>
        <span class="badge-pill bg-(--color-secondary)/15 text-(--color-secondary-dark)">Especialidad en Docencia</span>
        <span class="badge-pill bg-(--color-accent)/25 text-(--color-accent-dark)">Diplomado en Comunidades de Aprendizaje y Plan 2022</span>
      </div>
    </motion.div>
  </div>
</template>
