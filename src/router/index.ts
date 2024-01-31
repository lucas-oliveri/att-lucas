import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Servicos from '../views/Servicos.vue';
import Detalhes from '../views/Detalhes.vue'
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Inicio from '../views/Inicio.vue';
import Registro from '../views/Inicio.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/servicos',
    name: 'Servicos',
    component: Servicos
  },
  
  {
    path: '/detalhes',
    name: 'Detalhes',
    component: Detalhes
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  }, {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
