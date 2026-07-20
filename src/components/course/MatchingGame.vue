<script setup lang="ts">
import { ref } from 'vue'
import { ArrowPathIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { matchingPairs, matchingGameId } from '@/data/matching'
import { mascots } from '@/data/mascots'
import { useCourseStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
import MascotBubble from '@/components/course/MascotBubble.vue'
import type { MatchingPair } from '@/types'

const course = useCourseStore()
const tino = mascots.find((m) => m.id === 'tino')!
const total = matchingPairs.length

type Phase = 'intro' | 'playing' | 'summary'
const phase = ref<Phase>('intro')

const matchedIds = ref<string[]>([])
const selectedTermId = ref<string | null>(null)
const selectedDefId = ref<string | null>(null)
const wrongIds = ref<string[]>([])
const shuffledDefs = ref<MatchingPair[]>([])

function shuffle<T>(list: T[]): T[] {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function begin() {
  matchedIds.value = []
  selectedTermId.value = null
  selectedDefId.value = null
  wrongIds.value = []
  shuffledDefs.value = shuffle(matchingPairs)
  phase.value = 'playing'
}

function selectTerm(id: string) {
  if (matchedIds.value.includes(id) || wrongIds.value.length) return
  selectedTermId.value = id
  tryMatch()
}

function selectDef(id: string) {
  if (matchedIds.value.includes(id) || wrongIds.value.length) return
  selectedDefId.value = id
  tryMatch()
}

function tryMatch() {
  if (!selectedTermId.value || !selectedDefId.value) return
  if (selectedTermId.value === selectedDefId.value) {
    matchedIds.value.push(selectedTermId.value)
    selectedTermId.value = null
    selectedDefId.value = null
    if (matchedIds.value.length === total) {
      course.completeMatching(matchingGameId)
      setTimeout(() => (phase.value = 'summary'), 500)
    }
  } else {
    wrongIds.value = [selectedTermId.value, selectedDefId.value]
    setTimeout(() => {
      wrongIds.value = []
      selectedTermId.value = null
      selectedDefId.value = null
    }, 600)
  }
}
</script>

<template>
  <div id="matching-section" class="card scroll-mt-24 p-6 sm:p-8">
    <span class="badge-pill bg-(--color-secondary)/15 text-(--color-secondary-dark)">Herramienta digital · Memorama</span>
    <h2 class="mt-3 text-xl">Relaciona cada concepto con su definición</h2>
    <p class="mt-1.5 max-w-2xl text-sm text-(--color-ink)/75">
      Otra forma de repasar de manera gamificada, parecida a herramientas como Wordwall o Quizlet: da clic en un
      concepto y luego en la definición que le corresponde.
    </p>

    <div v-if="phase === 'intro'" class="mt-6 flex flex-col items-center gap-5 text-center">
      <MascotBubble :mascot="tino" message="Prueba tu memoria: relaciona los 6 conceptos del módulo con su definición. ¡Dale a Jugar cuando quieras!" />
      <p class="text-xs text-(--color-muted)">{{ total }} parejas</p>
      <BaseButton variant="cta" @click="begin">
        <template #icon-left><PlayCircleIcon class="h-5 w-5" /></template>
        Jugar memorama
      </BaseButton>
    </div>

    <template v-else-if="phase === 'playing'">
      <div class="mt-6 flex items-center justify-between">
        <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">
          {{ matchedIds.length }}/{{ total }} parejas encontradas
        </p>
      </div>
      <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          class="h-full rounded-full bg-(--color-secondary) transition-all duration-500 ease-out"
          :style="{ width: `${(matchedIds.length / total) * 100}%` }"
        />
      </div>

      <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="space-y-2.5">
          <p class="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">Conceptos</p>
          <button
            v-for="pair in matchingPairs"
            :key="pair.id"
            type="button"
            class="w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition disabled:cursor-not-allowed"
            :class="[
              matchedIds.includes(pair.id) && 'border-(--color-secondary) bg-(--color-secondary)/15 text-(--color-secondary-dark)',
              !matchedIds.includes(pair.id) && wrongIds.includes(pair.id) && 'border-red-400 bg-red-50 text-red-600',
              !matchedIds.includes(pair.id) && !wrongIds.includes(pair.id) && selectedTermId === pair.id && 'border-(--color-primary) bg-(--color-primary)/10',
              !matchedIds.includes(pair.id) && !wrongIds.includes(pair.id) && selectedTermId !== pair.id && 'border-slate-200 hover:border-(--color-primary)',
            ]"
            :disabled="matchedIds.includes(pair.id)"
            @click="selectTerm(pair.id)"
          >
            <span class="flex items-center gap-2">
              <CheckCircleIcon v-if="matchedIds.includes(pair.id)" class="h-4 w-4 shrink-0" />
              {{ pair.term }}
            </span>
          </button>
        </div>

        <div class="space-y-2.5">
          <p class="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">Definiciones</p>
          <button
            v-for="pair in shuffledDefs"
            :key="pair.id"
            type="button"
            class="w-full rounded-xl border-2 px-4 py-3 text-left text-sm transition disabled:cursor-not-allowed"
            :class="[
              matchedIds.includes(pair.id) && 'border-(--color-secondary) bg-(--color-secondary)/15 text-(--color-secondary-dark)',
              !matchedIds.includes(pair.id) && wrongIds.includes(pair.id) && 'border-red-400 bg-red-50 text-red-600',
              !matchedIds.includes(pair.id) && !wrongIds.includes(pair.id) && selectedDefId === pair.id && 'border-(--color-primary) bg-(--color-primary)/10',
              !matchedIds.includes(pair.id) && !wrongIds.includes(pair.id) && selectedDefId !== pair.id && 'border-slate-200 hover:border-(--color-primary)',
            ]"
            :disabled="matchedIds.includes(pair.id)"
            @click="selectDef(pair.id)"
          >
            {{ pair.definition }}
          </button>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="mt-6 flex flex-col items-center gap-4 text-center">
        <p class="text-4xl font-bold text-(--color-secondary-dark)">{{ total }}/{{ total }}</p>
        <p class="text-sm text-(--color-muted)">¡Encontraste todas las parejas!</p>
        <div class="w-full max-w-md">
          <MascotBubble
            :mascot="tino"
            message="¡Muy bien! Este mismo formato de memorama lo puedes armar en minutos con tarjetas de papel para tus estudiantes."
          />
        </div>
        <BaseButton variant="outline" size="sm" @click="begin">
          <template #icon-left><ArrowPathIcon class="h-4 w-4" /></template>
          Jugar de nuevo
        </BaseButton>
      </div>
    </template>
  </div>
</template>
