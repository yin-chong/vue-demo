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
      { icon: "#zzdt", url: "/cropper", title: "图片裁剪" },
      { icon: "#jczc", url: "", title: "图片裁剪" },
      { icon: "#jkgl", url: "", title: "图片裁剪" },
      { icon: "#OTO", url: "", title: "图片裁剪" },
      { icon: "#yfbj", url: "", title: "图片裁剪" }
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
  grid-template-columns: repeat(3, 33.333%);
  /* border-top: 1px solid #333;
    border-bottom: 1px solid #333;  */
}
.grid {
  padding: 5px 0;
  margin-bottom: 10px;
  text-align: center;
}
.grid-icon {
  /* padding-left: 20px; */
  margin-bottom: 10px;
}
</style>