<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="10">
        <el-input
          v-model="num"
          placeholder="请输入大于0的整数"
        ></el-input>
      </el-col>
      <el-col :span="6">
        <el-button
          type="primary"
          @click="pass"
        >击鼓传花</el-button>
      </el-col>
      <el-col :span="8">
        <el-input
          v-model="name"
          placeholder="获胜的选手"
          disabled
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Queue, PriorityQueue, QueueElement } from "@/config";
export default {
  name: "queue",
  data() {
    return {
      nameList: [], //人员列表
      num: "", // 选择的数字
      name: "" //获胜的选手
    };
  },
  created() {
    // this.getQueue1();
    // this.getQueue2();
    this.nameList = ["张三", "李四", "王五", "赵六", "钱七", "胡八", "毛九"];
    // 优先级队列
    let pq = new PriorityQueue();
    pq.enqueue(20, 1)
    pq.enqueue(50, 3)
    pq.enqueue(30, 2)
    console.log(pq.toString());
  },
  methods: {
    passGame(nameList, num) {
      let queue = new Queue();
      nameList.forEach(el => {
        queue.enqueue(el);
      });
      while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
          queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
      }
      return queue.front();
    },
    pass() {
      this.name = this.passGame(this.nameList, this.num);
    },
    getQueue1() {
      let q = new Queue();
      q.enqueue(1);
      q.enqueue(12);
      q.enqueue("abc");
      q.enqueue(4);
      console.log(q);
      q.dequeue();
      console.log(q);
      q.dequeue();
      console.log(q);
      console.log(q.front());
      let queue = Queue;
      queue.enqueue(10);
      console.log(queue);
    },
    getQueue2() {
      let q2 = new Queue();
      q2.enqueue(3);
      console.log(q2);
    }
  }
};
</script>

<style scoped>
</style>