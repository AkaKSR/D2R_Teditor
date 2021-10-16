// import Vue from 'vue'
// import Router from 'vue-router'
// import Main from '@/components/Main'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Main',
//       component: Main
//     }
//   ]
// })

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Main from '@/components/Main'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router