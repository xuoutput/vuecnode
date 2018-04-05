<template>
  <div id="app">
    <vue-head></vue-head>
    <router-view />
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import VueHead from './components/VueHead'
import VueFooter from './components/VueFooter'

export default {
  name: 'App',
  components: {
    VueHead,
    VueFooter
  }
}
</script>

<style lang="less">
@import "./style/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 这里改下，因为VueHead用了绝对定位 */
  /* margin-top: 70px; */
}
</style>
