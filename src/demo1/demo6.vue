<template>
  <div class="map" ref="map"   v-loading="loading" element-loading-text="拼命加载中"
		element-loading-spinner="el-icon-loading"
		element-loading-background="rgba(0, 0, 0, 0.8)" >
	
  </div>
</template>

<script>
require('echarts/lib/chart/map');
require('echarts/lib/chart/lines');
require('echarts/lib/component/geo');
require('echarts-extension-amap');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
import macarons from "@/robotjs/macarons.js";
import AMapEcharts from 'amap-echarts'
import countries from "@/robotjs/data/countries.json";
import cs from "@/robotjs/cs.js";
const scatterData = []
const linesData = []

Object.keys(countries).forEach(key => {
  scatterData.push({
    name: key,
    value: countries[key]
  })

  if (key !== '中国') {
    linesData.push({
      coords: [countries[key], countries['中国']]
    })
  }
})

export default {
  name: 'EffectScatter',
  created(){
	  cs(11)
  },
  data() {
      return {
		  loading:false,
          flyLine: [
              {coords: [[116.496437,39.913523], [123.499706,41.857793]]},
              {coords: [[116.496437,39.913523], [86.113232,43.684254]]},
              {coords: [[116.496437,39.913523], [87.343701,35.720308]]},
              {coords: [[116.496437,39.913523], [101.406201,24.177443]]},
              {coords: [[116.496437,39.913523], [111.249951,24.976714]]},
              {coords: [[116.496437,39.913523], [107.206982,33.843608]]},
              {coords: [[116.496437,39.913523], [115.468701,43.557002]]},
              {coords: [[116.496437,39.913523], [107.031201,37.134586]]},
              {coords: [[116.496437,39.913523], [99.648388,38.522914]]},
              {coords: [[116.496437,39.913523], [124.081982,49.361353]]},
          ],
          goals: [
              [123.499706,41.857793],
              [86.113232,43.684254],
              [87.343701,35.720308],
              [101.406201,24.177443],
              [111.249951,24.976714],
              [107.206982,33.843608],
              [115.468701,43.557002],
              [107.031201,37.134586],
              [107.031201,37.134586],
              [99.648388,38.522914],
              [124.081982,49.361353]
          ]
      }
  },
  mounted(){
	  this.mapInit();
	  this.loading=false;
  },
  methods: {
    mapInit () {
        let _this = this;
		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		
        let option = {
            // 加载 amap 组件
            amap: {
                // 高德地图中心经纬度
                center: [105.397428, 38.90923], //中心点
                // 高德地图缩放
                zoom: 5,
				zooms:[5,20],
                // 启用resize
                resizeEnable: true,
                // 自定义地图样式主题
               mapStyle: 'amap://styles/9a4da2d26714c78b817f7128fdced7fb',
                /* viewMode:'3D',//开启3D视图,默认为关闭
                expandZoomRange:true,
                // zooms:[3,20],
                 pitch: 10 */
            },
            tooltip: {
                trigger: 'item',
                show: false
            },
            animation: false,
            series: [
                // 流线
                {
                    coordinateSystem: "amap", // 该系列使用的坐标系是高德地图的坐标系
                    type: "lines", // 该类型用于地图上路线的绘制
                    zlevel: 1, // 相当于z-index
					
                    effect: { // 线特效的配置
                        show: true,  // 是否显示特效
                        period: 7, // 特效动画的时间
						symbol: planePath,
                        trailLength: 0, // 特效尾迹的长度 0-1
                        color: "#409EFF", // 特效的颜色
                        symbolSize: 15 // 特效的大小
                    }, 
                    lineStyle: { // 线的颜色
                        normal: {
                            color: "#4b97d3",
                            width: 2,
                            curveness: 0.2
                        }
                    },
                    data: _this.flyLine,
                },
                // 目标点
                {
                    name: '目标点',
                    type: "scatter",
                    // 使用高德地图坐标系
                    coordinateSystem: "amap",
                    // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                    data:  _this.goals,
                    symbolSize: 10,
                    encode: {
                        value: 2
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
							areaColor: '#2a333d',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
							color:'#0e72e4'
                        }
                    }
                },
    
            ],
    
        };
        let chart = this.$echarts.init(_this.$refs.map);
        chart.setOption(option);
    },
  }
}
</script>