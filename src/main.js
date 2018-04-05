// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//element-ui使用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//axios请求使用ajax
import axios from 'axios'
//换原型链，以后用this.$http,不用每次import axios了  当然用vue-axios可以再次封装,更好
Vue.prototype.$http = axios

//图标库vue-svg-icon
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon); 

/* vuex */
import store from './store/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
