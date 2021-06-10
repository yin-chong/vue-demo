<template>
  <div>
    <i-table
      :rowHeader="myHeader"
      :tableData="myTableData"
      :editWidth="300"
      @multipleSelect="getMultipleSelection"
    >
      <template v-slot:default="slotProps">
        <el-button type="primary" size="mini">{{
          slotProps.row.name
        }}</el-button>
        <el-button type="primary" size="mini">{{
          slotProps.row.name
        }}</el-button>
        <el-button type="primary" size="mini">{{
          slotProps.row.name
        }}</el-button>
        <el-button type="primary" size="mini">{{
          slotProps.row.name
        }}</el-button>
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
    };
  },
  created() {
    this.myHeader = [
      { label: "姓名", prop: "name" },
      { label: "年龄", prop: "age" },
      { label: "日期", prop: "date" },
      { label: "性别", prop: "sex" },
      { label: "性别", prop: "sex1" },
      { label: "性别", prop: "sex2" },
      { label: "性别", prop: "sex3" },
      { label: "性别", prop: "sex4" },
    ];
    this.myTableData = [
      {
        name: "张三",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三",
        age: 18,
        date: "2021-11-11",
        sex: "男",
        sex1: "撒旦撒大撒大撒多少",
        sex2: "撒旦撒旦撒旦撒旦",
        sex3: "撒旦撒旦撒旦撒旦文档",
        sex4: "撒倒萨倒萨倒萨倒萨撒旦撒旦撒的",
      },
      {
        name: "张三",
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
    getMultipleSelection(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
</style>