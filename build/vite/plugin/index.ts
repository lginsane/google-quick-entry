import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import { autoRegistryComponents } from './component'
import { AutoImportDeps } from './autoImport'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps()
  ]
  return vitePlugins;
}
