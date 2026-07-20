<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    type?: string
    error?: string
    id?: string
  }>(),
  {
    modelValue: '',
    type: 'text',
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="mb-1.5 block text-sm font-medium text-(--color-ink)">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-(--color-ink) placeholder:text-(--color-muted) transition focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/30"
      :class="error && 'border-red-400 focus:border-red-400 focus:ring-red-200'"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>
