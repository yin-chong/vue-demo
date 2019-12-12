<template>
    <div class="main">
      <!-- <div class="title">员福报价</div> -->
      <el-image :src='banner' fit='cover'></el-image>
    </div>
</template>

<script>
import banner from '@/assets/banner.png'
    export default {
        name: 'Reckon',
        data () {
            return {
                banner,
            }
        },
        created () {
        }
    }
</script>

<style scoped>

</style>