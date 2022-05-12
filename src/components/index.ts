/**
 * 全局注册自定义组件 待完善
 * @param app
 */

import SvgIcon from './SvgIcon/index.vue'
import type { App } from 'vue';

export function setupCustomComponents(app: App<Element>) {
    app.component('SvgIcon', SvgIcon)
}
  