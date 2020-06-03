<template>
	<div class="shouyeindex">
		<div class="shouyeleft">
			<div class="shouyelefttop">
				<img src="../assets/sy1.png" alt="">
				<p>巡逻机器人管理系统</p>
			</div>
			
			<div class="shouyeleftbot">
				<!-- <el-input
				  placeholder="输入关键字进行过滤"
				  v-model="filterText" style="border-radius: 30px;width:90%;margin-left: 5%;">
				</el-input> -->
				<el-menu
				      default-active="1"
					  :default-openeds='["3","2"]'
				      class="el-menu-vertical-demo"
				      background-color="#032a4b"
				      text-color="#fff"
				      active-text-color="#ffd04b" style="border:none;">
						<el-menu-item index="1" @click="handclick(0)">
							<i class="el-icon-menu"></i>
							<span slot="title">首页</span>
						</el-menu-item>
				        <el-submenu index="2">
				          <template slot="title">
				        	<i class="el-icon-location"></i>
				        	<span>配置中心</span>
				          </template>
				          <el-menu-item-group>
				        	<el-menu-item index="2-1"  @click="handclick(1)">基础设置</el-menu-item>
				          </el-menu-item-group>
				        </el-submenu>
						<el-submenu index="3">				
						  <template slot="title">
							<i class="el-icon-location"></i>
							<span>系统管理</span>
						  </template>
						  <el-menu-item-group>
							<el-menu-item index="3-1">用户管理</el-menu-item>
							<el-menu-item index="3-2">单位管理</el-menu-item>
							<el-menu-item index="3-3">机器人管理</el-menu-item>
							<el-menu-item index="3-4">客户...</el-menu-item>
							<el-menu-item index="3-5">后台服务..</el-menu-item>
							<el-menu-item index="3-6">单位管理</el-menu-item>
							<el-menu-item index="3-7">人..管理</el-menu-item>
							<el-menu-item index="3-8">人..管理</el-menu-item>
						  </el-menu-item-group>
						</el-submenu>
						<el-menu-item index="4">
						  	<i class="el-icon-setting"></i>
						  	<span slot="title">数据中心</span>
						</el-menu-item>
					</el-menu>
			</div>
			
		</div>
		<div class="shouyeright">
			<div class="shouyerighttop1">
				<div class="shouyerighttop1l" style="width:50%;height:100%;height:100%;float: left;position: relative;display: flex;">
					<i class="el-icon-notebook-2" style="color:#fff;position: absolute;top:28%;bottom: 0;margin:auto;"></i>
					<span style="color:rgb(255, 208, 75);margin-left: 4%;position: absolute;top:22%;bottom: 0;left:3%;margin:auto;">首页</span>
					<span style="color:#fff;position: absolute;top:20%;bottom: 0;margin:auto;left:8%;">|</span>
					<span style="color:#fff;position: absolute;top:22%;bottom: 0;margin:auto;left:10%;">机器人管理</span>
				</div>
				<div class="shouyerighttop1r" style="float: right;position: relative;display: table;">
					<div style="float: right;color:#fff;margin:14% 20px 0 0;">
						<el-dropdown>
						  <span class="el-dropdown-link" style="color:#fff;">
						    admin<i class="el-icon-arrow-down el-icon--right"></i>
							<!-- <br>
							ad...人 -->
						  </span>
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>退出</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>

					</div>
					<img src="../assets/shouye2.png" alt="" style="float: right;margin:16% 20px 0 0;width:20px;height:20px;">
				</div>
			</div>
			<div class="shouyerighttop2">
				<ul>
					<li v-for="(item,val) in syarr" :key="val" :class="val==colornum?'colornum2':''"> <span  @click="handclick(val)">{{item}}<i class="el-icon-close"   @click="handremove(val)"></i> </span> </li>
				</ul>
			</div>
			<div class="shouyerightbot">
				<shouye :is='currentCom'></shouye>
			</div>
			
		</div>
	</div>
</template>

<script>
import shouye from './shouye.vue'
import shouyejcsz from './shouyejcsz.vue'
	export default{
		name:'shouyeindex',
		components:{shouye,shouyejcsz},
		data() {
	      return {
	        activeNames: ['1'],
			filterText:'',
			currentCom:'shouye',
			syarr:['首页'],//选中
			colornum:0
	      };
	    },
		mounted(){
			
		},
	    methods: {
			handclick(intnum){
				//console.log(intnum)
				var newarrs=[];
				if(intnum==0){
					if(this.syarr.indexOf('首页')=='-1'){
						this.syarr.push('首页');
					}
					this.colornum=0;
					this.currentCom=shouye;
				}else{
					if(this.syarr.indexOf('基础设置')=='-1'){
						this.syarr.push('基础设置');
					}
					this.colornum=1;
					this.currentCom=shouyejcsz;
				}
				
			},
			handremove(vals){
				//console.log(vals)
				/* if(this.syarr.length==1){
					alert('只剩一个，不能删除')
				}else{
					var _this = this;
					var newarr=[];
					for( var i=0;i<_this.syarr.length;i++){
						if(i!=vals){
							newarr.push(_this.syarr[i])
						}
					}
					console.log('----0',newarr)
					_this.syarr=[];
					for(var k=0;k<newarr.length;k++){
						_this.syarr.push(newarr[k])
					}
					newarr=[];
				} */ 
				
			} 
	    }
  };
</script>

<style>
	html,body,#app{
		width:100%;
		height:100%;
		overflow: hidden;
	}
	.shouyeindex{
		width:100%;
		height:100%;
	}
	.shouyeleft{
		width:15%;
		height:100%;
		background: #032a4b;
		float: left;
	}
	.shouyelefttop{
		width:100%;
		height:5%;
		position: relative;
		display: table;
	}
	.shouyelefttop img{
		position: absolute;
		top:0;
		bottom:0;
		left:10%;
		margin: auto;
	}
	.shouyelefttop p{
		display: table-cell;
		vertical-align:middle;
		padding-left:18%;
		color:#fff;
		font-size: 18px;
	}
	.shouyeleftbot{
		height:95%;
		box-sizing: border-box;
		border-top:1px solid #2f78a5;
		overflow: auto;
	}
	.shouyeright{
		width:85%;
		height:100%;
		background: #003f68;
		float: left;
	}
	.shouyerighttop1{
		width:100%;
		height:5%;
	}
	.shouyerighttop2{
		border-top:1px solid #2f78a5;
		width:100%;
		height:3%;
	}
	.shouyerighttop2 ul li{
		float: left;
		margin-top:0.2%;
		list-style: none;
		cursor: pointer;
	}
	.shouyerighttop2 ul li span{
		display: inline-block;
		font-weight: bold;
		/* padding:2px; */
		padding:0 10px;
		margin-right: 10px;
		border:1px solid #2f78a5;
		border-radius: 10px;
	}
	.shouyerighttop2 ul li i:hover{
		color:#0000FF;
	}
	.shouyerightbot{
		width:100%;
		height:91.8%;
		background: #034174;
		box-sizing: border-box;
		border:10px solid #114672;
	}
	.colornum2{
		color:yellow;
	}
</style>