<template>
	<div class="main7s">
		<div id="main7" :style="{width: '100%', height: '100%'}"></div>
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
		        let main7 = this.$echarts.init(document.getElementById('main7'));
				//var grade = ['涉嫌','涉恐','涉毒','在逃','上访', ]
				var myColor = ['#08cca2', '#fac46e', '#64ccf3', '#fb9996', '#36a3f7'];
		        // 绘制图表
		        main7.setOption({
			        backgroundColor: '#05274C',
			        xAxis: [{
			                show: false,
			            }],
			            yAxis: [{
			                axisTick: 'none',
			                axisLine: 'none',
			                offset: '27',
			                axisLabel: {
			                    textStyle: {
			                        color: '#777',
			                        fontSize: '16',
			                    }
			                },
			                data: ['涉嫌','涉恐','涉毒','在逃','上访', ]
			            }, {
			                axisTick: 'none',
			                axisLine: 'none',
			                axisLabel: {
			                    textStyle: {
			                        color: '#777',
			                        fontSize: '16',
			                    }
			                },
			                data: ['100', '100', '100', '100', '100']
			            }, {
			                name: '',
			                nameGap: '50',
			                nameTextStyle: {
			                    color: '#777',
			                    fontSize: '16',
			                },
			                axisLine: {
			                    lineStyle: {
			                        color: 'rgba(0,0,0,0)'
			                    }
			                },
			                data: [],
			            }],
			            series: [{
			                    name: '条',
			                    type: 'bar',
			                    yAxisIndex: 0,
			                    data: [100, 13, 25, 29, 38],
			                    label: {
			                        normal: {
			                            show: true,
			                            position: '',
			                            textStyle: {
			                                color: '#777',
			                                fontSize: '16',
			                            }
			                        }
			                    },
			                    barWidth: 20,
			                    itemStyle: {
			                        normal: {
			                            color: function(params) {
			                                var num = myColor.length;
			                                return myColor[params.dataIndex % num]
			                            },
			                        }
			                    },
			                    z: 2
			                }, {
			                    name: '白框',
			                    type: 'bar',
			                    yAxisIndex: 1,
			                    barGap: '-100%',
			                    data: [99.5, 99.5, 99.5, 99.5, 99.5],
			                    barWidth: 20,
			                    itemStyle: {
			                        normal: {
			                            color: '#ffffff',
			                            barBorderRadius: 5,
			                        }
			                    },
			                    z: 1
			                }, {
			                    name: '外框',
			                    type: 'bar',
			                    yAxisIndex: 2,
			                    barGap: '-100%',
			                    data: [100, 100, 100, 100, 100],
			                    barWidth: 24,
			                    itemStyle: {
			                        normal: {
			                            color: function(params) {
			                                var num = myColor.length;
			                                return myColor[params.dataIndex % num]
			                            },
			                            barBorderRadius: 5,
			                        }
			                    },
			                    z: 0
			                }
			            ],
	                grid: {
						left: '24%',
	                	y: 20,
	                },
		    });
		    window.onresize = function(){
			    main7.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
