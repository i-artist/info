<template>
  <div id="popularTags">
      <p class="handleTitle">热门标签</p>
      <hr>
      <div id="TagBox">
          <span :key="index" v-for="(item,index) in tags" :class="`bgColor${index%6}`">{{item}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name:'popularTags',
  data(){
      return {
          tags:['HTML优化','html5','vue','WEB前端','前端','响应式','微信','sublime','微博','快捷键','media','打字机效果','摄影','文字输入','文字输入效果','css样式','旅游','朋友圈','模板','源代码','环境搭建','脱单','缘分']
      }
  }
}
</script>
<style scoped>
#popularTags{
    background: #fff;
    padding: 15px 10px;
}
#popularTags .handleTitle{
    font-size: 18px;
    height: 38px;
}
#popularTags hr{
    border:1px solid #080808;
}
#TagBox{
    margin-top:20px;
}
#popularTags span{
    padding: 4px 13px;
    display: inline-block;
    margin:5px 3px;
    /* border: 1px solid red; */
    border-radius: 3px;
    color: #ffffff;
    cursor: wait;
    font-size: 12px;
}
#popularTags .bgColor1{
    background:#ff5e5c;
}
#popularTags .bgColor2{
    background:#ffbb50;
}
#popularTags .bgColor3{
    background:#19B5FE;
}
#popularTags .bgColor4{
    background:#1ac756;
}
#popularTags .bgColor5{
    background:#e60012;
}
#popularTags .bgColor0{
    background:#9e0ca0;
}
#popularTags span:hover{
    background:#4a4a4a;
    box-shadow: 2px 3px 5px rgba(176, 218, 212,0.7)
}
</style>
