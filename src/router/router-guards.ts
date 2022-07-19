// 动态权限路由
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { Router } from 'vue-router';
export function createRouterGuards(router: Router) {
    router.beforeEach((to, _, next) => {
        Nprogress.start()
        document.title = to.meta.title as string;
        next()
    })
    router.afterEach(() => {
        Nprogress.done()
    })
}
