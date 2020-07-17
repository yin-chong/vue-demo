<template>
  <div class="mytable">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      tooltip-effect="dark"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="30"
        v-if="showSelection"
      ></el-table-column>
      <el-table-column
        v-for="(col, index) in rowHeader"
        :key="index"
        :prop="col.prop"
        :label="col.label"
      >
        <template slot-scope="scope">
          <span v-if="'map' in col">
            {{[col.map].get(scope.row[col.prop])}}
          </span>
          <span v-else>{{scope.row[col.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="250"
        label="操作"
        v-if="showEdit || showDel || showWatch"
      >
        <el-button
          size="mini"
          v-if="showEdit"
          type="success"
          @click="handleEdit(scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type = 'primary'
          v-if="showWatch"
          @click="handleWatch(scope.row)"
        >查看</el-button>
        <el-button
          size="mini"
          type="danger"
          v-if="showDel"
          @click="handleDelete(scope.row)"
        >删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "my-table",
  props: {
    //   渲染的表格数据
    tableData: {
      type: Array,
      required: true
    },
    //   是否显示多选框
    showSelection: {
      type: Boolean,
      default: false
    },
    //   表头
    rowHeader: {
      type: Array,
      required: true
    },
    //   编辑按钮
    showEdit: {
      type: Boolean,
      default: false
    },
    //   删除按钮
    showDel: {
      type: Boolean,
      default: false
    },
    //   查看 按钮
    showWatch: {
      type: Boolean,
      default: false
    }
  },
  data () {
      return {     
          multipleSelection: [] 
      }
  },
  methods: {
      handleSelectionChange(val){
          this.multipleSelection = val;
          console.log(val);
      }
  }
};
</script>

<style scoped>
</style>