import router from '@/router'
import { useUserStore } from '@/store'
import { usePermissionStore } from '@/store'
import { Message } from '@arco-design/web-vue'
import { getToken } from '@/utils/auth'
import { isHttp } from '@/utils/validate'

/** @desc 免登录白名单 */
const whiteList = ['/login', '/register']

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()

  Message.info('哈哈哈')
  // 判断该用户是否登录
  if (getToken()) {
    if (to.path === '/login') {
      // 如果已经登录，并准备进入 Login 页面，则重定向到主页
      next({ path: '/' })
    } else {
      // 检查用户是否已获得其权限角色
      if (userStore.roles.length === 0) {
        try {
          await userStore.getInfo()
          const accessRoutes: any = await permissionStore.generateRoutes()
          accessRoutes.forEach((route: any) => {
            if (!isHttp(route.path)) {
              router.addRoute(route) // 动态添加可访问路由表
            }
          })
          console.log('路由表', router.getRoutes())
          // 确保添加路由已完成
          // 设置 replace: true, 因此导航将不会留下历史记录
          next({ ...to, replace: true })
        } catch (err: any) {
          // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
          userStore.resetToken()
          Message.error(err.message || '路由守卫过程发生错误')
          next('/login')
        }
      } else {
        next()
      }
    }
  } else {
    // 如果没有 Token
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果在免登录的白名单中，则直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next('/login')
    }
  }
})