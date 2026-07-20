import {
  BookOpenIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  SparklesIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  WrenchScrewdriverIcon,
  ArrowDownTrayIcon,
  StarIcon,
} from '@heroicons/vue/24/outline'
import type { Component } from 'vue'

export const iconMap: Record<string, Component> = {
  BookOpenIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  SparklesIcon,
  DocumentTextIcon,
  PlayCircleIcon,
  WrenchScrewdriverIcon,
  ArrowDownTrayIcon,
  StarIcon,
}

export function resolveIcon(name: string): Component {
  return iconMap[name] ?? StarIcon
}
