<script setup lang="ts">
import MarketingNavbar from '@/components/layout/MarketingNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-(--color-bg)">
    <MarketingNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
