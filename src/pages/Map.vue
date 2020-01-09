<template>
  <div style="height: 100%">
    <!-- <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style"> -->
    <!-- <el-input v-model="address_detail" placeholder="请输入公司名称" id="suggestId"></el-input> -->
    <div id="allmap"></div>
    <el-input
      v-model="query"
      placeholder=""
      @change="queryPosition"
    ></el-input>

  </div>
</template>

<script>
//import BMap from 'BMap'
// import axios from "axios";
export default {
  name: "Map",
  data() {
    return {
      pointA: {}, // 我的经纬度
      query: "" // 查询
    };
  },
  created() {
    //  const geolocation = new BMap.Geolocation({
    //      maximumAge:10  // 清除缓存
    //  });
    //  geolocation.getCurrentPosition((res) =>{
    //    alert(res)
    //    console.log(res);
    //  this.pointA = new BMap.Point(res.point.lng, res.point.lat)  // 通过浏览器获得我的经纬度
    //  console.log(this.pointA);
    //  this.createMap()
    //  })
    this.$jsonp(
      "http://api.map.baidu.com/location/ip?qt=loc&coor=bd09ll&ak=xY7kZjVZdY2rL5brH2UyBuUdN3uYIKYG&timeout=10000"
    ).then(res => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {
    createMap() {
      //  创建地图实例
      const map = new BMap.Map("allmap", {
        enableBizAuthLogo: false // 初始化地图时进行关闭设置
      });
      //    map.disableBizAuthLogo(); // 关闭地图
      //    map.enableBizAuthLogo(); // 开启地图
      //  创建点坐标  (中航科技大厦)
      const point = new BMap.Point(118.810742, 32.04179);
      // 地图展示级别和中心点坐标
      map.centerAndZoom(point, 15);
      // 运行滚轮缩放
      map.enableScrollWheelZoom(true);
      //    设置地图显示的城市
      map.setCurrentCity("南京");
      const point1 = new BMap.Point(this.pointA.lng, this.pointA.lat);
      const distance = map.getDistance(point1, point).toFixed(2); //保留2位小数
      console.log(distance);
      alert(distance);
      // 将2点用线连接显示在地图上
      const polyline = new BMap.Polyline([point1, point], {
        strokeColor: "blue",
        strokeWeight: 6,
        strokeOpacity: 0.5
      });
      map.addOverlay(polyline);
    },
    //  地址查询
    queryPosition() {
      const query = this.query;
      const url =
        "http://api.map.baidu.com/place/v2/suggestion?output=json&ak=xY7kZjVZdY2rL5brH2UyBuUdN3uYIKYG&region=南京&city_limit=true&query=" +
        query;
      this.$jsonp(url, {})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
#allmap {
  height: 70%;
}
</style>
