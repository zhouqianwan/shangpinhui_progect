<template>
  <div>
    <h1>params----{{$route.params.keyword}}</h1>
    <h1>query----{{$route.query.k}}</h1>
    <h1>keyword======={{keyword}}</h1>
  </div>
</template>

<script>
  export default {
  name:'Search',
  props:['keyword']
}
</script>

<style lang="less" scoped>

</style>
