<template>
	<div class="echarts5s">
		<div id="myChart55" :style="{width: '50%', height: '100%'}" style="float: left;"></div>
		<div id="myChart552" :style="{width:'50%',height:'100%'}"  style="float: left;"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'echarts5',
		mounted(){
		    this.drawLine();
			this.drawLine2()
		},
		methods: {
		    drawLine(){
				let dataPie = [{value: 410}];
				let colorPie = ['#173852', '#0b2036', '#002e49'];
				let colorWrap = ['#3087d6', '#afe1ff', '#4be1ff'];
				let baseDataPie = [],
				    baseDataWrap = [];
				for (var i = 0; i < dataPie.length; i++) {
				    baseDataPie.push({
				        value: dataPie[i].value,
				        name: dataPie[i].name,
				        itemStyle: {
				            normal: {
				                borderWidth: 50,
				
				                borderColor: colorPie[i],
				
				            }
				        }
				    });
				    baseDataWrap.push({
				        value: dataPie[i].value,
				        name: dataPie[i].name,
				        itemStyle: {
				            normal: {
				                color: colorWrap[i],
				                borderWidth: 10,
				                borderColor: colorWrap[i],
				                shadowBlur: 5,
				                shadowColor: 'rgba(48, 135, 214, 0.3)',
				            }
				        }
				    }, {
				        value: 10,
				        name: '',
				        itemStyle: {
				            normal: {
				                color: 'transparent',
				                borderWidth: 10,
				                borderColor: 'transparent',
				
				            }
				        }
				    });
				}
		        // 基于准备好的dom，初始化echarts实例
		        let myChart55 = this.$echarts.init(document.getElementById('myChart55'))
		        // 绘制图表
		        myChart55.setOption({
		        	title: {
						text: '机器人总数',
						subtext: '10,225',
						textStyle: {
							color: '#00b5f3',
							fontSize: 12,
							
						},
						subtextStyle: {
							align: 'center',
							fontSize: 12,
							color: ['#85c7e3'],
							fontWeight:800
						},
						x: '26%',
						y: 'center',
					},
					tooltip: {
						show: true,
						trigger: 'item',
						formatter: "{a}：{b} <br/>占比：{d}%"
					},
					legend: {
						icon: 'vertical',
						right: '1%',
						top: 'center',
						orient: 'vertical',
				
						formatter: function(name) {
							let target;
							for (let i = 0; i < dataPie.length; i++) {
								if (dataPie[i].name === name) {
									target = dataPie[i].value
								}
							}
							let arr = [name, target];
							return arr.join("\n")
				
						},
						textStyle: {
							lineHeight: 20,
							color: '#9ed2f5',
				
						},
					},
					series: [
						{
							name: '',
							type: 'pie',
							clockWise: false, //顺时加载
							hoverAnimation: false, //鼠标移入变大
							center: ['40%', '50%'],
							radius: ['80%', '80%'],
							tooltip: {
								show: false
							},
							label: {
								normal: {
									show: false
								}
							},
							data: baseDataWrap
						},
						{
				
							name: '机器人总数',
							type: 'pie',
							color: colorPie,
							selectedMode: 'single',
							radius: ['30%', '30%'],
							center: ['40%', '50%'],
							hoverAnimation: false,
							label: {
								normal: {
									show: false,
								}
							},
				
							data: baseDataPie
						},
				
					],
	                grid: {
	                	y: 100
	                },
		    	});
				window.onresize = function(){
					myChart55.resize();
				}
			},
			drawLine2(){
				let data = [{value: 410}];
				let color = ['#1DB7E5', '#FBFE27', '#1DB7E5'];
				let data1 = data[0].value;
				let baseData = [];
				for (var i = 0; i < data.length; i++) {
				    baseData.push({
				        value: data[i].value,
				        name: data[i].name,
				        itemStyle: {
				            normal: {
				                borderWidth: 6,
				                shadowBlur: 50,
				                borderColor: color[i],
				                shadowColor: 'rgba(0, 0, 0, 0.8)'
				            }
				        }
				    });
				}
				let myChart552 = this.$echarts.init(document.getElementById('myChart552'));
				// 绘制图表
				myChart552.setOption({
					title: {
						text: '',
						textStyle: {
							color: '#fff',
							fontSize: 55,
						},
						top: '15%',
						left: '15%',
					},
					color: color,
					tooltip: {
						show:true,
						trigger: 'item',
						formatter: "{a}：{b} <br/>占比：{d}%"
					},
					legend: {
						data: ['国家下发', '部门上报', '平台生产'],
						icon: 'circle',
						bottom: '10%',
					},
					grid: {
						top: 'bottom',
						left: '90',
						width: '90%',
						height: '80%',
				
					},
					series: [{
							zlevel: 1,
							name: '数据采集',
							type: 'pie',
							selectedMode: 'single',
							radius: [80, 80],
							startAngle: '135',
							hoverAnimation: false,
							label: {
								normal: {
									show: false,
									formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
									rich: {
										b: {
											fontSize: 16,
											lineHeight: 30
										}
				
									}
								}
							},
							itemStyle: {
								normal: {
									shadowColor: 'rgba(0, 0, 0, 0.8)',
									shadowBlur: 50,
								}
							},
							data: baseData
						},
						{
							name: '',
							type: 'pie',
							selectedMode: 'single',
							radius: [80,80],
							startAngle: '135',
							data: [{
								"value": data1,
								"name": "",
								"label": {
									"normal": {
										"show": true,
										"formatter": '{c|{c}} {b|万条} '+'\n'+'{a|累计接入数}',
										rich: {
											c: {
												color: '#FBFE27',
												fontSize: 12,
												fontWeight: 'bold',
												lineHeight: 10
											},
											b: {
												color: '#FBFE27',
												fontSize: 12,
												lineHeight: 5
											},
											a: {
												align: 'center',
												color: 'rgb(98,137,169)',
												fontSize: 12,
												height: 10
											},
										},
										"textStyle": {
											"fontSize": 28,
											"fontWeight": "bold"
										},
										"position": "center"
				
									}
								}
							}, ]
						}
					],
					grid:{
						y:0
					}
				});
				window.onresize = function(){
					myChart552.resize();
				}
			}
		}
	}
</script>

<style scoped="scoped">

</style>