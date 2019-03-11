<template>
    <div>
        <br>
        <div style="height:400px;padding:20px;background:#fff;">
            <p>技能图表</p>
            <div style="height:100%;" id="chartDom1">

            </div>
        </div>
        <br>
        <div style="height:400px;padding:20px;background:#fff;">
            <p>工作经历</p>
            <div style="height:100%;" id="chartDom2">
                <table border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%;font-size:14px;color:#646464;text-align:center;line-height:50px;">
                            <tr style="border-bottom:2px solid #c3c6c8;">
                                <th style="">项目名称</th>
                                <th>PC/Mobile</th>
                                <th>项目描述</th>
                                <th>运用技术栈</th>
                                <th>项目周期/(多少月)</th>
                                
                            </tr>
                            <tr style="border-bottom:1px solid #d3d6d8;" :key="index" v-for="(item,index) in tableList">
                                <td>{{item.name}}</td>
                                <td>{{item.platform}}</td>
                                <td>{{item.des}}</td>
                                <td>{{item.skill}}</td>
                                <td>{{item.cycle}}</td>
                            </tr>
                            
                        </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'table1',
    data(){
        return {
            chartDom1:null,
            InterTime:null,
            chartDomData1:[99, 98, 97, 99, 88, 77, 66],
            tableList:[
                {name:'CDMS',platform:'PC',des:'水军监测平台',skill:'Vue,Element,Vue-router',cycle:'5'},
                {name:'JDP问卷调研',platform:'Mobile',des:'移动端问卷调研项目',skill:'Vue,Vue-router,Vuex',cycle:'5'},
                {name:'Dashboard',platform:'PC',des:'百威Dashboard',skill:'Vue,Element,Vue-router,Echarts',cycle:'5'},
                {name:'后台管理平台',platform:'PC',des:'后台管理平台',skill:'Vue,Element,Vue-router,Echarts,Vuex',cycle:'5'},
            ]
        }
    },
    mounted(){
        this.chartInit()
        window.onresize = () => {
            this.chartDom1.resize()
            
        },
        
        this.InterTime = setInterval(()=>{
            this.chartDomData1=[this.randomInit(),this.randomInit(),this.randomInit(),this.randomInit(),this.randomInit(),this.randomInit(),this.randomInit()]
            this.chartInit()

            this.shuffle(this.tableList)
            this.tableList[0].cycle = this.randomInit(3)+2
            this.tableList[1].cycle = this.randomInit(3)+2
            this.tableList[2].cycle = this.randomInit(3)+2
            this.tableList[3].cycle = this.randomInit(3)+2


        },10000)
    },
    beforeDestroy(){
        clearInterval(this.InterTime)
    },
    methods:{
        shuffle(arr) { 
                let i = arr.length; 
                while (i) { 
                    let j = Math.floor(Math.random() * i--); 
                    [arr[j], arr[i]] = [arr[i], arr[j]]; 
                } 
        } ,
        randomInit(val){
            let v = val || 100
            return Math.floor(Math.random()*v)
        },
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
                        data:this.chartDomData1
                    },
                    
                ]
            }
            this.chartDom1 = this.echarts.init(document.querySelector(`#chartDom1`))
            this.chartDom1.setOption(option)
            },
    }
}
</script>
<style scoped>

</style>
