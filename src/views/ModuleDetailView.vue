<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { motion } from 'motion-v'
import {
  LockClosedIcon,
  CheckCircleIcon,
  ClockIcon,
  PlayCircleIcon,
  DocumentTextIcon,
  LinkIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/vue/24/solid'
import { modules } from '@/data/modules'
import { activities } from '@/data/activities'
import { module1Intro, module1Lessons, module1Video, module1Resource } from '@/data/module1Content'
import { module1Path } from '@/data/module1Path'
import { mascots } from '@/data/mascots'
import { useCourseStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
import LearningPath from '@/components/course/LearningPath.vue'
import QuizGame from '@/components/course/QuizGame.vue'
import MatchingGame from '@/components/course/MatchingGame.vue'
import MascotBubble from '@/components/course/MascotBubble.vue'

const route = useRoute()
const toast = useToast()
const course = useCourseStore()

const module = computed(() => modules.find((m) => m.id === Number(route.params.id)))
const activity = computed(() => activities.find((a) => a.moduleId === module.value?.id))

const reflectionText = ref('')
watchEffect(() => {
  if (activity.value) reflectionText.value = course.reflectionFor(activity.value.id)
})

const allLessonsRead = computed(() => module1Lessons.every((lesson) => course.isLessonRead(lesson.id)))
const hasReflection = computed(() => reflectionText.value.trim().length > 0)
const readyToComplete = computed(() => allLessonsRead.value && hasReflection.value)

function saveReflection() {
  if (!activity.value) return
  course.saveReflection(activity.value.id, reflectionText.value)
  toast.success('Tu reflexión se guardó')
}

function completeModule() {
  if (!module.value) return
  if (!course.isEvidenceSubmitted(module.value.id)) {
    course.toggleEvidence(module.value.id)
    toast.success(`¡Módulo ${module.value.id} completado!`)
  }
}

function pathNodeFor(lessonId: string) {
  return module1Path.find((node) => node.lessonId === lessonId)
}

function mascotFor(mascotId: string) {
  return mascots.find((m) => m.id === mascotId)!
}
</script>

<template>
  <div class="container-page space-y-6 py-10">
    <template v-if="!module">
      <div class="card p-10 text-center">
        <h1 class="text-xl">Módulo no encontrado</h1>
        <BaseButton as="router-link" to="/modulos" variant="cta" class="mt-5">Ver todos los módulos</BaseButton>
      </div>
    </template>

    <template v-else-if="module.locked">
      <div class="card mx-auto max-w-xl p-10 text-center">
        <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-(--color-muted)">
          <LockClosedIcon class="h-7 w-7" />
        </span>
        <p class="mt-4 text-xs font-medium uppercase tracking-wide text-(--color-muted)">Módulo {{ module.id }}</p>
        <h1 class="mt-1 text-2xl">{{ module.title }}</h1>
        <p class="mt-3 text-sm text-(--color-muted)">
          Este módulo está en construcción y estará disponible próximamente. Mientras tanto, te invitamos a
          completar el Módulo 1: Diseño de Recursos Educativos Digitales, que ya está disponible.
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <BaseButton as="router-link" to="/modulos/1" variant="cta">Ir al Módulo 1</BaseButton>
          <BaseButton as="router-link" to="/modulos" variant="outline">Ver todos los módulos</BaseButton>
        </div>
      </div>
    </template>

    <template v-else>
      <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">Módulo {{ module.id }}</p>
            <h1 class="mt-1 text-3xl">{{ module.title }}</h1>
            <p class="mt-2 max-w-2xl text-(--color-ink)/80">{{ module.objective }}</p>
          </div>
          <span
            v-if="course.isEvidenceSubmitted(module.id)"
            class="badge-pill shrink-0 bg-(--color-secondary)/20 text-(--color-secondary-dark)"
          >
            <CheckCircleSolid class="h-4 w-4" /> Completado
          </span>
        </div>
        <p class="mt-2 flex items-center gap-1.5 text-xs text-(--color-muted)">
          <ClockIcon class="h-4 w-4" /> Duración estimada: {{ module.duration }}
        </p>
      </motion.div>

      <motion.p
        class="card p-6 text-(--color-ink)/80"
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35, delay: 0.05 }"
      >
        {{ module1Intro }}
      </motion.p>

      <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35, delay: 0.08 }">
        <LearningPath />
      </motion.div>

      <motion.div
        class="space-y-4"
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.35, delay: 0.1 }"
      >
        <div v-for="(lesson, index) in module1Lessons" :key="lesson.id" :id="`lesson-${lesson.id}`" class="card scroll-mt-24 p-6">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <h2 class="text-lg font-semibold">{{ index + 1 }}. {{ lesson.title }}</h2>
            <button
              class="badge-pill shrink-0 transition"
              :class="
                course.isLessonRead(lesson.id)
                  ? 'bg-(--color-secondary)/20 text-(--color-secondary-dark)'
                  : 'bg-slate-100 text-(--color-muted) hover:bg-slate-200'
              "
              @click="course.toggleLessonRead(lesson.id)"
            >
              <CheckCircleSolid v-if="course.isLessonRead(lesson.id)" class="h-4 w-4" />
              <CheckCircleIcon v-else class="h-4 w-4" />
              {{ course.isLessonRead(lesson.id) ? 'Leída' : 'Marcar como leída' }}
            </button>
          </div>
          <p v-for="paragraph in lesson.body" :key="paragraph" class="mt-3 text-sm leading-relaxed text-(--color-ink)/80">
            {{ paragraph }}
          </p>

          <div v-if="lesson.resources?.length" class="mt-4 space-y-2 border-t border-slate-100 pt-4">
            <a
              v-for="resource in lesson.resources"
              :key="resource.url"
              :href="resource.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2.5 rounded-lg px-2 py-1.5 -mx-2 text-sm font-medium text-(--color-primary-dark) transition hover:bg-(--color-primary)/8"
            >
              <PlayCircleIcon v-if="resource.type === 'video'" class="h-4.5 w-4.5 shrink-0" />
              <DocumentTextIcon v-else-if="resource.type === 'pdf'" class="h-4.5 w-4.5 shrink-0" />
              <LinkIcon v-else class="h-4.5 w-4.5 shrink-0" />
              <span class="flex-1">{{ resource.title }}</span>
              <ArrowTopRightOnSquareIcon class="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>

          <div v-if="pathNodeFor(lesson.id)" class="mt-4 border-t border-slate-100 pt-4">
            <MascotBubble :mascot="mascotFor(pathNodeFor(lesson.id)!.mascotId)" :message="pathNodeFor(lesson.id)!.tip" />
          </div>
        </div>
      </motion.div>

      <motion.div :initial="{ opacity: 0, y: 16 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true, margin: '-40px' }" :transition="{ duration: 0.35 }">
        <QuizGame />
      </motion.div>

      <motion.div :initial="{ opacity: 0, y: 16 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true, margin: '-40px' }" :transition="{ duration: 0.35 }">
        <MatchingGame />
      </motion.div>

      <motion.div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35 }"
      >
        <a
          :href="module1Video.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card flex items-center gap-4 p-5 transition hover:shadow-(--shadow-soft-lg)"
        >
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-primary)/12 text-(--color-primary-dark)">
            <PlayCircleIcon class="h-6 w-6" />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium">{{ module1Video.title }}</p>
            <p class="text-xs text-(--color-muted)">Video · Enlace externo</p>
          </div>
          <ArrowTopRightOnSquareIcon class="h-4 w-4 shrink-0 text-(--color-muted)" />
        </a>
        <a
          :href="module1Resource.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card flex items-center gap-4 p-5 transition hover:shadow-(--shadow-soft-lg)"
        >
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-(--color-primary)/12 text-(--color-primary-dark)">
            <DocumentTextIcon class="h-6 w-6" />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-sm font-medium">{{ module1Resource.label }}</p>
            <p class="text-xs text-(--color-muted)">{{ module1Resource.description }}</p>
          </div>
          <ArrowTopRightOnSquareIcon class="h-4 w-4 shrink-0 text-(--color-muted)" />
        </a>
      </motion.div>

      <motion.div
        v-if="activity"
        class="card p-6"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35 }"
      >
        <span class="badge-pill bg-(--color-secondary)/15 text-(--color-secondary-dark)">Actividad</span>
        <h2 class="mt-3 text-lg font-semibold">{{ activity.title }}</h2>
        <p class="mt-1.5 text-sm text-(--color-ink)/80">{{ activity.description }}</p>
        <textarea
          v-model="reflectionText"
          rows="5"
          placeholder="Escribe aquí tu reflexión…"
          class="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-(--color-ink) placeholder:text-(--color-muted) transition focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/30"
        />
        <BaseButton variant="outline" size="sm" class="mt-3" @click="saveReflection">Guardar mi reflexión</BaseButton>
      </motion.div>

      <motion.div
        id="meta-section"
        class="card scroll-mt-24 p-6"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35 }"
      >
        <h2 class="text-lg font-semibold">Para completar este módulo</h2>
        <ul class="mt-3 space-y-2">
          <li v-for="lesson in module1Lessons" :key="lesson.id" class="flex items-center gap-2 text-sm">
            <CheckCircleSolid v-if="course.isLessonRead(lesson.id)" class="h-4.5 w-4.5 text-(--color-secondary-dark)" />
            <CheckCircleIcon v-else class="h-4.5 w-4.5 text-slate-300" />
            <span :class="!course.isLessonRead(lesson.id) && 'text-(--color-muted)'">Leer: {{ lesson.title }}</span>
          </li>
          <li class="flex items-center gap-2 text-sm">
            <CheckCircleSolid v-if="hasReflection" class="h-4.5 w-4.5 text-(--color-secondary-dark)" />
            <CheckCircleIcon v-else class="h-4.5 w-4.5 text-slate-300" />
            <span :class="!hasReflection && 'text-(--color-muted)'">Completar la actividad de reflexión</span>
          </li>
        </ul>

        <div v-if="course.isEvidenceSubmitted(module.id)" class="mt-5 flex flex-wrap items-center gap-3">
          <p class="text-sm font-medium text-(--color-secondary-dark)">Ya completaste este módulo.</p>
          <BaseButton as="router-link" to="/evidencias" variant="ghost" size="sm">
            Ver mi portafolio
            <template #icon-right><ArrowRightIcon class="h-4 w-4" /></template>
          </BaseButton>
        </div>
        <BaseButton v-else variant="cta" class="mt-5" :disabled="!readyToComplete" @click="completeModule">
          Marcar módulo como completado
        </BaseButton>
      </motion.div>
    </template>
  </div>
</template>
