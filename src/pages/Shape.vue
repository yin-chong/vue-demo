<template>
    <div class="flex">
      <div class="square"></div>
      <!-- 三角形 -->
      <div class=" triangle"></div>
      <!-- 圆形 -->
      <div class="round"></div>
      <!-- 椭圆 -->
      <div class="oval"></div>
      <!-- 菱形 -->
      <div class="diamond"></div>
      <!-- 梯形 -->
      <div class="trapezium"></div>
      <!-- 星行 -->
      <div class="star"></div>
    </div>
</template>

<script>
    export default {
        name: 'Shape',
    }
</script>

<style scoped>
.flex{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.square{
    width: 0;
    height: 0;
    border-top: 50px solid red;
    border-right: 50px solid blue;
    border-bottom: 50px solid green;
    border-left: 50px solid gray;
}
.triangle{
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top-color: #000; 
}
.round{
    width: 120px;
    height: 120px;
    border: 1px solid #6495ed;
    background-color: #6495ed;
    border-radius: 50%;
}
.oval{
    width: 120px;
    height: 80px;
    border: 1px solid #6495ed;
    background-color: #6495ed;
    border-radius: 50%;
}
.diamond{
    width: 100px;
    height: 100px;
    background-color: #6495ed;
    transform: rotate(-45deg);
    margin-top: 20px;
}
.trapezium{
    height: 0;
    width: 100px;
    /* border-top: 50px solid transparent;  */
    border-left: 25px solid transparent; 
    border-right: 25px solid transparent; 
    border-bottom: 100px solid #6495ed;
}
.star{
     width: 0;
    height: 0;
    margin: 50px 0;
    color: #fc2e5a;
    position: relative;
    display: block;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #fc2e5a;
    border-left: 100px solid transparent;
    -moz-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    transform: rotate(35deg);
}
.star::before{
     height: 0;
    width: 0;
    position: absolute;
    display: block;
    top: -45px;
    left: -65px;
    border-bottom: 80px solid #fc2e5a;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    content: '';
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    transform: rotate(-35deg);
}
.star::after{
     content: '';
    width: 0;
    height: 0;
    position: absolute;
    display: block;
    top: 3px;
    left: -105px;
    color: #fc2e5a;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #fc2e5a;
    border-left: 100px solid transparent;
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    transform: rotate(-70deg);
}
</style>