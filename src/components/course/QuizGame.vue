<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import { ArrowPathIcon, ClockIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { module1Quiz, module1QuizId } from '@/data/quiz'
import { mascots } from '@/data/mascots'
import { useCourseStore } from '@/stores'
import BaseButton from '@/components/ui/BaseButton.vue'
import MascotBubble from '@/components/course/MascotBubble.vue'

const course = useCourseStore()
const ceci = mascots.find((m) => m.id === 'ceci')!

const shapeStyles = [
  { shape: '▲', class: 'bg-red-500 hover:bg-red-600' },
  { shape: '◆', class: 'bg-blue-500 hover:bg-blue-600' },
  { shape: '●', class: 'bg-amber-500 hover:bg-amber-600' },
  { shape: '■', class: 'bg-emerald-500 hover:bg-emerald-600' },
]

type Phase = 'intro' | 'question' | 'feedback' | 'summary'

const total = module1Quiz.length
const currentIndex = ref(0)
const phase = ref<Phase>('intro')
const selectedId = ref<string | null>(null)
const score = ref(0)
const timeLeft = ref(15)
let timer: ReturnType<typeof setInterval> | null = null

const question = computed(() => module1Quiz[currentIndex.value])
const percent = computed(() => Math.round((score.value / total) * 100))
const passed = computed(() => percent.value >= 60)

function clearTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function startTimer() {
  clearTimer()
  timeLeft.value = 15
  timer = setInterval(() => {
    timeLeft.value -= 1
    if (timeLeft.value <= 0) lockAnswer(null)
  }, 1000)
}

function lockAnswer(optionId: string | null) {
  if (phase.value !== 'question') return
  clearTimer()
  selectedId.value = optionId
  phase.value = 'feedback'
  if (optionId === question.value.correctOptionId) score.value += 1
  setTimeout(advance, 1400)
}

function advance() {
  if (currentIndex.value < total - 1) {
    currentIndex.value += 1
    selectedId.value = null
    phase.value = 'question'
    startTimer()
  } else {
    phase.value = 'summary'
    course.completeQuiz(module1QuizId, percent.value)
  }
}

function begin() {
  currentIndex.value = 0
  score.value = 0
  selectedId.value = null
  phase.value = 'question'
  startTimer()
}

function restart() {
  begin()
}

onUnmounted(clearTimer)
</script>

<template>
  <div id="quiz-section" class="card scroll-mt-24 p-6 sm:p-8">
    <span class="badge-pill bg-(--color-cta)/15 text-(--color-cta-dark)">Herramienta digital · Trivia Digital</span>
    <h2 class="mt-3 text-xl">Ponte a prueba con este mini-juego</h2>
    <p class="mt-1.5 max-w-2xl text-sm text-(--color-ink)/75">
      Esta trivia funciona como herramientas gamificadas tipo Kahoot o Quizizz: preguntas rápidas, tiempo limitado y
      retroalimentación inmediata. La idea es que la conozcas jugando, para que después puedas crear una parecida
      con tus propios estudiantes.
    </p>

    <div v-if="phase === 'intro'" class="mt-6 flex flex-col items-center gap-5 text-center">
      <MascotBubble :mascot="ceci" message="¡Cuando estés list@, dale a Iniciar! Tienes 15 segundos por pregunta, así que léela con calma." />
      <p class="text-xs text-(--color-muted)">{{ total }} preguntas · ~2 minutos</p>
      <BaseButton variant="cta" @click="begin">
        <template #icon-left><PlayCircleIcon class="h-5 w-5" /></template>
        Iniciar trivia
      </BaseButton>
    </div>

    <template v-else-if="phase !== 'summary'">
      <div class="mt-6 flex items-center justify-between">
        <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">
          Pregunta {{ currentIndex + 1 }}/{{ total }}
        </p>
        <p
          class="flex items-center gap-1.5 text-xs font-semibold"
          :class="timeLeft <= 5 ? 'text-(--color-cta-dark)' : 'text-(--color-muted)'"
        >
          <ClockIcon class="h-4 w-4" /> {{ timeLeft }}s
        </p>
      </div>
      <div class="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          class="h-full rounded-full bg-(--color-primary) transition-all duration-1000 ease-linear"
          :style="{ width: `${(timeLeft / 15) * 100}%` }"
        />
      </div>

      <p class="mt-5 text-base font-semibold">{{ question.prompt }}</p>

      <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          v-for="(option, i) in question.options"
          :key="option.id"
          type="button"
          class="flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm font-medium text-white transition disabled:cursor-not-allowed"
          :class="[
            shapeStyles[i].class,
            phase === 'feedback' && option.id === question.correctOptionId && 'ring-4 ring-emerald-300',
            phase === 'feedback' && option.id === selectedId && option.id !== question.correctOptionId && 'opacity-80 ring-4 ring-red-300',
            phase === 'feedback' && option.id !== selectedId && option.id !== question.correctOptionId && 'opacity-50',
          ]"
          :disabled="phase !== 'question'"
          @click="lockAnswer(option.id)"
        >
          <span class="text-lg leading-none">{{ shapeStyles[i].shape }}</span>
          <span class="flex-1">{{ option.text }}</span>
          <CheckCircleIcon v-if="phase === 'feedback' && option.id === question.correctOptionId" class="h-5 w-5 shrink-0" />
          <XCircleIcon v-else-if="phase === 'feedback' && option.id === selectedId" class="h-5 w-5 shrink-0" />
        </button>
      </div>
    </template>

    <template v-else>
      <div class="mt-6 flex flex-col items-center gap-4 text-center">
        <p class="text-4xl font-bold" :class="passed ? 'text-(--color-secondary-dark)' : 'text-(--color-cta-dark)'">
          {{ score }}/{{ total }}
        </p>
        <p class="text-sm text-(--color-muted)">{{ passed ? '¡Nivel superado!' : 'Casi lo logras, intenta de nuevo.' }}</p>

        <div class="w-full max-w-md">
          <div class="flex items-start gap-3 rounded-2xl bg-(--color-bg) p-4 text-left">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl"
              :style="{ backgroundColor: `${ceci.color}30` }"
            >
              {{ ceci.emoji }}
            </span>
            <div>
              <p class="text-xs font-semibold" :style="{ color: ceci.color }">{{ ceci.name }}</p>
              <p class="mt-0.5 text-sm text-(--color-ink)/85">
                {{
                  passed
                    ? '¡Felicidades! Ya sabes cómo funciona una trivia gamificada, justo como Kahoot. Anímate a crear una para tu próxima clase.'
                    : 'No te preocupes, en los juegos siempre se puede volver a intentar. Repasa las lecciones y ve de nuevo.'
                }}
              </p>
            </div>
          </div>
        </div>

        <BaseButton variant="outline" size="sm" @click="restart">
          <template #icon-left><ArrowPathIcon class="h-4 w-4" /></template>
          Reintentar
        </BaseButton>
      </div>
    </template>
  </div>
</template>
