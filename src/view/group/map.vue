<template>
  <div id="mapB">
      <VueMap/>
      <!-- <div id="test">

      </div> -->
  </div>
</template>
<script>
import VueMap from '@/components/baiduMap/vueMap.vue'
export default {
  name:'mapB',
  components:{
      VueMap
  }
}
</script>
<style scoped>
#mapB{
    min-width: 1000px;
  /* width: 100%; */
  
  max-width: 1200px;
  margin: auto;
  margin-top:10px;
}
/* #test{
  width:calc(70% + 100px);
  height: 20px;
  background: red;
} */
</style>
