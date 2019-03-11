<template>
    <div>
        <br>
        <div style="padding:20px;background:#fff;">
            <p>项目列表</p>
            <table border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%;font-size:14px;color:#646464;text-align:center;line-height:50px;">
                            <tr style="border-bottom:2px solid #c3c6c8;">
                                <th style="">项目名称</th>
                                <th>PC/Mobile</th>
                                <th>项目描述</th>
                                <th>运用技术栈</th>
                                <th>项目周期/(多少月)</th>
                                
                            </tr>
                            <tr style="border-bottom:1px solid #d3d6d8;">
                                <td>CDMS</td>
                                <td>PC</td>
                                <td>水军监测平台</td>
                                <td>Vue,Element,Vue-router</td>
                                <td>5</td>
                            </tr>
                            <tr style="border-bottom:1px solid #d3d6d8;">
                                <td>JDP问卷调研</td>
                                <td>Mobile</td>
                                <td>移动端问卷调研项目</td>
                                <td>Vue,Vue-router,Vuex</td>
                                <td>5</td>
                            </tr>
                            <tr style="border-bottom:1px solid #d3d6d8;">
                                <td>Dashboard</td>
                                <td>PC</td>
                                <td>百威Dashboard</td>
                                <td>Vue,Element,Vue-router,Echarts</td>
                                <td>5</td>
                            </tr>
                            <tr style="border-bottom:1px solid #d3d6d8;">
                                <td>后台管理平台</td>
                                <td>PC</td>
                                <td>后台管理平台</td>
                                <td>Vue,Element,Vue-router,Echarts,Vuex</td>
                                <td>5</td>
                            </tr>
                        </table>

            
            </div>
            <br>
            <div style="padding:20px;background:#fff;">
            <p>前端技能</p>
            <div style="height:400px;" id="chartDom0">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'work',
    data(){
        return {
            chartDom0:null,
            TreeData:[
                {name:'web前端', symbolSize: 20,des:'web前端'},
                {name:'Vue'},{name:'Vuex'},{name:'Vue-router'},{name:'Element'},{name:'Mint-ui'},
                {name:'HTML'},{name:'DOM'},
                {name:'JavaScript'},{name:'ES6'},{name:'OOP'},{name:'Window'},{name:'async/await'},{name:'Object'},
                {name:'CSS'},{name:'less'},{name:'sass'},
                {name:'React'},
                {name:'Redux'},{name:'组件化'}
            ],
            LinksData:[
                {source:'Vue',target:'web前端',des:'技术栈'},{source:'Vuex',target:'Vue'},{source:'Vue-router',target:'Vue'},{source:'Element',target:'Vue'},{source:'Mint-ui',target:'Vue'},
                {source:'HTML',target:'web前端',des:'技术栈'},{source:'DOM',target:'HTML'},
                {source:'JavaScript',target:'web前端',des:'技术栈'},{source:'ES6',target:'JavaScript'},{source:'OOP',target:'JavaScript'},{source:'Window',target:'JavaScript'},{source:'async/await',target:'JavaScript'},{source:'Object',target:'JavaScript'},
                {source:'CSS',target:'web前端',des:'技术栈'},{source:'less',target:'CSS'},{source:'sass',target:'CSS'},
                {source:'React',target:'web前端',des:'技术栈'},{source:'Redux',target:'React'},{source:'组件化',target:'React'}


            ]
        }
    },
    mounted(){
        this.chartsMap_F_Init()
    },
    methods:{
        chartsMap_F_Init(){
            this.MapLoading = true
            let option = {
                title: { text: '' },
                tooltip: {
                    formatter: function (x) {
                        return x.data.des;
                    }
                },
                // animation:false,
                // animationThreshold:1,
                // animationDuration:params=>1,
                series: [
                    {
                        // animation:false,
                        // animationThreshold:1,
                        // animationDuration:params=>1,
                        type: 'graph',
                        layout: 'force',
                        symbolSize: 15,
                        roam: true,
                        edgeSymbol: ['circle', 'arrow'],
                        // edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        force: {
                            repulsion: 450,
                            edgeLength: [10, 50],
                            // layoutAnimation:false
                            // initLayout:'circular'
                        },
                        draggable: true,   ///节点是否可拖拽，只在使用力引导布局的时候有用。
                        itemStyle: {
                            normal: {
                                color: '#c3dfaa'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: '#a3f6af'

                            }
                        },
                        edgeLabel: {
                            normal: {
                                show: true,
                                formatter: function (x) {
                                    // return x.data.name;
                                    console.log(x,'xxxx')
                                    return ""
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                },
                                // formatter:function(x){
                                //     console.log(x,"label")

                                // }
                            }
                        },
                        color:['red','blue','yellow'],
                    data:this.TreeData,
                    links:this.LinksData
          
                    }
                ]
            };
            this.chartDom0 = this.echarts.init(document.querySelector("#chartDom0"))
            this.chartDom0.setOption(option)
           
        },
    }
}
</script>
<style scoped>

</style>
