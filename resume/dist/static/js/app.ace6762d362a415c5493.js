webpackJsonp([0],{"/q8h":function(t,e){},JeRi:function(t,e){},MYNM:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("IvJb"),s={name:"Canvas",data:function(){return{canvas:"",ctx:"",winWidth:window.innerWidth||document.getElement.clientWidth||document.body.clientWidth,winHeight:window.innerHeight||document.getElement.clientHeight||document.body.clientHeight,dots:[]}},mounted:function(){this.init()},methods:{init:function(){this.canvasInit()},canvasInit:function(){var t=document.getElementById("bgCanvas"),e="";this.canvas=t,t.getContext&&(e=t.getContext("2d"),this.ctx=e),window.onresize=this.resize(),this.renderDots(),this.animate()},renderDots:function(){for(var t=["132,94,228","228,94,189","247,146,38","245,66,25"],e=0;e<88;e++){var i=Math.random()*this.canvas.width,a=Math.random()*this.canvas.height,s=Math.random()/4,n=Math.random()/4,l=Math.random(),r=t[Math.floor(Math.random()*t.length)];this.dots.push({x:i,y:a,xa:s,ya:n,alpha:l,color:r,max:6e3})}},animate:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.dots.forEach(function(e){e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>t.canvas.width||e.x<0?-1:1,e.ya*=e.y>t.canvas.height||e.y<0?-1:1,t.ctx.beginPath(),t.ctx.arc(e.x-.5,e.y-.5,2,0,2*Math.PI,!0),t.ctx.closePath(),t.ctx.fillStyle="rgba("+e.color+","+e.alpha+")",t.ctx.fill()}),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)})(this.animate)},resize:function(){this.canvas.width=this.winWidth-20,this.canvas.height=this.winHeight-300}}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas",attrs:{id:"canvas"}},[e("canvas",{attrs:{id:"bgCanvas"}})])}]};var l=i("C7Lr")(s,n,!1,function(t){i("JeRi")},null,null).exports,r={name:"loading",props:{data:{type:Object},load:Boolean},data:function(){return{txt:[],loadTxt:"",actCls:!1,timer:""}},mounted:function(){this.init()},methods:{init:function(){this.setTxt(),this.txtPoll()},setTxt:function(){this.txt="欢迎浏览我的个站,页面正在努力加载中,请您稍等片刻".split(",")},txtPoll:function(){var t=this,e=0;this.actCls=!0,this.loadTxt=this.txt[e],this.timer=setInterval(function(){t.load?clearInterval(t.timer):((e+=1)>=t.txt.length&&(e=0),t.loadTxt=t.txt[e])},4e3)}},watch:{}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading",attrs:{id:"loading"}},[i("div",{staticClass:"demo-wrap"},[i("div",{staticClass:"demo"},[i("div",{staticClass:"ring red"}),t._v(" "),i("div",{staticClass:"ring green"}),t._v(" "),i("div",{staticClass:"ring blue"}),t._v(" "),i("div",{staticClass:"ring yellow"}),t._v(" "),i("div",{staticClass:"ring load-txt",class:{active:t.actCls}},[i("span",[t._v(t._s(t.loadTxt))])])])])])},staticRenderFns:[]};var o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"resume inner"},[i("div",{staticClass:"inner-content"},[i("div",{staticClass:"inner-col"},[i("h3",[t._v("基本信息")]),t._v(" "),i("ul",{staticClass:"info-list"},t._l(t.info,function(e,a){return i("li",[i("span",[t._v(t._s(e.label))]),t._v(" "),i("a",[t._v(t._s(e.value))])])}))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"inner-col"},[i("h3",[t._v("项目经历")]),t._v(" "),i("ul",{staticClass:"object-list"},[i("li",[i("p",{staticClass:"bold-label-box"},[t._v("福迈斯科技有限公司  专题 | 启动图")]),t._v(" "),i("ol",{staticClass:"object-col-list"},[i("li",[i("p",{staticClass:"value-box"},[t._v("(1)在职位期间制作过超50多个活动运营专题页制作，其中业务范围挎多个业务线。")]),t._v(" "),i("div",{staticClass:"subject"},t._l(t.subject,function(t,e){return i("a",{attrs:{href:t.href,title:t.title}})})),t._v(" "),i("p",{staticClass:"label-box"},[t._v("部分代表专题")])]),t._v(" "),i("li",[i("p",{staticClass:"value-box"},[t._v("(2)公司各个APP多个迭代版本的动态&静态启动图制作。以下示例为动态启动图")]),t._v(" "),i("div",{staticClass:"app-page",class:t.appClsName,on:{mouseout:function(e){t.hoverOut()}}},t._l(t.appPage,function(e,a){return i("a",{attrs:{href:e.href,target:"_blank"},on:{mouseover:function(e){t.hover(a)}}})})),t._v(" "),i("p",{staticClass:"label-box"},[t._v("部分代表APP启动图")])])])]),t._v(" "),t._m(2),t._v(" "),i("li",[i("p",{staticClass:"bold-label-box"},[t._v("福迈斯科技有限公司 JRQui 组件移动端")]),t._v(" "),i("ol",{staticClass:"object-col-list2"},[i("li",[t._m(3),t._v(" "),i("div",{staticClass:"col-img-list"},t._l(t.JRQui,function(e){return i("a",{staticClass:"col-img-item",class:e.class,attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.name))])}))])])]),t._v(" "),t._m(4)])]),t._v(" "),i("div",{staticClass:"inner-col"},[i("h3",[t._v("工作经验")]),t._v(" "),i("ul",{staticClass:"object-list"},t._l(t.jobList,function(e,a){return i("li",[i("div",{staticClass:"company"},[i("p",[i("i",{staticClass:"company-logo",class:"logo"+(a+1)}),t._v(" "),i("ol",{staticClass:"company-info"},[i("li",{staticClass:"company-name"},[t._v(t._s(e.company)),i("span",[t._v(t._s(e.time))])]),t._v(" "),i("li",{staticClass:"company-jobname"},[t._v(t._s(e.job))])])]),t._v(" "),i("p",[i("ol",{staticClass:"job-content-list"},[i("h5",[t._v("工作内容")]),t._v(" "),t._l(e.content,function(e,a){return i("li",[t._v(t._s("("+(a+1)+") "+e.txt))])})],2),t._v(" "),e.performance?i("ol",{staticClass:"job-content-list"},[i("h5",[t._v("绩效")]),t._v(" "),t._l(e.performance,function(e,a){return i("li",[t._v(t._s("("+(a+1)+") "+e.txt))])})],2):t._e()])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inner-col"},[e("h3",[this._v("求职方向")]),this._v(" "),e("span",{staticClass:"label-box"},[this._v("期望职位")]),this._v(" "),e("p",{staticClass:"value-box"},[this._v("web前端 | web重构")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inner-col"},[i("h3",[t._v("职业技能")]),t._v(" "),i("ul",{staticClass:"col-list"},[i("li",[i("span",{staticClass:"label-box"},[t._v("专职技能")]),t._v(" "),i("p",{staticClass:"value-box"},[t._v("精通html,css。精通sass，熟悉其他CSS预处理器。"),i("br"),t._v("熟练使用JS，JQ，vue。"),i("br"),t._v("熟悉gulp流，webpack打包构建等前端工程化工具。"),i("br"),t._v("了解并初步使用ES6。")])]),t._v(" "),i("li",[i("span",{staticClass:"label-box"},[t._v("工作技能")]),t._v(" "),i("p",{staticClass:"value-box"},[t._v("熟悉工作上下游领域知识。"),i("br"),t._v("熟悉视觉设计，交互设计领域知识，了解UED&UXD领域知识，了解产品&运营思维。"),i("br"),t._v("熟悉后端对接流程与了解部分后端语言。"),i("br"),t._v("精通ps，熟悉skech")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",{staticClass:"bold-label-box"},[t._v("福迈斯科技有限公司  新OA人员系统")]),t._v(" "),i("ol",{staticClass:"object-col-list2"},[i("li",[i("p",{staticClass:"value-box"},[t._v("(1)系统使用技术栈为webpack + Vue + iView + Sass + Nodejs。")]),t._v(" "),i("div",{staticClass:"col-img img1"}),t._v(" "),i("p",{staticClass:"label-box"},[t._v("各技术栈职责")])]),t._v(" "),i("li",[i("p",{staticClass:"value-box"},[t._v("(2)系统初步内置三个子系统：①权限系统 ②机构系统 ③财务系统")]),t._v(" "),i("div",{staticClass:"col-img img2"}),t._v(" "),i("p",{staticClass:"label-box"},[t._v("三个系统之间的串联关系")])]),t._v(" "),i("li",[i("p",{staticClass:"value-box"},[t._v("(3)系统采用前后端分离，Java做后端服务，Nodejs做中端网关，前后端通信采取Ajax异步请求。Node.js做中间层做请求拦截并且做数据格式处理与请求轮询及高并分发。")]),t._v(" "),i("div",{staticClass:"col-img img3"}),t._v(" "),i("p",{staticClass:"label-box"},[t._v("前中后端关系")])]),t._v(" "),i("li",[i("p",{staticClass:"value-box"},[t._v("(4)个人负责的模块是机构系统中的销售人员管理与销售层级管理，即为销售人员的增删查改与销售层级树结构的增删查改。")]),t._v(" "),i("div",{staticClass:"col-img img4"}),t._v(" "),i("p",{staticClass:"label-box"},[t._v("个人负责模块")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"value-box"},[this._v("(1)JRQui依赖于JQ | Zepto。"),e("br"),this._v("(2)JRQui内置多个移动端适用的ui组件，例如常用的picker类，easy swiper类，toast类等。"),e("br"),this._v("(3)JRQui是个人自主设计ui效果，且自主自发整理归类。目前用于多个APP内置的h5页面场景。")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("p",{staticClass:"bold-label-box"},[t._v("福迈斯科技有限公司 工单系统PC端")]),t._v(" "),i("ol",{staticClass:"object-col-list2"},[i("li",[i("p",{staticClass:"value-box"},[t._v("(1) 工单系统是JSP + JAVA 等后端集成系统。流程化过程需要构造大量简单表单。"),i("br"),t._v("(2) 个人负责模块为表单设计模块，主要使用JQ及插件：JQui + flatpickr + JQ.htmlClean。"),i("br"),t._v("(3) 其中用到大量拖拽事件，自行封装了两个组件 drag.js + drag-attrSetting.js。"),i("br"),t._v("(4) 项目历时两个月，无产品无设计，自主和提供服务JAVA人员梳理需求，并且自主设计及到最后的实现输出。"),i("br"),t._v("(5) 项目目的在于可快速构建简单表单，提升流程化工单的生产效率。目前一版提供常用流式基本布局，控件: 单行文本框(input)、多行文本框(textarea)、下拉选择框(select)、复选框组(checkbox)、单选框组(radio)、日期控件(flatpickr)等多个基本表单插件。最终输出得到需求人及后端人员一致好评。")]),t._v(" "),i("div",{staticClass:"col-img-list drag-img"},[i("a",{attrs:{href:"//llpp8.cn/object/dragui/html",target:"_blank"}})])])])])}]};var h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work inner"},[i("div",{staticClass:"inner-content"},[i("ul",{staticClass:"work-list"},t._l(t.work,function(e,a){return i("li",[i("p",{staticClass:"img-container"},[i("img",{attrs:{src:e.imgurl}}),t._v(" "),i("span",{staticClass:"href-container"},[e.pcHref?i("a",{attrs:{href:e.pcHref,target:"_blank"}},[t._v("PC")]):t._e(),t._v(" "),e.h5Href?i("a",{attrs:{href:e.h5Href,target:"_blank"}},[t._v("H5")]):t._e()])]),t._v(" "),i("p",{staticClass:"work-info"},[i("em",[t._v(t._s(e.title))]),t._v(" "),t._l(e.sign,function(e,a){return i("span",[t._v(t._s(e))])})],2)])})),t._v(" "),i("a",{staticClass:"more-btn",on:{click:t.loadMore}},[t._v(t._s(t.moreTxt))])])])},staticRenderFns:[]};var u={name:"Content",components:{Loading:i("C7Lr")(r,c,!1,function(t){i("MYNM")},null,null).exports,Resume:i("C7Lr")({name:"Resume",data:function(){return{info:[],subject:[],appPage:[],JRQui:[],jobList:[],appClsName:""}},mounted:function(){this.init()},methods:{init:function(){this.dataInit()},dataInit:function(){this.info=[{label:"姓名",value:"龙先杰"},{label:"邮箱",value:"78939349@qq.com"},{label:"电话",value:"18977018662"},{label:"年龄",value:"25"},{label:"经验",value:"3年前端 + 1年设计"},{label:"专业",value:"计算机应用技术"},{label:"院校",value:"桂林理工大学高职院校"},{label:"学历",value:"大专"}],this.subject=[{title:"港股邀请开户专题页",href:"//llpp8.cn/subject/act/inviteAccount/pc"},{title:"理财加息过冬活动",href:"//llpp8.cn/subject/act/jiaxi-winter2016/pc"},{title:"金融圈理财卡",href:"//llpp8.cn/subject/act/wealthCard/pc"},{title:"金融圈微信公众号二周年",href:"//llpp8.cn/subject/act/wechatData"},{title:"金融圈2016年终总结",href:"//llpp8.cn/subject/act/year-end summary/dist"},{title:"理财生日贺礼",href:"//llpp8.cn/subject/act/birthday2017/h5"},{title:"轻松玩转港美股",href:"//llpp8.cn/subject/act/easyFun4/pc"},{title:"金融圈2017年迎新纳福",href:"//llpp8.cn/subject/act/benison/h5"},{title:"福莱积分抽奖",href:"//llpp8.cn/subject/act/lottery"},{title:"全民炒股大赛第二期",href:"//llpp8.cn/subject/act/stockCompetition/pc"},{title:"金融圈两周年",href:"//llpp8.cn/subject/act/JRQtwoyears/pc"},{title:"理财2017年度运营报告",href:"//llpp8.cn/subject/act/report2017/pc"},{title:"金融圈三周年",href:"//llpp8.cn/subject/act/ThreeYearsThanks/pc/html"},{title:"理财欢乐砸金蛋",href:"//llpp8.cn/subject/act/worldCup/baiyiEggs/html"},{title:"永道e贷世界杯竞猜4强",href:"//llpp8.cn/subject/act/worldCup/html"},{title:"查看更多",href:""}],this.appPage=[{title:"福莱APP启动图",href:"//llpp8.cn/subject/act/fulaiApp"},{title:"金融圈APP启动图",href:"//llpp8.cn/subject/act/formaxApp/html"},{title:"福莱APP宣传图",href:"//llpp8.cn/subject/act/fulaiIntroduce"}],this.JRQui=[{name:"Toast",href:"toast.html",class:"col-one-line"},{name:"Action",href:"action.html",class:"col-one-line"},{name:"Dialog",href:"dialog.html",class:"col-one-line"},{name:"Scroll Dialog",href:"dialogScroll.html",class:""},{name:"Easy Swiper",href:"easySwiper.html",class:""},{name:"City Picker",href:"city-picker.html",class:""},{name:"DateTime Picker",href:"datetime-picker.html",class:""},{name:"Search Picker",href:"searchPicker.html",class:""},{name:"Tab",href:"tab.html",class:"col-one-line"},{name:"Range",href:"range.html",class:"col-one-line"}],this.JRQui.map(function(t){t.href="//llpp8.cn/subject/act/iframe?href=JRQui/html/"+t.href}),this.jobList=[{company:"福迈斯科技有限公司",time:"(2016.5 - 至今)",job:"web前端 | web重构",content:[{txt:"参与多个业务线的专题运营页制作，专题页制作数量达50多个。"},{txt:"负责金融圈旗下多个APP多个版本动态启动图制作。"},{txt:"参与金融圈旗下多个APP产品部分内嵌H5页面制作。"},{txt:"参与金融圈旗下多个APP产品部分内嵌H5页面制作。"},{txt:"负责金融圈多个内部系统web前端的制作。"},{txt:"参与金融圈内部集成单点登录OA大型集合系统的开发。"},{txt:"负责金融圈移动端web ui组件编写。"},{txt:"负责福莱子品牌永道e贷（福莱）响应式官网开发编写。"}],performance:[{txt:"多次考核评级取得A级评分。"},{txt:"参加过两次晋升答辩，从刚进公司的T2.1晋升为T2.2。"}]},{company:"优高胜网络科技有限公司",time:"(2015.12-2016.4)",job:"web前端",content:[{txt:"在职期间主要参与乐葩云购，挑山扁担，药多多等多个外包项目web页面重构搭建。"},{txt:"负责活动H5页面的运营制作。"}]},{company:"水果营行",time:"(2015.12-2016.4)",job:"web前端",content:[{txt:"在职期间主要参与水果营行各种大研发项目，包括水果营行官网，供应链官网，电商网站，微商城"},{txt:"负责活动H5页面的前端实现。"}]}]},hover:function(t){this.appClsName="app"+t},hoverOut:function(){this.appClsName=""}}},o,!1,function(t){i("NviW")},null,null).exports,Work:i("C7Lr")({name:"Work",data:function(){return{totalWork:[],work:[],onceLoads:8,moreTxt:"查看更多"}},mounted:function(){this.init()},methods:{init:function(){this.dataInit()},dataInit:function(){this.totalWork=[{pcHref:"inviteAccount/pc",h5Href:"inviteAccount/h5",imgurl:"work1.png",title:"港股邀请开户专题页",sign:["专题","PC移动双端"]},{pcHref:"stockCompetition/pc",h5Href:"stockCompetition/h5",imgurl:"work2.png",title:"全民炒股大赛第二期",sign:["专题","PC端移动双端"]},{pcHref:"wealthCard/pc",h5Href:"wealthCard/h5",imgurl:"work3.png",title:"金融圈理财卡",sign:["专题","PC端移动双端"]},{pcHref:"jiaxi-winter2016/pc",h5Href:"jiaxi-winter2016/h5",imgurl:"work4.png",title:"理财加息过冬活动",sign:["专题","PC端移动双端"]},{pcHref:"easyFun4/pc",h5Href:"easyFun4/h5",imgurl:"work5.png",title:"轻松玩转港美股",sign:["专题","PC移动双端"]},{pcHref:"JRQtwoyears/pc",h5Href:"JRQtwoyears/h5",imgurl:"work6.png",title:"金融圈两周年",sign:["专题","PC端移动双端"]},{pcHref:"report2017/pc",h5Href:"report2017/h5",imgurl:"work7.png",title:"理财2017年度运营报告",sign:["专题","PC端移动双端"]},{pcHref:"ThreeYearsThanks/pc/html",h5Href:"ThreeYearsThanks/h5/html",imgurl:"work8.png",title:"金融圈三周年",sign:["专题","PC端移动双端"]},{pcHref:"hunqingbao/pc",h5Href:"hunqingbao/h5",imgurl:"work9.png",title:"理财婚庆宝",sign:["专题","PC移动双端"]},{pcHref:"yearend2016/pc/dist",h5Href:"yearend2016/h5",imgurl:"work10.png",title:"理财2016年终盛宴",sign:["专题","PC端移动双端"]},{h5Href:"birthday2017/h5",imgurl:"work11.png",title:"理财生日贺礼",sign:["专题","移动端"]},{h5Href:"year-end summary/dist",imgurl:"work12.png",title:"金融圈2016年终总结",sign:["专题","移动端"]},{h5Href:"benison/h5",imgurl:"work13.png",title:"金融圈2017年迎新纳福",sign:["专题","移动端"]},{h5Href:"lottery",imgurl:"work14.png",title:"福莱积分抽奖",sign:["专题","移动端"]},{h5Href:"wechatData",imgurl:"work15.png",title:"金融圈微信公众号二周年",sign:["专题","移动端"]},{h5Href:"worldCup/html",imgurl:"work16.png",title:"永道e贷世界杯竞猜4强",sign:["专题","移动端"]},{h5Href:"worldCup/baiyiEggs/html",imgurl:"work17.png",title:"理财欢乐砸金蛋",sign:["专题","移动端"]},{h5Href:"JRQui/html",imgurl:"work18.png",title:"JRQui移动端",sign:["ui插件","移动端"]},{h5Href:"formaxApp/html",imgurl:"work18.png",title:"Formax App启动图",sign:["App启动图","移动端"]},{h5Href:"fulaiApp",imgurl:"work19.png",title:"福莱App启动图",sign:["App启动图","移动端"]},{h5Href:"formaxCreditApp/html",imgurl:"work20.png",title:"福麦信用启动图",sign:["App启动图","移动端"]},{h5Href:"fulaiIntroduce",imgurl:"work19.png",title:"福莱App介绍页",sign:["App启动图","移动端"]},{pcHref:"//www.formaxCredit.com",self:!0,imgurl:"work21.png",title:"永道e贷款官网",sign:["响应式"]},{pcHref:"//llpp8.cn/object/dragui/html",self:!0,imgurl:"work22.png",title:"工单系统表单设计模块",sign:["系统模块","PC端"]}],this.totalWork.map(function(t){t.h5Href=t.h5Href?"//llpp8.cn/subject/act/iframe?href="+t.h5Href:null,t.pcHref=t.pcHref?t.self?t.pcHref:"//llpp8.cn/subject/act/"+t.pcHref:null,t.imgurl="//llpp8.cn/static/img/"+t.imgurl});for(var t=0;t<this.onceLoads;t++)this.work.push(this.totalWork[t])},loadMore:function(){var t=this.work.length,e=this.work.length+this.onceLoads;if(t!==this.totalWork.length)for(var i=t;i<e;i++){if(i>=this.totalWork.length){this.moreTxt="没有更多了";break}this.work.push(this.totalWork[i])}else this.moreTxt="没有更多了"}}},h,!1,function(t){i("/q8h")},null,null).exports},data:function(){return{view:!1,viewIdx:0,actived:!1,resumeShow:!1,workShow:!1}},mounted:function(){this.init()},methods:{init:function(){this.actived=!0},goView:function(t){var e=this;this.view=!0,this.viewIdx=t,setTimeout(function(){switch(t){case 1:e.resumeShow=!0,e.workShow=!1;break;case 2:e.resumeShow=!1,e.workShow=!0}},100)}},computed:{isResume:function(){return 1===this.viewIdx},isWork:function(){return 2===this.viewIdx}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content",class:{view:t.view},attrs:{id:"content"}},[i("Loading",{attrs:{load:t.actived}}),t._v(" "),i("div",{staticClass:"link"},[i("div",{staticClass:"head"}),t._v(" "),i("ul",{staticClass:"link-list"},[i("li",{class:{actived:t.isResume}},[i("a",{on:{click:function(e){t.goView(1)}}},[t._v("简历")])]),t._v(" "),i("li",{class:{actived:t.isWork}},[i("a",{on:{click:function(e){t.goView(2)}}},[t._v("作品")])])])]),t._v(" "),1===t.viewIdx?i("Resume",{class:{show:t.resumeShow}}):t._e(),t._v(" "),2===t.viewIdx?i("Work",{class:{show:t.workShow}}):t._e()],1)},staticRenderFns:[]};var v={name:"App",components:{Canvas:l,Content:i("C7Lr")(u,p,!1,function(t){i("lKDF")},null,null).exports},data:function(){return{actived:!1,resume:!0,ua:navigator.userAgent,isMobile:null,loadData:{Endload:!1}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.isMobile=this.ua.match(/iphone|ipod|ipad|linux|android/gi),setTimeout(function(){t.actived=!0},1e3)}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap",class:{actived:this.actived},attrs:{id:"app"}},[e("Canvas"),this._v(" "),e("Content")],1)},staticRenderFns:[]};var f=i("C7Lr")(v,m,!1,function(t){i("xYfk")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:f},template:"<App/>"})},NviW:function(t,e){},lKDF:function(t,e){},xYfk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ace6762d362a415c5493.js.map