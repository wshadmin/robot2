<template>

    
  <div class="box" >
  <div id="mapChart" :style="{width: '100%', height: '100%'}" style="margin:0% auto"></div>
  </div>
</template>

<script>
import cityMap from "@/robotjs/china-main-city-map.js";
import echarts from "echarts";
import axios from "axios";
	var chinaId = 100000;
	var chinaName = "china";
	var chinaJson = null;

	//记录父级ID、Name
	var mapStack = [];
	var parentId = null;
	var parentName = null;

	//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
	var myChart = null;
	var myData = [
	
		{name: '海门', value: [121.15, 31.89, 90]},
	  	{name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
	  	{name: '招远', value: [120.38, 37.35, 142]},
	    {name: '舟山', value: [122.207216, 29.985295, 123]},
	]
	export default {
		name: "chinaMap",
		mounted: function() {
			this.mapChart("mapChart");
		},
		methods: {
			mapChart(divid) {
			  //axios.get("./static/json/map/" + chinaId + ".json", {}).then(response => {
				var good="../../static/json/map/"+chinaId+".json";
				var goods = require("../../static/json/map/"+chinaId+".json");
				console.log(goods)
				const mapJson = goods;
				chinaJson = mapJson;
				myChart = echarts.init(document.getElementById(divid));
				registerAndsetOption(myChart, chinaId, chinaName, mapJson, false);
				parentId = chinaId;
				parentName = "china";
				myChart.on("click", function(param) {
					
				  var cityId = cityMap[param.name];
				  console.log(cityId)
				  if (cityId !=undefined) {
					//代表有下级地图
					var good2="../../static/json/map/"+cityId+".json";
					console.log(good2)
					var goods2 = require("../../static/json/map/"+cityId+".json");
					console.log(goods2)
					//axios.get("./static/json/map/" + cityId + ".json", {}).then(response => {
						const mapJson = goods2;
						registerAndsetOption(
						  myChart,
						  cityId,
						  param.name,
						  mapJson,
						  true
						);
					//});
				  } else {
					//没有下级地图，回到一级中国地图，并将mapStack清空
					registerAndsetOption(myChart, chinaId, chinaName, chinaJson, false);
					mapStack = [];
					parentId = chinaId;
					parentName = chinaName;
				  }
				  cityId='';
				  goods2='';
				});
			}
		}
	};
	function randomData() {  
		return Math.round(Math.random()*500);  
	} 
	function registerAndsetOption(myChart, id, name, mapJson, flag) {
	echarts.registerMap(name, mapJson);
		myChart.setOption({
			backgroundColor: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 1,
					y2: 1,
					colorStops: [{
						offset: 0, color: '#0f378f' // 0% 处的颜色
					}, {
						offset: 1, color: '#00091a' // 100% 处的颜色
					}],
					globalCoord: false // 缺省为 false
				},
				//tooltip: {},
				 legend: {
							orient: 'vertical',
							left: 'left',
							data:['']
						},      
				 visualMap: {
						min: 0,
						max: 0,
						left: '10%',
						top: 'bottom',
						text: ['高','低'],
						calculable : true,
						color:['#9dc4e8','#bddef2']
				},   
				 selectedMode: 'single', 
			series: [
				{
					type: "map",
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},
					zoom: 1.4, //当前视角的缩放比例
						//roam: true, //是否开启平游或缩放
						scaleLimit: { //滚轮缩放的极限控制
						  min: 1,
						  max: 10
					} ,
					map: name,
					itemStyle: {
						normal:{
							borderColor: 'rgba(0, 0, 0, 0.2)'
						},
						emphasis:{
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 20,
							borderWidth: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					showLegendSymbol: true,
					label: {
						normal: {
							show: true
						},
						emphasis: {
							show: true
						}
					},
					data: initMapData(mapJson)
				}
			],
		});

		if (flag) {
			//往mapStack里添加parentId，parentName,返回上一级使用
			mapStack.push({
			  mapId: parentId,
			  mapName: parentName
			});
			parentId = id;
			parentName = name;
		}
	}

	function initMapData(mapJson) {
		var mapData = [];
		for (var i = 0; i < mapJson.features.length; i++) {
			mapData.push({
			  name: mapJson.features[i].properties.name,value: randomData()
			});
		}
		return mapData;
	}
</script>


<style scoped>

</style>
