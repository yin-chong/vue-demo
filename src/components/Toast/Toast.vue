<template>
  <div
    role="toast"
    :style="positionStyle"
    class="message"
    :class="`message-${type}`"
    v-show="visible"
  >
    <i class="message-icon"></i>
  </div>
</template>

<script>
const typeMap = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};
export default {
  name: "Toast",
  data() {
    return {
      visible: false, // 显示 隐藏
      type: "info", // 提示 类型 info success warning error
      message: "测试", //  消息
      showClose: false, // 是否显示关闭按钮
      duration: 2000, // 显示时间 毫秒
      verticalOffset: 20, // 提示框与顶部距离
    };
  },
  computed: {
      // 提示框与顶部距离
      positionStyle() {
          return {
              'top': `${this.verticalOffset }px`
          }
      }
  }
};
</script>

<style scoped lang='scss'>
.message {
  z-index: 2000;
  min-width: 380px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
}
.message-success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
</style>