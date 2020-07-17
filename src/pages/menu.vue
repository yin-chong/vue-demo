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
            :icon-symbol-id='item.icon'
            :svg-size-config='{
                      width: "40px", height:"40px"
                  }'
          ></svg-icon>
        </div>
        <div class="grid-title">
          {{item.title}}
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
      menu: []
    };
  },
  created() {
    this.menu = [
      { icon: "#zzdt", url: "/Upload", title: "图片裁剪" },
      { icon: "#jczc", url: "/Editor", title: "富文本" },
      { icon: "#jkgl", url: "/Animation", title: "CSS动画" },
      { icon: "#OTO", url: "/Star", title: "星空" },
      { icon: "#yfbj", url: "/ironMan", title: "钢铁侠" },
      { icon: '#OTO', url: '/Shape', title: 'CSS形状'},
      { icon: '#zzdt', url: '/Vuex', title: 'Vuex'},
      { icon: '#jczc', url: '/VueDND', title: '拖拽'},
      { icon: '#zzdt', url: '/Map', title: '地图'},
      { icon: '#OTO', url: '/iTable', title: '表格'},
      { icon: '#zzdt', url: '/stack', title: '栈'},
      { icon: '#OTO', url: '/queue', title: '队列'},
      { icon: '#yfbj', url: '/Set', title: '集合'},
      { icon: '#jczc', url: '/myLinkedList', title: '链表'}
    ];
  },
  methods: {
    menuSkip(item) {
      this.$router.push(item);
    }
  }
};
</script>

<style scoped>
.grids {
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
.grid:hover{
  cursor: pointer;
}
.grid-icon {
  /* padding-left: 20px; */
  margin-bottom: 10px;
}
</style>