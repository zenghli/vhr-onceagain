import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Main from '../views/Main';
import Test1 from '../components/Test1';
import Test2 from '../components/Test2';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/main',
    name: '导航一',
    component: Main,
    children: [
      {
        path: '/test1',
        name: '选项一',
        component: Test1
      },
      {
        path: '/test2',
        name: '选项二',
        component: Test2
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
