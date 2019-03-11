<template>
  <div id="login">
      <div>
          <input v-model="Account" type="text" placeholder="Please enter your account">
      </div>
      <div>
          <input type="text" v-model="Password" placeholder=" Please enter your password">
      </div>
      
      <button @click="loginSubmit">登录</button>
  </div>
</template>
<script>
import {setToken} from '@/utils/auth.js'
import {queryLogin} from '@/api/index';
import store from '@/store'
export default {
  name:'login',
  data(){
      return{
          Account:'',
          Password:''
      }
  },
    methods:{
        loginSubmit(){
            queryLogin(this.Account,this.Password).then(Response=>{
                console.log(Response.data)
                if(Response.data.status=='DateBase error'){
                    alert("DateBase error")
                }else{
                    if(Response.data.result=='not found'){
                        alert("not found")
                    }else{
                        store.commit('changeUserName',Response.data.result.nickName);
                        setToken(Response.data.Token)
                        this.$router.push({path:'/index/web'})
                    } 
                }
            }).catch(err=>{

            })
        }
    }
}
</script>
<style scoped>
#login input{
    height:32px;
    width:calc(100% - 20px);
    outline: none;
    border-radius: 5px;
    margin-top:20px;
    padding:0 10px;
    border: 0;
}
#login button{
    
    width:100%;
    height:32px;
    border: 0;
    margin-top: 20px;
    border-radius: 5px;
    outline: none;
    
    transition:0.5s;
    color: rgb(110, 35, 8);
    background:#F7E0D8
}
#login button:hover{
    color: #efefef;
    background: coral;
}
</style>
