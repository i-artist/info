<template>
  <div>
      <div id="top">
          <div id="topAuto">
              <div class="topLink leftLink">
                  <span @click="canvasClick" title="装饰作用">主页</span>
                  <span title="装饰作用">博客</span>
              </div>
              <div class="topLink rightLink">
                  <router-link v-if="!status" :to="{path:'/index/Login_Register',query:{select:1}}"><span>注册</span></router-link>
                  <router-link v-if="!status" :to="{path:'/index/Login_Register',query:{select:0}}"><span>登陆</span></router-link>
                  <span v-if="status">欢迎您： <span style="color:#afbfcf;">{{status}}</span></span>
                  <span v-if="status" style="cursor:pointer;" @click="logout">退出</span>
              </div>
          </div>
      </div>
  </div> 
</template>
<script>
import html2canvas from 'html2canvas'
import store from '@/store'
export default {
  name:'topHeader',
  data(){
      return {

      }
  },
  computed:{
      status(){
          return store.state.userName
      }
  },
  methods:{
      logout(){
          store.commit('changeUserName',"")
          this.$router.push({path:'/index/Login_Register',query:{select:0}})
      },
      canvasClick(){
        //   html2canvas(document.body).then(function(canvas){
        //       console.log(canvas)
        //       document.body.appendChild(canvas)
        //   })
      }
  }
}
</script>
<style scoped>
#top{
    /* width:100%; */
    background: #161515;
    height:30px;
    line-height: 30px;
}
#topAuto{
    min-width: 1000px;
    /* width:100%; */
    
    max-width: 1200px;
    margin: auto;
    height: 100%;
}
.topLink{
    height: 100%;
}
.topLink span{
    padding:0 5px;
    margin:0 5px;
    color: #ffffff;
    font-size: 12px;
    color: #ffffff;
}
.leftLink{
    float:left;
}
.rightLink{
    float:right;
}
</style>
