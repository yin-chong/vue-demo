<template>
  <div style="height: 100%">
    <!-- <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style"> -->
    <!-- <el-input v-model="address_detail" placeholder="请输入公司名称" id="suggestId"></el-input> -->
    <div id="allmap" v-loading="loading"></div>
    <el-input
            v-model="query"
            placeholder=""
            @change="queryPosition"
    ></el-input>

  </div>
</template>

<script>
<<<<<<< HEAD
  //import BMap from 'BMap'
  // import axios from "axios";
  export default {
    name: 'Map',
    data () {
      return {
        pointA: {}, // 我的经纬度
        query: '', // 查询,
        loading: true,
        interval: null,

      }
    },
    created () {
      const geolocation = new BMap.Geolocation({
        maximumAge: 10  // 清除缓存
      })
      geolocation.getCurrentPosition((res) => {
        if (!res) {
          this.interval =setInterval(() => {
            if (this.loading) {
              this.$message.info('它还在加载不要失去希望，谢谢，当然它只是在本地环境这样，如果在线上不会出现这种问题的')
            }
          }, 10000)
          return this.$message.warning('您的地址正在赶来的路上，不要尝试重刷或者关闭浏览器，放着让它加载，它只是有点慢')
        }

        this.loading = false
        this.$message.success('😂，你的地址终于到了，久等了')
        this.pointA = new BMap.Point(res.point.lng, res.point.lat)  // 通过浏览器获得我的经纬度
        this.createMap()
      }, () => {
        this.$message.error('哎呀，百度地图有问题了，快去告诉它')
        this.loading = false
      })


    },
    mounted () {
=======
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
>>>>>>> 5ff99d994fc0c8a978912432485e94cbe307d605
    },

    watch:  {
      loading (val) {
        if (!val) clearInterval(this.interval)
      }
    },

    methods: {
      createMap () {
        //  创建地图实例
        const map = new BMap.Map('allmap', {
          enableBizAuthLogo: false // 初始化地图时进行关闭设置
        })
        //    map.disableBizAuthLogo(); // 关闭地图
        //    map.enableBizAuthLogo(); // 开启地图
        //  创建点坐标  (中航科技大厦)
        const point = new BMap.Point(118.810742, 32.04179)
        // 地图展示级别和中心点坐标
        map.centerAndZoom(point, 15)
        // 运行滚轮缩放
        map.enableScrollWheelZoom(true)
        //    设置地图显示的城市
        map.setCurrentCity('南京')
        const point1 = new BMap.Point(this.pointA.lng, this.pointA.lat)
        const distance = map.getDistance(point1, point).toFixed(2) //保留2位小数
        // 将2点用线连接显示在地图上
        const polyline = new BMap.Polyline([point1, point], {
          strokeColor: 'blue',
          strokeWeight: 6,
          strokeOpacity: 0.5
        })
        map.addOverlay(polyline)
      },
      //  地址查询
      queryPosition () {
        const query = this.query
        const url =
          'http://api.map.baidu.com/place/v2/suggestion?output=json&ak=xY7kZjVZdY2rL5brH2UyBuUdN3uYIKYG&region=南京&city_limit=true&query=' +
          query
        this.$jsonp(url, {})
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style>
  #allmap {
    height: 70%;
  }
</style>
