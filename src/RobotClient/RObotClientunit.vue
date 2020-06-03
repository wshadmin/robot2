<template>
	<div class="RobotClientunit">
		<div class="RobotClientunittop">
			<div style="color:#29a7d3;float:left;margin-left:3%;height:100%;display: table;" >
				<div style="vertical-align:middle;display:table-cell;font-size: 17px;">
					{{ gettime }}
				</div>
			</div>
		</div>
		<div class="RobotClientunitbot">
			<div class="RobotClientunitbotleft">
				<div class="RobotClientunitbotleft1">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">排行榜</h4>
						<p style="float: right;">
							<span style="margin: 4px;background: none;border:1px solid #3d4e7e;width:50px;height:20px;display: inline-block;text-align: center;line-height: 20px;border-radius: 6px;color:#3d4e7e;">抓拍</span>
							<span style="margin: 4px;background: none;border:1px solid #023a65;width:50px;height:20px;display: inline-block;text-align: center;line-height: 20px;border-radius: 6px;color:#023a65;">比对</span>
						</p>
					</div>
				</div>
				<div class="RobotClientunitbotleft2">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">数据分析</h4>
					</div>
					<div style="height:95%;">
						<unit2 style="width:auto;height:90%;"></unit2>
					</div>
				</div>
				<div class="RobotClientunitbotleft3">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">人脸比对</h4>
					</div>
				</div>
			</div>
			<div class="RobotClientunitbotcenter">
				<div class="RobotClientunitbotcenter1">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">数据统计</h4>
						
					</div>
					<div style="width:100%;height:42%;">
						<p style="width:8%;height:100%;float: left;position: relative;background: #33cc66;">
							<img src="../assets/ii_03.png" alt="" style="position: absolute;top:20%;left:0;right:0;margin:auto;">
							<span style="position: absolute;bottom:16%;width:100%;text-align: center;color:#fff;">总数</span>
						</p>
						<ul>
							<li>
								<p>事件总数</p>
								<p>0</p>
							</li>
							<li>
								<p>人脸抓拍</p>
								<p>0</p>
							</li>
							<li>
								<p>人脸比对</p>
								<p>0</p>
							</li>
							<li>
								<p>WIFI</p>
								<p>0</p>
							</li>
							<li>
								<p>IMSI</p>
								<p>0</p>
							</li>
							<li>
								<p>总数</p>
								<p>0</p>
							</li>
						</ul>
					</div>
					<div style="width:100%;height:42%;margin-top: 0.5%;">
						<p style="width:8%;height:100%;float: left;position: relative;background: #ff0066;">
							<img src="../assets/ii_01.png" alt="" style="position: absolute;top:20%;left:0;right:0;margin:auto;">
							<span style="position: absolute;bottom:16%;width:100%;text-align: center;color:#fff;">当日</span>
						</p>
						<ul>
							<li>
								<p>事件总数</p>
								<p>0</p>
							</li>
							<li>
								<p>人脸抓拍</p>
								<p>0</p>
							</li>
							<li>
								<p>人脸比对</p>
								<p>0</p>
							</li>
							<li>
								<p>WIFI</p>
								<p>0</p>
							</li>
							<li>
								<p>IMSI</p>
								<p>0</p>
							</li>
							<li>
								<p>总数</p>
								<p>0</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="RobotClientunitbotcenter2">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">24小时采集数据</h4>
					</div>
					<div style="height:100%;">
						<unit4 style="height:96%"></unit4>
					</div>
				</div>
				<div class="RobotClientunitbotcenter3">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">一周采集数据</h4>
					</div>
				</div>
				<div class="RobotClientunitbotcenter4">
					<div class="unitbotcenter41">
						<div style="width:100%;height:30px;background: #021746;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
							<h4 style="float: left;color:#fff;line-height: 30px;">事件统计</h4>
						</div>
					</div>
					<div class="unitbotcenter42">
						<div style="width:100%;height:30px;background: #021746;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
							<h4 style="float: left;color:#fff;line-height: 30px;">机器人隶属关系</h4>
						</div>
					</div>
					<div class="unitbotcenter43">
						<div style="width:100%;height:30px;background: #021746;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
							<h4 style="float: left;color:#fff;line-height: 30px;">机器人在线率</h4>
						</div>
					</div>
				</div>
			</div>
			<div class="RobotClientunitbotright">
				<div class="RobotClientunitbotright1">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">机器人列表</h4>
						<p style="float: right;line-height: 30px;color:#fff;">
							<span>开机:0</span><span>总数:0</span>
						</p>
					</div>
				</div>
				<div class="RobotClientunitbotright2">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">事件展示</h4>
					</div>
				</div>
				<div class="RobotClientunitbotright3">
					<div style="width:100%;height:30px;background: #021746;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;">
						<h4 style="float: left;color:#fff;line-height: 30px;">人脸抓拍</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import unit2 from './unit2.vue'
import unit4 from './unit4.vue'
	export default{
		name:'RObotClientunit',
	    data:function(){
			return {
				gettime:'',//当前时间
			}
		},
		components:{unit2,unit4},
		methods: {
	        currentTime() {
			   setInterval(this.getDate, 500);
		    }, 
		   getDate: function() {
			    var _this = this;
				let week = new Date().getDay();
				if (week == 1) {
					var xingqi = "星期一";
				} else if (week == 2) {
					var xingqi = "星期二";
				} else if (week == 3) {
					var xingqi = "星期三";
				} else if (week == 4) {
					var xingqi = "星期四";
				} else if (week == 5) {
					var xingqi = "星期五";
				} else if (week == 6) {
					var xingqi = "星期六";
				} else {
					var xingqi = "星期日";
				}
				 let yy = new Date().getFullYear();
				 let mm = new Date().getMonth()+1;
				 let dd = new Date().getDate();
				 let hh = new Date().getHours();
				 let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
				 let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
				 _this.gettime = yy+'-'+mm+'-'+dd+' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0'+hh+':'+mf+':'+ss+' \xa0 \xa0 \xa0 \xa0 \xa0 \xa0'+xingqi;
		   }
	    },
		created(){
			this.currentTime();
		}
  };
</script>

<style>
	html,body,#app{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	.RobotClientunit{
		width: 100%;
		height:100%;
		background: #040d2e; 
		/* background: #fff; */
	}
	.RobotClientunittop{
		width: 100%;
		height:7%;
		background-size:100% 100%;
		background-image: url(../assets/title_1.png) ; 
		position: relative;
		top:0;
	}
	.RobotClientunitbot{
		width:99.4%;
		height:92%;
		position: absolute;
		top:7.3%;
		left:0.3%;
	}
	.RobotClientunitbotleft{
		width:24.5%;
		height:100%;
		float: left;
	}
	.RobotClientunitbotleft1{
		width: 100%;
		height:24.5%;
		background: #09153d;
	}
	.RobotClientunitbotleft2{
		width: 100%;
		height:24.5%;
		margin-top:1%;
		background: #09153d;
	}
	.RobotClientunitbotleft3{
		width: 100%;
		height:50%;
		margin-top:1%;
		background: #09153d;
	}
	.RobotClientunitbotcenter{
		width:50%;
		height:100%;
		float: left;
		margin-left: 0.5%;
	}
	.RobotClientunitbotcenter1{
		width: 100%;
		height:24.5%;
		background: #09153d;
	}
	.RobotClientunitbotcenter1 ul{
		float:left;
		width:92%;
		height:100%;
		display: flex;
	}
	.RobotClientunitbotcenter1 div ul li{
		list-style: none;
		height:100%;
		flex: 1;
		text-align: center;
		position: relative;
	}
	.RobotClientunitbotcenter1 div ul li p:nth-child(1){
		position: absolute;
		top:20%;
		width: 100%;
		text-align: center;
		color:#0370eb;
	}
	.RobotClientunitbotcenter1 div ul li p:nth-child(2){
		position: absolute;
		top:60%;
		font-size: 18px;
		width: 100%;
		color:#fff;
	}
	.RobotClientunitbotcenter2{
		width: 100%;
		height:24.5%;
		margin-top:0.5%;
		background: #09153d;
	}
	.RobotClientunitbotcenter3{
		width: 100%;
		height:24.5%;
		margin-top:0.5%;
		background: #09153d;
	}
	.RobotClientunitbotcenter4{
		width: 100%;
		height:24.5%;
		margin-top:1%;
	}
	.unitbotcenter41{
		width:33%;
		height:100%;
		background: #09153d;
		float: left;
	}
	.unitbotcenter42{
		width:33%;
		height:100%;
		background: #09153d;
		float: left;
		margin-left: 0.5%;
	}
	.unitbotcenter43{
		width:33%;
		height:100%;
		background: #09153d;
		float: left;
		margin-left: 0.5%;
	}
	.RobotClientunitbotright{
		width:24.5%;
		height:100%;
		float: left;
		margin-left: 0.5%;
	}
	.RobotClientunitbotright1{
		width: 100%;
		height:24.5%;
		background: #09153d;
	}
	.RobotClientunitbotright2{
		width: 100%;
		height:24.5%;
		margin-top:1%;
		background: #09153d;
	}
	.RobotClientunitbotright3{
		width: 100%;
		height:50%;
		margin-top:1%;
		background: #09153d;
	}
</style>