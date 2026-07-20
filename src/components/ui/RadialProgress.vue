<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    percent: number
    size?: number
    strokeColor?: string
    label?: string
    sublabel?: string
  }>(),
  {
    size: 128,
    strokeColor: '#3CDBD3',
    label: '',
    sublabel: '',
  },
)

const radius = 54
const circumference = 2 * Math.PI * radius
const offset = computed(() => circumference - (Math.min(100, Math.max(0, props.percent)) / 100) * circumference)
</script>

<template>
  <div class="relative shrink-0" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg viewBox="0 0 120 120" class="h-full w-full -rotate-90">
      <circle cx="60" cy="60" :r="radius" fill="none" stroke="currentColor" stroke-width="10" class="text-slate-100" />
      <circle
        cx="60"
        cy="60"
        :r="radius"
        fill="none"
        :stroke="strokeColor"
        stroke-width="10"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        class="transition-all duration-700 ease-out"
      />
    </svg>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <span class="font-heading text-2xl font-bold">{{ percent }}%</span>
      <span v-if="label" class="text-xs text-(--color-muted)">{{ label }}</span>
      <span v-if="sublabel" class="text-xs text-(--color-muted)">{{ sublabel }}</span>
    </div>
  </div>
</template>
