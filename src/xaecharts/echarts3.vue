<template>
  <div class="myecharts3" >
  <div id="echarts33" :style="{width: '100%', height: '100%'}" style="margin:0% auto"></div>
  </div>
</template>
<script>
	import echarts from 'echarts'
	//import china from '@/robotjs/china.json'
	import china from '@/robotjs/guangdong.json'
	echarts.registerMap('china', china)
export default {
	mounted() {
	        this.drawLine();
	    },
	methods:{
		drawLine(){
			// 基于准备好的dom，初始化echarts实例
			var myChartContainer = document.getElementById('echarts33');       
			var resizeMyChartContainer = function(){
			  myChartContainer.style.width=(document.body.offsetWidth)/2+'px'//页面一半的大小
			} 
			 resizeMyChartContainer();
			var myChartChina = this.$echarts.init(myChartContainer); 
	
			function randomData() {  
					return Math.round(Math.random()*500);  
				} 
			// 绘制图表
		   var optionMap = {  
			   /* backgroundColor: {
			           type: 'linear',
			           x: 0,
			           y: 0,
			           x2: 1,
			           y2: 1,
			           colorStops: [{
			               offset: 0, color: '#0f378f' // 0% 处的颜色
			           }, {
			               offset: 1, color: '#0f378f' // 100% 处的颜色
			           }],
			           globalCoord: false // 缺省为 false
			       }, */
				   color:'red',
				  tooltip: {},
					 legend: {
								orient: 'vertical',
								left: 'left',
								data:['']
							},      
					visualMap: {
								min: 0,
								max: 1500,
								left: '10%',
								top: 'bottom',
								text: ['高','低'],
								calculable : true,
								color:['#0b50b9','#c3e2f4']
					},   
					 selectedMode: 'single',
					 geo: [
					       {
					         // 地理坐标系组件
					         map: "china",
					         zoom: 5, //当前视角的缩放比例
					             roam: true, //是否开启平游或缩放
					             scaleLimit: { //滚轮缩放的极限控制
					               min: 5,
					               max: 10
					         } ,
					         aspectScale: 0.8, // 比例
					         layoutCenter: ["120%", "68%"], // position位置
					         layoutSize: 370, // 地图大小，保证了不超过 370x370 的区域
					         label: {
					           // 图形上的文本标签
					           normal: {
					             show: true,
					             textStyle: {
					               color: "#fff",
					               fontSize: '10'
					             }
					           },
					           emphasis: { // 高亮时样式
					             color: "red"
					           }
					         },
							 regions: [
								 {
								   name: "南海诸岛",
								   value: 0,
								   itemStyle: {
									 normal: {
									   opacity: 0,
									   label: {
										 show: false
									   }
									 }
								   }
								 }
							 ],
					         geoIndex:0,
					         itemStyle: {
								normal:{
									borderColor: '#3087d6',
									areaColor: '#add1ed'
								},
								emphasis: {
									show:true,
								    areaColor: '#ccc'
								}
							}
					       }
					     ],
					 series : [                         
								{
								  name: '', 
								  type: 'map',
								}
							]
				   }
		 
			myChartChina.setOption(optionMap);
			myChartChina.on('click', function (params) {
			            alert(params.name);
			});
			window.onresize=function(){
				resizeMyChartContainer();
				myChartChina.resize();
			}
	              
	      }
	}
	  
};
</script>