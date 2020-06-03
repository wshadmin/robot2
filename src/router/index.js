import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {Message} from 'element-ui'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'loginindex',
    component: () => import('../views/loginindex.vue')
  },
  {
    path: '/loginindex',
    name: 'loginindex',
    component: () => import('../views/loginindex.vue')
  },
  {
    path: '/ptlogin',
    name: 'ptlogin',
    component: () => import('../views/ptlogin.vue')
  },
  {
    path: '/glylogin',
    name: 'glylogin',
    component: () => import('../views/glylogin.vue')
  },
  {
    path: '/gkpt',
    name: 'gkpt',
    component: () => import('../xaecharts/gkpt.vue')
  },
  {
  	path: '/echarts1',
  	name: 'echarts1',
  	component: () => import('../xaecharts/echarts1.vue'),
	},
	{
  	path: '/echarts2',
  	name: 'echarts2',
  	component: () => import('../xaecharts/echarts2.vue'),
	},
	{
	path: '/echarts3',
	name: 'echarts3',
	component: () => import('../xaecharts/echarts3.vue'),
	},
	{
  	path: '/echarts4',
  	name: 'echarts4',
  	component: () => import('../xaecharts/echarts4.vue'),
	},
	{
	path: '/echarts5',
	name: 'echarts5',
	component: () => import('../xaecharts/echarts5.vue'),
	},
	{
  	path: '/echarts6',
  	name: 'echarts6',
  	component: () => import('../xaecharts/echarts6.vue'),
	},
	{
  	path: '/echarts7',
  	name: 'echarts7',
  	component: () => import('../xaecharts/echarts7.vue'),
	},
	{
  	path: '/shouyeindex',
  	name: 'shouyeindex',
  	component: () => import('../shouye/shouyeindex.vue'),
	},
	{
	path: '/RobotClientindex',
	name: 'RobotClientindex',
	component: () => import('../RobotClient/RobotClientindex.vue'),
	},
	{
	path: '/RobotClientmain',
	name: 'RobotClientmain',
	component: () => import('../RobotClient/RobotClientmain.vue'),
	},
	{
	path: '/RObotClientunit',
	name: 'RObotClientunit',
	component: () => import('../RobotClient/RObotClientunit.vue'),
	},
	{
	path: '/unit2',
	name: 'unit2',
	component: () => import('../RobotClient/unit2.vue'),
	},
	{
	path: '/unit4',
	name: 'unit4',
	component: () => import('../RobotClient/unit4.vue'),
	},
	{
	path: '/main1',
	name: 'main1',
	component: () => import('../RobotClient/main1.vue'),
	},
	{
	path: '/main3',
	name: 'main3',
	component: () => import('../RobotClient/main3.vue'),
	},
	{
	path: '/main4',
	name: 'main4',
	component: () => import('../RobotClient/main4.vue'),
	},
	{
	path: '/main5',
	name: 'main5',
	component: () => import('../RobotClient/main5.vue'),
	},
	{
	path: '/main7',
	name: 'main7',
	component: () => import('../RobotClient/main7.vue'),
	},
	{
	path: '/demo',
	name: 'demo',
	component: () => import('../demo1/demo.vue'),
	},
	{
	path: '/demos1',
	name: 'demos1',
	component: () => import('../demo1/demos1.vue'),
	},
	{
	path: '/demo2',
	name: 'demo2',
	component: () => import('../demo1/demo2.vue'),
	},
	{
	path: '/demos2',
	name: 'demos2',
	component: () => import('../demo1/demos2.vue'),
	},
	{
	path: '/demo3',
	name: 'demo3',
	component: () => import('../demo1/demo3.vue'),
	},
	{
	path: '/demos3',
	name: 'demos3',
	component: () => import('../demo1/demos3.vue'),
	},
	{
	path: '/demo4',
	name: 'demo4',
	component: () => import('../demo1/demo4.vue'),
	},
	{
	path: '/demos4',
	name: 'demos4',
	component: () => import('../demo1/demos4.vue'),
	},
	{
	path: '/demo5',
	name: 'demo5',
	component: () => import('../demo1/demo5.vue'),
	},
	{
	path: '/demos5',
	name: 'demos5',
	component: () => import('../demo1/demos5.vue'),
	},
	{
	path: '/demo6',
	name: 'demo6',
	component: () => import('../demo1/demo6.vue'),
	},
	{
	path: '/demos6',
	name: 'demos6',
	component: () => import('../demo1/demos6.vue'),
	},
	{
	path: '/demo7',
	name: 'demo7',
	component: () => import('../demo1/demo7.vue'),
	},
	{
	path: '/demos7',
	name: 'demos7',
	component: () => import('../demo1/demos7.vue'),
	},
	{
	path: '/chinaMap',
	name: 'chinaMap',
	component: () => import('../demo1/chinaMap.vue'),
	},
	{
	path: '/cswebsocket',
	name: 'cswebsocket',
	component: () => import('../demo1/cswebsocket.vue'),
	},
  /*{
    path: '/',
    redirect:'/home'
  },*/
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  //base:'/dist/',
  //base: process.env.BASE_URL,
  routes
})
/*router.beforeEach((to, from, next) => {
	console.log(to)
  if(to.path == '/Home'){
    next();
  }else{
      var userinfos = sessionStorage.getItem("userinfos")
      if(userinfos){
        next()
      }else{
        Message({
          message: '请先登录...',
          type: 'warning'
        })
        setTimeout(() => {
            next('/Home')
        }, 3000);
      }
  }
})*/
export default router
