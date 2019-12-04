<template>
  <div>
    <div class="slidein">
      <div class="contain">CSS动画</div>
      <div class="contain trans">CSS动画+2D转换</div>
    </div>
    <div class="cube-box">
      <div class="cube1 cube"></div>
      <div class="cube2 cube"></div>
      <div class="cube3 cube"></div>
      <div class="cube4 cube"></div>
      <div class="cube5 cube"></div>
      <div class="cube6 cube"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Animation"
};
</script>

<style scoped>
.contain {
  border: 1px solid #000;
  padding: 5px;
  width: 100%;
  height: 50px;
}
.slidein {
  width: 10%;
  /* text-align: center; */
  /* 动画时长 */
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  /* 动画名 */
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  /* 动画播放次数 */
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  /* 动画正反向播放 */
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-moz-keyframes slidein {
  from {
    margin-left: 90%;
    /* width: 300%; */
  }

  to {
    margin-left: 0%;
    /* width: 100%; */
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left: 90%;
    /* width: 300%; */
  }

  to {
    margin-left: 0%;
    /* width: 100%; */
  }
}

@keyframes slidein {
  from {
    margin-left: 90%;
    /* width: 300%; */
  }

  to {
    margin-left: 0%;
    /* width: 100%; */
  }
}

.trans {
  /* -ms-  IE9;  -webkit-  chrome Safari; -moz Firefox*/
  /* X轴偏移30px Y轴偏移50px */
  /* transform: translate(30px, 50px);
  -ms-transform: translate(30px, 50px);
  -webkit-transform: translate(30px,50px);
  -moz-transform: translate(30px, 50px); */
  /* 顺时针旋转 */
  /* transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg); */
  /* 元素尺寸改变 宽变为2倍 高变为4倍*/
  /* transform: scale(2, 4);
  -ms-transform: scale(2, 4);
  -webkit-transform: scale(2, 4);
  -moz-transform: scale(2, 4); */
  /* 元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数 */
  /* transform: skew(30deg, 20deg);
  -ms-transform: skew(30deg, 20deg);
  -webkit-transform: skew(30deg, 20deg);
  -moz-transform: skew(30deg, 20deg); */

  transform: translate(30px, 50px) rotate(30deg) scale(1.5) skew(30deg, 20deg);
  -ms-transform: translate(30px, 50px) rotate(30deg) scale(1.5)
    skew(30deg, 20deg);
  -webkit-transform: translate(30px, 50px) rotate(30deg) scale(1.5)
    skew(30deg, 20deg);
  -moz-transform: translate(30px, 50px) rotate(30deg) scale(1.5)
    skew(30deg, 20deg);
}
/* .tran3D {
  transform: translate3d(10px, 15px, 20px) rotate3d(10deg, 20deg, 30deg)
    scale3d(1.5);
  -ms-transform: translate3d(10px, 15px, 20px) rotate3d(10deg, 20deg, 30deg)
    scale3d(1.5);
  -webkit-transform: translate3d(10px, 15px, 20px) rotate3d(10deg, 20deg, 30deg)
    scale3d(1.5);
  -moz-transform: translate3d(10px, 15px, 20px) rotate3d(10deg, 20deg, 30deg)
    scale3d(1.5);
} */
.cube-box {
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  position: relative;
  width: 30px;
  height: 100px;
  margin: 20px auto;
  transform: rotateX(-30deg) rotateY(45deg);
  -webkit-transform: rotateX(-30deg) rotateY(45deg);
}
.cube {
  left: 0;
  top: 0;
  position: absolute;
}
.cube1 {
  width: 100%;
  height: 100%;
  background-color: #eaa59a;
}
.cube2 {
  width: 100%;
  height: 100%;
  background-color: #eaa59a;
  transform: rotateY(-90deg) translate3d(15px, 0, 15px);
  -webkit-transform: rotateY(-90deg) translate3d(15px, 0, 15px);
  /* transform-origin: left top;
  -webkit-transform-origin: left top; */
}
.cube3 {
  width: 100%;
  height: 100%;
  background-color: #eaa59a;
  transform: rotateY(90deg) translate3d(-15px, 0, 15px);
  -webkit-transform: rotateY(90deg) translate3d(-15px, 0, 15px);
}
.cube4 {
  width: 100%;
  height: 100%;
  background-color: #eaa59a;
  transform: translate3d(0, 0, 30px);
  -webkit-transform: translate3d(0, 0, 30px);
}
.cube5 {
  width: 100%;
  padding-top: 100%;
  background-color: pink;
  transform: rotateX(90deg) translate3d(0, 15px, 15px);
  -webkit-transform: rotateX(90deg) translate3d(0, 15px, 15px);
}
.cube6 {
  width: 100%;
  padding-top: 100%;
  background-color: #eaa59a;
  top: inherit;
  bottom: 0;
  transform: rotateX(-90deg) translate3d(0, -15px, 15px);
  -webkit-transform: rotateX(-90deg) translate3d(0, -15px, 15px);
}
</style>