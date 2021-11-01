<template>
  <div>
    <div class="grids">
      <div
        class="grid"
        v-for="item in menu"
        :key="item.index"
        @click="menuSkip(item.url)"
      >
        <div class="grid-icon">
          <svg-icon
            :icon-symbol-id="item.icon"
            :svg-size-config="{
              width: '40px',
              height: '40px',
            }"
          ></svg-icon>
        </div>
        <div class="grid-title">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [],
    };
  },
  created() {
    this.menu = [
      { icon: "#zzdt", url: "/Upload", title: "图片裁剪" },
      { icon: "#jczc", url: "/Editor", title: "富文本" },
      { icon: "#jkgl", url: "/Animation", title: "CSS动画" },
      { icon: "#yfbj", url: "/ironMan", title: "钢铁侠" },
      { icon: "#zzdt", url: "/Vuex", title: "Vuex" },
      { icon: "#jczc", url: "/VueDND", title: "拖拽" },
      { icon: "#zzdt", url: "/stack", title: "栈" },
      { icon: "#OTO", url: "/queue", title: "队列" },
      { icon: "#yfbj", url: "/Set", title: "集合" },
      { icon: "#jczc", url: "/myLinkedList", title: "链表" },
      { icon: "#OTO", url: "/Sass", title: "Sass" },
      { icon: "#yfbj", url: "/Radio", title: "Radio" },
      { icon: "#zzdt", url: "/Loading", title: "Loading" },
      { icon: "#jczc", url: "/calendar", title: "日历" },
      { icon: "#zzdt", url: "/GoJs", title: "GoJs" },
      { icon: "#yfbj", url: "/myTable", title: "自动化表格" },
      { icon: "#zzdt", url: "/markDown", title: "MarkDown" },
      { icon: "#jczc", url: "/hotPoint", title: "热点图" },
      { icon: "#zzdt", url: "/tree", title: "树图" },
      { icon: "#jkgl", url: "/agGrid", title: "AG Grid" },
      { icon: "#yfbj", url: "/draggable", title: "vue-draggable" },
      { icon: "#OTO", url: "/keep", title: "keepAlive" },
      { icon: "#zzdt", url: "/scroll", title: "滚动" },
      { icon: "#jczc", url: "/editorWrap", title: "editorWrap" },
      { icon: "#jczc", url: "/three", title: "three.js" },
    ];
    // this.$message({
    //   type: 'success',
    //   message: '这是提示内容这是提示内容这是提示内容这是提示内容这是提示内容',
    //   duration: 0,
    //   showClose: true
    // })
    // this.$toast({
    //   type: 'success',
    //   message: '123'
    // })
  },
  methods: {
    menuSkip(item) {
      this.$router.push(item);
    },
  },
};
</script>

<style scoped>
.grids {
  margin-top: 15px;
  display: grid;
  width: 100%;
  font-size: 16px;
  grid-template-columns: repeat(4, 25%);
  /* border-top: 1px solid #333;
    border-bottom: 1px solid #333;  */
}
.grid {
  padding: 5px 0;
  margin-bottom: 10px;
  text-align: center;
}
.grid:hover {
  cursor: pointer;
}
.grid-icon {
  /* padding-left: 20px; */
  margin-bottom: 10px;
}
</style>