<template>
	<div>
		<div id="myChartdemo" :style="{width: '100%', height: '100%'}" style="margin:0% auto"></div>
	</div>
</template>
  <script>
	import echarts from 'echarts'
	import china from '@/robotjs/china.json'
	echarts.registerMap('china', china)
    export default{
		name:'demo',
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine(){
				let myChart = this.$echarts.init(document.getElementById('myChartdemo'))
				function randomData() {
				    return Math.round(Math.random()*100);
				}
				var data = [
					{name: '库尔勒'},
					{name: '齐齐哈尔'}, 
					{name: '盐城'}, 
					{name: '青岛'}, 
					{name: '金昌'}, 
					{name: '泉州'}, 
					{name: '拉萨'}, 
					{name: '上海浦东'}, 
					{name: '攀枝花'}, 
					{name: '威海'}, 
					{name: '承德'}, 
					{name: '汕尾'}, 
					{name: '克拉玛依'}, 
					{name: '重庆市'},
					{name: '北京市'}
				];
				var geoCoordMap = {
				    '齐齐哈尔': [123.97, 47.33],
					'库尔勒':[86.06,41.68],
				    '盐城': [120.13, 33.38],
				    '青岛': [120.33, 36.07],
				    '金昌': [102.188043, 38.520089],
				    '泉州': [118.58, 24.93],
				    '拉萨': [91.11, 29.97],
				    '上海浦东': [121.48, 31.22],
				    '攀枝花': [101.718637, 26.582347],
				    '威海': [122.1, 37.5],
				    '承德': [117.93, 40.97],
				    '汕尾': [115.375279, 22.786211],
				    '克拉玛依': [84.77, 45.59],
				    '重庆市': [108.384366, 30.439702],
				    '北京市': [116.4551,40.2539]
				};
				var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
				
				var dataFrom = '北京市';
				var convertData = function(data) {
				    var res = [];
				    for (var i = 0; i < data.length; i++) {
				        var geoCoord = geoCoordMap[data[i].name];
				        if (geoCoord) {
				            res.push({
				                name: data[i].name,
				                value: geoCoord.concat(data[i].value)
				            });
				        }
				    }
				    return res;
				};
				var option = {
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
				    title: {
				        text: '',
				        subtext: '',
				        itemGap: 0,
				        left: 'center',
				        textStyle: {
				            color: '#1a1b4e',
				            fontStyle: 'normal',
				            fontWeight: 'bold',
				            fontSize: 10
				        },
				        subtextStyle: {
				            color: '#58d9df',
				            fontStyle: 'normal',
				
				            fontWeight: 'bold',
				            fontSize: 16
				        }
				    },
				    tooltip: {
				        trigger: 'item'
				    },
				    visualMap: {
				        min: 0,
				        max: 100,
				        left: 'left',
				        top: 'bottom',
				        text: ['高', '低'],
				        calculable: true,
				        inRange: {
				            color:['#b3d5ef','#97bfe6']
				        }
				    },
				    toolbox: {
				        show: true,
				        orient: 'vertical',
				        left: 'right',
				        top: 'center',
				        feature: {
				            dataView: {
				                readOnly: false
				            },
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				
				
				    geo: {
						map: 'china',
				        zoom: 1.5, //当前视角的缩放比例
				        //roam: 'scale', //是否开启平游或缩放
				        roam:true,
				        scaleLimit: { //滚轮缩放的极限控制
				              min: 1.5,
				              max: 10
				        } ,
				        label: {
				            normal: {
				
				                show: true,
				                color: 'red'
				            },
				            emphasis: {
				                show: false,
				                color: '#292929'
				            }
				        },
				        roam: true,
				        itemStyle: {
				            normal: {
				                areaColor: '#add1ed',
				                borderColor: '#6582a3',
				                shadowColor: '#1773c3',
				                shadowBlur: 0
				
				            },
				            emphasis: {
								show:true,
				                areaColor: '#ccc'
				            }
				        }
				    },
				    series: [
				        {
				        name: '',
				        type: 'lines',
				        zlevel: 2,
				        symbolSize: 10,
				        effect: {
				            show: true,
				            period: 6,
				            symbol: planePath,
				            trailLength: 0,
				            symbolSize: 10
				           
				        },
				        lineStyle: {
				            normal: {
				                color:'red',
				                width: 1,
				                opacity:0.2,
				                curveness:0.2
				            }
				        },
				        data: data.map(function (dataItem) {
				            return {
				                fromName: dataFrom,
				                toName: dataItem.name,
				                coords: [
				                    geoCoordMap[dataFrom],
				                    geoCoordMap[dataItem.name]
				                ]
				            }
				        }) 
				    },
					{
				        name: '',
				        type: 'effectScatter',
				        coordinateSystem: 'geo',
				        data: convertData(data),
				        symbolSize: 10,
				        showEffectOn: 'render',
				        rippleEffect: {
				            scale: 1,
				            brushType: 'stroke'
				        },
				        
				       
				        hoverAnimation: true,
				        label: {
				            normal: {
				                formatter: '{b}',
				                position: 'right',
				                show: true
				            },
				            emphasis: {
				                show: true
				            }
				        },
				        itemStyle: {
				            normal: {
				                color: 'red',
				                shadowBlur: 20,
				                shadowColor: '#333'
				            }
				        }
				    }, 
					/* {
				        type: 'map',
				        mapType: 'china',
				        geoIndex: 0,
				        label: {
				            normal: {
				                show: true
				            },
				            emphasis: {
				                show: true
				            }
				        },
				        data: []
				    }, */
					]
				};
				
				
				myChart.setOption(option);
				myChart.on('click', function (params) {
					var chinaarr=china.features;
					var goods2;
					for(var i=0;i<chinaarr.length;i++){
						if(chinaarr[i].properties.name==params.name){
							var cityId = chinaarr[i].id;
							console.log(cityId)
							goods2 = require("../../static/json/map/"+cityId+".json");
						}
					}
					console.log(goods2)
				});
			}
        }
    };
</script>
<style>
	
 </style>



