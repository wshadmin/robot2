<template>
	<div class="echarts22">
		<div id="myChart22" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'echarts2',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart2 = this.$echarts.init(document.getElementById('myChart22'))
		        // 绘制图表
		        myChart2.setOption({
		        	color: ['#c23531','#2f4554', '#61a0a8'],
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
				        //type: 'value'
				        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
				        type: 'value',
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
				        //data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
				            data: [320, 302, 301, 334, 390, 330, 320],
		                    itemStyle: {
		                        normal: {
		                            color: '#4b97d3',
		                             
		                        }
		                    }
				        },
				        {
				            name: '邮件营销',
				            type: 'bar',
				            stack: '总量',
				            label: {
				                show: true,
				                position: 'insideRight'
				            },
				            data: [120, 132, 101, 134, 90, 230, 210],
		                    itemStyle: {
		                        normal: {
		                            color: '#8ea2bb'
		                        }
		                    }
				        }
				    ],
	                grid: {
	                	y: 30,
	                },
		    });
		    window.onresize = function(){
			    myChart2.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">

</style>