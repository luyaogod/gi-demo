export default {
  path: '/file',
  name: 'File',
  component: import('@/layout/index.vue'),
  redirect: '/file/main',
  meta: { title: '文件管理', keepAlive: false },
  children: [
    {
      path: '/file/main',
      name: 'FileMain',
      component: () => import('@/views/file/main/index.vue'),
      meta: { title: '文件管理', keepAlive: false }
    },
    {
      path: '/file/detail',
      name: 'FileDetail',
      component: () => import('@/views/file/detail/index.vue'),
      meta: { title: '文件详情', keepAlive: false }
    }
  ]
}
