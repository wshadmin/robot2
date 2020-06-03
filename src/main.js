import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'; //element-ui的css
Vue.use(ElementUI); //使用elementUI
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios=axios
import qs from 'qs'
Vue.prototype.$qs=qs
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import VueResource from 'vue-resource'
Vue.use(VueResource)
//百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})
//高德
import VueAMap from 'vue-amap'
import AMap from 'vue-amap';
Vue.use(AMap);
Vue.use(VueAMap);
/* VueAMap.initAMapApiLoader({
  key: '2893975e83e14a62e8d1dd452ffcd4fe',
  plugin: [],
  v: '1.4.4'
}) */
VueAMap.initAMapApiLoader({
  key: '4c466e9d728dc397c68bb8e12ced0b33',
  plugin: [],
  v: '1.4.5'
})

/* VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
}); */


axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
