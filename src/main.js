import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'assets/iconfont.js'
// import bus from '@/assets/bus.js';
// Vue.prototype.Bus = bus;
Vue.config.productionTip = false
Vue.filter('dateFormat',function(originVal){
  const dt=new Date(originVal)
 const y = dt.getFullYear()
 const m = (dt.getMonth()+1+'').padStart(2,'0')
 const d=(dt.getDate()+'').padStart(2,'0')
 const hh=(dt.getHours()+'').padStart(2,'0')
 const mm=(dt.getMinutes()+'').padStart(2,'0')
 const ss=(dt.getSeconds()+'').padStart(2,'0')
 return `${mm}:${ss}`
})
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
