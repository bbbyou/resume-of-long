<template>
  <div id="loading" class="loading">
    <div class="demo-wrap">
        <div class="demo">
            <div class="ring red"></div>
            <div class="ring green"></div>
            <div class="ring blue"></div>
            <div class="ring yellow"></div>
            <div class="ring load-txt" :class="{'active':actCls}"><span>{{ loadTxt }}</span></div>
            <!-- <div class="header"></div> -->
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loading',
  props:{
  	data:{
  		type:Object,
  	},
  	load:Boolean
  },
  data(){
  	return {
  		txt:[],
  		loadTxt:"",
  		actCls:false,
  		timer:"",
  	}
  },
  mounted(){
  	this.init();
  },
  methods:{
  	init(){
  		this.setTxt();
  		this.txtPoll();
  	},
  	setTxt(){
  		let str = "欢迎浏览我的个站,页面正在努力加载中,请您稍等片刻";
  		this.txt = str.split(",");
  	},
  	txtPoll(){
  		let i = 0 ;

  		this.actCls = true;
  		this.loadTxt = this.txt[i];

  		this.timer = setInterval(()=>{

  			if(this.load){
  				clearInterval(this.timer);
  				return;
  			}

  			i += 1;
  		
  			if(i >= this.txt.length ){
  				i = 0;
  			}

  			this.loadTxt = this.txt[i];
  			
  		},4000)

  	}
  },
  watch:{

  }
}
</script>

<style lang="scss">
	
</style>
