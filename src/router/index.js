import { createRouter, createWebHistory } from 'vue-router'
import successPage from '../components/successPage.vue';
import registerPage from '../components/registerPage.vue';
import loginComponent from '../components/login.vue';
import loginSuccess from '../components/loginSuccess.vue';

const routes = [
  {
    path: '/successPage',
    name: 'successPage',
    component: successPage,
  },
  {
    path: '/loginSuccess',
    name: 'loginSuccess',
    component: loginSuccess,
  },
  {
    path: '/',
    name: 'loginComponent',
    component: loginComponent,
  },
  {
    path: '/registerPage',
    name: 'registerPage',
    component: registerPage,
  },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router