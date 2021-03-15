<template>
  <div class="main">
    <div
      class="radio"
      :class="{'radio-selected': selected.includes(item)}"
      v-for="item in list"
      :key="item"
      @click="select(item)"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      list: ["重疾"],
      selected: [],
    };
  },
  methods: {
    select(item) {
      // 通过索引修改数组的值不会触发视图更新，应采用splice或者Vue.set(arr, index, value)
      this.selected.length === 0
        ? this.selected.push(item)
        : this.selected.splice(0, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
$unselected-bg: #eff0f2;
$unselected-font: #666;
$selected-bg: #eaf1fc;
$selected-font: #317efc;
.main {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio {
  width: 5.53rem;
  height: 2.03rem;
  background-color: $unselected-bg;
  border-radius: 0.16rem;
  font-size: 0.75rem;
  line-height: 2.03rem;
  color: $unselected-font;
  text-align: center;

  &-selected {
    position: relative;
    background-color: $selected-bg;
    color: $selected-font;
  }
  &-selected:after {
    content: "\2714";
    position: absolute;
    right: 1.03rem;
  }
}
</style>