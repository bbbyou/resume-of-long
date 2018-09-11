<template>
    <div class="resume inner">
        <div class="inner-content">
          <div class="inner-col">
            <h3>基本信息</h3>
            <ul class="info-list">
              <li v-for="(item,i) in info">
                <span>{{ item.label }}</span>
                <a :href="item.href ? item.href : 'javascript:void(0)'">{{ item.value }}</a>
              </li>
            </ul>
          </div>

          <div class="inner-col">
            <h3>求职方向</h3>
            <span class="label-box">期望职位</span>
            <p class="value-box">web前端 | web重构</p>
          </div>

          <div class="inner-col">
            <h3>职业技能</h3>
            <ul class="col-list">
              <li>
                <span class="label-box">专职技能</span>
                <p class="value-box">精通html,css。精通sass，熟悉其他CSS预处理器。<br/>熟练使用JS，JQ，vue。<br/>熟悉gulp流，webpack打包构建等前端工程化工具。<br/>了解并初步使用ES6。</p>
              </li>
              <li>
                <span class="label-box">工作技能</span>
                <p class="value-box">熟悉工作上下游领域知识。<br/>熟悉视觉设计，交互设计领域知识，了解UED&UXD领域知识，了解产品&运营思维。<br/>熟悉后端对接流程与了解部分后端语言。<br/>精通ps，熟悉skech</p>
              </li>
            </ul>
          </div>

          <div class="inner-col">
            <h3>项目经历</h3>
            <ul class="object-list">
              <li>
                  <p class="bold-label-box">福迈斯科技有限公司  专题 | 启动图</p>
                  <ol class="object-col-list">
                    <li>
                      <p class="value-box">(1)在职位期间制作过超50多个活动运营专题页制作，其中业务范围挎多个业务线。</p>
                      <div class="subject">
                        <a v-for="(item,i) in subject" :href="item.href" :title="item.title"></a>
                      </div>
                      <p class="label-box">部分代表专题</p>
                    </li>
                    <li>
                        <p class="value-box">(2)公司各个APP多个迭代版本的动态&静态启动图制作。以下示例为动态启动图</p>
                        <div class="app-page" :class="appClsName" >
                          <a v-for="(item,i) in appPage" :href="item.href" target="_blank"></a>
                        </div>
                        <p class="label-box">部分代表APP启动图</p>
                    </li>
                  </ol>
              </li>
              <li>
                <p class="bold-label-box">福迈斯科技有限公司  新OA人员系统</p>
                <ol class="object-col-list2">
                  <li>
                    <p class="value-box">(1)系统使用技术栈为webpack + Vue + iView + Sass + Nodejs。</p>
                    <div class="col-img">
                      <img src="../images/object-1.png">
                    </div>
                    <p class="label-box">各技术栈职责</p>
                  </li>
                  <li>
                    <p class="value-box">(2)系统初步内置三个子系统：①权限系统 ②机构系统 ③财务系统</p>
                    <div class="col-img">
                      <img src="../images/object-2.png">
                    </div>
                    <p class="label-box">三个系统之间的串联关系</p>
                  </li>
                  <li>
                    <p class="value-box">(3)系统采用前后端分离，Java做后端服务，Nodejs做中端网关，前后端通信采取Ajax异步请求。Node.js做中间层做请求拦截并且做数据格式处理与请求轮询及高并分发。</p>
                    <div class="col-img">
                      <img src="../images/object-3.png">
                    </div>
                    <p class="label-box">前中后端关系</p>
                  </li>
                  <li>
                    <p class="value-box">(4)个人负责的模块是机构系统中的销售人员管理与销售层级管理，即为销售人员的增删查改与销售层级树结构的增删查改。</p>
                    <div class="col-img">
                      <img src="../images/object-4.png">
                    </div>
                    <p class="label-box">个人负责模块</p>
                  </li>
                </ol>
              </li>
              <li>
                <p class="bold-label-box">福迈斯科技有限公司 JRQui 组件移动端</p>
                <ol class="object-col-list2">
                    <li>
                      <p class="value-box">(1)JRQui依赖于JQ | Zepto。<br/>(2)JRQui内置多个移动端适用的ui组件，例如常用的picker类，easy swiper类，toast类等。<br/>(3)JRQui是个人自主设计ui效果，且自主自发整理归类。目前用于多个APP内置的h5页面场景。</p>
                      <div class="col-img-list">
                        <a v-for="item in JRQui" class="col-img-item" :class="item.class" :href="item.href" target="_blank">{{ item.name }}</a>
                      </div>
                    </li>
                </ol>
              </li>

              <li>
                <p class="bold-label-box">福迈斯科技有限公司 工单系统PC端</p>
                <ol class="object-col-list2">
                    <li>
                      <p class="value-box">(1) 工单系统是JSP + JAVA 等后端集成系统。流程化过程需要构造大量简单表单。<br/>(2) 个人负责模块为表单设计模块，主要使用JQ及插件：JQui + flatpickr + JQ.htmlClean。<br/>(3) 其中用到大量拖拽事件，自行封装了两个组件 drag.js + drag-attrSetting.js。<br/>(4) 项目历时两个月，无产品无设计，自主和提供服务JAVA人员梳理需求，并且自主设计及到最后的实现输出。<br/>(5) 项目目的在于可快速构建简单表单，提升流程化工单的生产效率。目前一版提供常用流式基本布局，控件: 单行文本框(input)、多行文本框(textarea)、下拉选择框(select)、复选框组(checkbox)、单选框组(radio)、日期控件(flatpickr)等多个基本表单插件。最终输出得到需求人及后端人员一致好评。</p>
                      <div class="drag-img">
                        <img src="../images/dragui.jpg">
                      </div>
                    </li>
                </ol>
                
              </li>
            </ul>
          </div>

          <div class="inner-col">
            <h3>工作经验</h3>
            <ul class="object-list">
              <li v-for="(item,i) in jobList">
                  <div class="company">
                    <p>
                      <i class="company-logo" :class="`logo${i+1}`"></i>
                      <ol class="company-info">
                        <li class="company-name">{{item.company}}</li>
                        <li class="company-jobname">{{item.job}}</li>
                      </ol>
                    </p>
                    <p>
                      <ol class="job-content-list">
                          <h5>工作内容</h5>
                          <li v-for="(content,i) in item.content">{{ `(${i+1}) ${content.txt}` }}</li>
                      </ol>
                      <ol class="job-content-list" v-if="item.performance">
                          <h5>绩效</h5>
                          <li v-for="(performance,i) in item.performance">{{ `(${i+1}) ${performance.txt}` }}</li>
                      </ol>
                    </p>
                  </div>
              </li>
            </ul>
          </div>
          
        </div>
    </div>
</template>

<script>

export default {
  name: 'Resume',
  data(){
    return {
      info:[],
      subject:[],
      appPage:[],
      JRQui:[],
      jobList:[],
      appClsName:"",
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
      this.info = [{
        label:"姓名",
        value:"龙先杰"
      },{
        label:"邮箱",
        value:"78939349@qq.com",
        href:"mailto:78939349@qq.com"
      },{
        label:"电话",
        value:"18977018662",
        href:"tel:18977018662"
      },{
        label:"年龄",
        value:"25"
      },{
        label:"经验",
        value:"3年前端 + 1年设计"
      },{
        label:"专业",
        value:"计算机应用技术"
      },{
        label:"院校",
        value:"桂林理工大学高职院校"
      },{
        label:"学历",
        value:"大专"
      }];

      this.subject = [{
        title:"港股邀请开户专题页",
        href:"//llpp8.cn/subject/act/inviteAccount/h5"
      },{
        title:"理财加息过冬活动",
        href:"//llpp8.cn/subject/act/jiaxi-winter2016/h5"
      },{
        title:"金融圈理财卡",
        href:"//llpp8.cn/subject/act/wealthCard/h5"
      },{
        title:"金融圈微信公众号二周年",
        href:"//llpp8.cn/subject/act/wechatData"
      },{
        title:"金融圈2016年终总结",
        href:"//llpp8.cn/subject/act/year-end summary/dist"
      },{
        title:"理财生日贺礼",
        href:"//llpp8.cn/subject/act/birthday2017/h5"
      },{
        title:"轻松玩转港美股",
        href:"//llpp8.cn/subject/act/easyFun4/h5"
      },{
        title:"金融圈2017年迎新纳福",
        href:"//llpp8.cn/subject/act/benison/h5"
      },{
        title:"福莱积分抽奖",
        href:"//llpp8.cn/subject/act/lottery"
      },{
        title:"全民炒股大赛第二期",
        href:"//llpp8.cn/subject/act/stockCompetition/h5"
      },{
        title:"金融圈两周年",
        href:"//llpp8.cn/subject/act/JRQtwoyears/h5"
      },{
        title:"理财2017年度运营报告",
        href:"//llpp8.cn/subject/act/report2017/h5"
      },{
        title:"金融圈三周年",
        href:"//llpp8.cn/subject/act/ThreeYearsThanks/h5/html"
      },{
        title:"理财欢乐砸金蛋",
        href:"//llpp8.cn/subject/act/worldCup/baiyiEggs/html"
      },{
        title:"永道e贷世界杯竞猜4强",
        href:"//llpp8.cn/subject/act/worldCup/html"
      }]

      this.appPage = [{
        title:"福莱APP启动图",
        href:"//llpp8.cn/subject/act/fulaiApp",
      },{
        title:"金融圈APP启动图",
        href:"//llpp8.cn/subject/act/formaxApp/html"
      },{
        title:"福莱APP宣传图",
        href:"//llpp8.cn/subject/act/fulaiIntroduce"
      }]

      this.JRQui = [{
        name:"Toast",
        href:"toast.html",
        class:"col-one-line"
      },{
        name:"Action",
        href:"action.html",
        class:"col-one-line"
      },{
        name:"Dialog",
        href:"dialog.html",
        class:"col-one-line"
      },{
        name:"Scroll Dialog",
        href:"dialogScroll.html",
        class:""
      },{
        name:"Easy Swiper",
        href:"easySwiper.html",
        class:""
      },{
        name:"City Picker",
        href:"city-picker.html",
        class:""
      },{
        name:"DateTime Picker",
        href:"datetime-picker.html",
        class:""
      },{
        name:"Search Picker",
        href:"searchPicker.html",
        class:""
      },{
        name:"Tab",
        href:"tab.html",
        class:"col-one-line"
      },{
        name:"Range",
        href:"range.html",
        class:"col-one-line"
      }] 

      this.JRQui.map(item => {
        item.href = `//llpp8.cn/subject/act/iframe?href=JRQui/html/${item.href}`
      })

      this.jobList = [{
        company:"福迈斯科技有限公司",
        time:"(2016.5 - 至今)",
        job:"web前端 | web重构",
        content:[{
          txt:"参与多个业务线的专题运营页制作，专题页制作数量达50多个。"
        },{
          txt:"负责金融圈旗下多个APP多个版本动态启动图制作。"
        },{
          txt:"参与金融圈旗下多个APP产品部分内嵌H5页面制作。"
        },{
          txt:"参与金融圈旗下多个APP产品部分内嵌H5页面制作。"
        },{
          txt:"负责金融圈多个内部系统web前端的制作。"
        },{
          txt:"参与金融圈内部集成单点登录OA大型集合系统的开发。"
        },{
          txt:"负责金融圈移动端web ui组件编写。"
        },{
          txt:"负责福莱子品牌永道e贷（福莱）响应式官网开发编写。"
        }],
        performance:[{
          txt:"多次考核评级取得A级评分。"
        },{
          txt:"参加过两次晋升答辩，从刚进公司的T2.1晋升为T2.2。"
        }]
      },{
        company:"优高胜网络科技有限公司",
        time:"(2015.12-2016.4)",
        job:"web前端",
        content:[{
          txt:"在职期间主要参与乐葩云购，挑山扁担，药多多等多个外包项目web页面重构搭建。"
        },{
          txt:"负责活动H5页面的运营制作。"
        }]
      },{
        company:"水果营行",
        time:"(2015.12-2016.4)",
        job:"web前端",
        content:[{
          txt:"在职期间主要参与水果营行各种大研发项目，包括水果营行官网，供应链官网，电商网站，微商城"
        },{
          txt:"负责活动H5页面的前端实现。"
        }]
      }]
    },
  }
}
</script>

<style lang="scss">

</style>