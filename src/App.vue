<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>

import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'

// import request from './utils/request.js'

export default {
  name: 'App',
  components: {
    MyHeader, MyFooter
  },
  created () {
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
  background: #000;
}
</style>
