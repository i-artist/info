<template>
  <div id="linkMe">
      <div style="text-align:center;">
          <p id="linkTitle">联系我啊</p>
          <p></p>
          <hr>
      </div>
      <div id="externalLink">
          <a target="_blank" href="https://weibo.com/3831522886/profile?is_all=1"><img :src="sinaSrc" alt=""></a>
          <a target="_blank" href="mailto:zhong.888520@gmail.com"><img :src="emailSrc" alt=""></a>
          <a href=""><img :src="wechartSrc" alt=""></a>
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=953665604&site=qq&menu=yes"><img :src="qqSrc" alt=""></a>
      </div>
     
  </div>
</template>
<script>
import email from '@/image/email.png';
import qq from '@/image/qq.png';
import sina from '@/image/sina.png';
import wechart from '@/image/wechart.png';
export default {
  name:'linkMe',
  data(){
      return {
          emailSrc:email,
          qqSrc:qq,
          sinaSrc:sina,
          wechartSrc:wechart
      }
  }
}
</script>
<style scoped>
#linkMe{
background: #fff;
padding: 15px 10px;
}
#linkTitle{
    text-align: center;
    position: relative;
    top:9px;
    padding:0 10px;
    background: #ffffff;
    display: inline-block;
    margin: auto;
    letter-spacing:2px;
    color: #5f5f5f;
}
#externalLink{
    display: flex;
    margin-top:20px;
}
#externalLink a{
    border-radius: 100%;
    margin:0 3px;
    cursor:help;
    /* background:rgb(221, 248, 246); */
}
#externalLink img{
    width:100%;
}
</style>
