<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      :options="editorOptions"
      @change="onEditorChange($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import { eidtorOptions } from "@/config/vue-quill-editor-config";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { addQuillTitle } from "../quill-title";
export default {
  name: "Editor",
  data() {
    return {
      editorOptions: eidtorOptions
    };
  },
  mounted() {
    addQuillTitle();
  },
  methods: {
    onEditorChange(event) {
      console.log(event);
    },
    onEditorReady(event) {
      // console.log(event);
    }
  },
  components: {
    quillEditor
  }
};
</script>

<style scoped>
</style>