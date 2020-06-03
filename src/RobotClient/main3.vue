<template>
	<div class="main3s">
		<div id="main3" :style="{width: '100%', height: '100%'}"></div>
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
		        let main3 = this.$echarts.init(document.getElementById('main3'))
		        // 绘制图表
		        main3.setOption({
			        backgroundColor: '#021746',					tooltip: {},					animationDurationUpdate: function(idx) {						// 越往后的数据延迟越大						return idx * 100;					},					animationEasingUpdate: 'bounceIn',					color: ['#fff', '#fff', '#fff'],					series: [{						type: 'graph',						layout: 'force',						force: {							repulsion: 20,							edgeLength: 10						},						roam: true,						label: {							normal: {								show: true							}						},						data: [{							"name": "人脸抓拍",							"value": 10000,							"symbolSize": 70,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(27, 94, 93)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(27, 94, 93)",									"color": "rgb(27, 94, 93)"								}							}						}, {							"name": "人脸比对",							"value": 6181,							"symbolSize": 70,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(206, 188, 11)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(206, 188, 11)",									"color": "rgb(206, 188, 11)"								}							}						}, {							"name": "IMSI",							"value": 4055,							"symbolSize": 70,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(98, 41, 72)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(98, 41, 72)",									"color": "rgb(98, 41, 72)"								}							}						}, {							"name": "WIFI",							"value": 2467,							"symbolSize": 70,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(175, 20, 143)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(175, 20, 143)",									"color": "rgb(175, 20, 143)"								}							}						}, {							"name": "",							"value": 2244,							"symbolSize": 30,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(77, 231, 55)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(77, 231, 55)",									"color": "rgb(77, 231, 55)"								}							}						},{						"name": " ",						"value": 10000,						"symbolSize": 50,						"draggable": true,						"itemStyle": {							"normal": {								"borderColor": "rgb(27, 94, 93)",								"borderWidth": 4,								"shadowBlur": 100,								"shadowColor": "rgb(27, 94, 93)",								"color": "rgb(27, 94, 93)"							}						}						},{							"name": "事件总数",							"value": 4386,							"symbolSize": 70,							"draggable": true,							"itemStyle": {								"normal": {									"borderColor": "rgb(77, 231, 55)",									"borderWidth": 4,									"shadowBlur": 100,									"shadowColor": "rgb(77, 231, 55)",									"color": "rgb(77, 231, 55)"								}							}						}]					}],
	                grid: {
	                	y: 60,
	                },
		    });
		    window.onresize = function(){
			    main3.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
