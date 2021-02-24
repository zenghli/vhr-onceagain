import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css';

import { postKeyValueRequest } from './utils/api';
import { getRequest } from './utils/api';
import { postRequest } from './utils/api';
import { putRequest } from './utils/api';
import { deleteRequest } from './utils/api';
import { initMenus } from './utils/menus';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    initMenus(router, store);
    // console.log(router.options.routes);
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
