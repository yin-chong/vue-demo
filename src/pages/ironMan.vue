<template>
  <div class="bg">
    <div class="box middle">
      <div class="box-img">
        <img
          :src="ironMan"
          alt=""
        >
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>I Am Iron Man</h2>
          <span>i love you threee thousand</span>
          <div class="back-content_sm">
            <a href="">
              <svg-icon
                icon-symbol-id="#weibo"
                :svg-size-config="{
                        width: '20px', height: '20px'
                    }"
              ></svg-icon>
            </a>
            <a href="">
              <svg-icon
                icon-symbol-id="#weixin"
                :svg-size-config="{
                        width: '20px', height: '20px'
                    }"
              ></svg-icon>
            </a>
            <a href="">
              <svg-icon
                icon-symbol-id="#facebook"
                :svg-size-config="{
                        width: '20px', height: '20px'
                    }"
              ></svg-icon>
            </a>
            <a href="">
              <svg-icon
                icon-symbol-id="#qq"
                :svg-size-config="{
                        width: '20px', height: '20px'
                    }"
              ></svg-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ironMan from "../assets/ironMan.jpg";
export default {
  name: "ironMan",
  data() {
    return {
      ironMan
    };
  }
};
</script>

<style scoped>
/* *{
    fill: #6495ed
} */
.bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #999;
  position: absolute;
}
.box {
  width: 340px;
  height: 480px;
}
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box-img,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: 0.7s;
}
.box-img img {
  width: 100%;
}
.back {
  background-color: #fff;
}
.back-content {
  text-align: center;
  width: 100%;
  color: #6495ed;
}
.back-content_sm {
  margin: 20px 0;
}
.back-content_sm a {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  /* border-radius: 50%; */
}
/* .back-content_sm a:hover {
  background-color: #6495ed;
  fill: #fff;
} */
.back {
  transform: perspective(600px) rotateY(180deg);
}

.box-img {
  transform: perspective(600px) rotateY(0deg);
}

.box:hover .box-img {
  transform: perspective(600px) rotateY(-180deg);
}

.box:hover .back {
  transform: perspective(600px) rotateY(0deg);
}
</style>