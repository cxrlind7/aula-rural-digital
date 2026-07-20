<script setup lang="ts">
const columns = [
  {
    title: 'El curso',
    links: [
      { label: 'Acerca del curso', to: '/acerca-del-curso' },
      { label: 'Módulos', to: '/modulos' },
      { label: 'Recursos', to: '/recursos' },
    ],
  },
  {
    title: 'Tu avance',
    links: [
      { label: 'Actividades', to: '/actividades' },
      { label: 'Evidencias', to: '/evidencias' },
    ],
  },
]
</script>

<template>
  <footer class="border-t border-slate-100 bg-white">
    <div class="container-page grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-2">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-(--color-primary) font-heading text-lg font-bold text-white">
            A
          </span>
          <span class="font-heading text-base font-semibold">Aula Rural Digital</span>
        </div>
        <p class="mt-3 max-w-sm text-sm text-(--color-muted)">
          Espacio de autocapacitación para docentes de educación primaria rural. Aprender, compartir e
          innovar para transformar la educación en nuestras comunidades.
        </p>
      </div>

      <div v-for="col in columns" :key="col.title">
        <p class="font-heading text-sm font-semibold">{{ col.title }}</p>
        <ul class="mt-3 space-y-2">
          <li v-for="link in col.links" :key="link.to">
            <RouterLink :to="link.to" class="text-sm text-(--color-muted) transition hover:text-(--color-primary-dark)">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-100 py-6">
      <p class="container-page text-center text-xs text-(--color-muted)">
        © 2026 Aula Rural Digital. Curso de autocapacitación docente · Mtra. Nora Yeny Torres Robles.
      </p>
    </div>
  </footer>
</template>
