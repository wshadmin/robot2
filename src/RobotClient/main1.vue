<template>
	<div class="main1" style="width:100%;height:100%;">
		<div class="main1s" :style="{width: '100%', height: '100%'}" >
			<dl>
				<dt><el-progress type="circle" :percentage="80" :color="'#0aacf8'" :width="60" ></el-progress></dt>
				<dd>内存总数</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="70" :color="'#fd4841'" :width="60" ></el-progress></dt>
				<dd>内存剩余</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="38" :color="'#fbad5a'" :width="60" ></el-progress></dt>
				<dd>内存分配</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="25" :color="'#785ed9'" :width="60" ></el-progress></dt>
				<dd>内存使用</dd>
			</dl>
		</div>
		<div class="main1s" :style="{width: '100%', height: '50%'}" >
			<dl>
				<dt><el-progress type="circle" :percentage="98" :color="'#00e076'" :width="60" ></el-progress></dt>
				<dd>vCPU总数</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="46" :color="'#b6066b'" :width="60" ></el-progress></dt>
				<dd>vCPU剩余</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="48" :color="'#00b0a5'" :width="60" ></el-progress></dt>
				<dd>vCPU分配</dd>
			</dl>
			<dl>
				<dt><el-progress type="circle" :percentage="29" :color="'#fdd900'" :width="60" ></el-progress></dt>
				<dd>vCPU使用</dd>
			</dl>
		</div>
	</div>
</template>

<script>
import { baseurl } from '../config/urlconfig.js';
import axios from 'axios';
import echarts from 'echarts'
	export default{
		name:'main1',
		data:function(){
			return {
				list:[{
					"disk": {
						"avail": "1072.16GB",
						"total": "1153.33GB",
						"usePercent": "7.04%",
						"used": "81.17GB",
						"free": "1072.16GB"
					},
					"memory": {
						"memory": "7.82GB",
						"memoryUsage": "75.72%",
						"memFrees": "1.90GB",
						"memRam": "7.82GB",
						"memUsed": "5.92GB"
					},
					"cpu": {
						"wait": "0.0%",
						"idle": "93.0%",
						"combined": "6.6%",
						"sys": "1.5%",
						"user": "5.0%",
						"nice": "0.0%"
					}
				}]
			}
		},
		//props:["aaa"],
		created(){
			//console.log(this.aaa)
			this.list[0].disk.usePercent=this.list[0].disk.usePercent.split('%')[0];
		},
		mounted(){
		    //this.drawLine();
		},
		methods: {
		    /* drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let main1 = this.$echarts.init(document.getElementById('main3'))
		        // 绘制图表
		        main3.setOption({
					
				})
			} */
		},
		/* created(){
			this.$axios.post(baseurl+'/bigdataplatform','').then((res)=>{
				console.log(res)
			})
		} */
	}
</script>

<style>
	.main1s{
		width:100%;
		height:100%;
	}
	.main1s dl{
		float: left;
		width:25%;
		text-align: center;
		line-height: 36px;
	}
</style>