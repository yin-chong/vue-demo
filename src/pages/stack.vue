<template>
  <div>
    <el-row :gutter="40">
      <el-col :span="6">
        <el-input
          v-model="decNumber"
          placeholder="请输入十进制整数"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-button
          type="primary"
          @click="decTobin"
        >十进制转二进制</el-button>
      </el-col>
      <el-col :span="6">
        <el-input
          v-model="binNumber"
          placeholder="转换后的二进制数字"
          disabled
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Stack} from "@/config"
export default {
  name: "stack",
  data() {
    return {
      decNumber: "",
      binNumber: 0
    };
  },
  mounted() {
    // let s = new Stack();
    // s.push(1)
    // s.push(1)
    // s.push(2)
    // s.push(3)
    // console.log(s);
    // console.log(s.size());
    // console.log(s.toString());
  },
  methods: {
    dec2bin(decNumber) {

      let stack = new Stack;
      while (decNumber > 0) {
        stack.push(decNumber % 2);
        decNumber = Math.floor(decNumber / 2);
      }
      let binaryString = "";
      while (!stack.isEmpty()) {
        binaryString += stack.pop();
      }
      return binaryString;
    },
    decTobin() {
      this.binNumber = this.dec2bin(this.decNumber);
    }
  }
};
</script>

<style scoped>
</style>