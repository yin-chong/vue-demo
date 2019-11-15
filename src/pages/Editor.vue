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
    <div
      class="ql-container ql-snow"
      style="margin-top: 20px"
    >
      <div
        class="ql-editor"
        v-html="content"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import  Quill from 'quill'  //引入编辑器
 //quill图片可拖拽上传
import { ImageDrop } from 'quill-image-drop-module';
 //quill图片可拖拽改变大小
import ImageResize from 'quill-image-resize-module'

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { addQuillTitle } from "../quill-title.js";
var fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong",
  "Arial",
  "Times-New-Roman",
  "sans-serif"
];
var Font = Quill.import("formats/font");
Font.whitelist = fonts; //将字体加入到白名单
Quill.register(Font, true);
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize)
export default {
  name: "Editor",
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "undeline", "strike"], // 加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: fonts }], //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image"] //上传图片
          ],
          ImageDrop: true,
          imageResize: {} 
        },
        theme: "snow"
      },
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
}
.editer {
  height: 350px;
}
.submit_btn {
  text-align: center;
}
</style>