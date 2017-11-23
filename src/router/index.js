import Vue from 'vue'
import Router from 'vue-router'
import homeIndex from '../page/home/index'
import moduleVue from '../page/vue/vue'
import contentView from '../page/home/content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: homeIndex
    },
    {
      path: '/moduleVue',
      name: 'moduleVue',
      component: moduleVue
    },
    {
      path: '/content/:id',
      name: 'contentView',
      component: contentView,
      props: true
    }
  ]
})
