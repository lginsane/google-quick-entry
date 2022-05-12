import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupCustomComponents } from './components/index'
import { setupStore } from '@/store/index'
import 'virtual:svg-icons-register'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

async function bootstrap() {
  const app = createApp(App)
  // 注册全局自定义组件
  setupCustomComponents(app)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  await setupRouter(app)

  // 路由准备就绪后挂载APP实例
  await router.isReady()
  app.mount('#app')
}
void bootstrap()
