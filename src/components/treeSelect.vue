<template>
  <div class="select">
    <el-select
      v-model="treeValue"
      placeholder="请选择..."
      :style="{width: width + 'px'}"
      :multiple="multiple"
      :size="size"
      :filterable="filterable"
      :remote="filterable"
      :collapse-tags="collapseTags"
      :remote-method="remoteMethod"
    >
      <el-option
        :value="treeValue"
        style="height: auto"
        v-loading="loading"
        element-loading-custom-class="mytree-loading"
      >
        <el-tree
          ref="tree"
          :data="options"
          default-expand-all
          node-key="id"
          :draggable="draggable"
          :show-checkbox="multiple"
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
          :lazy="lazy"
          :load="loadNode"
          @check="handleCheck"
          @node-click="handleNodeClick"
        >
          <span
            class="custom-tree-node"
            slot-scope="{ node, data }"
          >
            <span @click="getNodeData(data)">{{ node.label }}</span>
            <!-- <el-input
              v-model="node.data.label"
              placeholder=""
              size="mini"
              clearable
              @change="getNodeData(node,data)"
            ></el-input> -->
          </span>
        </el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "treeSelect",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: [Array, String],
      required: true,
      default: "",
    },
    // 宽
    width: {
      type: Number,
      default: 300,
    },
    // select 尺寸 medium/small/mini
    size: {
      type: String,
      default: "small",
    },
    // 是否可搜索
    filterable: {
      type: Boolean,
      default: false,
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
      required: true,
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 多选  将tag合并为一段文字
    collapseTags: {
      type: Boolean,
      default: false,
      required: false
    },
    // loading
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    // 懒加载
    lazy: {
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
    // 拖拽
    allowDrop(draggingNode, dropNode, type) {
      if (!this.allowDrop) return void 666;
      return true;
    },
    // 拖拽
    allowDrag(draggingNode) {
      if (!this.allowDrop) return void 666;
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
      this.$emit("change", value);
      // console.log(this.value, );
      // this.treeValue = keys.checkedKeys;
      // this.value = data.label;
    },
    /**
     * 数组相减
     * @param treeValue oldVal
     * @param treeValue newVal
     * @return remove的tag的index
     */
    arrSubtraction(a, b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        const c = a.filter((i) => !b.includes(i));
        return a.indexOf(c[0]);
      }
    },
    // 节点 单选
    handleNodeClick(node) {
      if (!!this.multiple) return;
      if (!node.hasOwnProperty("children")) {
        this.treeValue = node.label;
        this.$emit("change", node.id);
      }
    },
    // select 搜索筛选
    remoteMethod(query) {
      this.$emit("remoteMethod", query);
    },
    // tree node点击
    getNodeData(node, data) {
      console.log(node, data);
      console.log(this.options);
    },
    loadNode(node, resolve) {
      if(!this.lazy) return;
      console.log(node, resolve);
      if (node.level === 0) {
          return resolve([{ label: 'McDonalds' }]);
        }
        if (node.level > 1) return resolve([]);

        // setTimeout(() => {
        //   const data = [{
        //     name: 'leaf',
        //     leaf: true
        //   }, {
        //     name: 'zone'
        //   }];

        //   resolve(data);
        // }, 500);
    }
  },
  watch: {
    // 监听tag移除
    treeValue: function (newVal, oldVal) {
      if (!this.multiple) return;
      if (oldVal.length > newVal.length) {
        const i = this.arrSubtraction(oldVal, newVal);
        this.$refs.tree.setChecked(this.value[i], false);
        this.$emit("remove-tag", i);
      }
    },
  },
};
</script>

<style lang="less">
.mytree-loading{
  top: -53%;
}
</style>