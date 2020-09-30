<template>
  <div style="height: 100%">
    <div
      id="container"
      style="width:100%;height:80%;"
    ></div>
    <div id="tip"></div>
    <!-- <el-row>
      <el-col :span="20"><el-input v-model="query" placeholder=""></el-input>
      </el-col>
      <el-col :span="4"><el-button type="primary" @click="queryPosition">搜索</el-button>
      </el-col>
    </el-row> -->

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Map",
  data() {
    return {
      query: "",
    };
  },
  created() {
    // this.getLocation();
    // this.getPosition();
  },
  mounted() {
    var mapObj = new AMap.Map('container');
            mapObj.plugin('AMap.Geolocation', function () {
                let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true, // 是否使用高精度定位，默认:true
                    timeout: 10000,           // 超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,            // 定位结果缓存0毫秒，默认：0
                    convert: true,            // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,         // 显示定位按钮，默认：true
                    buttonPosition: 'LB',     // 定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,         // 定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,         // 定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,      // 定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:true       // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                mapObj.addControl(geolocation);
                geolocation.getCurrentPosition();
                AMap.event.addListener(geolocation, 'complete', onComplete); // 返回定位信息
                AMap.event.addListener(geolocation, 'error', onError);       // 返回定位出错信息
            });

            function onComplete(obj){
                var res = '经纬度：' + obj.position + 
                        '\n精度范围：' + obj.accuracy + 
                        '米\n定位结果的来源：' + obj.location_type + 
                        '\n状态信息：' + obj.info + 
                        '\n地址：' + obj.formattedAddress + 
                        '\n地址信息：' + JSON.stringify(obj.addressComponent, null, 4);
                alert(res);
            }

            function onError(obj) {
                alert(obj.info + '--' + obj.message);
                console.log(obj);
            }

  },
  methods: {
    getLocation() {
      // 定位获得当前位置信息
      const geolocation = new qq.maps.Geolocation(
        "26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B",
        "腾讯地图-Web测试"
      );
      if ("geolocation" in navigator) {
        let options = {
          enableHighAccuracy: true,
          timeout: 10000,
        };
        geolocation.getLocation(this.showPosition, this.showErr);
      } else {
        alert("地理服务不可用");
      }
    },
    showPosition(position) {
      let [MarkerImage, Point, Size, center] = [
        qq.maps.MarkerImage,
        qq.maps.Point,
        qq.maps.Size,
        new qq.maps.LatLng(position.lat, position.lng),
      ];
      console.log(center);
      let map = new qq.maps.Map(document.getElementById("container"), {
        center: center,
        zoom: 15,
      });
      // let [anchor, size, origin] = [
      //   new Point(6, 6),
      //   new Size(24, 24),
      //   new Point(0, 0),
      // ]
      // console.log(anchor, size, origin);
      let marker = new qq.maps.Marker({
        position: center,
        map: map,
      });
    },
    showErr() {
      console.log("error");
      this.getLocation();
    },
    // 地点搜索
    // queryPosition(){
    //     const url = 'https://apis.map.qq.com/ws/place/v1/suggestion/?region=南京&callback=jsonp_214de9e80ef6700&key=26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B&keyword='+this.query;
    //     this.$jsonp(url, {})
    //     .then( res =>{
    //       console.log(res);
    //     })
    //     .catch( err =>{
    //       console.log(err);
    //     })
    //     // axios.get('https://apis.map.qq.com/ws/place/v1/suggestion/',{
    //     //   region: '南京',
    //     //   key: '26TBZ-UH2KG-YAKQT-IIB4X-D6Q7Q-HAB3B',
    //     //   keyword: this.query
    //     // })
    //     // .then(res => {
    //     //   console.log(res)
    //     // })
    //     // .catch(err => {
    //     //   console.error(err);
    //     // })
    // }
    getPosition() {
      let map = new AMap.Map("container", {
        resizeEnable: true
      });
      map.plugin("AMap.Geolocation",  () =>{
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", this.onComplete()); //返回定位信息
        AMap.event.addListener(geolocation, "error", thios.onError()); //返回定位出错信息
      });
    },
    onComplete(data) {
       var str = [];
                    str.push(data.position.getLat());
                    str.push(data.position.getLng());
                    document.getElementById('tip').innerHTML = str;
    },
   onError(data) {
                    document.getElementById('tip').innerHTML = '定位失败';
                }
  },
};
</script>

<style scoped>
</style>