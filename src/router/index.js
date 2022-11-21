// 配置路由的地方

import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入相应的模块
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

// 先把VueRouter上的原型push复制一份
let originPush = VueRouter.prototype.push;

// 重写push方法|replace
// $router.push(location,resolve,reject)
// 第一个参数：告诉原来的push方法，你往哪跳   函数表达式
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve&&reject){
    // 用call重新调用一次，原来的push方法
    originPush.call(this,location,resolve,reject)
  }else{
    // 如果没有成功和失败的回调函数，手动加上
    originPush.call(this,location,()=>{},()=>{})
  }
}



Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    // 配置重定向
    {path:'*',redirect:'/home'},
    {path:'/home',component:Home,meta:{show:true}},
    {path:'/search/:keyword?',component:Search,meta:{show:true},name:'search',props:true},
    {path:'/register',component:Register,meta:{show:false}},
    {path:'/login',component:Login,meta:{show:false}}
  ]
})