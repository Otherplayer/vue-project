// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from "./store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie';
import VueBus from 'vue-bus';


import util from './common/util'

Vue.use(util)


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueBus);
Vue.use(VueResource);
Vue.use(VueCookie);


Vue.http.interceptors.push((request, next) => {

  // Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';
  // request.headers.set('token', VueCookie.get('ph-user-token')); //setting request.headers
  // ...
  // 请求发送前的处理逻辑
  // ...
  next((response) => {
    // ...
    // 请求发送后的处理逻辑
    // ...
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    return response
  })
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data:{
  //   bus //通过 this.$root.bus 访问
  // },
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件,
  // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
  store,
  router,
  components: { App },
  template: '<App/>'
})
