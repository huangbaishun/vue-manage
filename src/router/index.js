import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './router';
Vue.use(Router);

const router = new Router({
  routes: routes
})
router.beforeEach((to, from, next) => {
  let admin = localStorage.getItem('username');
  if (to.meta && to.meta.title) {
    window.document.title = to.meta.title || 'heiheihei';
  }
  if (!admin && to.path !== '/login') {
    next('/login');
  } else if (admin && to.path == '/login') {
    next('/');
  } else {
    next();
  }
})

export default router;