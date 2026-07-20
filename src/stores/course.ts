import { defineStore } from 'pinia'
import { modules } from '@/data/modules'

export const useCourseStore = defineStore('course', {
  state: () => ({
    submittedEvidenceIds: [] as number[],
    readLessonIds: [] as string[],
    reflectionAnswers: {} as Record<string, string>,
  }),
  getters: {
    isEvidenceSubmitted: (state) => (moduleId: number) => state.submittedEvidenceIds.includes(moduleId),
    submittedCount: (state) => state.submittedEvidenceIds.length,
    progressPercent: (state) => Math.round((state.submittedEvidenceIds.length / modules.length) * 100),
    isLessonRead: (state) => (lessonId: string) => state.readLessonIds.includes(lessonId),
    reflectionFor: (state) => (activityId: string) => state.reflectionAnswers[activityId] ?? '',
  },
  actions: {
    toggleEvidence(moduleId: number) {
      this.submittedEvidenceIds = this.submittedEvidenceIds.includes(moduleId)
        ? this.submittedEvidenceIds.filter((id) => id !== moduleId)
        : [...this.submittedEvidenceIds, moduleId]
    },
    toggleLessonRead(lessonId: string) {
      this.readLessonIds = this.readLessonIds.includes(lessonId)
        ? this.readLessonIds.filter((id) => id !== lessonId)
        : [...this.readLessonIds, lessonId]
    },
    saveReflection(activityId: string, text: string) {
      this.reflectionAnswers[activityId] = text
    },
  },
  persist: true,
})
