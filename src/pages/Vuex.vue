<template>
  <div class="main">
    <el-row>
      <el-col
        :span="17"
        :offset="1"
      >
        <el-input
          v-model="work"
          placeholder="请填写待办事项"
        ></el-input>
      </el-col>
      <el-col
        :span="5"
        :offset="1"
      >
        <el-button
          type="primary"
          @click="addItem"
        >添加</el-button>
      </el-col>
    </el-row>

    <div class="card">
      <div
        class="card-item"
        v-for="(item, index) in list"
        :key='item.id'
      >
        <div class="card-item_con">{{item.value}}</div>
        <div
          class="card-item_btn"
          @click="doneItem(index)"
        >{{item.done ? "" : "完成"}}</div>
        <div
          class="card-item_btn"
          @click="removeItem(index)"
        >删除</div>
      </div>

      <div class="work">
        <div>{{listUndone}}条未完成</div>
        <div>共{{listLength}}条事项</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Vuex",
  data() {
    return {
      work: "",
      workList: [],
    };
  },
  created() {},
  methods: {
    // 添加事项
    addItem() {
      const work = this.work.trim(); // 去除字符串左右两边空格
      if (!work) return;
      this.addWork(work);
      this.work = "";
    },
    // 完成事项
    doneItem(index) {
      this.doneWork(index);
    },
    // 删除事项
    removeItem(index) {
      this.removeWork(index);
    },
    ...mapActions(["addWork", "doneWork", "removeWork"]),
  },

  computed: {
    ...mapState(["list"]),
    ...mapGetters(["listLength", "listUndone"]),
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 98%;
  margin: 15px auto;
}
.card {
  width: 94%;
  margin: 15px auto;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 0.54rem;

  &-item {
    width: 100%;
    padding: 13px 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;

    &_con {
      flex: 3;
      font-size: 15px;
      color: #666;
      flex-wrap: wrap;
      text-align: left;
    }
    &_btn {
      flex: 1;
      font-size: 15px;
      color: #409eff;
      text-align: right;
    }
  }
}
.work {
  width: 100%;
  padding: 13px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}
</style>
