<template>
  <div class="content" id="content" :class="{'view':view}">
    <Loading :load="actived"></Loading>
    <div class="link">
        <div class="head"></div>
        <ul class="link-list">
          <li :class="{'actived': isResume}"><a @click="goView(1)">简历</a></li>
          <li :class="{'actived': isWork }" ><a @click="goView(2)">作品</a></li>
        </ul>
    </div>
        <Resume v-if="viewIdx === 1" :class="{'show':resumeShow}"></Resume>
        <Work v-if="viewIdx === 2 " :class="{'show':workShow}"></Work>
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
      },100)
    },
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
