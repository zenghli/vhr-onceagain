import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Main from '../views/Main';

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
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
