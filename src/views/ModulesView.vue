<script setup lang="ts">
import { motion } from 'motion-v'
import { CheckCircleIcon, ClockIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/vue/24/solid'
import { modules } from '@/data/modules'
import { useCourseStore } from '@/stores'
import { resolveIcon } from '@/utils/icons'
import BaseButton from '@/components/ui/BaseButton.vue'

const course = useCourseStore()
</script>

<template>
  <div class="container-page space-y-8 py-14">
    <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }" class="text-center">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Módulos</span>
      <h1 class="mt-4 text-3xl md:text-4xl">Contenido del curso</h1>
      <p class="mx-auto mt-2 max-w-xl text-(--color-muted)">
        Este curso se organiza en cuatro módulos. El Módulo 1 ya está disponible; los siguientes se irán
        habilitando próximamente.
      </p>
    </motion.div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <motion.div
        v-for="(module, index) in modules"
        :key="module.id"
        class="card p-6"
        :class="module.locked && 'opacity-70'"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35, delay: index * 0.06 }"
      >
        <div class="flex items-start justify-between">
          <span
            class="flex h-11 w-11 items-center justify-center rounded-xl"
            :style="{ backgroundColor: `${module.color}22`, color: module.color }"
          >
            <component :is="resolveIcon(module.icon)" class="h-6 w-6" />
          </span>
          <span v-if="module.locked" class="badge-pill bg-slate-100 text-(--color-muted)">
            <LockClosedIcon class="h-4 w-4" /> Próximamente
          </span>
          <span
            v-else-if="course.isEvidenceSubmitted(module.id)"
            class="badge-pill bg-(--color-secondary)/20 text-(--color-secondary-dark)"
          >
            <CheckCircleSolid class="h-4 w-4" /> Completado
          </span>
        </div>

        <p class="mt-4 text-xs font-medium uppercase tracking-wide text-(--color-muted)">Módulo {{ module.id }}</p>
        <h2 class="mt-1 text-lg font-semibold">{{ module.title }}</h2>
        <p class="mt-2 text-sm text-(--color-ink)/80">{{ module.objective }}</p>

        <ul class="mt-4 space-y-1.5">
          <li v-for="content in module.contents" :key="content" class="flex items-start gap-2 text-sm text-(--color-ink)/75">
            <CheckCircleIcon class="mt-0.5 h-4 w-4 shrink-0 text-(--color-muted)" />
            <span>{{ content }}</span>
          </li>
        </ul>

        <div class="mt-4 flex items-center justify-between">
          <p class="flex items-center gap-1.5 text-xs text-(--color-muted)">
            <ClockIcon class="h-4 w-4" /> Duración estimada: {{ module.duration }}
          </p>
          <BaseButton as="router-link" :to="`/modulos/${module.id}`" :variant="module.locked ? 'outline' : 'cta'" size="sm">
            {{ module.locked ? 'Ver detalle' : 'Comenzar módulo' }}
          </BaseButton>
        </div>
      </motion.div>
    </div>
  </div>
</template>
