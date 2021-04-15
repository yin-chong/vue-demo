import { mapActions } from 'vuex';
<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="value"
        label="文本"
        placeholder="请输入用户名"
      />
    </van-cell-group>
    <van-button
      type="primary"
      block
      to="keep1"
    >跳转</van-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "keep",
  data() {
    return {
      value: "",
    };
  },
  created () {
    console.log(2);
  },
  methods: {
    ...mapActions(["setKeepAlive"]),
  },
  beforeRouteLeave(to, from, next) {
    if (to.meta.index > from.meta.index) {
      this.setKeepAlive([from.name]);
    } else {
      this.setKeepAlive();
    }
    console.log(this.$store.getters.keepAlive);
    next();
  },
  // beforeRouteEnter(to, from, next)  {
  //   next(vm => {
  //     console.log(vm);
  //     if(from.meta.index > to.meta.index) {
  //       vm.setKeepAlive([to.name])
  //     } else {
  //       this.setKeepAlive();
  //     }
  //   })
  // },
}
</script>

<style scoped>
</style>