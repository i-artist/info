<template>
    <div id="login_register">
        <div :style="`background:url(${bgLoginSrc}) center/cover;width:100%;height:calc(100vh - 95px);min-height:600px;`">
            <p>&nbsp;</p>
            <div id="handleBackground" title="后台接口没时间,就没有写,只做装饰用">
                <div id="handleSelect">
                    <div class="selectMenu" :class="selectClass[0].class" @click="loginChange"><span>登录</span></div>
                    <div class="selectMenu" :class="selectClass[1].class" @click="registerChange"><span>注册</span></div>
                </div>
                <br>
                <hr>
                    <!-- <Login class="LoginC" v-show="selectClass[0].class=='selectTrue'"></Login>
                    <Register class="RegisterC" v-show="selectClass[1].class=='selectTrue'"></Register> -->
                    <Login class="LoginC" v-show="!selectStatus"></Login>
                    <Register class="RegisterC" v-show="selectStatus"></Register>
                
            </div>
        </div>
    </div>
</template>
<script>
import Login from '@/view/login_register/login'
import Register from '@/view/login_register/register'
import loginBG from '@/image/loginBG.jpg';
export default {
  name:'login_register',
  components:{
      Login,
      Register
  },
  data(){
      return{
          bgLoginSrc:loginBG,
          selectClass:[{class:"selectFalse"},{class:"selectTrue"}]
      }
  },
  computed:{
      selectStatus(){
          if(this.$route.query.select==1){
              this.selectClass=[{class:"selectFalse"},{class:"selectTrue"}]
              return true
          }else{
              this.selectClass=[{class:"selectTrue"},{class:"selectFalse"}]
              return false
          }
          
      }
  },
  methods:{
      loginChange(){
          this.selectClass[0].class="selectTrue";
          this.selectClass[1].class="selectFalse";
          this.$router.push({path:'/index/Login_Register',query:{select:0}})
      },
      registerChange(){
          this.selectClass[1].class="selectTrue";
          this.selectClass[0].class="selectFalse";
          this.$router.push({path:'/index/Login_Register',query:{select:1}})
      }
  },
  watch:{

  }
}
</script>
<style scoped>
#handleBackground{
    width:30%;
    min-width: 200px;
    padding: 10px;
    background:rgba(255,255,255,0.3);
    margin:100px auto 0;
}
#handleSelect{
    display: flex;
    background: #ffffff;
    border-radius: 15px;
}
#handleSelect .selectMenu{
    width:50%;
    text-align:center;
    color: #7D7F81;
    background: #ffffff;
    border-radius: 15px;
    padding: 7px 0; 
    cursor: pointer;
    transition:0.5s;
}
/* #handleSelect .selectMenu span{
    padding: 5px 35px;
    background:cornflowerblue;
} */
#handleSelect .selectTrue{
    color:#FFFFFF;
    border-radius: 15px;
    background: coral;
}
.LoginC{
    animation: loginC 1s;
}
.RegisterC{
    animation:  registerC 1s;
}
@keyframes loginC {
   from {transform: translate3d(-200px,-100px,-150px) scale3d(0.5,0.2,0.3) rotate3d(0.3,0.4,0.5,-360deg);}
   to   {transform: translate3d(0px,0px,0px) scale3d(1,1,1) rotate3d(0.3,0.4,0.5,0deg);}
}
@keyframes registerC{
from {transform: translate3d(200px,-100px,-950px) scale3d(0.5,0.2,0.3)  rotate3d(0.3,0.4,0.5,360deg);}
   to   {transform: translate3d(0px,0px,0px) scale3d(1,1,1) rotate3d(0.3,0.4,0.5,0deg);}
}
</style>
