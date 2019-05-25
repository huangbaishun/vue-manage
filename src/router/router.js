export const routes = [
  { 
    path: '/',
    redirect: '/dashboard'
  },
  { 
    path: '/',
    component: () => import('../components/common/Home.vue'),
    children:[
      {
        path: '/dashboard',
        component: () => import('../components/Dashboard.vue'),
        meta: { title: '系统首页' }
      },{
        path: '/table',
        component: () => import('../components/common/about.vue'),
        meta: { title: '基础表格'}
      },{
        path: '/tabs',
        component: () => import('../components/tabs.vue'),
        meta: { title: '选项卡'}
      },{
        path: '/form',
        component: () => import('../components/form.vue'),
        meta: { title: '表单相关'}
      },{
        path: '/editor',
        component: () => import('../components/editor.vue'),
        meta: { title: '富文本编辑器'}
      },{
        path: '/markdown',
        component: () => import('../components/markdown.vue'),
        meta: { title: 'markdown编辑器'}
      },{
        path: '/upload',
        component: () => import('../components/upload.vue'),
        meta: { title: '文件上传'}
      },{
        path: '/icon',
        component: () => import('../components/icon.vue'),
        meta: { title: '自定义图标'}
      },{
        path: '/charts',
        component: () => import('../components/charts.vue'),
        meta: { title: '可视化'}
      },{
        path: '/drag',
        component: () => import('../components/drag.vue'),
        meta: { title: '拖拽组件'}
      },{
        path: '/dialog',
        component: () => import('../components/dialog.vue'),
        meta: { title: '弹框'}
      },{
        path: '/i18n',
        component: () => import('../components/i18n.vue'),
        meta: { title: '国际化'}
      },{
        path: '/permission',
        component: () => import('../components/permission.vue'),
        meta: { title: '权限管理'}
      },{
        path: '/404',
        component: () => import('../components/404.vue'),
        meta: { title: '页面找不到了。。。'}
      }]
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../components/Dashboard.vue')
  }
]