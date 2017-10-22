import Vue from 'vue'  //default
import Router from 'vue-router'    //default

import Weixin from '@/components/weixin'
import Tong from '@/components/tongxunlu'
import Faxian from '@/components/faxian'
import Wode from '@/components/wode'


Vue.use(Router)    //default

export default new Router({        //default
  routes: [
    {
      path: '/weixin',
      component: Weixin
    },
    {
      path: '/tong',
      component: Tong
    },
    {
      path: '/faxian',
      component: Faxian
    },
    {
      path: '/wode',
      component: Wode
    }
  ]
})
