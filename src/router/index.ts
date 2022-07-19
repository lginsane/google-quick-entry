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
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: () =>
      import(/* webpackChunkName: "clock" */ '../views/navigation/index.vue'),
    meta: { title: '导航栏/收藏夹' }
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "clock" */ '../views/search/index.vue'),
    meta: { title: '搜索' }
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
