<template>
    <div id="register">
        <div>
            <input v-model="Account" type="text" placeholder="Please set up your account">
        </div>
        <div>
            <input v-model="Password" type="password" placeholder="Please set up your password">
        </div>
        <div>
            <input v-model="RepeatPassword" type="password" placeholder="Please confirm your password">
        </div>
        <button id="" @click="registerSubmit">注册</button>
    </div>
</template>
<script>
import {postAccount} from '@/api/index'
export default {
    name: "Register",
    data(){
        return {
            Account:'',
            Password:'',
            RepeatPassword:''
        }
    },
    methods:{
        registerSubmit(){
            let psd = this.Password==this.RepeatPassword?true:false;
            let act = this.Account==""?false:true;
            if(act&&psd){
                postAccount(this.Account,this.Password).then(Response=>{
                    if(Response.data.status=="DataBase error"){
                        alert("数据库查询失败")
                    }else if(Response.data.statue=="Already Exist"){
                        alert("此账号已经存在")
                    }else{
                        alert("注册成功，请登录")
                    }
                }).catch(err=>{
                    alert("netError")
                })
            }else{
                alert("请检查您是否漏填或两次密码不一致")
            }
        }
    }
};
</script>
<style scoped>
#register input {
  height: 32px;
  width: calc(100% - 20px);
  outline: none;
  border-radius: 5px;
  margin-top: 20px;
  padding: 0 10px;
  border: 0;
}
#register button {
  width: 100%;
  height: 32px;
  border: 0;
  margin-top: 20px;
  border-radius: 5px;
  outline: none;

  transition: 0.5s;
  color: rgb(110, 35, 8);
  background: #f7e0d8;
}
#register button:hover {
  color: #efefef;
  background: coral;
}
</style>
