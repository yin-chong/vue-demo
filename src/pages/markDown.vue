<template>
  <div class="editor">
    <mavon-editor
      :value="md"
      style="height: 100%"
      @save="save"
      @change="changeData"
    ></mavon-editor>
    <mavon-editor
      :value="md1"
      style="height: 100%"
      :toolbarsFlag="false"
      :subfield="false"
      defaultOpen="preview"
    ></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "markDown",
  components: {
    mavonEditor,
  },
  data() {
    return {
      md: "**撒旦撒旦倒萨多少**",
      md1: "",
    };
  },
  created() {},
  methods: {
    save(val, render) {
      console.log(val, render);
      this.md1 = render;
    },
    changeData(val, render) {
      //   console.log(val, render);
    },
  },
};
</script>

<style scoped>
.md-render {
  box-sizing: border-box;
  margin: 15px auto;
  padding: 8px 25px 15px;
  width: 80%;
  min-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgb(251, 251, 251);
  transition: all 0.2s linear 0.2s;
}
</style>