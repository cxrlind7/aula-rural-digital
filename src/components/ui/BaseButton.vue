<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'cta' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    as?: 'button' | 'a' | 'router-link'
    to?: string
    href?: string
    disabled?: boolean
    fullWidth?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    as: 'button',
    disabled: false,
    fullWidth: false,
  },
)

const tag = computed(() => (props.as === 'router-link' ? 'router-link' : props.as))

const variantClasses: Record<Variant, string> = {
  primary: 'bg-(--color-primary) text-(--color-ink) hover:bg-(--color-primary-dark) hover:text-white shadow-(--shadow-soft)',
  cta: 'bg-(--color-cta) text-white hover:bg-(--color-cta-dark) shadow-(--shadow-soft)',
  secondary: 'bg-(--color-secondary) text-(--color-ink) hover:bg-(--color-secondary-dark) hover:text-white shadow-(--shadow-soft)',
  outline: 'border-2 border-(--color-ink)/15 text-(--color-ink) hover:border-(--color-primary) hover:text-(--color-primary-dark)',
  ghost: 'text-(--color-ink) hover:bg-black/5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3.5 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}
</script>

<template>
  <component
    :is="tag"
    :to="as === 'router-link' ? to : undefined"
    :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? disabled : undefined"
    class="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50"
    :class="[variantClasses[variant], sizeClasses[size], fullWidth && 'w-full']"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </component>
</template>
