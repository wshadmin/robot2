<template>
	<div class="demos2">
		<demo2 style="width:100%;height:100%;"></demo2>
		<div style="width:100%;text-align:center;position: absolute;top:3.6%;left:0%;color:#fff;cursor: pointer;font-size: 34px;font-weight: bold;" title="警务机器人智能管控与服务平台">
				警务机器人智能管控与服务平台
		</div>
		<div style="width:40%;display: flex;position: absolute;top: 4%;left:0;right:0;margin: auto;color:#fff;">
			<!-- <div style="flex:1;">
				<el-button type="primary" style="width:80%;margin-left:10%;"  title="产品介绍">产品介绍</el-button>
			</div>
			<div style="flex:1;">
				<el-select v-model="value" placeholder="解决方案" style="width:80%;margin-left:10%;" title="解决方案">
					<el-option
					  v-for="item in options2"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div style="flex:1;">
				<el-select v-model="value2" placeholder="开发支持" style="width:80%;margin-left:10%;" title="开发支持">
					<el-option
					  v-for="item in options3"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div style="flex:1;">
				<el-button type="primary" style="width:80%;margin-left:10%;"  title="合作伙伴">合作伙伴</el-button>
			</div> -->
		</div>
		<div style="position: absolute;top:4%;right:4%;">
					<el-button type="primary"  @click="openlogin()" title="用户注册">用户注册</el-button>
					<el-button type="primary" @click="userpassadmins()" title="登录">登录</el-button>
		</div>
	</div>
    
  </template>


<script>
import ElementUI from 'element-ui'; //element-ui的全部组件
import demo2 from './demo2.vue'
import VueResource from 'vue-resource'
import axios from 'axios'
export default{
	name:'demos2',
	components:{demo2},
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
	.demos2{
		width:100%;
		height:100%;
	}
</style>