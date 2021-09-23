import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lista from '@/views/Lista.vue'
import loginPage from '@/views/loginPage.vue'
import updateUser from '@/views/updateUser.vue'
import RegistrarUsuario from '@/views/RegistrarUsuario.vue'
import RegistrarCliente from '@/views/RegistrarCliente.vue'
import updateCustomer from '@/views/updateCustomer.vue'
import deleteCustomer from '@/views/deleteCustomer.vue'
import ListaUsuario from '@/views/ListaUsuario.vue'
import deleteUser  from '@/views/deleteUser.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: RegistrarCliente
  },
  {
    path: '/login',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/update/:id',
    name: 'updateUser',
    component: updateUser
  },
  {
    path: '/updateCustomer/:id',
    name: 'updateCustomer',
    component: updateCustomer
  },
  {
    path: '/deleteCustomer/:id',
    name: 'deleteCustomer',
    component: deleteCustomer
  },
  {
    path: '/deleteUser/:id',
    name: 'deleteUser',
    component: deleteUser
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  },
  {
    path: '/listausuario',
    name: 'ListaUsuario',
    component: ListaUsuario
  },
  {
    path: '/regusuario',
    name: 'Registrarusuario',
    component: RegistrarUsuario
  },
  {
    path: '/regcliente',
    name: 'RegistrarCliente',
    component: RegistrarCliente
  }
]

const router = new VueRouter({
  routes
})

export default router
