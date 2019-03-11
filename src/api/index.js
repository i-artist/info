import axios from 'axios';
import {getToken} from '@/utils/auth.js';

const url='http://192.168.3.46:3000/'

axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

//////////////////////////////////////// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
//////////////////////////////////////////////////////////配置的默认值/defaults
// axios.defaults.headers.common['X-Token'] = getToken()?getToken():'';
///////////////////////////////////////////////////////////添加请求拦截器
axios.interceptors.request.use(function (config) {
  /////////////////////////////////////////// 在发送请求之前做些什么
  config.headers['X-Token'] = getToken();  
//   config.headers['X-Token'] = getToken();
  return config;
}, function (error) {
  ///////////////////////////////////////// 对请求错误做些什么
  return Promise.reject(error);
});
/////////////////////////////////////// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  //////////////////////////// 对响应数据做点什么
  return response;
}, function (error) {
  // //////////////////////对响应错误做点什么
  console.log('response拦截器error:'+error)
  return Promise.reject(error);
});

export const postAccount = (account,password)=>axios({
    url:'register',
    method:'post',
    data:{Account,account,Password:password}
})

export const queryArticleList = ()=>axios({
    url:url+'zgArticle/data',
    method:'post',
    data:{}
})
export const queryLogin = (account,password)=>axios({
    url:url+'query/login',
    method:'get',
    params :{Account:account,Password:password}
})
