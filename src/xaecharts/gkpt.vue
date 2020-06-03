<template>
	<div class="gkpt">
	   <div class="gkpttop" style="position: relative;">
	   		<ul style="float: left;width:36%;height:100%;">
	   			<li :style="ullinote" style="color:#44a3d1;">数据浏览</li>
	   			<li :style="ullinote">GIS地图</li>
	   			<li :style="ullinote">服务查询</li>
	   			<li :style="ullinote">地图记录</li>
	   			<li :style="ullinote">军机管理</li>
	   		</ul>
	   		<div :style="imgnotecenter" style="width:300px;height:90%;color:#44a3d1;font-size:24px;text-align:center;position: absolute;top:0;left:43%;right:0;bottom:0; display:table; ">
				<div style="vertical-align:middle;display:table-cell;">
					机器人管控平台
				</div>
			</div>
	   		<div style="float: right;margin-top:2%;">
	   			<!-- <img src="../assets/a2.png" alt=""  style="float: left;margin-right: 15px;"/>
	   			<img src="../assets/a3.png" alt=""  style="float: left;margin-right: 10px;"/> -->
				<i class="el-icon-search" style="color:#ccc;float: left;margin:2px 10px 0 0;"></i>
				<i class="el-icon-warning-outline" style="color:#ccc;float: left;margin:2px 20px 0 0;"></i>
	   			<div style="float: left;" >
					
					<el-dropdown  style="float: left;color:#ccc;">
					  <span class="el-dropdown-link">
					    账号 : <img src="../assets/a4.png" alt=""/>admin
					  </span>
					  <el-dropdown-menu slot="dropdown" style="float: left;">
					    <el-dropdown-item>退出登录</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
	   			</div>
	   		</div>
	   </div>
	   <div class="gkptbottom" style="clear: both;">
	   		<div class="gkptbotleft">
	   			<!-- <div class="echartstop"> -->
	   				<div class="echarts11">
	   					<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 信息总数</p>
	   					<ul style="float: left;width:100%;">
				   			<li :style="ullinote">
				   				<img src="../assets/header_01.png" alt="" />
				   				<span>176</span>
				   				<p>机器人个数</p>
				   			</li>
				   			<li :style="ullinote">
				   				<img src="../assets/header_01.png" alt="" />
				   				<span>110</span>
				   				<p>服务查询</p>
				   			</li>
				   			<li :style="ullinote">
				   				<img src="../assets/header_01.png" alt="" />
				   				<span>40</span>
				   				<p>地图记录</p>
				   			</li>
				   			<li :style="ullinote">
				   				<img src="../assets/header_01.png" alt="" />
				   				<span>26</span>
				   				<p>军机管理</p>
				   			</li>
				   		</ul>
	   				</div>
	   				<div class="echarts2">
	   					<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 机器人集团分布</p>
	   					<echarts1 style="width:auto;height:100%"></echarts1>
	   				</div>
	   			<!-- </div> -->
					<div class="echartsbot" style="clear: both;">
						<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 机器人厂家</p>
						<echarts2 style="width:auto;height:100%"></echarts2>
					</div>
	   		</div>
	   		<div class="gkptbotcenter">
	   			<div class="gkptbotcentertop">
	   				<echarts3 style="width:auto;height:100%"></echarts3>
	   			</div>
	   			<div class="gkptbotcenterbot">
	   				<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 全国</p>
	   				<echarts4 style="width:auto;height:100%"></echarts4>
	   			</div>
	   		</div>
	   		<div class="gkptbotright">
	   			<!-- <div class="gkptbotrighttop"> -->
	   				<div class="gkptbotrighttop1">
	   					<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 全国</p>
	   					<echarts5 style="width:auto;height:90%"></echarts5>
	   				</div>
	   				<div class="gkptbotrighttop2" style="clear:both;">
	   					<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;text-indent: 10px;line-height: 24px;">> 全国</p>
	   					<echarts6 style="width:auto;height:100%"></echarts6>
	   				</div>
	   			<!-- </div> -->
	   			<div class="gkptbotrightbot">
	   				<p style="width:100%;height:24px;background: #174382;font-size: 13px;color:#c9d2f1;line-height:24px;text-indent: 10px;">> 全国</p>
	   				<echarts7 style="width:auto;height:100%"></echarts7>
	   			</div>
	   		</div>
	   </div>
	</div>
</template>

<script>
import echarts1 from './echarts1.vue'
import echarts2 from './echarts2.vue'
import echarts3 from './echarts3.vue'
import echarts4 from './echarts4.vue'
import echarts5 from './echarts5.vue'
import echarts6 from './echarts6.vue'
import echarts7 from './echarts7.vue'
	export default{
		name:'gkpt',
		components:{echarts1,echarts2,echarts3,echarts4,echarts5,echarts6,echarts7},
		data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1',
	        ullinote:{
	        	backgroundImage: "url(" + require("../assets/u-boder.gif") + ")",
			    backgroundRepeat: "no-repeat",
			    backgroundSize: "100% 100%"
	        },
	        imgnotecenter: {
			    backgroundImage: "url(" + require("../assets/a1.png") + ")",
			    backgroundRepeat: "no-repeat",
			    backgroundSize: "100% 100%"
		    }
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style>
html,body,#app{
	width: 100%;
	height:100%;
	margin:0;
	padding: 0;
}
.gkpt{
	width: 100%;
	height:100%;
	background: #021746;
	overflow: hidden;
}
.gkpttop{
	width:100%;
	height:8%;
}
.gkptbottom{
	width:100%;
	height:91%;
	box-sizing: border-box;
	border:3px solid #021746;
}
.gkptbotleft{
	width:24.5%;
	height:100%;
	float: left;
}
.gkptbotcenter{
	width:50%;
	height:100%;
	margin-left: 0.5%;
	float: left;
}
.gkptbotright{
	width:24.5%;
	height:100%;
	margin-left: 0.5%;
	float: left;
}
.gkpttop ul li{
	list-style: none;
	float: left;
	width:19%;
	height:52px;
	text-align: center;
	line-height: 52px;
	color:#fff;
	font-weight: bold;
	margin-left:1%;
	margin-top:4%;
}
.echartstop{
	width:100%;
	height:62%;
}
.echartsbot{
	width:100%;
	height:37%;
	margin-top:1%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.echarts11{
	width:100%;
	height:26%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.echarts2{
	clear: both;
	width:100%;
	height:36%;
	margin-top:1%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.echarts11 ul{
	width: 100%;
	height:90%;
}
.echarts11 ul li{
	list-style: none;
	width:40%;
	height:46%;
	margin-left: 7%;
	margin-top:0.8%;
	float: left;
	font-size: 12px;
	position: relative;
}
.echarts11 ul li img{
	width:20%;
	height:50%;
	position: absolute;
	top:0;
	bottom:0;
	left:20px;
	margin: auto;
}
.echarts11 ul li span{
	width:40%;
	position: absolute;
	right:5%;
	top:16%;
	font-size: 1.4rem;
	color:yellow;
	font-weight: bolder;
	text-align: center;
}
.echarts11 ul li p{
	width:40%;
	position: absolute;
	right:5%;
	bottom:10%;
	font-size: 0.8rem;
	color:#c9d2f1;
	text-align: center;
}
.gkptbotcentertop{
	width:100%;
	height:62.5%;
	box-sizing: border-box;
	border:4px solid #040d2e;
	overflow: hidden;
}
.gkptbotcenterbot{
	width:100%;
	height:37%;
	margin-top:0.5%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.gkptbotrighttop{
	width:100%;
	height:62%;
}
.gkptbotrightbot{
	width:100%;
	height:37%;
	margin-top:1%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.gkptbotrighttop1{
	width:100%;
	height:26%;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
.gkptbotrighttop2{
	width:100%;
	height:36%;
	margin-top:1%;
	box-sizing: border-box;
	box-sizing: border-box;
	border:4px solid #040d2e;
}
</style>