import Vue from 'vue'
import Router from 'vue-router'
import music from '@/components/music'
import detail from '@/components/detail'
import search from '@/components/search'
import login from '@/components/login'
import regist from '@/components/regist'
import song from '@/components/song'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/music',
      name: 'music',
      meta: {
                // 添加该字段，表示进入这个路由是需要登录的
                 requireAuth: true,  
                },
      component: music
    },
     {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
     {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    }
  ]
})
