<template>
    <div class="amap-page-container">
      <el-amap
        :events="events"
        :zoom="zoom"
        :center="center"
        :map-style="mapStyle"
      />

      <div class="toolbar">
        <!-- <button @click="add()">add marker</button> -->
      </div>
    </div>
  </template>

  <style>
	  
  </style>

  <script>
import VueAMap from 'vue-amap';
import countries from "@/robotjs/data/countries.json";
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
    let amapManager = new VueAMap.AMapManager();
    export default{
      data: function() {
        return {
          zoom: 5,
          center: [105.397428, 38.90923],
          mapStyle: 'amap://styles/4c466e9d728dc397c68bb8e12ced0b33',
          events: {
            init: map => {
              //this.createScatterChart(map)
            }
          },
        };
      },

      methods: {
        /* add() {
          let o = amapManager.getMap();
          let marker = new AMap.Marker({
            position: [121.59996, 31.177646]
          });

          marker.setMap(o);
        } */
      }
    };
</script>