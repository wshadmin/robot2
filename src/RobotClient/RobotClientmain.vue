<template>
	<div class="RobotClientmain" v-loading="loading" element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
		<div class="RobotClientmaintop">
			<div style="color:#29a7d3;float:left;margin-left:3%;height:100%;display: table;" >
				<div style="vertical-align:middle;display:table-cell;font-size: 17px;cursor: pointer;">
					{{ gettime }}
				</div>
			</div>
			<div style="color:#29a7d3;float:left;margin-left: 3%;height:100%;display: table;" >
				<div style="vertical-align:middle;display:table-cell;font-size: 17px;cursor: pointer;">
					单位 :
				</div>
			</div>
			<div style="color:#29a7d3;float:right;right:2%;height:100%;display: table;position: relative;" >
				<div style="vertical-align:middle;display:table-cell;font-size: 17px;color: rgb(41, 167, 211);">
					<el-dropdown>
					  <span class="el-dropdown-link">
					    账号 : <img src="../assets/sign-out_0.png"  alt="" style="float: right;margin-left: 10px;">
					  </span>
					  <el-dropdown-menu>
					    <el-dropdown-item>
							<span @click="returnind()">退出</span>
							</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
		</div>
		
		<div class="RobotClientmainbot">
			<div class="RobotClientmainbotleft">
				<div class="RobotClientmainbotlefttop">
					<div class="RobotClientmainbotlefttop1">
						<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
							<p style="line-height: 30px;float: left;">大数据平台</p>
						</div>
						<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
							<div style="margin-top:30px;text-align: center;color:#fff;">
								<main1 style="width:auto;height:100%;"></main1>
							</div>
						</div>
					</div>
					<div class="RobotClientmainbotlefttop2">
						<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
							<p style="line-height: 30px;float: left;">机器人列表</p>
						</div>
						<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
							<div style="margin-top:30px;height:100%;">
								<main2 style="width:auto;height:91.8%;" :main2list="main2list"></main2>
							</div>
						</div>
					</div>
				</div>
				<div class="RobotClientmainbotleftbot">
					<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
						<p style="line-height: 30px;float: left;">数据采集统计</p>
					</div>
					<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
						<div style="height:89%;margin-top:30px;text-align: center;line-height: 100px;color:#fff;">
							<main3 style="width:auto;height:100%;"></main3>
						</div>
					</div>
				</div>
			</div>
			<div class="RobotClientmainbotcenter">
				<div class="RobotClientmainbotcentertop">
					<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
						<p style="line-height: 30px;float: left;text-indent: 30px;">地图展示</p>
					</div>
					<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
						<div style="margin-top:30px;height:95.7%;color:#fff;">
							<main4 style="width:auto;height:100%;"></main4>
						</div>
					</div>
				</div>
				<div class="RobotClientmainbotcenterbot">
					<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
						<p style="line-height: 30px;float: left;">机器人统计</p>
					</div>
					<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
						<div style="margin-top:30px;height:87%;color:#fff;">
							<main5 style="width:auto;height:100%;"></main5>
						</div>
					</div>
				</div>
			</div>
			<div class="RobotClientmainbotright">
				<div class="RobotClientmainbotrighttop">
					<div class="RobotClientmainbotrighttop1">
						<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
							<p style="line-height: 30px;float: left;">赋能服务</p>
						</div>
						<div style="width:100%;height:50%;position: absolute;top:0px;" class="RobotClientmainbotrighttop1dl">
							<div style="margin-top:30px;cursor: pointer;">
								<dl>
									<dd>小脑数量</dd>
									<dt><img src="../assets/ii_01.png" alt=""></dt>
									<dd>0</dd>
								</dl>
								<dl>
									<dd>人脸比对</dd>
									<dt><img src="../assets/ii_02.png" alt=""></dt>
									<dd>0</dd>
								</dl>
								<dl>
									<dd>视频监控</dd>
									<dt><img src="../assets/ii_03.png" alt=""></dt>
									<dd>0</dd>
								</dl>
							</div>
						    <div>
								<dl>
									<dd>语音播报</dd>
									<dt><img src="../assets/ii_04.png" alt=""></dt>
									<dd>0</dd>
								</dl>
								<dl>
									<dd>语音对讲</dd>
									<dt><img src="../assets/ii_05.png" alt=""></dt>
									<dd>0</dd>
								</dl>
								<dl>
									<dd>支撑用户</dd>
									<dt><img src="../assets/ii_06.png" alt=""></dt>
									<dd>0</dd>
								</dl>
							</div>
						</div>
					</div>
					<div class="RobotClientmainbotrighttop2">
						<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
							<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
							<p style="line-height: 30px;float: left;">机器人分类</p>
						</div>
						<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
							<div style="margin-top:30px;height:92%;">
								<main6 style="width:auto;height:100%;" :main6list="main6list"></main6>
							</div>
						</div>
					</div>
				</div>
				<div class="RobotClientmainbotrightbot">
					<div style="width:100%;height:30px;background:#021746;color:#fff;position: absolute;top:0;">
						<img src="../assets/i0.png" alt="" style="float: left;margin:6px 10px 0 10px;" >
						<p style="line-height: 30px;float: left;">报警信息</p>
					</div>
					<div style="width:100%;height:100%;position: absolute;top:0px;cursor: pointer;">
						<div style="height:100%;margin-top:30px;text-align: center;line-height: 100px;color:#fff;">
							<main7 style="width:auto;height:100%;"></main7>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import main1 from './main1.vue'
import main2 from './main2.vue'
import main3 from './main3.vue'
import main4 from './main4.vue'
import main5 from './main5.vue'
import main6 from './main6.vue'
import main7 from './main7.vue'
	export default{
		name:'RobotClientmain',
		components:{main1,main2,main3,main4,main5,main6,main7},
	    data:function(){
			return {
				gettime:'',//当前时间
				loading: true,
				main2list:'',
				main6list:','
			}
		},
		methods: {
			returnind(){
				this.$router.push({path:'/demos6'})
			},
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
		    },
		    // websocket
		    initWebSocket(){//初始化weosocket(必须)
		       const wsuri = "ws://39.97.77.207:8000/robot2_count/RobotControlPlatform";    //请根据实际项目需要进行修改
		       this.websock = new WebSocket(wsuri);      //新建一个webstock对象
		       this.websock.onmessage = this.websocketonmessage;  
		       this.websock.onopen = this.websocketonopen;      
		       this.websock.onerror = this.websocketonerror;
		       this.websock.onclose = this.websocketclose;
		    },
		    websocketonopen(){//websocket连接后发送数据(send发送)
		       let actions = {"orgid":"123"};     //请根据实际项目需要进行修改
		       this.websocketsend(JSON.stringify(actions));
		    },
		    websocketonerror(){//连接建立失败重连
		       this.initWebSocket();
		    },
		    websocketonmessage(e){ //数据接收
		       //this.redata = JSON.parse(e.data).data;
				var demo1=e.data;
				if(demo1!="后端接收到连接请求，允许连接"){
					this.loading = false;
					var mainlist=JSON.parse(demo1).data;
					this.main2list=mainlist.RobotListData;
					this.main6list=mainlist.RobotClassificationData.data;
					console.log(mainlist);
				}
		    },
		    websocketsend(Data){//数据发送
		       this.websock.send(Data);
		    },
		    websocketclose(e){  //关闭
		       console.log('断开连接',e);
		    }
		   // websocket
	    },
		destroyed() {
		  this.websock.close();//离开路由之后断开websocket连接
		},
		created(){
			this.currentTime();
			this.initWebSocket();
			/* setTimeout(() => {
			  this.loading = false;
			}, 2000); */
		}
  };
</script>

<style>
	html,body,#app{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	.RobotClientmain{
		width: 100%;
		height:100%;
		background: #040d2e; 
		/* background: #fff; */
	}
	.RobotClientmaintop{
		width: 100%;
		height:7%;
		background-size:100% 100%;
		background-image: url(../assets/title_1.png) ; 
		position: relative;
		top:0;
	}
	.RobotClientmainbot{
		width:99%;
		height:92.4%;
		position: absolute;
		bottom:0;
		background: #040d2e;
		left:0.5%;
	}
	.RobotClientmainbotleft{
		width:23%;
		height:99.5%;
		float: left;
	}
	.RobotClientmainbotcenter{
		width:53%;
		height:99.5%;
		float: left;
		margin-left: 0.5%;
	}
	.RobotClientmainbotcentertop{
		width:100%;
		height:73%;
		background: #09153d;
		position: relative;
	}
	.RobotClientmainbotcenterbot{
		width:100%;
		height:39%;
		height:26.5%;
		background: #09153d;
		margin-top: 0.5%;
		position: relative;
	}
	.RobotClientmainbotright{
		width:23%;
		height:99.5%;
		float: left;
		margin-left: 0.5%;
	}
	.RobotClientmainbotlefttop{
		width:100%;
		height:73%;
		background: #040d2e;
	}
	.RobotClientmainbotlefttop1{
		width:100%;
		height:39%;
		background: #09153d;
		position: relative;
	}
	.RobotClientmainbotlefttop2{
		width:100%;
		height:60%;
		margin-top:1%;
		background: #09153d;
		position: relative;
	}
	.RobotClientmainbotleftbot{
		width:100%;
		height:26.5%;
		background: #09153d;
		margin-top: 0.5%;
		position: relative;
	}
	.RobotClientmainbotrighttop{
		width:100%;
		height:73%;
	}
	.RobotClientmainbotrightbot{
		width:100%;
		height:26.5%;
		margin-top: 0.5%;
		position: relative;
	}
	.RobotClientmainbotrighttop1{
		width:100%;
		height:39%;
		background: #09153d;
		position: relative;
	}
	.RobotClientmainbotrighttop1dl div{
		width:100%;
		margin-top:2%;
		display: flex;
	}
	.RobotClientmainbotrighttop1dl div dl{
		flex:1;
		color:#fff;
		text-align: center;
		box-sizing: border-box;
		border:3px solid #040d2e;
	}
	.RobotClientmainbotrighttop1dl div dl dt{
		padding-top:14px;
	}
	.RobotClientmainbotrighttop1dl div dl dd{
		padding-top:6px;
	}
	.RobotClientmainbotrighttop2{
		width:100%;
		height:60%;
		margin-top:1%;
		background: #09153d;
		position: relative;
	}
	.el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	  }
	  .el-icon-arrow-down {
	    font-size: 12px;
	  }
</style>