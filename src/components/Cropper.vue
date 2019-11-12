<template>
  <div>
    <!-- 裁剪框 -->
    <div class="cropper">
      <vue-cropper
        ref="cropper"
        :img='option.img'
        :outputSize='option.outputSize'
        :outputType='option.outputType'
        :info='true'
        :full="option.full"
        :canMove="option.canMove"
        :canMoveBox="option.canMoveBox"
        :original="option.original"
        :autoCrop="option.autoCrop"
        :fixedBox="option.fixedBox"
        @realTime="realTime"
        :fixed="option.fixed"
        :fixedNumber="fixedNumber"
      ></vue-cropper>
    </div>
    <!-- 预览 -->
    <div
      class="show-preview"
      :style="{'width': '200px', 'height': '200px', 'overflow': 'hidden', 'margin': '5px'}"
    >
      <div
        :style="previews.div"
        class="preview"
      >
        <img
          :src="previews.url"
          :style="previews.img"
        >
      </div>
    </div>

    <!-- 按钮 -->
    <div style="margin: 10px 5px">
      <el-button
        type="primary"
        icon="el-icon-zoom-in"
        @click="changeScale(1)"
      ></el-button>
      <el-button
        type="primary"
        icon="el-icon-zoom-out"
        @click="changeScale(-1)"
      ></el-button>
      <el-button
        type="primary"
        @click="rotateRight"
      >旋转</el-button>
      <el-button type="success">{{loading}}</el-button>
    </div>

  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  name: "Cropper",
  props: {
    imgFile: {
      type: String,
      required: true
    },
    fixedNumber: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      previews: {}, //预览的图片数据
      option: {
        img: "",
        outputSize: 1, // 裁剪框的质量　默认1
        outputType: "png", //裁剪框的图片格式 默认JPEG
        canScale: true, //是否允许滚轮缩放，默认true
        autoCrop: true, //生成默认截图框, 默认false
        fixed: true, //开启截图框固定比例，默认true
        fixedNumber: "", // 截图框宽高比例, 默认[1,1]
        full: false, // 是否输出原图比例的截图， 默认false， 选true生成的图片会非常大 文档说true写错了
        fixedBox: false, //固定截图框大小 不允许改变，默认false， 文档说true写错了
        canMove: true, //上传图片是否可以移动 默认true
        canMoveBox: true, // 截图框是否可以拖动，默认true
        original: false, // 上传图片按照原始比例渲染 默认false
        centerBox: false, //截图框是否被限制在图片里面， 默认false
        high: true, //是否按照设备dpr输出等比例图片， 默认true
        enlarge: 1 //图片根据截图框输出等比例倍数
      },
      loading: "上传" //上传按钮，点击后改为 上传中...
    };
  },
  created() {
    [this.option["img"], this.option["fixedNumber"]] = [
      this.imgFile,
      this.fixedNumber
    ];
  },
  methods: {
    // 图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    // 裁剪预览
    realTime(data) {
      this.previews = data;
    },
    // 旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    }
  }
};
</script>

<style scoped>
.cropper {
  width: 100%;
  height: 200px;
}
</style>