import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import course_list from '@/components/course_list'
import course from '@/components/course'
import header from '@/header/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'login',
      component:login,
    },
    {
      path:'/course_list',
      name:'course_list',
      component:course_list
    },
    {
      path:'/course/:id',
      name:'course',
      component:course
    },
  ]
})
