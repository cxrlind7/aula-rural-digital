<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container-page flex min-h-[70vh] flex-col items-center justify-center text-center py-12">
    <p class="font-heading text-8xl font-bold text-(--color-primary)">404</p>
    <h1 class="mt-4 text-2xl">Página no encontrada</h1>
    <p class="mt-2 text-(--color-muted)">Parece que este contenido no existe o fue movido.</p>
    <RouterLink
      to="/"
      class="mt-6 inline-flex items-center rounded-full bg-(--color-cta) px-6 py-3 font-medium text-white shadow-(--shadow-soft) transition hover:bg-(--color-cta-dark)"
    >
      Volver al inicio
    </RouterLink>
  </div>
</template>
