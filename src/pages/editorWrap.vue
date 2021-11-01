<template>
  <div>
    <el-button
      type="text"
      @click="dialogVisible = true"
    >点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="60%"
    >
      <div>
      <vue-ueditor-wrap
      v-model="msg"
      :destroy="true"
      :config="myConfig"
    ></vue-ueditor-wrap>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "editorWrap",
  components: {
    VueUeditorWrap,
  },
  data() {
    return {
      dialogVisible: false,
      msg: "",
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: true,
        // 初始容器高度
        initialFrameHeight: 500,
        // 初始容器宽度
        initialFrameWidth: "100%",
        zIndex: 3000,
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://192.168.3.138:8055/ajax/libs/ueditor/controller",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: "/UEditor/",
      },
    };
  },
};
</script>

<style scoped>
</style>