import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import Agreement from '@/pages/agreement/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})
