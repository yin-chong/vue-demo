<template>
  <el-select
    v-model="treeValue"
    placeholder="请选择..."
    :style="{width: width + 'px'}"
    :multiple="multiple"
    :size="size"
    :filterable="filterable"
    @remove-tag="removeTag"
  >
    <el-option
      :value="treeValue"
      style="height: auto"
    >
      <el-tree
        ref="tree"
        :data="options"
        default-expand-all
        node-key="id"
        :draggable = "draggable"
        :show-checkbox="multiple"
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        @check="handleCheck"
        @node-click="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "treeSelect",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Array, String],
      required: true,
      default: '',
    },
    // 宽
    width: {
      type: Number,
      default: 300
    },
    // select 尺寸
    size: {
      type: String,
      default: 'small'
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default: false
    },
    // // 选中的label
    // treeValue: {
    //   type: [Array, String],
    //   default: '',
    //   required: true
    // },
    // 是否可拖拽
    draggable: {
      type: Boolean,
      default: false, 
    },
    // tree data
    options: {
      type: Array,
      default: [],
      required: true
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      treeValue: [],
    };
  },
  methods: {
    allowDrop(draggingNode, dropNode, type) {
      return true;
    },
    allowDrag(draggingNode) {
      return true;
    },
    // 多选 选中
    handleCheck(node, keys) {
      // console.log(node, keys);
      let [treeValue, value] = [[], []];
      keys.checkedNodes.forEach((el) => {
        // 父节点选中
        if (!el.hasOwnProperty("children")) {
          value.push(el.id);
          treeValue.push(el.label);
        }
      });
      [this.treeValue] = [treeValue];
      console.log(treeValue);
      this.$emit('change', value)
      // console.log(this.value, );
      // this.treeValue = keys.checkedKeys;
      // this.value = data.label;
    },
    // 多选模式下移除tag时触发
    removeTag(val) {
      console.log(this.$refs.tree.getCheckedKeys());
      const i = this.treeValue.findIndex(el => el === val);
      // console.log(val, i);
      // value.splice(i, 1);
      // console.log(value, this.value);
      this.$refs.tree.setChecked(this.value[i], false)
      this.$emit('removeTag', i)
    },
    // 节点 单选
    handleNodeClick(node) {
      if(!!this.multiple) return
      if(!node.hasOwnProperty('children')) {
        this.treeValue = node.label;
        this.$emit('change', node.id)
      }
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