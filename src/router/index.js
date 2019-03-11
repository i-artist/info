import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Login_register from '@/view/login_register/index'



Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:resolve=>require(['@/view/group/index'],resolve),
      children:[
        {
          path:'web',
          name:'web',
          component:resolve=>require(['@/view/group/web'],resolve),
        },
        {
          path:'map',
          name:'map',
          component:resolve=>require(['@/view/group/map'],resolve),
        },
        {
          path:'internet',
          name:'internet',
          component:resolve=>require(['@/view/group/internet'],resolve),
        },
        {
          path:'Login_Register',
          name:'Login_Register',
          component:Login_register
        },
        {
          path:'work',
          name:'work',
          component:resolve=>require(['@/view/group/work'],resolve)
        },
        {
          path:'table',
          name:'table',
          component:resolve=>require(['@/view/group/table'],resolve)
        },
        {
          redirect:'web',
          path:'/'
        }
      ]
    }
  ]
})
