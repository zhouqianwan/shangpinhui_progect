<template>
  <div id="app">
    <!-- header部分 -->
    <Header></Header>

    <!-- 路由组件出口地方 -->
    <router-view></router-view>
    <!-- footer部分 -->
    <!-- 只在home和search路由组件中有 -->
    <!-- 方式一 -->
    <!-- <Footer v-show="$route.path === '/home'||$route.path === '/search'"></Footer> -->
    <!-- 方式二 -->
    <Footer v-show="$route.meta.show"></Footer>


  </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
