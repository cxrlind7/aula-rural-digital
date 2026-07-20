<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  bkcode: string
  title: string
  description?: string
}>()

const readUrl = `https://www.calameo.com/read/${props.bkcode}`
const embedUrl = `https://v.calameo.com/?bkcode=${props.bkcode}`
</script>

<template>
  <div class="card overflow-hidden">
    <div class="p-6 sm:p-8 sm:pb-0">
      <span class="badge-pill bg-(--color-primary)/15 text-(--color-primary-dark)">Recurso de introducción</span>
      <h2 class="mt-3 text-xl">{{ props.title }}</h2>
      <p v-if="props.description" class="mt-1.5 max-w-2xl text-sm text-(--color-ink)/75">{{ props.description }}</p>
    </div>

    <div class="mt-5 aspect-4/3 w-full bg-slate-100 sm:aspect-video">
      <iframe
        :src="embedUrl"
        :title="props.title"
        loading="lazy"
        class="h-full w-full border-0"
        allow="fullscreen"
        allowfullscreen
      />
    </div>

    <div class="flex items-center justify-between gap-3 p-6 sm:p-8 sm:pt-5">
      <p class="text-xs text-(--color-muted)">Publicado en Calameo · se abre dentro de esta página</p>
      <a
        :href="readUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex shrink-0 items-center gap-1.5 text-sm font-medium text-(--color-primary-dark) transition hover:underline"
      >
        Abrir en pantalla completa
        <ArrowTopRightOnSquareIcon class="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
</template>
