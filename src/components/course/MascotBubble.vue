<script setup lang="ts">
import type { Mascot } from '@/types'

const props = defineProps<{
  mascot: Mascot
  message?: string
}>()
</script>

<template>
  <div class="flex items-start gap-3">
    <span
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl"
      :style="{ backgroundColor: `${props.mascot.color}30` }"
    >
      {{ props.mascot.emoji }}
    </span>
    <div class="min-w-0 rounded-2xl rounded-tl-none bg-(--color-bg) px-4 py-2.5">
      <p class="text-xs font-semibold" :style="{ color: props.mascot.color }">
        {{ props.mascot.name }} · {{ props.mascot.role }}
      </p>
      <p class="mt-0.5 text-sm text-(--color-ink)/85">{{ props.message ?? props.mascot.tip }}</p>
    </div>
  </div>
</template>
