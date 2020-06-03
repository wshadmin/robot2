<template>
	<div>
		<div class="center1">
			<div class="centop">
				<img alt="Vue logo" src="../assets/1.png">
			</div>
			<div class="cenhr">
				<hr />
				<p>注册</p>
			</div>
			<div class="button1">
				<el-row>
					<router-link to="./ptlogin">
						<el-button type="primary" style="width:200px;background: #337ab7;">平台/机器人注册</el-button>
					</router-link>
				    <br />
				    <router-link to="./glylogin">
				  	    <el-button type="warning" style="width:200px;margin-top: 20px;background: #f0ad4e;">管理员注册</el-button>
				    </router-link>
				</el-row>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
import info from '../../info.js'
import { baseurl } from '../config/urlconfig.js'
import axios from 'axios'
import qs from 'qs'
	export default{
		name:'loginindex',
		created(){
			/*console.log(process.env.NODE_ENV)
			var obj={
				address: "中国北京市北京东城区",
				email: "qq",
				identity: "aa",
				org1: "qq",
				org2: "qq",
				phone: "aa",
				type: 3,
				username: "aa",
			}
			var objs=JSON.stringify(obj)
			this.$axios.post(baseurl+'/robot/secure/common/register',objs).then((res)=>{
				console.log(res)
			})*/
		}
	}
</script>

<style scoped="scoped">
	.center1{
		width:70%;
		border:1px solid #ccc;
		padding-bottom: 20px;
		margin:0 auto;
	}
	.center1 img{
		width:100%;
	}
	.centop{
		width: 100%;
		height:248px;
		background: #f8f8f8;
		border:1px solid #ccc;
		border-left: none;
		border-right: none;
	}
	.cenhr{
		width:100%;
		height:74px;
		position: relative;
	}
	.cenhr hr{
		width:94%;
		margin:30px auto;
		
	}
	.cenhr p{
		font-size: 30px;
		width: 100px;
		text-align: center;
		margin: auto;
		margin-top:-54px;
		background: #fff;
	}
	.button1{
		margin-top: -40px;
		text-align: center;
	}
</style>