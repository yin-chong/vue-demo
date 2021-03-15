import loading from '@/assets/img/loading.gif';
<template>
  <div class="content">
    <div class="loading">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
$load-size: 10rem;
$border-size: 0.65rem;

.content {
  @include pos-center;
  width: 100vm;
  height: 100vh;
  background-color: #34495e;

  .loading {
    width: $load-size;
    height: $load-size;
    border-radius: 50%;
    border-top: $border-size solid #e74c3c;
    position: relative;
    animation: a1 2s linear infinite;

    &:before,
    &:after {
      content: "";
      width: $load-size;
      height: $load-size;
      position: absolute;
      left: 0;
      top: -$border-size;
      border-radius: 50%;
    }

    &:before {
      border-top: $border-size solid #e67e22;
      transform: rotate(120deg);
    }
    &:after {
      border-top: $border-size solid #3498db;
      transform: rotate(240deg);
    }

    span {
      position: absolute;
      width: $load-size;
      height: $load-size;
      font-size: 1.1rem;
      line-height: $load-size;
      color: #fff;
      text-align: center;
      animation: a2 2s linear infinite;
    }

    @keyframes a1 {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes a2 {
      to {
        transform: rotate(-360deg);
      }
    }
  }
}
</style>