import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Inicio' },
  },
  {
    path: '/acerca-del-curso',
    name: 'about',
    component: () => import('@/views/AboutCourseView.vue'),
    meta: { title: 'Acerca del curso' },
  },
  {
    path: '/modulos',
    name: 'modules',
    component: () => import('@/views/ModulesView.vue'),
    meta: { title: 'Módulos' },
  },
  {
    path: '/modulos/:id',
    name: 'module-detail',
    component: () => import('@/views/ModuleDetailView.vue'),
    meta: { title: 'Módulo' },
  },
  {
    path: '/recursos',
    name: 'resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: { title: 'Recursos' },
  },
  {
    path: '/actividades',
    name: 'activities',
    component: () => import('@/views/ActivitiesView.vue'),
    meta: { title: 'Actividades' },
  },
  {
    path: '/evidencias',
    name: 'evidence',
    component: () => import('@/views/EvidenceView.vue'),
    meta: { title: 'Evidencias' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'No encontrado' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} · Aula Rural Digital`
})

export default router
