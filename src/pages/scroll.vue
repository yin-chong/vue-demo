<template>
  <div class="container">
    <div class="wrapper">
      <div
        class="section"
        style="width:100%"
        v-for="(item, index) in list"
        :key="index"
        :style="{'height':index==0?'1660px':'560px'}"
      >
        <div
          style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;"
          :style="{'background':item.backgroundcolor}"
        >{{item.name}}</div>
      </div>
    </div>
    <div
      id="nac"
      style="height:400px;"
    ></div>
    <nav style="position:fixed;right:30px;top:300px;">
      <a
        class="nav1"
        ref="nav1"
        v-for="(item, index) in navList"
        :key="index"
        @click="jump(index)"
        :class="index==tabIndex?'current':''"
      >{{item}}</a>
    </nav>
  </div>
</template>
<script>
import { throttle } from "@/util.js";
export default {
  name: "scroll",
  data() {
    return {
      scroll: "",
      list: [
        {
          name: "第一条",
          backgroundcolor: "#90B2A3",
        },
        {
          name: "第二条",
          backgroundcolor: "#A593B2",
        },
        {
          name: "第三条",
          backgroundcolor: "#A7B293",
        },
        {
          name: "第四条",
          backgroundcolor: "#0F2798",
        },
        {
          name: "第五条",
          backgroundcolor: "#0A464D",
        },
      ],
      navList: [1, 2, 3, 4, 5],
      tabIndex: 0,
    };
  },
  methods: {
    dataScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    jump(index) {
      this.tabIndex = index;
      const jump = document.getElementsByClassName("section");
      // 获取需要滚动的距离
      const total = jump[index].offsetTop;
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
    },
    loadSroll() {
      const sections = document.getElementsByClassName("section");
      const l = sections.length;
      for (let i = l - 1; i >= 0; i--) {
        if (this.scroll >= sections[i].offsetTop - 100) {
          this.tabIndex = i;
          break;
        }
      }
    },
  },
  watch: {
    scroll: function () {
      throttle(this.loadSroll, 500);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.dataScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.dataScroll, true);
  },
};
</script>
 
<style>
* {
  padding: 0;
  margin: 0;
}
.nav1 {
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #eee;
  margin: 10px 0;
}
.current {
  color: #fff;
  background: red;
}
</style>