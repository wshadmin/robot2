<template>
	<div class="echarts1">
		<div id="myChart1" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'echarts1',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
		        // 绘制图表
		        var option={
			        xAxis: {
				        type: 'category',
				        //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				        axisLabel: {
					        textStyle: {
					          color: '#0269bf',  //更改坐标轴文字颜色
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
				    	axisLabel: {
					        textStyle: {
					          color: '#0269bf',  //更改坐标轴文字颜色
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
				    series: [{
				        symbolSize: 6,
				        itemStyle:{
			            normal:{
			                color:'#0269bf',
			                shadowColor:'#83bff6',
			                shadowBlur:3,
			                shadowOffsetX:1,
			                shadowOffsetY:2,
			                label: {
	                           show: true,		//开启显示
	                           position: 'top',	//在上方显示
	                           textStyle: {	    //数值样式
	                               color: '#44a3d1',
	                               fontSize: 12
	                           }
	                        }
			            }
			        },
				        data: [
				            [10.0, 8.04],
				            [8.0, 6.95],
				            [13.0, 7.58],
				            [9.0, 8.81],
				            [11.0, 8.33],
				            [14.0, 1.96],
				            [6.0, 7.24],
				        ],
				        type: 'scatter'
				    }],
	                grid: {
	                	y: 10,
	                },
		    };
			myChart1.setOption(option);
		    window.onresize = function(){
			    myChart1.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">

</style>