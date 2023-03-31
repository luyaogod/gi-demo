import { successResponseWrap, failResponseWrap } from '../mock'

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    timeout: 300,
    response: ({ body }) => {
      const { username, password } = body
      if (!username) {
        return failResponseWrap(null, '用户名不能为空', 50000)
      }
      if (!password) {
        return failResponseWrap(null, '密码不能为空', 50000)
      }
      if (username === 'admin' && password === '123456') {
        return successResponseWrap({
          token: 'TOKEN123456789',
          userInfo: {
            name: 'Lin',
            avatar: 'https://s1.ax1x.com/2022/07/05/jtMjGq.jpg'
          }
        })
      }
      if (username === 'user' && password === '123456') {
        return successResponseWrap({
          token: 'TOKEN123456789',
          userInfo: {
            name: '木糖醇',
            avatar: 'https://portrait.gitee.com/uploads/avatars/user/1671/5013229_lin0716_1587117839.png!avatar60'
          }
        })
      }
      return failResponseWrap(null, '账号或者密码错误', 50000)
    }
  },
  {
    url: '/mock/user/logout',
    method: 'post',
    timeout: 300,
    response: () => {
      return successResponseWrap(null)
    }
  }
]