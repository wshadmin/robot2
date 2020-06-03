<template>
	<div class="unit4s">
		<div id="unit4" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'unit4',
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
		        let unit4 = this.$echarts.init(document.getElementById('unit4'))
		        // 绘制图表
		        unit4.setOption({
			        tooltip: {
			                trigger: 'axis',
			                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
			                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			                }
			            },
			            legend: {
			                data:['事件', '抓拍', '比对', 'IMSI', 'WIFI']
			            },
			            xAxis: [
			                {
			                    type: 'category',
			                    data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
			                }
			            ],
			            yAxis: [
			                {
			                    type: 'value',
			                    min: 0,
			                    max: 1.2,
			                }
			            ],
			            series: [
			                {
			                    name: '事件',
			                    type: 'bar',
			                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,0,0,0.6,0]
			                },
			                {
			                    name: '抓拍',
			                    type: 'bar',
			                    stack: '广告',
			                    data: [0,0,0,0,0,0,0,0.2,0.4,0.6,0,0,0,0,0,0,0,0,0.2,0,0,0,0.2,0]
			                },
			                {
			                    name: '比对',
			                    type: 'bar',
			                    stack: '广告',
			                    data: [1,0.2,0,0,0,0,0,0.2,0.4,0,0.8,0.6,1.2,0,0,0,0,0,0.2,0,0,0,0.1,0]
			                },
			                {
			                    name: 'IMSI',
			                    type: 'bar',
			                    barWidth: 5,
			                    stack: '搜索引擎',
			                    data: [0,0,0,0,0,0,0,0.2,0.4,0.6,0.8,0.6,1.2,0,0,0,0,0,0.2,0,0,0,0.6,0]
			                },
			                {
			                    name: 'WIFI',
			                    type: 'bar',
			                    stack: '搜索引擎',
			                    data: [0,0,0,0,0,0,0,0.2,0.4,0.6,0,0.6,0,0,0,0,0,0,0.2,0,0,0,0.6,0]
			                },
			            ],
	                grid: {
	                	y: 60,
	                },
		    });
		    window.onresize = function(){
			    unit4.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
