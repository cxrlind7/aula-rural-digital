<script setup lang="ts">
import { motion } from 'motion-v'
import {
  BookOpenIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  FolderArrowDownIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'

const highlights = [
  { icon: BookOpenIcon, text: 'Materiales de consulta' },
  { icon: PlayCircleIcon, text: 'Videos educativos' },
  { icon: PencilSquareIcon, text: 'Actividades de aprendizaje' },
  { icon: ComputerDesktopIcon, text: 'Herramientas digitales' },
  { icon: FolderArrowDownIcon, text: 'Recursos descargables' },
  { icon: UserGroupIcon, text: 'Espacios de reflexión' },
  { icon: ChartBarIcon, text: 'Instrumentos de autoevaluación' },
]

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
}
</script>

<template>
  <div>
    <section class="container-page py-14 text-center lg:py-20">
      <motion.div :initial="{ opacity: 0, y: 20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.4 }">
        <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Curso de autocapacitación docente</span>
        <h1 class="mx-auto mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">Aula Rural Digital</h1>
        <p class="mx-auto mt-3 max-w-xl text-lg text-(--color-muted)">
          Espacio de autocapacitación para docentes de educación primaria rural
        </p>
        <p class="mt-4 text-sm text-(--color-muted)">
          Curso: Educación en línea · Autora: Mtra. Nora Torres
        </p>
        <p class="mx-auto mt-6 max-w-xl text-base italic text-(--color-ink)/75">
          "Aprender, compartir e innovar para transformar la educación en nuestras comunidades rurales."
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <BaseButton as="router-link" to="/modulos" variant="cta" size="lg">Comenzar el curso</BaseButton>
          <BaseButton as="router-link" to="/acerca-del-curso" variant="outline" size="lg">Conoce el curso</BaseButton>
        </div>
      </motion.div>
    </section>

    <section class="bg-white py-14">
      <div class="container-page">
        <motion.div v-bind="fadeUp" :transition="{ duration: 0.35 }" class="mx-auto max-w-3xl">
          <h2 class="text-2xl md:text-3xl">Bienvenida</h2>
          <p class="mt-4 text-(--color-ink)/80">
            Bienvenida a <strong>Aula Rural Digital</strong>, un espacio diseñado para favorecer la formación
            continua de las maestras y los maestros de educación primaria que laboran en contextos rurales.
          </p>
          <p class="mt-4 text-(--color-ink)/80">
            La educación en línea ofrece nuevas oportunidades para fortalecer la práctica docente mediante el
            aprendizaje autónomo, el acceso a recursos digitales y el intercambio de experiencias exitosas. Este
            sitio reúne materiales, actividades y herramientas que buscan apoyar el desarrollo profesional docente
            con una perspectiva práctica, flexible y contextualizada.
          </p>
          <p class="mt-4 text-(--color-ink)/80">
            Esperamos que este espacio contribuya al fortalecimiento de tus competencias digitales y pedagógicas
            para enriquecer los procesos de enseñanza y aprendizaje en beneficio de las niñas y los niños de
            nuestras comunidades.
          </p>
        </motion.div>
      </div>
    </section>

    <section class="container-page py-14">
      <motion.div v-bind="fadeUp" :transition="{ duration: 0.35 }" class="card mx-auto max-w-3xl p-8">
        <h2 class="text-xl">Objetivo general</h2>
        <p class="mt-3 text-(--color-ink)/80">
          Proporcionar un espacio virtual de autoaprendizaje que permita a las y los docentes de educación
          primaria rural fortalecer sus competencias pedagógicas y digitales mediante recursos educativos,
          actividades de reflexión y herramientas tecnológicas que favorezcan una práctica docente innovadora y
          pertinente.
        </p>
      </motion.div>
    </section>

    <section class="bg-white py-14">
      <div class="container-page">
        <motion.div v-bind="fadeUp" :transition="{ duration: 0.35 }" class="text-center">
          <h2 class="text-2xl md:text-3xl">¿Qué encontrarás en este sitio?</h2>
        </motion.div>
        <motion.div
          class="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          v-bind="fadeUp"
          :transition="{ duration: 0.35, delay: 0.1 }"
        >
          <div v-for="item in highlights" :key="item.text" class="card card-hover flex flex-col items-center gap-2 p-5 text-center">
            <component :is="item.icon" class="h-6 w-6 text-(--color-primary-dark)" />
            <p class="text-sm font-medium">{{ item.text }}</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section class="container-page py-14">
      <motion.div v-bind="fadeUp" :transition="{ duration: 0.35 }" class="card mx-auto max-w-3xl p-8 text-center">
        <h2 class="text-xl">¿A quién está dirigido?</h2>
        <p class="mt-3 text-(--color-ink)/80">
          A docentes de educación primaria que desempeñan su labor en escuelas rurales y desean fortalecer sus
          competencias para integrar estrategias innovadoras y recursos digitales en su práctica cotidiana.
        </p>
      </motion.div>
    </section>
  </div>
</template>
