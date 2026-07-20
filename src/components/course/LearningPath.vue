<script setup lang="ts">
import { computed } from 'vue'
import { LockClosedIcon, BookOpenIcon, PuzzlePieceIcon, Squares2X2Icon, TrophyIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/solid'
import { module1Path } from '@/data/module1Path'
import { mascots } from '@/data/mascots'
import { module1QuizId } from '@/data/quiz'
import { matchingGameId } from '@/data/matching'
import { useCourseStore } from '@/stores'
import type { PathNode } from '@/types'

const course = useCourseStore()

const kindIcon = {
  lesson: BookOpenIcon,
  quiz: PuzzlePieceIcon,
  matching: Squares2X2Icon,
  goal: TrophyIcon,
}

function isNodeComplete(node: PathNode) {
  if (node.kind === 'lesson') return course.isLessonRead(node.lessonId!)
  if (node.kind === 'quiz') return course.isQuizPassed(module1QuizId)
  if (node.kind === 'matching') return course.isMatchingComplete(matchingGameId)
  return course.isEvidenceSubmitted(1)
}

const nodeStates = computed(() =>
  module1Path.map((node, index) => ({
    node,
    complete: isNodeComplete(node),
    unlocked: index === 0 || isNodeComplete(module1Path[index - 1]),
  })),
)

const starsEarned = computed(() => nodeStates.value.filter((n) => n.complete).length)

function anchorId(node: PathNode) {
  if (node.kind === 'lesson') return `lesson-${node.lessonId}`
  if (node.kind === 'quiz') return 'quiz-section'
  if (node.kind === 'matching') return 'matching-section'
  return 'meta-section'
}

function goTo(node: PathNode, unlocked: boolean) {
  if (!unlocked) return
  document.getElementById(anchorId(node))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="card p-6 sm:p-8">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <span class="badge-pill bg-(--color-cta)/15 text-(--color-cta-dark)">Camino de aprendizaje</span>
        <h2 class="mt-3 text-xl">Supera cada nivel para completar el módulo</h2>
        <p class="mt-1.5 max-w-lg text-sm text-(--color-ink)/75">
          Recorre este módulo como en un juego: cada lección es un nivel que desbloquea el siguiente. Tres maestros
          guía te acompañan en el camino para que, poco a poco, te sientas cómoda o cómodo usando herramientas
          digitales en tu salón.
        </p>
      </div>
      <div
        class="flex shrink-0 items-center gap-1.5 rounded-full bg-(--color-accent)/25 px-4 py-2 text-sm font-semibold text-(--color-accent-dark)"
      >
        <StarIcon class="h-5 w-5" />
        {{ starsEarned }}/{{ module1Path.length }} niveles
      </div>
    </div>

    <div class="mt-6 flex flex-wrap gap-3">
      <div
        v-for="mascot in mascots"
        :key="mascot.id"
        class="flex items-center gap-2 rounded-full bg-(--color-bg) py-1.5 pl-1.5 pr-3.5"
      >
        <span
          class="flex h-8 w-8 items-center justify-center rounded-full text-base"
          :style="{ backgroundColor: `${mascot.color}30` }"
        >
          {{ mascot.emoji }}
        </span>
        <span class="text-xs font-medium">{{ mascot.name }}</span>
      </div>
    </div>

    <div class="relative mt-8">
      <div class="absolute top-2 bottom-2 left-[26px] w-0.5 border-l-2 border-dashed border-slate-200" aria-hidden="true" />
      <div class="space-y-5">
        <div v-for="{ node, complete, unlocked } in nodeStates" :key="node.id" class="relative flex items-start gap-4">
          <button
            type="button"
            class="z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-(--color-bg) shadow-(--shadow-soft) transition"
            :class="[
              !unlocked && 'cursor-not-allowed bg-slate-100 text-(--color-muted)',
              unlocked && !complete && 'animate-pulse cursor-pointer bg-(--color-primary) text-white hover:scale-105',
              complete && 'cursor-pointer bg-(--color-secondary) text-white hover:scale-105',
            ]"
            :disabled="!unlocked"
            @click="goTo(node, unlocked)"
          >
            <LockClosedIcon v-if="!unlocked" class="h-5 w-5" />
            <StarIcon v-else-if="complete" class="h-6 w-6" />
            <component :is="kindIcon[node.kind]" v-else class="h-6 w-6" />
          </button>

          <div class="min-w-0 flex-1 pt-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <p class="text-xs font-medium uppercase tracking-wide text-(--color-muted)">{{ node.subtitle }}</p>
              <span v-if="complete" class="badge-pill bg-(--color-secondary)/20 text-(--color-secondary-dark)">Superado</span>
              <span v-else-if="!unlocked" class="badge-pill bg-slate-100 text-(--color-muted)">Bloqueado</span>
            </div>
            <button
              type="button"
              class="mt-0.5 text-left text-sm font-semibold transition disabled:cursor-not-allowed"
              :class="unlocked ? 'text-(--color-ink) hover:text-(--color-primary-dark)' : 'text-(--color-muted)'"
              :disabled="!unlocked"
              @click="goTo(node, unlocked)"
            >
              {{ node.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
