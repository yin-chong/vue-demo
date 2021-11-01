<template>
  <div class="mySelect">
    <tree-select
      v-model="value"
      multiple
      filterable
      draggable
      collapseTags
      size="small"
      :options="options"
      @remove-tag="removeTag"
      @remoteMethod="remoteMethod"
    ></tree-select>
  </div>
</template>

<script>
export default {
  name: "tree",
  data() {
    return {
      value: [],
      options: [
        {
          id: "m",
          label: "McDonalds",
          children: [
            {
              id: "m-fries",
              label: "French Fries",
            },
            {
              id: "m-cheeseburger",
              label: "Cheeseburger",
            },
            {
              id: "m-white-cheedar-burger",
              label: "White Cheddar Burger",
            },
            {
              id: "m-southwest-buttermilk-crispy-chicken-salad",
              label: "Southwest Buttermilk Crispy Chicken Salad",
            },
            {
              id: "m-cola",
              label: "Coca-Cola®",
            },
            {
              id: "m-chocolate-shake",
              label: "Chocolate Shake",
            },
          ],
        },
        {
          id: "kfc",
          label: "KFC",
          children: [
            {
              id: "kfc-fries",
              label: "French Fries",
            },
            {
              id: "kfc-chicken-litties-sandwiches",
              label: "Chicken Litties Sandwiches",
            },
            {
              id: "kfc-grilled-chicken",
              label: "Grilled Chicken",
            },
            {
              id: "kfc-cola",
              label: "Pepsi® Cola",
            },
          ],
        },
        {
          id: "bk",
          label: "Burger King",
          children: [
            {
              id: "bk-chicken-fries",
              label: "Chicken Fries",
            },
            {
              id: "bk-chicken-nuggets",
              label: "Chicken Nuggets",
            },
            {
              id: "bk-garden-side-salad",
              label: "Garden Side Salad",
            },
            {
              id: "bk-cheeseburger",
              label: "Cheeseburger",
            },
            {
              id: "bk-bacon-king-jr-sandwich",
              label: "BACON KING™ Jr. Sandwich",
            },
            {
              id: "bk-cola",
              label: "Coca-Cola®",
            },
            {
              id: "bk-oreo-chocolate-shake",
              label: "OREO® Chocolate Shake",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // handleNodeClick(val) {
    //   // console.log(node, keys);
    //   return console.log(this.value, val);
    //   // 选中父节点
    //   let [treeDataValue, treeData] = [[], []];
    //   keys.checkedNodes.forEach((el) => {
    //     if (!el.hasOwnProperty("children")) {
    //       treeDataValue.push(el.id);
    //       treeData.push(el.label);
    //     }
    //   });
    //   [this.treeValue, this.value] = [treeDataValue, treeData];
    //   // this.treeDataValue = keys.checkedKeys;
    //   // this.treeData = data.label;
    // },
    // 多选模式下移除tag
    removeTag(i) {
      this.value.splice(i, 1);
    },
    /**
     * @param query
     * 搜索筛选
     */
    remoteMethod(query) {
      console.log(query);
    },
  },
  watch: {
    value: function (newVal) {
      console.log(newVal);
    },
  },
};
</script>

<style scoped>
.mySelect {
  width: 50%;
  margin: 30px auto;
}
</style>