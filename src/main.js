import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//  api接口封装
import { postKeyValueRequest } from './utils/api';
import { getRequest } from './utils/api';
import { putRequest } from './utils/api';
import { postRequest } from './utils/api';
import { deleteRequest } from './utils/api';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
