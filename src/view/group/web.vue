<template>
  <div id="zg">
    <Carousel/>
    <div id="zgContent">
      <div id="handleLeftBox">
        <div class="handleLeftList" :key="index" v-for="(i,index) in articleList">
          <div class="handleImage" >
            <img :src="i.articleImage" alt="">
          </div>
          <div class="handleArticle">
            <p class="articleTitle">{{i.articleTitle}}</p>
            <p class="articleDetail" v-html="i.articleContent"></p>
            <div class="articleFooter">
              <!-- <img src="http://dreamwq.com/wp-content/uploads/2016/03/img02.jpg" alt="">
              <span>{{i.nickName}}</span>
              <span>{{i.createTime}}</span>
              <span>浏览量：{{i.pageView}}</span> -->
            </div>
          </div>
        </div>
        <div style="height:300px;" id="chartDom">

        </div>
      </div>
      <div id="handleRightBox">
        <PopularTags></PopularTags>
        <br>
        <Archives></Archives>
        <br>
        <LinkMe></LinkMe>
      </div>
    </div>
    <div style="clear:both;">

    </div>
  </div>
</template>
<script>
import {postAccount,queryArticleList} from '@/api/index'
import Carousel from '@/components/carousel/index.vue';
import LinkMe from '@/components/linkMe';
import PopularTags from '@/components/ZgComponents/popularTags.vue';
import Archives from '@/components/ZgComponents/archives.vue';
import logo from '@/assets/logo.png'
import js from '@/assets/js.jpg'
import ES61 from '@/assets/ES6.jpg'
import HTML5 from '@/assets/HTML5.jpg'
import python from '@/assets/python.jpg'
export default {
  name:'zg',
  data(){
    return{
      Account:'',
      Password:'',
      articleList:[
        {
          articleImage:js,
          articleTitle:'JavaScript',
          articleContent:'掌握异步Promise用法,和他的语法糖async和await',
        },
        {
          articleImage:ES61,
          articleTitle:'ES6',
          articleContent:'在项目中熟练使用ES6用法,了解Generator函数的使用'
        },
        {
          articleImage:logo,
          articleTitle:'VUE',
          articleContent:'精通Vue,axios,vue-router,vuex,对钩子函数,计算属性,组件通信,路由等在项目中熟练使用,了解Vue响应式原理,熟悉jsx语法.'
        },
        {
          articleImage:HTML5,
          articleTitle:'HTML5',
          articleContent:'精通HTML语言和CSS样式表,把原型图通过网页呈现出来'
        },
        {
          articleImage:python,
          articleTitle:'Python',
          articleContent:'熟练使用Python的Scrapy进行爬虫的开发,使用fiddler对抓取程序的抓包分析,了解Java的SpringBoot,熟悉Mysql数据库操作'
        }
      ],
      chartDom:null
    }
  },
  components:{
    Carousel,
    LinkMe,
    PopularTags,
    Archives
  },
  created(){
    // this.getArticle()
  },
  mounted(){
    this.chartInit()
    window.onresize = () => {
            this.chartDom.resize()
            
        }
  },
  methods:{
    chartInit(){
      let option = {
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['JavaScript', 'ES6', 'HTML5', 'Vue', 'Python', 'Java', 'SpringBoot'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'技术能力',
                  type:'bar',
                  barWidth: '60%',
                  data:[99, 98, 97, 99, 88, 77, 66]
              },
              
          ]
      }
       this.chartDom = this.echarts.init(document.querySelector(`#chartDom`))
       this.chartDom.setOption(option)
    },
    submit(){
      postAccount(this.Account,this.Password).then(Response=>{
        console.log(Response)
      })
    },
    getArticle(){
      queryArticleList().then(Response=>{
        if(Response.data.status=='success'){
          this.articleList=Response.data.result
        }else{
          alert("数据库请求失败")
        }
        
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
#zg{
  min-width: 1000px;
  /* width: 100%; */
  
  /* max-width: 1200px; */
  margin: auto;
  margin-top:10px;
}
#zgContent{
  max-width: 1200px;
  margin:15px auto;
}
#handleLeftBox{
  width:73%;
  float:left;
}
#handleRightBox{
  width:25%;
  float:right;
}
.handleLeftList{
  padding: 10px;
  margin-bottom:10px;
  display: flex;
  background: #ffffff;
}
.handleImage{
  width:20%;
  height:130px;
  padding: 5px;
}
.handleImage img{
  width:100%;
  height:100%;
  transition: 1s;
}
.handleImage:hover img{
  transform: scale(1.1) rotate(3deg);
  /* opacity: 0.9; */
  box-shadow: 1px 2px 3px rgba(186, 240, 231, 0.9)
}
.handleArticle{
  flex: 1;
  padding-left:10px;
}
.articleTitle{
  margin-top: 3px;
  font-size: 22px;
}
.articleDetail{
  margin-top: 5px;
  color: #3f3f3f;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  
  width: 100%;
}
.articleFooter{
  margin-top: 20px;
  line-height: 30px;
}
.articleFooter img{
  width: 25px;
  height: 25px;
  border-radius: 100%;
  /* vertical-align: middle; */
}
.articleFooter span{
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #A0ADB4;
  margin-right: 15px;
}
</style>
