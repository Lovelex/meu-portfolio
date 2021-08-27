import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    {
      path: '/',
      component: Main
    }
  ]
})

export default router