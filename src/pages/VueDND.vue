<template>
  <div class="color-list">
    <div class="color-item" v-for="item in colors" :style="{'background-color': item.text}" :key="item.text" v-dragging="{item: item, list: colors, group: 'color'}">
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "VueDND",
  data() {
    return {
      colors: [
        {text: '#999'},
        {text: '#2cbfbe'},
        {text: '#333'},
        {text: '#6495ed'},
        {text: 'Hotpink'},
        {text: 'Skyblue'}
      ]
    };
  },
  created() {
  },
  mounted() {
    this.$dragging.$on("dragged", val => {
      console.log(this.colors, val); //这里我们不需要做任何操作；组件内部会把我们绑定上去的list自动排序;只需要查看结果就可以
      //如果需要在这里进行其他操作，可以查看val的内容，包括：拖动的元素，拖动后与之兑换的元素，以及原始数据和拖动组名
    });
    this.$dragging.$on("dragend", val => {
      console.log(this.colors, val);
      //此处是拖动完成后鼠标松开时触发的事件
    });
  }
};
</script>

<style scoped>
.color-list{
   width: 100%;
   position: absolute;
   display: flex;
   align-items: center;
   flex-wrap: wrap; 
}
.color-item{
  width: 33.333%;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>