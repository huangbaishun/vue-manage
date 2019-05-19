import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  routes: [
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
})
router.beforeEach((to, from, next) => {
  let admin = localStorage.getItem('username');
  if (!admin && to.path !== '/login') {
    next('/login');
  } else if (admin && to.path == '/login') {
    next('/');
  } else {
    next();
  }
})

export default router;