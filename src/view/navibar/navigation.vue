<template>
  <div id="nav" :class="theme?'nav1':'nav2'">
      <div id="list" :class="theme?'list1':'list2'">
          <ul>
              <li style="">
                  <img :src="logoZGSrc" alt="" style="width:65px;height:65px;">
              </li>
              <router-link to="/index/web"><li>前端技术</li></router-link>
              <router-link to="/index/internet"><li>VR</li></router-link>
              <!-- <li>摄影旅行</li>
              <li>生活感悟</li> -->
              <router-link to="/index/map"><li>地图</li></router-link>
              <router-link to="/index/work"><li>工作项目</li></router-link>
              <router-link to="/index/table"><li>表格</li></router-link>
          </ul>
          <div id="search">
              <input type="text" v-model="SearchValue" @keydown="SearchKeyDown" @focus="SearchFocus" @blur="SearchBlur" placeholder="Search...">
          </div>
      </div>
  </div>
</template>
<script>
import logoZG from '@/image/ZG.png'
import Sticky from '@/components/Sticky'
export default {
  name:'navigation',
  data(){
      return {
          logoZGSrc:logoZG,
          SearchValue:'',

          theme:true
      }
  },
  methods:{
        SearchBlur(e){
            let ev = e || window.event;
            ev.target.style.width='100px'
        },
        SearchFocus(e){
            let ev = e || window.event;
            ev.target.style.width='150px'
        },
        SearchKeyDown(e){
            let ev = e || window.event;
            if (ev.keyCode==13)
                this.SearchValue='';
        }
    },
    mounted(){
        window.addEventListener("scroll",()=>{
            console.log(document.querySelector("#list").offsetTop)
            if(this.$el.offsetTop==0){
                this.theme=false
            }else{
                this.theme=true
            }
        })
    }
}
</script>
<style scoped>
#nav{
    height:65px;
    line-height: 65px;
}
.nav1{
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    /* background: #ffffff; */
}
.nav2{
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    opacity: 0.9;
}
#list{
    /* width:100%; */
    /* min-width: 1000px; */
    max-width: 1200px;
    margin:auto;
    position: relative;
}
#search{
    position:absolute;
    right:0;
    top:0;
}
#search input{
    height:26px;
    border-radius: 15px;
    width:100px;
    padding: 0 10px;
    outline: none;
    transition: 0.5s;
}
#list ul{
    list-style: none;
    height: 70px;
}
#list ul li{
    float: left;
    height: 100%;
    padding:0 10px;
    margin: 0 15px;
    color: #3a3a3a;
}
</style>
