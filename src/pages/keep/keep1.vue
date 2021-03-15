<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="value"
        label="文本"
        placeholder="请输入用户名"
      />
    </van-cell-group>
    <!-- <van-button type="primary" block to="keep">跳转</van-button> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "keep1",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions(["setKeepAlive"]),
  },
  beforeRouteLeave(to, from, next) {
    if (to.meta.index < from.meta.index) {
      this.setKeepAlive([to.name]);
    } else {
      this.setKeepAlive();
    }
    console.log(this.$store.getters.keepAlive);
    next();
  },
};
</script>

<style scoped>
</style>