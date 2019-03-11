<template>
  <div>
        <baidu-map :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @ready="handler" class="bm-view" ak="	7Dqy2sCx1k2ISwzVk9YYdo67GhuVS8ZA">
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
            <bm-marker :position="markerPoint" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :icon="{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157}}"></bm-marker>
            <bm-geolocation :locationError="handleLocationError" :locationSuccess="handleLocationSuccess" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <bm-panorama></bm-panorama>
        </baidu-map>
  </div>
</template>
<script>
/***************更多方法请前往https://dafrok.github.io/vue-baidu-map/#/zh/****************/ 
import BaiduMap from 'vue-baidu-map/components/Map/Map.vue';                   
import BmScale from 'vue-baidu-map/components/controls/Scale.vue';                //比例尺
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue';              //标记
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue';      //缩放
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue';    //获取定位，需手动许可
import BmCityList from 'vue-baidu-map/components/controls/CityList.vue';          //城市列表控件
import BmPanorama from 'vue-baidu-map/components/controls/Panorama.vue'           //全景控件
export default {
  name:'vueMap',
  components:{
      BaiduMap,
      BmScale,
      BmMarker,
      BmNavigation,
      BmGeolocation,
      BmCityList,
      BmPanorama
  },
  data(){
      return{
          center:{
              lng:0,lat:0
          },
          zoom:3,
          markerPoint:{lng: 116.404, lat: 39.915}
      }
  },
  methods:{
      handler({BMap,map}){
            console.log(BMap, map)
            this.center.lng = 116.404
            this.center.lat = 39.915
            this.zoom = 15
      },
      handleLocationSuccess(point, AddressComponent, marker){
          console.log(point, AddressComponent, marker)
      },
      handleLocationError(StatusCode){
          console.log(StatusCode)
      }
  }
}
</script>
<style scoped>
.bm-view{
    width: 100%;
    height: 600px;
}
</style>
