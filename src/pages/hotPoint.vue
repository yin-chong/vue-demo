<template>
  <div class="main" :style="{ width: width, height: height }">
    <!-- 画布 -->
    <div class="center">
      <div
        class="centerBall"
        :style="{
          width: `${centerSize}px`,
          height: `${centerSize}px`,
          top: `${-centerSize / 2}px`,
          left: `${-centerSize / 2}px`,
        }"
      ></div>
      <div class="area1"></div>
      <div class="area2"></div>
      <div class="area3"></div>
      <span
        class="ball"
        v-for="item in ballList"
        :key="item.id"
        :style="{
          top: `${item.y - item.r / 2}px`,
          left: `${item.x - item.r / 2}px`,
          width: `${item.r}px`,
          height: `${item.r}px`,
          backgroundColor: item.color,
        }"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotPoint",
  data() {
    return {
      width: "90%",
      height: "500px",
      centerSize: 80,
      ballList: [],
    };
  },
  created() {
    this.ballList = [
      { id: 1, r: 15, x: 70, y: 90, color: "#FFCC99" },
      { id: 2, r: 25, x: -70, y: 60, color: "#FF6666" },
      { id: 3, r: 10, x: 350, y: 90, color: "#0099CC" },
      { id: 4, r: 40, x: 260, y: -160, color: "#059669" },
      { id: 5, r: 18, x: -120, y: 90, color: "#FFCC99" },
      { id: 6, r: 22, x: -110, y: -70, color: "#FFCC99" },
      { id: 7, r: 55, x: -510, y: 50, color: "#99CCFF" },
      { id: 8, r: 55, x: 260, y: 150, color: "#FF33CC" },
      { id: 9, r: 45, x: 160, y: -200, color: "#FFCC99" },
      { id: 10, r: 90, x: -310, y: 120, color: "#FFCC99" },
    ];
  },
};
</script>

<style scoped lang="scss">
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  background-color: #fff;
  border: 1px solid;
  overflow: hidden;

  .center {
    position: relative;
    // width: 50px;
    // height: 50px;

    .centerBall {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 30;
      background-color: #000;
      border-radius: 50%;
    }
    .area1 {
      position: absolute;
      top: -250px;
      left: -250px;
      width: 500px;
      height: 500px;
      z-index: 20;
      background-color: lightblue;
      //   opacity: 0.3;
      border-radius: 50%;
    }
    .area2 {
      position: absolute;
      top: -450px;
      left: -450px;
      width: 900px;
      height: 900px;
      z-index: 10;
      background-color: #ccccff;
      border-radius: 50%;
    }
    .area3 {
      position: absolute;
      top: -750px;
      left: -750px;
      width: 1500px;
      height: 1500px;
      z-index: 1;
      opacity: .2;
      background-color:#2563eb;
      border-radius: 50%;
    }
    .ball {
      position: absolute;
      border-radius: 50%;
      z-index: 30;
    }
  }
}
</style>