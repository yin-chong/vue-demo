<template>
  <div>
    <div class="edit_container">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      >
      </quill-editor>
    </div>
    <div class="submit_btn">
      <el-button
        type="primary"
        @click="submit"
      >提交</el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { addQuillTitle } from "../quill-title.js";
export default {
  name: "Editor",
  data() {
    return {
      editorOption: {},
      content: "<h3>新闻撰写</h3>"
    };
  },
  created() {},
  mounted() {
    addQuillTitle();
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur($event) {
      // 失去焦点事件
    },
    onEditorFocus($event) {
      // 获得焦点事件
    },
    onEditorChange($event) {
      // 内容改变事件
    },
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  components: {
    quillEditor
  }
};
</script>

<style scoped>
.edit_container {
  padding: 40px;
  margin-bottom: 40px;
}
.editer {
  height: 350px;
}
.submit_btn {
  text-align: center;
}
</style>