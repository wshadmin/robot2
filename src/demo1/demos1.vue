<template>
	<div class="demos1">
		<demo style="width:100%;height:100%;"></demo>
		<div style="width:100%;text-align:center;position: absolute;top:3.6%;left:0%;color:#fff;cursor: pointer;font-size: 34px;font-weight: bold;" title="警务机器人智能管控与服务平台">
				警务机器人智能管控与服务平台
		</div>
		<div style="position: absolute;top:3.6%;left:4%;cursor: pointer;" @click="btnrobot()">
				<div style="font-size: 30px;color:#fff;font-weight: bold;">
				  <i class="el-icon-share"></i>数据统计
				</div>
		</div>
		<div style="position: absolute;top:4%;right:4%;">
			<el-button type="primary"  @click="openlogin()" title="用户注册">用户注册</el-button>
			<el-button type="primary" @click="userpassadmins()" title="登录">登录</el-button>
		</div>
	</div>
    
  </template>


<script>
import ElementUI from 'element-ui'; //element-ui的全部组件
import demo from './demo.vue'
export default{
	name:'demos1',
	components:{demo},
	methods:{
		openlogin() {
			this.$alert('<strong>注册页面</strong>', '非机器人/平台注册', {
			  dangerouslyUseHTMLString: true
			});
		},
		userpassadmins () {
			this.$alert('<strong>登录弹框</strong>', '登录', {
			  dangerouslyUseHTMLString: true
			});
		},
		btnrobot(){
			this.$router.push({path:'/RobotClientmain'})
		}
	}
}
</script> 
<style>
	html,body,#app{
	  	width:100%;
	  	height:100%;
	  	overflow: hidden;
	  }
	.demos1{
		width:100%;
		height:100%;
	}
</style>