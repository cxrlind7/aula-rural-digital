<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'

const mobileOpen = ref(false)

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/acerca-del-curso', label: 'Acerca del curso' },
  { to: '/modulos', label: 'Módulos' },
  { to: '/recursos', label: 'Recursos' },
  { to: '/actividades', label: 'Actividades' },
  { to: '/evidencias', label: 'Evidencias' },
]
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-slate-100/80 bg-(--color-bg)/85 backdrop-blur-md">
    <div class="container-page flex h-16 items-center gap-4">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-primary) font-heading text-lg font-bold text-white">
          A
        </span>
        <span class="font-heading text-base font-semibold">Aula Rural Digital</span>
      </RouterLink>

      <nav class="ml-6 hidden items-center gap-5 lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-(--color-ink)/75 transition hover:text-(--color-primary-dark)"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="ml-auto flex items-center gap-2">
        <BaseButton as="router-link" to="/modulos" variant="cta" size="sm" class="hidden sm:inline-flex">
          Comenzar el curso
        </BaseButton>
        <button class="rounded-lg p-2 text-(--color-ink) hover:bg-black/5 lg:hidden" @click="mobileOpen = !mobileOpen">
          <XMarkIcon v-if="mobileOpen" class="h-6 w-6" />
          <Bars3Icon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <nav v-if="mobileOpen" class="border-t border-slate-100 bg-(--color-bg) px-4 py-3 lg:hidden">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block rounded-lg px-2 py-2.5 text-sm font-medium text-(--color-ink)/80 hover:bg-black/5"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <BaseButton as="router-link" to="/modulos" variant="cta" size="sm" full-width class="mt-2">
          Comenzar el curso
        </BaseButton>
      </nav>
    </Transition>
  </header>
</template>
