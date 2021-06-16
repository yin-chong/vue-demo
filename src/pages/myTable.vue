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
          <div class="horizontal"></div>
          <el-dropdown-item v-for="(item, index) in myHeader" :key="item.prop">
            <el-checkbox
              @change="handleCheckedBoxChange(index)"
              v-model="item.show"
              >{{ item.label }}</el-checkbox
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <i-table
      :rowHeader="myHeader"
      :tableData="myTableData"
      :editWidth="400"
      rowKey="name"
      @multipleSelect="getMultipleSelection"
      @cellClick="getRowInfo"
      v-loading="false"
    >
      <template v-slot:date="scope">
        <div @click="getRowInfo(scope)">
          <i class="el-icon-edit"></i>{{ scope.row.date }}
        </div>
      </template>
      <template v-slot:sex2="scope">
        <div @click="getRowInfo(scope)">
          <i class="el-icon-edit"></i>{{ scope.row.sex2 }}
        </div>
      </template>
      <template v-slot:edit="edit">
        <el-button type="primary" size="mini">{{ edit.row.name }}</el-button>
      </template>
    </i-table>
  </div>
</template>

<script>
export default {
  name: "myTable",
  data() {
    return {
      myHeader: [],
      myTableData: [],
      rowKey: "name",
    };
  },
  created() {
    this.myHeader = [
      { label: "姓名", prop: "name", show: true, other: false },
      { label: "年龄", prop: "age", show: true, other: false },
      { label: "日期", prop: "date", show: true, other: true },
      { label: "性别", prop: "sex", show: true, other: false },
      { label: "性别", prop: "sex1", show: true, other: false },
      { label: "xx", prop: "sex2", show: true, other: true },
      { label: "性别", prop: "sex3", show: true, other: false },
      { label: "性别", prop: "sex4", show: true, other: false },
    ];
    this.myTableData = [
      {
        name: "张三66",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三77",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三1",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
        children: [
          {
            name: "张三2",
            age: 18,
            date: "2021-11-11",
            sex: "男",
            sex1: "撒旦撒大撒大撒多少",
            sex2: "撒旦撒旦撒旦撒旦",
            sex3: "撒旦撒旦撒旦撒旦文档",
            sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
          },
          {
            name: "张三3",
            age: 18,
            date: "2021-11-11",
            sex: "男",
            sex1: "撒旦撒大撒大撒多少",
            sex2: "撒旦撒旦撒旦撒旦",
            sex3: "撒旦撒旦撒旦撒旦文档",
            sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
          },
        ],
      },
      {
        name: "张三4",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三5",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
    ];
  },
  methods: {
    // 表格多选框点击
    getMultipleSelection(val) {
      console.log(val);
    },
    checkedAllHearder() {
      this.myHeader.forEach((el) => {
        el.show = true;
      });
    },
    handleCheckedBoxChange(index) {
      let a = 0;
      this.myHeader.forEach((el) => (a += el.show ? 1 : 0));
      if (a <= 0) {
        this.myHeader[index]["show"] = !this.myHeader[index]["show"];
        return this.$message.info("请至少选择一项!");
      } else {
        this.myHeader[index]["show"] = this.myHeader[index]["show"];
      }
    },
    // 单元格点击
    getRowInfo(row) {
      console.log(row);
    },
  },
};
</script>

<style scoped>
.table-edit {
  display: flex;
  flex-direction: row-reverse;
  padding: 15px;
  width: 100%;
}
.horizontal {
  margin: 5px 0;
  width: 100%;
  height: 1px;
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