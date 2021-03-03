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
$main-width: 94.67%;
// $main-width: 22.19rem;
@mixin main-center {
  width: $main-width;
  margin: 0 auto;
}
// 顶部
.top {
  width: 100%;
  height: 10.44rem;
  background-color: #22c49e;
  padding-top: 2rem;

  @include test;

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
      width: 6.25rem;
      height: 1.88rem;
      border-radius: .89rem;
      border: 1px solid #dbdbdb;
    }
  }
}

// 页面主体
.content {
    @include main-center;
    margin-top: -3.19rem;
    z-index: 20;
}

// 菜单 用户基本信息
.card {
    width: 100%;
    // 用户
    .user {
        width: 100%;
        height: 7.34rem;
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
        border-top-left-radius: .63rem;
        border-top-right-radius: .63rem;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    // 菜单
    .menu {
        width: 100%;
        height: rem(88);
    }
}
</style>

