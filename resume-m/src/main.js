// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "./js/scale_750.js";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data:{
  	isMobile:null,
  },
  beforeCreate() {
  	this.isMobile = navigator.userAgent.match(/iphone|ipod|ipad|linux|android/gi);
  	if(!!!this.isMobile){
  		location.href = "//llpp8.cn/resume";
  	}
  },
  created(){

  }
})
