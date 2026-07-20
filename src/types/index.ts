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
  type: 'video' | 'pdf'
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
