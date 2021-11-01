<template>
  <div
    class="main"
    :style="{ width: width, height: height }"
  >
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
      <!-- <div class="area1"></div>
      <div class="area2"></div>
      <div class="area3"></div> -->
      <div class="area" v-for="(item, index) in areas" :key="item.size"   :style="{
          width: `${item.size}px`,
          height: `${item.size}px`,
          top: `${-item.size / 2}px`,
          left: `${-item.size / 2}px`,
          backgroundColor: item.color,
          zIndex: `${25 - index}`
        }"></div>
      <div
        class="node"
        v-for="item in ballList"
        :key="item.id"
        :style="{
          top: `${item.y - item.r / 2}px`,
          left: `${item.x - item.r / 2}px`,
        }"
        @click="clickNode(item)"
      >
        <div
          class="ball"
          :style="{ width: `${item.r}px`,
          height: `${item.r}px`,
          backgroundColor: item.color}"
        ></div>
        <div  :style="{ width: `${item.r}px`}" style="min-width: 40px">{{item.text}}</div>
      </div>
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
      areas: [],
    };
  },
  created() {
    this.areas = [
      { size: 500, color: 'lightblue' },
      { size: 900, color: '#ccccff' },
      { size: 1500, color: '#2563eb1a' },
    ]
    this.ballList = [
      { id: 1, r: 15, x: 70, y: 90, color: "#FFCC99", text: "节点1" },
      { id: 2, r: 25, x: -70, y: 60, color: "#FF6666", text: "节点2" },
      { id: 3, r: 10, x: 350, y: 90, color: "#0099CC", text: "节点3" },
      { id: 4, r: 40, x: 260, y: -160, color: "#059669", text: "节点4" },
      { id: 5, r: 18, x: -120, y: 90, color: "#FFCC99", text: "节点5" },
      { id: 6, r: 22, x: -110, y: -70, color: "#FFCC99", text: "节点6" },
      { id: 7, r: 55, x: -510, y: 50, color: "#99CCFF", text: "节点7" },
      { id: 8, r: 55, x: 260, y: 150, color: "#FF33CC", text: "节点8" },
      { id: 9, r: 45, x: 160, y: -200, color: "#FFCC99", text: "节点9" },
      { id: 10, r: 90, x: -310, y: 120, color: "#FFCC99", text: "节点10" },
    ];
  },
  methods: {
    // 节点点击
    clickNode(node) {}
  }
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
    .area {
      position: absolute;
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
      opacity: 0.2;
      background-color: #2563eb;
      border-radius: 50%;
    }
    .node {
      position: absolute;
      z-index: 30;
      cursor: pointer;
      text-align: center;
      font-size: 12px;
      color: #fff;
      .ball {
        margin: 0 auto;
        border-radius: 50%;
      }
    }
  }
}
</style>