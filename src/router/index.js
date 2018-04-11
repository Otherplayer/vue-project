import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ele from '@/components/Ele'

Vue.use(Router)


const Foo = { template: '<div>404</div>' }
const Bar = { template: '<div>Error</div>' }

const routes = [
  { path: '/',
    name:'HelloWorld',
    component: HelloWorld },
  { path: '/foo',
    name:'foo',
    component: Foo },
  { path: '/bar',
    name:'bar',
    component: Bar }
  ,
  { path: '/ele/:id',
    name:'ele',
    component: Ele }
]



export default new Router({
  routes // （缩写）相当于 routes: routes
})
