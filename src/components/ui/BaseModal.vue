<script setup lang="ts">
import { watch } from 'vue'
import { onKeyStroke } from '@vueuse/core'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
  }>(),
  {
    title: '',
  },
)

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

function close() {
  emit('update:modelValue', false)
}

onKeyStroke('Escape', () => {
  if (props.modelValue) close()
})

watch(
  () => props.modelValue,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4" @click.self="close">
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-2"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="modelValue" role="dialog" aria-modal="true" class="card w-full max-w-lg p-6">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-lg">{{ title }}</h3>
              <button
                aria-label="Cerrar"
                class="rounded-full p-1.5 text-(--color-muted) hover:bg-black/5"
                @click="close"
              >
                <XMarkIcon class="h-5 w-5" />
              </button>
            </div>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
