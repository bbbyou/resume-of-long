<style lang="scss">

</style>

<template>
  <div id="canvas" class="canvas">
    <canvas id="bgCanvas"></canvas>
  </div>
</template>

<script>

export default {
  name: 'Canvas',
  data(){
    return {
      canvas:"",
      ctx:"",
      winWidth:window.innerWidth || document.getElement.clientWidth || document.body.clientWidth,
      winHeight:window.innerHeight || document.getElement.clientHeight || document.body.clientHeight,
      dots:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.canvasInit();
    },
    canvasInit(){
      let canvas = document.getElementById("bgCanvas");
      let ctx = "";

      this.canvas = canvas;
      
      if(canvas.getContext){
        ctx = canvas.getContext("2d");
        this.ctx = ctx;
      }

      window.onresize = this.resize();

      this.renderDots();
      this.animate();
    },
    renderDots(){
      let colors = ["132,94,228","228,94,189","247,146,38","245,66,25"];

      for(let i = 0; i <88; i++){
        let x = Math.random() * this.canvas.width;
        let y = Math.random() * this.canvas.height;
        let xa = Math.random()/4;
        let ya = Math.random()/4;
        let alpha = Math.random();
        let color = colors[Math.floor(Math.random()*colors.length)];

        this.dots.push({
          x,
          y,
          xa,
          ya,
          alpha,
          color,
          max:6000
        })
      }
    },
    animate(){
        let _this = this;

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.dots.forEach((dot) =>{
            // 粒子位移
            dot.x += dot.xa;
            dot.y += dot.ya;

            // 遇到边界将加速度反向
            dot.xa *= (dot.x > this.canvas.width || dot.x < 0)? -1:1;
            dot.ya *= (dot.y > this.canvas.height || dot.y < 0)? -1:1;

            // 绘制原点
            this.ctx.beginPath();
            // 添加一段圆弧
            this.ctx.arc(dot.x - 0.5,dot.y - 0.5, 2 , 0, Math.PI * 2, true);
            // 关闭路径
            this.ctx.closePath();
            // 设置填充颜色
            this.ctx.fillStyle = 'rgba('+ dot.color + ','+ dot.alpha + ')';
            // 填充当前路径
            this.ctx.fill();

        });

       let RAF = (function(){
       return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame||
              window.mozRequestAnimationFrame||
              window.oRequestAnimationFrame || 
              window.msRequestAnimationFrame || 
              function (callback) {
                  window.setTimeout(callback, 1000 / 60);
              }
          })();

       RAF(this.animate);
    },
    resize(){
      this.canvas.width = this.winWidth - 20;
      this.canvas.height = this.winHeight - 300;
    }
  },
}
</script>


