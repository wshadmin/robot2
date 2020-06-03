<template>
	<div class="unit2s">
		<div id="unit2" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'unit2',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
				var m2R2Data= [
					   {value:335, legendname:'种类01',name:"种类01  335",itemStyle:{color:"#8d7fec"}},
					   {value:310, legendname:'种类02',name:"种类02  310",itemStyle:{color:"#5085f2"}},
					   {value:234, legendname:'种类03',name:"种类03  234",itemStyle:{color:"#e75fc3"}},
					   {value:154, legendname:'种类04',name:"种类04  154",itemStyle:{color:"#f87be2"}},
					   {value:335, legendname:'种类05',name:"种类05  335",itemStyle:{color:"#f2719a"}},
					   {value:335, legendname:'种类06',name:"种类06  335",itemStyle:{color:"#fca4bb"}},
					   {value:335, legendname:'种类07',name:"种类07  335",itemStyle:{color:"#f59a8f"}},
					   {value:335, legendname:'种类08',name:"种类08  335",itemStyle:{color:"#fdb301"}},
					   {value:335, legendname:'种类09',name:"种类09  335",itemStyle:{color:"#57e7ec"}},
					   {value:335, legendname:'种类10',name:"种类10  335",itemStyle:{color:"#cf9ef1"}},   
					   {value:335, legendname:'种类09',name:"种类11  335",itemStyle:{color:"#57e7ec"}},
					   {value:335, legendname:'种类10',name:"种类12  335",itemStyle:{color:"#cf9ef1"}}, 
				];
		        // 基于准备好的dom，初始化echarts实例
		        let unit2 = this.$echarts.init(document.getElementById('unit2'))
		        // 绘制图表
		        unit2.setOption({
			        tooltip: {
			                trigger: 'item',
			                formatter: '{a} <br/>{b}: {c} ({d}%)'
			            },
			            legend: {
			                orient: 'vertical',
			                left: 10,
			                data: ['事件', '抓拍', '比对', 'IMSI', 'WIFI']
			            },
			            series: [
			                {
			                    name: '访问来源',
			                    type: 'pie',
			                    radius: ['50%', '70%'],
			                    avoidLabelOverlap: false,
			                    emphasis: {
			                        label: {
			                            show: true,
			                            fontSize: '30',
			                            fontWeight: 'bold'
			                        }
			                    },
			                    data: [
			                        {value: 335, name: '事件'},
			                        {value: 310, name: '抓拍'},
			                        {value: 234, name: '比对'},
			                        {value: 135, name: 'IMSI'},
			                        {value: 148, name: 'WIFI'}
			                    ]
			                }
			            ],
	                grid: {
	                	y: 60,
	                },
		    });
		    window.onresize = function(){
			    unit2.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
