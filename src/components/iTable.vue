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
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        v-if="showEdit"
        :width="editWidth"
      >
        <template slot-scope="scope">
          <slot :row="scope.row"></slot>
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
      default: 120,
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
    // getTableHeader() {
    //   this.rowHeader.forEach((el) => {
    //     this.tableHeader.push(Object.assign({ show: true }, el));
    //   });
    // },
    // // 重置全选
    // checkedAllHearder() {
    //   this.tableHeader.forEach((el) => {
    //     el["show"] = true;
    //   });
    // },
    // checkbox val改变
    // handleCheckedBoxChange(index) {
    //   let a = 0;
    //   this.tableHeader.forEach((el) => (a += el.show ? 1 : 0));
    //   if (a <= 0) {
    //     this.tableHeader[index]["show"] = !this.tableHeader[index]["show"];
    //     return this.$message.info("请至少选择一项!");
    //   } else {
    //     this.tableHeader[index]["show"] = this.tableHeader[index]["show"];
    //   }
    // },
    // 表格多选点击
    handleSelectionChange(val) {
      // console.log(val);
      this.$emit("multipleSelect", val);
    },
  },
};
</script>

<style lang="less" scoped>
</style>