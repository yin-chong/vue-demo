<template>
  <div>
    <my-table
      :tableData='tData'
      :rowHeader='header'
      showSelection
      showEdit
      showDel
      showWatch
    ></my-table>
  </div>
</template>

<script>
export default {
  name: "iTable",
  data() {
    return {
      tData: [],
      header: []
    };
  },
  created() {
    [this.header, this.tData] = [
      [
        { label: "姓名", prop: "userName" },
        { label: "企业名称", prop: "corpName" },
        { label: "年龄", prop: "age" },
        { label: "机构", prop: "branch" },
        { label: '部门', prop: "dept" },
        { label: '毕业学校', prop: 'school'},
        { label: '学历', prop: 'education'},
        { label: '工作性质', prop: 'workType'},
        { label: '上任公司', prop: 'lastCorp'}
      ],
      [
        {
          userName: "张三",
          corpName: "中国移动股份有限公司江苏分公司",
          age: 23,
          branch: "苏州",
          dept: "信息技术部",
          school: '上海海事大学',
          education: '学术学位',
          workType: '全日制',
          lastCorp: '中国电信股份有限公司南京分公司'
        },
        {
          userName: "李四",
          corpName: "中国移动股份有限公司江苏分公司",
          age: 23,
          branch: "苏州",
          dept: "信息技术部",
          school: '上海海事大学',
          education: '学术学位',
          workType: '全日制',
          lastCorp: '中国电信股份有限公司南京分公司'
        },
        {
          userName: "王五",
          corpName: "中国移动股份有限公司江苏分公司",
          age: 23,
          branch: "苏州",
          dept: "信息技术部",
          school: '上海海事大学',
          education: '学术学位',
          workType: '全日制',
          lastCorp: '中国电信股份有限公司南京分公司'
        },
        {
          userName: "张四",
          corpName: "中国移动股份有限公司江苏分公司",
          age: 23,
          branch: "苏州",
          dept: "信息技术部",
          school: '上海海事大学',
          education: '学术学位',
          workType: '全日制',
          lastCorp: '中国电信股份有限公司南京分公司'
        }
      ]
    ];
  }
};
</script>

<style scoped>
</style>