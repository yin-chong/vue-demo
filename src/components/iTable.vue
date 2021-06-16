<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      border
      :row-key="rowKey"
      style="width: 100%"
      tooltip-effect="dark"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        type="selection"
        width="50"
        v-if="showSelection"
        fixed
      ></el-table-column>
      <el-table-column
        v-for="col in rowHeader"
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
        :min-width="100"
        v-if="col.show"
      >
        <template slot-scope="scope">
          <div v-if="!col.other">
            {{ scope.row[col.prop] }}
          </div>
          <slot v-else :name="col.prop" :row="scope.row">
            {{ scope.row[col.prop] }}
          </slot>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        v-if="showEdit"
        :width="editWidth"
      >
        <template slot-scope="scope">
          <slot name="edit" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "iTable",
  props: {
    // 主键 非必填 区分父子级时传入
    rowKey: {
      type: String,
    },
    // 表头
    rowHeader: {
      type: Array,
      required: true,
    },
    // 表格数据
    tableData: {
      type: Array,
      required: true,
    },
    // 表格多选
    showSelection: {
      type: Boolean,
      default: true,
    },
    // 表格 操作
    showEdit: {
      type: Boolean,
      default: true,
    },
    editWidth: {
      type: Number,
      default: "120",
    },
  },
  data() {
    return {
      // tableHeader: [], // 表格头, rowHeader基础上修改
    };
  },
  created() {
    // this.getTableHeader();
  },
  methods: {
    // 表格多选点击
    handleSelectionChange(val) {
      // console.log(val);
      this.$emit("multipleSelect", val);
    },
    // 单元格点击
    clickCell(row) {
      this.$emit("cellClick", row);
    },
  },
};
</script>

<style scoped>
</style>