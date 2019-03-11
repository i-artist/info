<template>
  <div id="web">
      <VR/>
      <!-- <input :ref="i.b" type="text" :value="i.a" @input="i.a=$event.target.value" v-for="i in [{a:a,b:'dsf'},{a:b,b:'dfsaf'},{a:c,b:'fdsaf'}]">
      <span @click="sssss">ssss</span> -->
  </div>
</template>
<script>
import VR from '@/components/WebComponents/VR.vue'
export default {
  name:'web',
  components:{
      VR
  },
  data(){
      return{
          a:'',
          b:'',
          c:''
      }
  },
  methods:{
      sssss(){
          console.log(this.$refs)
      }
  }
}
</script>
<style scoped>
#web{
    min-width: 1000px;
    max-width: 1200px;
    margin: auto;
    margin-top:10px;
}
</style>
