<template>
  <div>
    <div class='contain'>
      <vue-cropper
        autoCrop
        img="https://shnhz.github.io/shn-ui/img/Koala.jpg"
        fixed
        :fixedNumber='[1,1]'
        outputType="png"
        ref="cropper"  
        @realTime = "realTime"
      ></vue-cropper>
    </div>
     <div class="show-preview" :style="{'width': previews.w +'px', 'height': previews.h +'px', 'overflow': 'hidden', 'margin': '5px'}">
       <div :style="previews.div" class="preview">
         <img :src="previews.url" :style="previews.img">
       </div>
     </div>
    <div style="margin: 10px 5px">
      <el-button
        type="primary"
        @click="getCropData"
      >获取图片信息</el-button>
      <el-button
        type="primary"
        @click="getCropBlob"
      >获取图片Blob</el-button>
      <el-button
        type="success"
        @click="rotateRight"
      >旋转</el-button>
    </div>


  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  name: "cropper",
  data() {
    return {
      previews: {}    // 裁剪框实时预览
    };
  },
  methods: {
    // 获取截取框部分图片的base64  数据
    getCropData() {
      this.$refs.cropper.getCropData(data => {
        console.log(data);
      });
    },
    // 图片右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    // 获取截取框部分图片Blob信息
    getCropBlob(){
        this.$refs.cropper.getCropBlob(data => {
            console.log(data);
        })
    },
    // 图片裁剪实时预览
    realTime(data){
      console.log(data);
      this.previews = data
    }
  },
  components: {
    VueCropper
  }
};
</script>

<style scoped>
.contain {
  width: 100%;
  height: 200px;
}
.preview{
  /* overflow: hidden; */
  border: 1px solid #ccc;
  /* border-radius: 50%; */
  margin: 5px auto;
}
</style>