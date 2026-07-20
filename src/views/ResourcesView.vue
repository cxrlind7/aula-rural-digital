<script setup lang="ts">
import { motion } from 'motion-v'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'
import { resourceCategories } from '@/data/resources'
import { resolveIcon } from '@/utils/icons'
</script>

<template>
  <div class="container-page space-y-8 py-14">
    <motion.div :initial="{ opacity: 0, y: 16 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.35 }" class="text-center">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Recursos</span>
      <h1 class="mt-4 text-3xl md:text-4xl">Materiales de apoyo</h1>
      <p class="mx-auto mt-2 max-w-xl text-(--color-muted)">
        Aquí encontrarás materiales de apoyo organizados por tipo, para consultar o descargar según lo que
        necesites en cada módulo.
      </p>
    </motion.div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <motion.div
        v-for="(category, index) in resourceCategories"
        :key="category.id"
        class="card p-6"
        :initial="{ opacity: 0, y: 16 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-40px' }"
        :transition="{ duration: 0.35, delay: index * 0.05 }"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-primary)/12 text-(--color-primary-dark)">
            <component :is="resolveIcon(category.icon)" class="h-6 w-6" />
          </span>
          <div>
            <h2 class="text-base font-semibold">{{ category.title }}</h2>
            <p class="text-sm text-(--color-muted)">{{ category.description }}</p>
          </div>
        </div>

        <ul class="mt-4 divide-y divide-slate-100">
          <li v-for="item in category.items" :key="item.label" class="py-2.5 text-sm">
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between gap-3 rounded-lg -mx-2 px-2 py-1 transition hover:bg-(--color-primary)/8"
            >
              <span class="flex items-center gap-1.5 font-medium text-(--color-primary-dark)">
                {{ item.label }}
                <ArrowTopRightOnSquareIcon class="h-3.5 w-3.5 shrink-0" />
              </span>
              <span class="shrink-0 text-xs text-(--color-muted)">{{ item.description }}</span>
            </a>
            <div v-else class="flex items-center justify-between gap-3">
              <span class="font-medium text-(--color-ink)/85">{{ item.label }}</span>
              <span class="shrink-0 text-xs text-(--color-muted)">{{ item.description }}</span>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
</template>
