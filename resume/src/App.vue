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
