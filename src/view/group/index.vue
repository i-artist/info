<template>
  <div id="indexBox">
        <div id="pcView">
          <TopHeader></TopHeader>
          <Sticky><navigation/></Sticky>
        </div>
        
        <router-view></router-view>
        <br>
        <div style="height:50px;">

        </div>
        <div class="footer">
          <span>个人网站</span><a href="http://www.miitbeian.gov.cn">豫ICP备17036804号</a>
        </div>
  </div>
</template>
<script>
import Sticky from '@/components/Sticky'
import TopHeader from '@/view/navibar/header';
import Navigation from '@/view/navibar/navigation';
export default {
  name:'IndexH',
  components:{
      TopHeader,
      Navigation,
      Sticky
  }
}
</script>
<style scoped>
#indexBox{
  min-width:1000px;
}
#pcView{
  /* max-width:1200px;
  margin:auto; */
}
.footer{
  opacity: 0.9;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  text-align: center;
  height: 45px;
  background: #ffffff;
  line-height: 45px;
  box-shadow: 5px 1px 5px 1px #c3c3c3;
}
</style>
