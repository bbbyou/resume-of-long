<template>
    <div class="work inner">
        <div class="inner-content">
            <ul class="work-list">
              <li v-for="(item,i) in work">
                <p class="img-container">
                    <img :src="item.imgurl">
                    <span class="href-container">
                        <a v-if="item.pcHref" :href="item.pcHref" target="_blank">PC</a>
                        <a v-if="item.h5Href" :href="item.h5Href" target="_blank">H5</a>
                    </span>
                </p>
                <p class="work-info">
                  <em>{{ item.title }}</em>
                  <span v-for="(sign,i) in item.sign">{{ sign }}</span>
                </p>
              </li>
            </ul>
            <a class="more-btn" @click="loadMore">{{ moreTxt }}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Work',
  data(){
    return {
      totalWork:[],
      work:[],
      onceLoads:8,
      moreTxt:"查看更多"
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.dataInit();
    },
    dataInit(){
      this.totalWork = [{
        pcHref:"inviteAccount/pc",
        h5Href:"inviteAccount/h5",
        imgurl:"work1.png",
        title:"港股邀请开户专题页",
        sign:["专题","PC移动双端"]
      },{
        pcHref:"stockCompetition/pc",
        h5Href:"stockCompetition/h5",
        imgurl:"work2.png",
        title:"全民炒股大赛第二期",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"wealthCard/pc",
        h5Href:"wealthCard/h5",
        imgurl:"work3.png",
        title:"金融圈理财卡",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"jiaxi-winter2016/pc",
        h5Href:"jiaxi-winter2016/h5",
        imgurl:"work4.png",
        title:"理财加息过冬活动",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"easyFun4/pc",
        h5Href:"easyFun4/h5",
        imgurl:"work5.png",
        title:"轻松玩转港美股",
        sign:["专题","PC移动双端"]
      },{
        pcHref:"JRQtwoyears/pc",
        h5Href:"JRQtwoyears/h5",
        imgurl:"work6.png",
        title:"金融圈两周年",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"report2017/pc",
        h5Href:"report2017/h5",
        imgurl:"work7.png",
        title:"理财2017年度运营报告",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"ThreeYearsThanks/pc/html",
        h5Href:"ThreeYearsThanks/h5/html",
        imgurl:"work8.png",
        title:"金融圈三周年",
        sign:["专题","PC端移动双端"]
      },{
        pcHref:"hunqingbao/pc",
        h5Href:"hunqingbao/h5",
        imgurl:"work9.png",
        title:"理财婚庆宝",
        sign:["专题","PC移动双端"]
      },{
        pcHref:"yearend2016/pc/dist",
        h5Href:"yearend2016/h5",
        imgurl:"work10.png",
        title:"理财2016年终盛宴",
        sign:["专题","PC端移动双端"]
      },{
        h5Href:"birthday2017/h5",
        imgurl:"work11.png",
        title:"理财生日贺礼",
        sign:["专题","移动端"]
      },{
        h5Href:"year-end summary/dist",
        imgurl:"work12.png",
        title:"金融圈2016年终总结",
        sign:["专题","移动端"]
      },{
        h5Href:"benison/h5",
        imgurl:"work13.png",
        title:"金融圈2017年迎新纳福",
        sign:["专题","移动端"]
      },{
        h5Href:"lottery",
        imgurl:"work14.png",
        title:"福莱积分抽奖",
        sign:["专题","移动端"]
      },{
        h5Href:"wechatData",
        imgurl:"work15.png",
        title:"金融圈微信公众号二周年",
        sign:["专题","移动端"]
      },{
        h5Href:"worldCup/html",
        imgurl:"work16.png",
        title:"永道e贷世界杯竞猜4强",
        sign:["专题","移动端"]
      },{
        h5Href:"worldCup/baiyiEggs/html",
        imgurl:"work17.png",
        title:"理财欢乐砸金蛋",
        sign:["专题","移动端"]
      },{
        h5Href:"JRQui/html",
        imgurl:"work18.png",
        title:"JRQui移动端",
        sign:["ui插件","移动端"]
      },{
        h5Href:"formaxApp/html",
        imgurl:"work18.png",
        title:"Formax App启动图",
        sign:["App启动图","移动端"]
      },{
        h5Href:"fulaiApp",
        imgurl:"work19.png",
        title:"福莱App启动图",
        sign:["App启动图","移动端"]
      },{
        h5Href:"formaxCreditApp/html",
        imgurl:"work20.png",
        title:"福麦信用启动图",
        sign:["App启动图","移动端"]
      },{
        h5Href:"fulaiIntroduce",
        imgurl:"work19.png",
        title:"福莱App介绍页",
        sign:["App启动图","移动端"]
      },{
        pcHref:"//www.formaxCredit.com",
        self:true,
        imgurl:"work21.png",
        title:"永道e贷款官网",
        sign:["响应式"]
      },{
        pcHref:"//llpp8.cn/object/dragui/html",
        self:true,
        imgurl:"work22.png",
        title:"工单系统表单设计模块",
        sign:["系统模块","PC端"]
      }];

      this.totalWork.map(item => {
        item.h5Href = item.h5Href ? `//llpp8.cn/subject/act/iframe?href=${item.h5Href}` : null;
        item.pcHref = item.pcHref ? (item.self ? item.pcHref : `//llpp8.cn/subject/act/${item.pcHref}` ) : null;
        item.imgurl = `//llpp8.cn/static/img/${item.imgurl}`;
      })

      for(let i = 0 ; i<this.onceLoads ; i++){
        this.work.push(this.totalWork[i]);
      }

    },

    loadMore(){
      let initNums = this.work.length,
          maxNums = this.work.length + this.onceLoads;

      if(initNums === this.totalWork.length){
         this.moreTxt = "没有更多了";
         return;
      }

      for(let i = initNums ; i< maxNums; i++){
        if(i >= this.totalWork.length){
          this.moreTxt = "没有更多了";
          break;
        }
        this.work.push(this.totalWork[i]);
      }
    }
  }
}
</script>

<style lang="scss">

</style>