<template>
	<div class="echarts7s">
		<div id="myChart77" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'myChart7',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart7 = this.$echarts.init(document.getElementById('myChart77'))
		        // 绘制图表
		        myChart7.setOption({
		        	color:'#e2646f',
		        	tooltip: {
				        trigger: 'axis',
				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        axisLabel: {
					        textStyle: {
					          color: '#fd4841',  //更改坐标轴文字颜色
					          fontSize : 14      //更改坐标轴文字大小
					        }
				        },
						axisLine: {
							show: true,
							lineStyle: {
								color: "#cccccc",
								width: 1,
								type: "solid"
							}
						}
				    },
				    yAxis: {
				        type: 'category',
				        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
				        axisLabel: {
					        textStyle: {
					          color: '#fd4841',  //更改坐标轴文字颜色
					          fontSize : 14      //更改坐标轴文字大小
					        }
				        },
						axisLine: {
							show: true,
							lineStyle: {
								color: "#cccccc",
								width: 1,
								type: "solid"
							}
						}
				    },
				    series: [
				        {
				            name: '直接访问',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                show: true,
				                position: 'insideRight'
				            },
				            data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390]
				        },
				
				        
				    ],
	                grid: {
	                	y: 30,
	                },
		    });
		    window.onresize = function(){
			    myChart7.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">

</style>