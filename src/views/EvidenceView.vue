<script setup lang="ts">
import { motion } from 'motion-v'
import { useToast } from 'vue-toastification'
import { CheckCircleIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/vue/24/solid'
import { modules } from '@/data/modules'
import { useCourseStore } from '@/stores'
import RadialProgress from '@/components/ui/RadialProgress.vue'

const course = useCourseStore()
const toast = useToast()

const steps = [
  'Completa la actividad correspondiente al módulo.',
  'Sube tu evidencia (documento, foto o video) a la carpeta de Drive habilitada para este curso.',
  'Registra tu entrega marcando el módulo como completado en esta página.',
]

function handleToggle(moduleId: number, title: string, locked: boolean) {
  if (locked) return
  const willSubmit = !course.isEvidenceSubmitted(moduleId)
  course.toggleEvidence(moduleId)
  if (willSubmit) toast.success(`Evidencia de "${title}" registrada`)
}
</script>

<template>
  <div class="container-page space-y-10 py-14">
    <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }" class="text-center">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Evidencias</span>
      <h1 class="mt-4 text-3xl md:text-4xl">Tu portafolio de evidencias</h1>
      <p class="mx-auto mt-2 max-w-xl text-(--color-muted)">
        Al concluir cada módulo, registra tu evidencia de trabajo como parte de tu portafolio docente.
      </p>
    </motion.div>

    <motion.div
      class="card mx-auto flex max-w-md flex-col items-center gap-3 p-8 text-center"
      :initial="{ opacity: 0, y: 16 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.35, delay: 0.1 }"
    >
      <RadialProgress :percent="course.progressPercent" :label="`${course.submittedCount}/${modules.length} módulos`" stroke-color="#7DCE82" />
      <p class="text-sm text-(--color-muted)">Marca cada módulo conforme entregues tu evidencia.</p>
    </motion.div>

    <motion.div
      class="card mx-auto max-w-3xl p-8"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35 }"
    >
      <h2 class="text-lg">¿Cómo entregar tus evidencias?</h2>
      <ol class="mt-4 space-y-2.5">
        <li v-for="(step, index) in steps" :key="step" class="flex items-start gap-3 text-sm text-(--color-ink)/80">
          <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--color-primary)/15 text-xs font-semibold text-(--color-primary-dark)">
            {{ index + 1 }}
          </span>
          <span>{{ step }}</span>
        </li>
      </ol>
      <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <p class="rounded-xl bg-(--color-bg) p-3 text-xs text-(--color-muted)"><strong class="text-(--color-ink)">Formato sugerido:</strong> documento de texto, imagen o video breve</p>
        <p class="rounded-xl bg-(--color-bg) p-3 text-xs text-(--color-muted)"><strong class="text-(--color-ink)">Fecha límite:</strong> a definir por tu asesora o asesor</p>
      </div>
    </motion.div>

    <motion.div
      class="mx-auto max-w-3xl"
      :initial="{ opacity: 0, y: 16 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :viewport="{ once: true, margin: '-40px' }"
      :transition="{ duration: 0.35, delay: 0.05 }"
    >
      <h2 class="text-lg">Registro por módulo</h2>
      <div class="mt-4 space-y-3">
        <button
          v-for="module in modules"
          :key="module.id"
          class="card flex w-full items-center justify-between p-5 text-left transition"
          :class="module.locked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-(--shadow-soft-lg)'"
          @click="handleToggle(module.id, module.title, module.locked)"
        >
          <div>
            <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">Módulo {{ module.id }}</p>
            <p class="text-sm font-semibold">{{ module.title }}</p>
          </div>
          <span v-if="module.locked" class="flex items-center gap-1.5 text-sm font-medium text-(--color-muted)">
            <LockClosedIcon class="h-5 w-5" /> Próximamente
          </span>
          <span
            v-else
            class="flex items-center gap-1.5 text-sm font-medium"
            :class="course.isEvidenceSubmitted(module.id) ? 'text-(--color-secondary-dark)' : 'text-(--color-muted)'"
          >
            <CheckCircleSolid v-if="course.isEvidenceSubmitted(module.id)" class="h-5 w-5" />
            <CheckCircleIcon v-else class="h-5 w-5" />
            {{ course.isEvidenceSubmitted(module.id) ? 'Entregada' : 'Marcar como entregada' }}
          </span>
        </button>
      </div>
    </motion.div>
  </div>
</template>
