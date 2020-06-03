<template>
	<div class="demos6">
		<demo6 style="width:100%;height:100%;"></demo6>
		<div style="width:100%;text-align:center;position: absolute;top:3.6%;left:0%;color:#409EFF;cursor: pointer;font-size: 34px;font-weight: bold;" title="警务机器人智能管控与服务平台">
				警务机器人智能管控与服务平台
		</div>
		<div style="position: absolute;top:3.6%;left:4%;cursor: pointer;" @click="btnrobot()">
				<div style="font-size: 30px;color:#409EFF;font-weight: bold;">
				  <i class="el-icon-share"></i>数据统计
				</div>
		</div>
		<div style="width:40%;display: flex;position: absolute;top: 4%;left:0;right:0;margin: auto;color:#fff;">
		</div>
		<div style="position: absolute;top:4%;right:4%;">
			<el-button type="primary"  @click="openlogin()" title="用户注册">用户注册</el-button>
			<el-button type="primary" @click="userpassadmins()" title="登录">登录</el-button>
		</div>
	</div>
    
  </template>


<script>
import ElementUI from 'element-ui'; //element-ui的全部组件
import demo6 from './demo6.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
export default{
	name:'demos4',
	components:{demo6},
	data:function(){
		return {
			options2: [{
			          value: '选项1',
			          label: '机器人接入'
			        }, {
			          value: '选项2',
			          label: '平台接入'
			        }
			],
			options3: [{
			          value: '选项1',
			          label: '人脸识别SDK'
			        }, {
			          value: '选项2',
			          label: '声纹控制SDK'
			        }, {
			          value: '选项3',
			          label: '数据查询APISDK'
			        }
			],
			value: '',
			value2: ''
		}
	},
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
	.demos6{
		width:100%;
		height:100%;
	}
</style>