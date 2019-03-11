<template>
  <div id="archives">
      <p class="handleTitle">文章归档</p>
      <hr>
      <div id="archivesBox">
          <span :key="index" v-for="(item,index) in archiveArr">{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name:'archives',
  data(){
      return {
          archiveArr:['2019年04月','2019年03月','2019年02月','2019年01月','2018年12月','2018年11月','2018年10月','2018年09月','2018年08月','2018年07月','2018年06月','2018年05月','2018年04月']
      }
  }
}
</script>
<style scoped>
#archives{
    background: #fff;
    padding: 15px 10px;
}
#archives .handleTitle{
    font-size: 18px;
    height: 38px;
}
#archives hr{
    border:1px solid #080808;
}
#archivesBox{
    margin-top: 20px;
}
#archives span{
    padding: 4px 15px;
    margin: 5px 6px;
    border-radius: 3px;
    display: inline-block;
    background: #ff5e5c;
    color: #ffffff;
    cursor:crosshair;
}
#archives span:hover{
    background: #4a4a4a;
}
</style>
