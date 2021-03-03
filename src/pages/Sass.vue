<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <div class="top-title">
        <div class="top-title_l">
          <van-icon name="arrow-left" />
        </div>
        <div class="top-title_m">健康共享</div>
        <div class="top-title_r"></div>
      </div>
    </div>

    <div class="content">
        <div class="card">
            <!-- 用户基本信息 -->
            <div class="user">
                <div></div>
            </div>
            <div class="menu"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sass",
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../style/main.scss";
$main-width: 94.67%;
// $main-width: rem(355);
@mixin main-center {
  width: $main-width;
  margin: 0 auto;
}
// 顶部
.top {
  width: 100%;
  height: rem(167);
  background-color: #22c49e;
  padding-top: rem(32);

  &-title {
    @include row-between;
    @include main-center;
    color: #fff;
    &_l {
      font-size: rem(17.5);
    }
    &_m {
      font-size: rem(18);
    }
    &_r {
      width: rem(100);
      height: rem(30);
      border-radius: 14.3px;
      border: 1px solid #dbdbdb;
    }
  }
}

// 页面主体
.content {
    @include main-center;
    margin-top: rem(-58);
    z-index: 20;
}

// 菜单 用户基本信息
.card {
    width: 100%;
    // 用户
    .user {
        width: 100%;
        height: rem(118);
        background-image: linear-gradient(90deg, 
            #fef1c6 0%, 
            #f2d9a1 100%), 
        linear-gradient(
            #ffeaa2, 
            #ffeaa2);
        background-blend-mode: normal, 
            normal;
        box-shadow: inset -1px 0px 2.5px 0px 
            rgba(255, 255, 255, 0.79);
        border-top-left-radius: rem(10);
        border-top-right-radius: rem(10);
        // border-bottom-left-radius: 20px;
        // border-bottom-right-radius: 20px;
    }

    // 菜单
    .menu {
        width: 100%;
        height: rem(88);
    }
}
</style>

