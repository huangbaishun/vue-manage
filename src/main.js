import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import './components/common/directive';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
