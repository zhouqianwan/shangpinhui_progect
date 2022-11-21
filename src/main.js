import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 导入TypeNav组件
import TypeNav from '@/pages/Home/TypeNav'

// 直接结构赋值出想要使用的那一个方法
import {reqCategoryList} from '@/api'
reqCategoryList()
console.log( reqCategoryList());
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false

// 将TypeNav注册为全局样式的组件


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
