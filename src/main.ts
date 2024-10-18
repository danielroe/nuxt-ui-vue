import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import nuxtUI from '@nuxt/ui/vue-plugin'

import App from './App.vue'

const app = createApp(App)

app.use(createRouter({
  routes: [{ path: '/', component: () => import('./pages/Home.vue') }],
  history: createWebHistory()
}))

// allow Nuxt UI to register vue plugins, like dark mode support + NuxtIcon
app.use(nuxtUI)

app.mount('#app')
