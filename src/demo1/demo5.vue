<template>
  <div ref="map" class="map"></div>
</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import linesData from '../robotjs/lines-data.json'
import mapConfig from '../robotjs/map-config.json'

export default {
  name: 'Map',
  data () {
    return {
      chart: echarts.ECharts,
      bmap: {},
      linesSeries: [],
      scatterSeries: [],
      effectScatterSeries: [],
      mapZoom: 6,
      trainIcon: `path://M678.4 122.9c75.1-11.3 145.5 11.7 202.6 65.8 58 54.9 85.7 127.4 77.9 203.3-7.9 75-48.8 149-117.8 214.4-19.3 18.3-71 67.5-145.1 138.2-33.3 31.8-68.9 65.7-104.6 99.8l-34.8 33.1-13.8 13.2c-16.6 15.8-43 15.8-59.6 0L363.1 775.9l-25.4-24.2c-50.9-48.5-101.9-97-152.8-145.4C116 541 75 466.9 67.1 391.8c-7.9-76 19.9-148.3 77.9-203.3 57.1-54.1 127.6-77.1 202.6-65.8 55.8 8.5 112.3 35.4 165.4 78.5 53.2-43 109.7-70 165.4-78.3z`
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
  		var startPoint = {
  			x: 104.114129,
  			y: 37.550339
  		};
  		var bmap={ // 加载 bmap 组件
  			  center: [startPoint.x, startPoint.y],
  			  zoom: 6,
  			  roam: true,
  			  scaleLimit: { min: 6, max: 12 }, // echarts设置地图最小最大缩放比例的接口不起作用，要使用百度地图的接口设置
  			  mapStyle: {
  				styleJson: [{
  				            "featureType": "water",
  				            "elementType": "all",
  				            "stylers": {
  				                "color": "#044161"
  				            }
  				        }, {
  				            "featureType": "land",
  				            "elementType": "all",
  				            "stylers": {
  				                "color": "#add1ed"
  				            }
  				        }, {
  				            "featureType": "boundary",
  				            "elementType": "geometry",
  				            "stylers": {
  				                "color": "#064f85"
  				            }
  				        }, {
  				            "featureType": "railway",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "highway",
  				            "elementType": "geometry",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "highway",
  				            "elementType": "geometry.fill",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "highway",
  				            "elementType": "labels",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "arterial",
  				            "elementType": "geometry",
  				            "stylers": {
  				                "color": "#004981",
  				                "lightness": -39
  				            }
  				        }, {
  				            "featureType": "arterial",
  				            "elementType": "geometry.fill",
  				            "stylers": {
  				                "color": "#00508b"
  				            }
  				        }, {
  				            "featureType": "poi",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "green",
  				            "elementType": "all",
  				            "stylers": {
  				                "color": "#056197",
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "subway",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "manmade",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "local",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "arterial",
  				            "elementType": "labels",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "boundary",
  				            "elementType": "geometry.fill",
  				            "stylers": {
  				                "color": "#029fd4"
  				            }
  				        }, {
  				            "featureType": "building",
  				            "elementType": "all",
  				            "stylers": {
  				                "color": "#1a5787"
  				            }
  				        }, {
  				            "featureType": "label",
  				            "elementType": "all",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }, {
  				            "featureType": "poi",
  				            "elementType": "labels.text.fill",
  				            "stylers": {
  				                "color": "#ffffff"
  				            }
  				        }, {
  				            "featureType": "poi",
  				            "elementType": "labels.text.stroke",
  				            "stylers": {
  				                "color": "#1e1c1c"
  				            }
  				        }, {
  				            "featureType": "administrative",
  				            "elementType": "labels",
  				            "stylers": {
  				                "visibility": "on"
  				            }
  				        }, {
  				            "featureType": "road",
  				            "elementType": "labels",
  				            "stylers": {
  				                "visibility": "off"
  				            }
  				        }]
  			  }
  			};
  		var geoCoordMap = {
  		    '上海': [121.4648, 31.2891],
  		    '东莞': [113.8953, 22.901],
  		    '东营': [118.7073, 37.5513],
  		    '中山': [113.4229, 22.478],
  		    '临汾': [111.4783, 36.1615],
  		    '临沂': [118.3118, 35.2936],
  		    '丹东': [124.541, 40.4242],
  		    '丽水': [119.5642, 28.1854],
  		    '乌鲁木齐': [87.9236, 43.5883],
  		    '佛山': [112.8955, 23.1097],
  		    '保定': [115.0488, 39.0948],
  		    '兰州': [103.5901, 36.3043],
  		    '包头': [110.3467, 41.4899],
  		    '北京': [116.4551, 40.2539],
  		    '北海': [109.314, 21.6211],
  		    '南京': [118.8062, 31.9208],
  		    '南宁': [108.479, 23.1152],
  		    '南昌': [116.0046, 28.6633],
  		    '南通': [121.1023, 32.1625],
  		    '厦门': [118.1689, 24.6478],
  		    '台州': [121.1353, 28.6688],
  		    '合肥': [117.29, 32.0581],
  		    '呼和浩特': [111.4124, 40.4901],
  		    '咸阳': [108.4131, 34.8706],
  		    '哈尔滨': [127.9688, 45.368],
  		    '唐山': [118.4766, 39.6826],
  		    '嘉兴': [120.9155, 30.6354],
  		    '大同': [113.7854, 39.8035],
  		    '大连': [122.2229, 39.4409],
  		    '天津': [117.4219, 39.4189],
  		    '太原': [112.3352, 37.9413],
  		    '威海': [121.9482, 37.1393],
  		    '宁波': [121.5967, 29.6466],
  		    '宝鸡': [107.1826, 34.3433],
  		    '宿迁': [118.5535, 33.7775],
  		    '常州': [119.4543, 31.5582],
  		    '广州': [113.5107, 23.2196],
  		    '廊坊': [116.521, 39.0509],
  		    '延安': [109.1052, 36.4252],
  		    '张家口': [115.1477, 40.8527],
  		    '徐州': [117.5208, 34.3268],
  		    '德州': [116.6858, 37.2107],
  		    '惠州': [114.6204, 23.1647],
  		    '成都': [103.9526, 30.7617],
  		    '扬州': [119.4653, 32.8162],
  		    '承德': [117.5757, 41.4075],
  		    '拉萨': [91.1865, 30.1465],
  		    '无锡': [120.3442, 31.5527],
  		    '日照': [119.2786, 35.5023],
  		    '昆明': [102.9199, 25.4663],
  		    '杭州': [119.5313, 29.8773],
  		    '枣庄': [117.323, 34.8926],
  		    '柳州': [109.3799, 24.9774],
  		    '株洲': [113.5327, 27.0319],
  		    '武汉': [114.3896, 30.6628],
  		    '汕头': [117.1692, 23.3405],
  		    '江门': [112.6318, 22.1484],
  		    '沈阳': [123.1238, 42.1216],
  		    '沧州': [116.8286, 38.2104],
  		    '河源': [114.917, 23.9722],
  		    '泉州': [118.3228, 25.1147],
  		    '泰安': [117.0264, 36.0516],
  		    '泰州': [120.0586, 32.5525],
  		    '济南': [117.1582, 36.8701],
  		    '济宁': [116.8286, 35.3375],
  		    '海口': [110.3893, 19.8516],
  		    '淄博': [118.0371, 36.6064],
  		    '淮安': [118.927, 33.4039],
  		    '深圳': [114.5435, 22.5439],
  		    '清远': [112.9175, 24.3292],
  		    '温州': [120.498, 27.8119],
  		    '渭南': [109.7864, 35.0299],
  		    '湖州': [119.8608, 30.7782],
  		    '湘潭': [112.5439, 27.7075],
  		    '滨州': [117.8174, 37.4963],
  		    '潍坊': [119.0918, 36.524],
  		    '烟台': [120.7397, 37.5128],
  		    '玉溪': [101.9312, 23.8898],
  		    '珠海': [113.7305, 22.1155],
  		    '盐城': [120.2234, 33.5577],
  		    '盘锦': [121.9482, 41.0449],
  		    '石家庄': [114.4995, 38.1006],
  		    '福州': [119.4543, 25.9222],
  		    '秦皇岛': [119.2126, 40.0232],
  		    '绍兴': [120.564, 29.7565],
  		    '聊城': [115.9167, 36.4032],
  		    '肇庆': [112.1265, 23.5822],
  		    '舟山': [122.2559, 30.2234],
  		    '苏州': [120.6519, 31.3989],
  		    '莱芜': [117.6526, 36.2714],
  		    '菏泽': [115.6201, 35.2057],
  		    '营口': [122.4316, 40.4297],
  		    '葫芦岛': [120.1575, 40.578],
  		    '衡水': [115.8838, 37.7161],
  		    '衢州': [118.6853, 28.8666],
  		    '西宁': [101.4038, 36.8207],
  		    '西安': [109.1162, 34.2004],
  		    '贵阳': [106.6992, 26.7682],
  		    '连云港': [119.1248, 34.552],
  		    '邢台': [114.8071, 37.2821],
  		    '邯郸': [114.4775, 36.535],
  		    '郑州': [113.4668, 34.6234],
  		    '鄂尔多斯': [108.9734, 39.2487],
  		    '重庆': [107.7539, 30.1904],
  		    '金华': [120.0037, 29.1028],
  		    '铜川': [109.0393, 35.1947],
  		    '银川': [106.3586, 38.1775],
  		    '镇江': [119.4763, 31.9702],
  		    '长春': [125.8154, 44.2584],
  		    '长沙': [113.0823, 28.2568],
  		    '长治': [112.8625, 36.4746],
  		    '阳泉': [113.4778, 38.0951],
  		    '青岛': [120.4651, 36.3373],
  		    '韶关': [113.7964, 24.7028]
  		};
  		
  		var BJData = [
  		    [{name: '北京'}, {name: '上海',value: 95}],
  		    [{name: '北京'}, {name: '广州',value: 90}],
  		    [{name: '北京'}, {name: '大连',value: 80}],
  		    [{name: '北京'}, {name: '南宁',value: 70}],
  		    [{name: '北京'}, {name: '南昌',value: 60}],
  		    [{name: '北京'}, {name: '拉萨',value: 50}],
  		    [{name: '北京'}, {name: '长春',value: 40}],
  		    [{name: '北京'}, {name: '包头',value: 30}],
  		    [{name: '北京'}, {name: '重庆',value: 20}],
  		    [{name: '北京'}, {name: '常州',value: 10}]
  		];
  		
  		var SHData = [
  		    [{name: '上海'}, {name: '包头',value: 95}],
  		    [{name: '上海'}, {name: '昆明',value: 90}],
  		    [{name: '上海'}, {name: '广州',value: 80}],
  		    [{name: '上海'}, {name: '郑州',value: 70}],
  		    [{name: '上海'}, {name: '长春',value: 60}],
  		    [{name: '上海'}, {name: '重庆',value: 50}],
  		    [{name: '上海'}, {name: '长沙',value: 40}],
  		    [{name: '上海'}, {name: '北京',value: 30}],
  		    [{name: '上海'}, {name: '丹东',value: 20}],
  		    [{name: '上海'}, {name: '大连',value: 10}]
  		];
  		
  		var GZData = [
  		    [{name: '广州'}, {name: '福州',value: 95}],
  		    [{name: '广州'}, {name: '太原',value: 90}],
  		    [{name: '广州'}, {name: '长春',value: 80}],
  		    [{name: '广州'}, {name: '重庆',value: 70}],
  		    [{name: '广州'}, {name: '西安',value: 60}],
  		    [{name: '广州'}, {name: '成都',value: 50}],
  		    [{name: '广州'}, {name: '常州',value: 40}],
  		    [{name: '广州'}, {name: '北京',value: 30}],
  		    [{name: '广州'}, {name: '北海',value: 20}],
  		    [{name: '广州'}, {name: '海口',value: 10}]
  		];
  		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  		var convertData = function(data) {
  		    var res = [];
  		    for (var i = 0; i < data.length; i++) {
  		        var dataItem = data[i];
  		        var fromCoord = geoCoordMap[dataItem[0].name];
  		        var toCoord = geoCoordMap[dataItem[1].name];
  		        if (fromCoord && toCoord) {
  		            res.push({
  		                fromName: dataItem[0].name,
  		                toName: dataItem[1].name,
  		                coords: [fromCoord, toCoord]
  		            });
  		        }
  		    }
  		    return res;
  		};
  		
  		var color = ['#0d60f9', 'orange', '#46bee9'];
  		var series = [];
  		[
  			['北京', BJData],
  			/* ['上海', SHData],
  			['广州', GZData] */
  		].forEach(function(item, i) {
  			series.push({
  				name: item[0] + ' Top10',
  				type: 'effectScatter',
  				coordinateSystem: 'bmap',
  				zlevel: 2,
  				rippleEffect: {
  					brushType: 'stroke'
  				},
  				label: {
  					normal: {
  						show: true,
  						position: 'right',
  						formatter: '{b}'
  					}
  				},
  				symbolSize: function(val) {
  					return val[2] / 4;
  				},
  				showEffectOn: 'render',
  				itemStyle: {
  					normal: {
  						color: color[i]
  					}
  				},
  				data: [{
  					name: item[0],
  					value: geoCoordMap[item[0]].concat([100])
  				}]
  			}, {
  				name: item[0] + ' Top10',
  				type: 'lines',
  				coordinateSystem: 'bmap',
  				zlevel: 1,
  				effect: {
  					show: true,
  					period: 6,
  					trailLength: 0.7,
  					color: '#fff',
  					symbolSize: 3
  				},
  				lineStyle: {
  					normal: {
  						color: color[i],
  						width: 0,
  						curveness: 0.2
  					}
  				},
  				data: convertData(item[1])
  			}, {
  				name: item[0] + ' Top10',
  				type: 'lines',
  				coordinateSystem: 'bmap',
  				zlevel: 2,
  				effect: {
  					show: true,
  					period: 6,
  					trailLength: 0,
  					symbol: planePath,
  					symbolSize: 15
  				},
  				lineStyle: {
  					normal: {
  						color: color[i],
  						width: 1,
  						opacity: 0.4,
  						curveness: 0.2
  					}
  				},
  				data: convertData(item[1])
  			}, {
  				name: item[0] + ' Top10',
  				type: 'effectScatter',
  				coordinateSystem: 'bmap',
  				zlevel: 2,
  				rippleEffect: {
  					brushType: 'stroke'
  				},
  				label: {
  					normal: {
  						show: true,
  						position: 'right',
  						formatter: '{b}'
  					}
  				},
  				symbolSize: function(val) {
  					return val[2] / 4;
  				},
  				showEffectOn: 'render',
  				itemStyle: {
  					normal: {
  						color: color[i]
  					}
  				},
  				data: item[1].map(function(dataItem) {
  					return {
  						name: dataItem[1].name,
  						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
  					};
  				})
  			});
  		});
  		this.chart = echarts.init(this.$refs.map)
  		this.chart.setOption({
  			animation: false,
  			legend: {
  			  orient: 'vertical',
  			  top: 'bottom',
  			  left: 'right',
  			  data: ['北京 Top10', '上海 Top10', '广州 Top10'],
  			  textStyle: {
  				  color: '#fff'
  			  },
  			  selectedMode: 'single'
  			},
  			bmap:bmap ,
  			tooltip: {
  				trigger: 'item'
  			},
  			geo: {
  				map: 'bmap',
  				polyline: true,
  				progressiveThreshold: 500,
  				progressive: 200,
  				label: {
  					emphasis: {
  						show: false
  					}
  				},
  				roam: true,
  				itemStyle: {
  					normal: {
  						areaColor: '#323c48',
  						borderColor: '#404a59'
  					},
  					emphasis: {
  						areaColor: '#2a333d'
  					}
  				}
  			},
  			series: series
  		})
  		// 获取百度地图实例，使用百度地图自带的控件
  		this.bmap = this.chart.getModel().getComponent('bmap').getBMap()
  		this.bmap.setMinZoom(6) // 设置地图最小缩放比例
  		this.bmap.setMaxZoom(12) // 设置地图最大缩放比例
  		// this.bmap.addControl(new BMap.MapTypeControl({ mapTypes: [] })) // 不显示地图右上方的控件
  		this.bmap.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })) // 在左下角显示比例尺控件
  		const _this = this
  		// 监听地图比例缩放， 可以根据缩放等级控制某些图标的显示
  		this.bmap.addEventListener('zoomend', function () {
  			_this.mapZoom = _this.bmap.getZoom()
  		})
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
