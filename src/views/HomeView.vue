<script setup lang="ts">
import { motion } from 'motion-v'
import {
  BookOpenIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  ComputerDesktopIcon,
  FolderArrowDownIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'

const highlights = [
  { icon: BookOpenIcon, text: 'Recursos educativos digitales' },
  { icon: PlayCircleIcon, text: 'Videos y tutoriales' },
  { icon: PencilSquareIcon, text: 'Retos gamificados por módulo' },
  { icon: ComputerDesktopIcon, text: 'Herramientas para tareas administrativas' },
  { icon: SparklesIcon, text: 'IA aplicada con ética' },
  { icon: FolderArrowDownIcon, text: 'Plantillas descargables' },
  { icon: ChartBarIcon, text: 'Niveles, retos y recompensas' },
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
        <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Curso gamificado de competencias digitales</span>
        <h1 class="mx-auto mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">Aula Rural Digital</h1>
        <p class="mx-auto mt-3 max-w-xl text-lg text-(--color-muted)">
          Fortalece tus competencias digitales con una experiencia de aprendizaje gamificada, pensada para el aula
          rural
        </p>
        <p class="mt-4 text-sm text-(--color-muted)">
          Curso: Educación en línea · Autora: Mtra. Nora Yeny Torres Robles
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
            Bienvenida a <strong>Aula Rural Digital</strong>, un espacio gamificado diseñado para fortalecer las
            competencias digitales de las maestras y los maestros de educación primaria que laboran en contextos
            rurales.
          </p>
          <p class="mt-4 text-(--color-ink)/80">
            A través de módulos, retos y actividades, recorrerás un camino de niveles como en un juego: cada reto
            superado te acerca a explorar, usar y aplicar herramientas digitales útiles para tu práctica
            profesional, a tu propio ritmo y sin necesitar experiencia previa con la tecnología.
          </p>
          <p class="mt-4 text-(--color-ink)/80">
            Esperamos que este espacio te ayude a diseñar tus propios recursos educativos, optimizar tus tareas
            administrativas, incorporar la inteligencia artificial de forma ética y enriquecer tus procesos de
            enseñanza y aprendizaje, en beneficio de las niñas y los niños de nuestras comunidades.
          </p>
        </motion.div>
      </div>
    </section>

    <section class="container-page py-14">
      <motion.div v-bind="fadeUp" :transition="{ duration: 0.35 }" class="card mx-auto max-w-3xl p-8">
        <h2 class="text-xl">Objetivo general</h2>
        <p class="mt-3 text-(--color-ink)/80">
          Fortalecer las competencias digitales de las y los docentes de educación primaria rural mediante una
          experiencia de aprendizaje gamificada que promueva la exploración, el uso y la aplicación de
          herramientas digitales útiles para su práctica profesional. A través de módulos, retos y actividades,
          las y los participantes desarrollarán habilidades para diseñar recursos educativos, optimizar tareas
          administrativas, incorporar la inteligencia artificial de forma ética y enriquecer los procesos de
          enseñanza y aprendizaje, favoreciendo una educación más innovadora y contextualizada.
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
          A docentes de educación primaria que desempeñan su labor en escuelas rurales y quieren fortalecer sus
          competencias digitales de forma práctica y gamificada, sin necesitar experiencia previa con la
          tecnología.
        </p>
      </motion.div>
    </section>
  </div>
</template>
