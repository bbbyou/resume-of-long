<template>
  <div id="app" class="wrap" :class="{'actived':actived}">
    <Canvas></Canvas>
    <Content></Content>
  </div>
</template>

<script>
import Canvas  from './components/Canvas';
import Content from './view/Content';

export default {
  name: 'App',
  components: {
    Canvas,
    Content
  },
  data(){
    return {
      actived:false,
      resume:true,
      ua:navigator.userAgent,
      isMobile:null,
      loadData:{
        Endload:false
      }
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.isMobile = this.ua.match(/iphone|ipod|ipad|linux|android/gi);
      // console.log(this.isMobile)
      setTimeout(() => {
        this.actived = true;
        // this.loadData.Endload = true;
      },1000)
    },
  }
}
</script>

<style lang="scss">
  @import "./styles/main.scss";
</style>
