<template>
	<div class="main5s" style="height:100%;">
		<div id="main5" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'main4',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let main5 = this.$echarts.init(document.getElementById('main5'))
		        // 绘制图表
		        main5.setOption({
			        color: ['#62e0a3'],
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['北京', '天津', '新疆', '河北', '河南', '广东', '湖南','浙江', '四川'],
				            axisTick: {
				                alignWithLabel: true
				            },
					        axisLabel: {
						        textStyle: {
						          color: '#cccccc',  //更改坐标轴文字颜色
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
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
					        axisLabel: {
						        textStyle: {
						          color: '#cccccc',  //更改坐标轴文字颜色
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
				        }
				    ],
				    series: [
				        {
				            name: '直接访问',
				            type: 'bar',
				            barWidth: '60%',
				            data: [10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220],
							itemStyle: {
							    normal: {
									label: {
										formatter: "{c}"+"",
										show: true,
										position: "top",
										textStyle: {
											fontWeight: "bolder",
											fontSize: "12",
											color: "#43cea6"
										}
									}
								} 
							}
				        }
				    ],
	                grid: {
	                	y: 60,
	                },
		    });
		    window.onresize = function(){
			    main5.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
