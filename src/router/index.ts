import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './router-guards'

// 不同模块 ./modules/ 引入
const constantRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Clock',
    component: () =>
      import(/* webpackChunkName: "clock" */ '../views/clock/index.vue'),
    meta: { title: '时间' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
}

export default router
