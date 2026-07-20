import { defineStore } from 'pinia'
import { modules } from '@/data/modules'

export const useCourseStore = defineStore('course', {
  state: () => ({
    submittedEvidenceIds: [] as number[],
    readLessonIds: [] as string[],
    reflectionAnswers: {} as Record<string, string>,
    quizScores: {} as Record<string, number>,
    quizPassedIds: [] as string[],
    matchingCompletedIds: [] as string[],
  }),
  getters: {
    isEvidenceSubmitted: (state) => (moduleId: number) => state.submittedEvidenceIds.includes(moduleId),
    submittedCount: (state) => state.submittedEvidenceIds.length,
    progressPercent: (state) => Math.round((state.submittedEvidenceIds.length / modules.length) * 100),
    isLessonRead: (state) => (lessonId: string) => state.readLessonIds.includes(lessonId),
    reflectionFor: (state) => (activityId: string) => state.reflectionAnswers[activityId] ?? '',
    quizScoreFor: (state) => (quizId: string) => state.quizScores[quizId] ?? 0,
    isQuizPassed: (state) => (quizId: string) => state.quizPassedIds.includes(quizId),
    isMatchingComplete: (state) => (gameId: string) => state.matchingCompletedIds.includes(gameId),
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
    completeQuiz(quizId: string, scorePercent: number) {
      this.quizScores[quizId] = scorePercent
      if (scorePercent >= 60 && !this.quizPassedIds.includes(quizId)) {
        this.quizPassedIds.push(quizId)
      }
    },
    completeMatching(gameId: string) {
      if (!this.matchingCompletedIds.includes(gameId)) {
        this.matchingCompletedIds.push(gameId)
      }
    },
  },
  persist: true,
})
