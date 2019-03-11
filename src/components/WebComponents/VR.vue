<template>
  <div id="VR">
      <Pano @on-load="onLoad" :source="equirectangularSrc"></Pano>
  </div>
</template>
<script>
import {Pano} from 'vuejs-vr';
import equirectangular from '@/image/equirectangular.jpg'
export default {
  name:'VR',
  components:{
      Pano
  },
  data(){
      return {
          equirectangularSrc:equirectangular
      }
  },
  methods:{
      onLoad(){

      }
  }
}
</script>
<style scoped>
#VR{
    height: 600px;
}
</style>
