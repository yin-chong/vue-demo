<template>
  <div>
    <div class="table-edit">
      <el-dropdown :hide-on-click="false">
        <el-button type="primary">
          编 辑<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" style="width: 140px">
          <div class="row">
            <div>列表展示</div>
            <el-button type="text" @click="checkedAllHearder">重置</el-button>
          </div>
          <el-divider></el-divider>
          <el-dropdown-item
            v-for="(item, index) in tableHeader"
            :key="item.prop"
          >
            <el-checkbox
              @change="handleCheckedBoxChange(index)"
              v-model="item.show"
              >{{ item.label }}</el-checkbox
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      tooltip-effect="dark"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="50"
        v-if="showSelection"
        fixed
      ></el-table-column>
      <el-table-column
        v-for="col in tableHeader"
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
        :min-width="100"
        v-if="col.show"
      >
      </el-table-column>
      <el-table-column label="操作" fixed="right" :width="editWidth">
        <template slot-scope="scope">
          <slot :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-dialog title="表格编辑" :visible.sync="dialogTableVisible">
      <el-table :data="tableHeader" @selection-change="selectionChange" border>
        <el-table-column type="selection" width="120"></el-table-column>
        <el-table-column
          property="label"
          label="表头"
          width="200"
        ></el-table-column>
        <el-table-column property="width" label="宽度">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.width"
              :min="40"
              :max="500"
              label="宽度"
              size="small"
            ></el-input-number>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog> -->
  </div>
</template>

<script>
export default {
  name: "iTable",
  props: {
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
    editShow: {
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
      // checkAll: true, // 是否全选 默认true
      // checkedList: [], // 选中的列表
      tableHeader: [], // 表格头, rowHeader基础上修改
      // multipleSelection: [], // 表格选中
      dialogTableVisible: false,
      // selection: [], // 弹出框选中
    };
  },
  created() {
    this.getTableHeader();
  },
  methods: {
    getTableHeader() {
      this.rowHeader.forEach((el) => {
        this.tableHeader.push(Object.assign({ show: true }, el));
      });
    },
    // // 重置全选
    checkedAllHearder() {
      this.tableHeader.forEach((el) => {
        el["show"] = true;
      });
    },
    // checkbox val改变
    handleCheckedBoxChange(index) {
      let a = 0;
      this.tableHeader.forEach((el) => (a += el.show ? 1 : 0));
      if (a <= 0) {
        this.tableHeader[index]["show"] = !this.tableHeader[index]["show"];
        return this.$message.info("请至少选择一项!");
      } else {
        this.tableHeader[index]["show"] = this.tableHeader[index]["show"];
      }
    },
    // 表格多选点击
    handleSelectionChange(val) {
      // console.log(val);
      this.$emit("multipleSelect", val);
    },
  },
};
</script>

<style lang="less" scoped>
.table-edit {
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
  width: 100%;

  /deep/ .el-divider--horizontal {
    margin: 5px 0;
  }
}

.row {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
}
</style>