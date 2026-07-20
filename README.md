# Aula Rural Digital

Espacio de autocapacitación para docentes de educación primaria rural. Curso en línea autoadministrado, con módulos, actividades y un portafolio de evidencias.

> "Aprender, compartir e innovar para transformar la educación en nuestras comunidades rurales."

## Stack

- Vue 3 + Composition API (`<script setup>`, TypeScript)
- Vite
- Tailwind CSS v4
- Pinia (con persistencia local vía `pinia-plugin-persistedstate`)
- Vue Router
- Motion for Vue (`motion-v`) para animaciones
- Vue Toastification

## Estructura del curso

- **Inicio** — bienvenida, objetivo general y a quién está dirigido
- **Acerca del curso** — modalidad, duración, propósito y metodología
- **Módulos** — Pedagogía Rural, Educación en Línea, Estrategias Didácticas e Innovación Educativa (el Módulo 1 está completo y funcional; el resto se irá habilitando)
- **Recursos** — materiales de consulta, videos y herramientas, con enlaces reales a fuentes oficiales (SEP, CONAFE)
- **Actividades** — retos prácticos ligados a cada módulo
- **Evidencias** — portafolio de avance por módulo

## Desarrollo local

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # vista previa del build
```
