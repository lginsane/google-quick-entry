// /src/router/index文件
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 不同模块 ./modules/ 引入
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    meta: { title: '首页' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
