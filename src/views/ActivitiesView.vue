<script setup lang="ts">
import { motion } from 'motion-v'
import { LockClosedIcon } from '@heroicons/vue/24/outline'
import { activities } from '@/data/activities'
import { modules } from '@/data/modules'
import BaseButton from '@/components/ui/BaseButton.vue'

function moduleOf(moduleId: number) {
  return modules.find((m) => m.id === moduleId)
}
</script>

<template>
  <div class="container-page space-y-8 py-14">
    <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }" class="text-center">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Actividades</span>
      <h1 class="mt-4 text-3xl md:text-4xl">Aplica lo aprendido</h1>
      <p class="mx-auto mt-2 max-w-xl text-(--color-muted)">
        Cada módulo incluye una actividad práctica para aplicar lo aprendido en tu propia aula. No hay
        respuestas correctas o incorrectas: el objetivo es la reflexión sobre tu práctica docente.
      </p>
    </motion.div>

    <div class="mx-auto max-w-3xl space-y-4">
      <motion.div
        v-for="(activity, index) in activities"
        :key="activity.id"
        class="card p-6"
        :class="moduleOf(activity.moduleId)?.locked && 'opacity-70'"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35, delay: index * 0.06 }"
      >
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="badge-pill bg-(--color-secondary)/15 text-(--color-secondary-dark)">
            Módulo {{ activity.moduleId }} · {{ moduleOf(activity.moduleId)?.title }}
          </span>
          <span v-if="moduleOf(activity.moduleId)?.locked" class="badge-pill bg-slate-100 text-(--color-muted)">
            <LockClosedIcon class="h-4 w-4" /> Próximamente
          </span>
        </div>
        <h2 class="mt-3 text-lg font-semibold">Actividad {{ index + 1 }}: {{ activity.title }}</h2>
        <p class="mt-2 text-sm text-(--color-ink)/80">{{ activity.description }}</p>

        <p v-if="moduleOf(activity.moduleId)?.locked" class="mt-3 text-xs text-(--color-muted)">
          Estará disponible cuando se habilite este módulo.
        </p>
        <BaseButton v-else as="router-link" :to="`/modulos/${activity.moduleId}`" variant="outline" size="sm" class="mt-3">
          Completar en el módulo
        </BaseButton>
      </motion.div>
    </div>
  </div>
</template>
