export interface CourseModule {
  id: number
  slug: string
  title: string
  objective: string
  contents: string[]
  duration: string
  icon: string
  color: string
  locked: boolean
}

export interface LessonResource {
  type: 'video' | 'pdf' | 'link'
  title: string
  url: string
}

export interface Lesson {
  id: string
  title: string
  body: string[]
  resources?: LessonResource[]
}

export interface ResourceItem {
  label: string
  description: string
  url?: string
}

export interface ResourceCategory {
  id: string
  icon: string
  title: string
  description: string
  items: ResourceItem[]
}

export interface Activity {
  id: string
  moduleId: number
  title: string
  description: string
}

export interface Mascot {
  id: string
  name: string
  role: string
  emoji: string
  color: string
  tip: string
}

export interface QuizOption {
  id: string
  text: string
}

export interface QuizQuestion {
  id: string
  prompt: string
  options: QuizOption[]
  correctOptionId: string
}

export interface PathNode {
  id: string
  kind: 'lesson' | 'quiz' | 'matching' | 'goal'
  title: string
  subtitle: string
  mascotId: string
  tip: string
  lessonId?: string
}

export interface MatchingPair {
  id: string
  term: string
  definition: string
}
