<template>
	<div class="RobotClientindex">
		<div class="RobotClientindextop">
			<ul>
				<li><span>视频插件下载</span></li>
				<li><span>|</span></li>
				<li><span>视频插件下载</span></li>
			</ul>
		</div>
		<div class="RobotClientindexbot">
			<p>警用机器人智能管控平台</p>
			<ul>
				<li>登录</li>
				<li><hr></li>
			</ul>
			<div>
				<input type="text" name="user" class="marginTopUser boxSizing" placeholder="请输入账号..." value='' id="logonUser" maxlength="20">
				<input type="text" name="passwd" class="marginTopPwd boxSizing" placeholder="请输入密码..." value='' id="logonPwd" maxlength="20">
				<button>登录</button>
			</div>
		</div>
	</div>
</template>
<!-- <script src="../robotjs/impact_0_0.js"></script>
<script src="../robotjs/impact_0_1.js"></script> -->
<script>
//import {hexToRgb} from '../robotjs/impact_0_0.js' //注意路径	
	export default{
		name:'RobotClientindex',
		data:function(){
			return {
				user:'',
				padd:''
			}
		},
		methods:{
			
		},
		created(){
			//this.hexToRgb()
		}
	}
</script>

<style>
	html,body,#app{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	li{
		list-style:none;
	}
	.RobotClientindex{
		width:100%;
		height:100%;
		background-image: url(../assets/logonBJ.png);
	}
	.RobotClientindextop{
		width:100%;
	}
	.RobotClientindextop ul{
		width:10%;
		float: right;
		display: flex;
		margin-top:2%;
	}
	.RobotClientindextop ul li{
		float: left;
		color:#fff;
		flex:1;
		text-align: center;
		font-size: 14px;
		white-space:nowrap;
	}
	.RobotClientindexbot{
		width:100%;
		position: absolute;
		top:20%;
	}
	.RobotClientindexbot input{
		width:100%;
		height:50px;
		background: rgba(104, 116, 131, 0.4);
		border-radius: 5px;
		color: #fff;
		text-indent: 64px;
		border:none;
		margin-bottom: 8%;;
	}
	.RobotClientindexbot button{
		width: 100%;
		height:50px;
		background: #006cfa;
		text-align: center;
		line-height: 50px;
		border:none;
		color:#fff;
		border-radius: 8px;
		font-size: 18px;
	}
	.RobotClientindexbot p{
		font-size: 70px;
		color:#fff;
		text-align: center;
	}
	.RobotClientindexbot ul li:nth-child(1){
		font-size: 46px;
		color:#00ffff;
		margin-top:4%;
		text-align: center;
	}
	.RobotClientindexbot ul li hr{
		width:50px;
		margin:1% auto;
		background: #006cfa;
		border-radius: 5px;
		height: 6px;
		border: none;
	}
	.RobotClientindexbot div{
		width:24%;
		height: 300px;
		margin:0 auto;
	}
</style>
