<template>
  <div style="height: 100%">
    <div
      id="container"
      style="width:100%;height:80%;"
    ></div>
    <el-row>
      <el-col :span="20"><el-input v-model="query" placeholder=""></el-input>
      </el-col>
      <el-col :span="4"><el-button type="primary" @click="queryPosition">搜索</el-button>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Map",
  data() {
    return {
      query: '',
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      // 定位获得当前位置信息
      const geolocation = new qq.maps.Geolocation(
        "26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B",
        "腾讯地图-Web测试"
      );
      geolocation.getIpLocation(this.showPosition, this.showErr);
    },
    showPosition(position) {
      console.log(position);
    },
    showErr() {
      console.log("error");
      this.getLocation();
    },
    // 地点搜索
    queryPosition(){
        const url = 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=南京&callback=jsonp_214de9e80ef6700&key=26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B&keyword='+this.query;
        this.$jsonp(url, {})
        .then( res =>{
          console.log(res);
        })
        .catch( err =>{
          console.log(err);
        })
        // axios.get('https://apis.map.qq.com/ws/place/v1/suggestion/',{
        //   region: '南京',
        //   key: '26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B',
        //   keyword: this.query
        // })
        // .then(res => {
        //   console.log(res)
        // })
        // .catch(err => {
        //   console.error(err); 
        // })
    }
  }
};
</script>

<style scoped>
</style>