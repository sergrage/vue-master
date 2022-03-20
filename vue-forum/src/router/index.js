import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/PageHome'
import ThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'PageNotFound',
      // redirect: {name: 'Home'},
      component: PageNotFound
    }
  ],
  mode: 'history'
})
