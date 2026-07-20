<script setup lang="ts">
import SiteLayout from '@/layouts/SiteLayout.vue'
</script>

<template>
  <SiteLayout>
    <RouterView v-slot="{ Component }">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </SiteLayout>
</template>
