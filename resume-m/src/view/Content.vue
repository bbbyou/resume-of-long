<template>
  <div class="content" id="content" :class="{'view':view}">
    <Loading :load="actived"></Loading>
    <div class="link">
        <div class="head"></div>
        <ul class="link-list">
          <li><a @click="goView(1)">简历</a></li>
          <li><a @click="goView(2)">作品</a></li>
        </ul>
    </div>
    <a name="top"></a>
    <Resume v-if="viewIdx === 1" :class="{'show':resumeShow}"></Resume>
    <Work v-if="viewIdx === 2 " :class="{'show':workShow}"></Work>
    <div class="nav" :class="{'actived':navShow}">
      <a class="nav-btn home-nav-btn" @click="navFn"></a>
      <a class="nav-btn abs-btn top-nav-btn" href="#top" @click="navFn">回顶</a>
      <a class="nav-btn abs-btn resume-nav-btn" :class="{'actived': isResume}" @click="goView(1)">简历</a>
      <a class="nav-btn abs-btn work-nav-btn" :class="{'actived': isWork }" @click="goView(2)">作品</a>
    </div>
  </div>
</template>

<script>
import Loading  from '../components/Loading';
import Resume from '../components/Resume';
import Work from '../components/Work';

export default {
  name: 'Content',
  components: {
    Loading,
    Resume,
    Work
  },
  data(){
    return {
      view:false,
      viewIdx:0,
      actived:false,
      resumeShow:false,
      workShow:false,
      navShow:false
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.actived = true;
    },
    goView(idx){

      if(this.view){
        this.navFn();
      }

      this.view = true;
      this.viewIdx = idx;

      setTimeout(()=>{
        switch (idx){
          case 1:
            this.resumeShow = true;
            this.workShow = false;
            break;
          case 2:
            this.resumeShow = false;
            this.workShow = true;
        }
      },300)
    },
    navFn(){
      this.navShow = !this.navShow;
    }
  },
  computed:{
    isResume(){
      return this.viewIdx === 1;
    },
    isWork(){
      return this.viewIdx === 2;
    } 
  },
}
</script>

<style lang="scss">
  
</style>
