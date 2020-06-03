<template>
	<div class="echarts6s">
		<div id="myChart66" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'echarts6',
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart66 = this.$echarts.init(document.getElementById('myChart66'))
		        // 绘制图表
		        myChart66.setOption({
		        	title: {
				        text: '',
				        subtext: '',
				        left: 'center'
				    },
				    tooltip: {
				        trigger: 'item',
				        formatter: '{a} <br/>{b} : {c} ({d}%)'
				    },
				    /*legend: {
				        left: 'center',
				        top: 'bottom',
				        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
				    },*/
				    toolbox: {
				        show: true,
				        feature: {
				            mark: {show: true},
				            dataView: {show: true, readOnly: false},
				            magicType: {
				                show: true,
				                type: ['pie', 'funnel']
				            },
				            restore: {show: true},
				            saveAsImage: {show: true}
				        }
				    },
				    series: [
				        {
				            name: '面积模式',
				            type: 'pie',
				            radius:'60%',
//				            radius: [16, 60],
				            center: ['50%', '50%'],
				            roseType: 'area',
				            data: [
				                {value: 10, name: 'rose1'},
				                {value: 5, name: 'rose2'},
				                {value: 15, name: 'rose3'},
				                {value: 25, name: 'rose4'},
				                {value: 20, name: 'rose5'},
				                {value: 35, name: 'rose6'},
				                {value: 30, name: 'rose7'},
				                {value: 40, name: 'rose8'}
				            ]
				        }
				    ],
	                grid: {
	                	y: 100,
	                },
		    	});
		    window.onresize = function(){
			    myChart66.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">

</style>