<template>
	<div class="shouye">
		<div class="shouyetop">
			<div class="shouyetopl">
				<p style="margin:10% 0 0 10px;color:#ccc;"><i class="el-icon-finished"></i> 机器人管理</p>
				<p style="margin:10% 0 0 10px;color:#ccc;">机器人管理中心............</p>
			</div>
			<div class="shouyetopr">
				<ul style="display: flex;">
					<li style="margin: 20px;color:#ccc;"><i class="el-icon-search"></i> 搜索</li>
					<li style="margin: 20px;color:#ccc;"><i class="el-icon-menu"></i> ....</li>
					<li style="margin: 20px;color:#ccc;"><i class="el-icon-plus"></i> 添加</li>
					<li style="margin: 20px;color:#ccc;"><span>?</span> 帮助</li>
				</ul>
			</div>
		</div>
		<div class="shouyetop2">
			<el-input style="width: 16%;position: absolute;top:22%;left:10px;"
			    placeholder="机器人.."
			    v-model="shouyetop2input">
			    <i slot="prefix" class="el-input__icon el-icon-user"></i>
			</el-input>
			<el-select v-model="value" placeholder="默认全部"  style="width: 16%;position: absolute;top:22%;left:18%;">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div class="shouyedlls">
			<div v-for="(item,val) in shouyepage" style="width: 49%;float: left;background-color: #032b4e;">
				<div style="width:100%;height:90%;border-bottom:1px solid #ccc;">
					<div style="width: 40%;height:100%;border-right:1px solid #ccc;position: relative;float: left;">
						<img :src="item.images" alt="" style="position: absolute;top:30%;left:0;right:0;margin: auto;">
						<p style="width:100%;text-align: center;position: absolute;top:46%;color:#fff;">{{item.title}}</p>
					</div>
					<div style="float: left;">
						<p style="color:#ccc;margin: 10% 0 0 30px;">机器人名称 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">型号 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">导航方式 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">..类型 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">状态 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">状态 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">状态 : <span>{{item.title}}</span></p>
						<p style="color:#ccc;margin: 10% 0 0 30px;">..时间 : <span>{{item.title}}</span></p>
					</div>
				</div>
				<div style="width:100%;height:10%;color:#ccc;">
					<ul style="width: 100%;height:100%;display: flex;">
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 视图</li>
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 配置</li>
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 计算</li>
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 编辑</li>
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 删除</li>
						<li style="flex: 1;text-align: center;margin-top: 0.5%;"><i class="el-icon-share"></i> 使用</li>
					</ul>
				</div>
				<!-- {{item}} -->
			</div>
		</div>
		<div class="shouyebots" style="margin-left: 10px;">
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="currentPage4"
			  :page-sizes="[100, 200, 300, 400]"
			  :page-size="100"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="400">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default{
		name:'shouye',
		data:function(){
			return {
				shouyetop2input:'',
				options: [{
				          value: '选项0',
				          label: '全部'
				        },{
				          value: '选项1',
				          label: '机器人1'
				        }, {
				          value: '选项2',
				          label: '机器人2'
				        }, {
				          value: '选项3',
				          label: '机器人3'
				        }, {
				          value: '选项4',
				          label: '机器人4'
				        }],
				        value: '',
						currentPage4: 4,
						shouyepage:[
							{images:require('../assets/sy3.png'),title:'......'},
							{images:require('../assets/sy3.png'),title:'......'},
							{images:require('../assets/sy3.png'),title:'......'},
							{images:require('../assets/sy3.png'),title:'......'}
						]
			}
		},
		methods:{
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
		    }
		}
	}
</script>

<style>
	li{
		list-style: none;
	}
	.shouye{
		width:100%;
		height:100%;
	}
	.shouyetop{
		width:100%;
		height:8%;
	}
	.shouyetopl{
		float: left;
	}
	.shouyetopr{
		float: right;
	}
	.shouyetop2{
		width:100%;
		height:8%;
		position: relative;
	}
	.shouyedlls{
		width:98.6%;
		height:80%;
		margin-left: 10px;
		position: relative;
	}
	.shouyedlls>div:nth-child(1){
		height:49%;
		position: absolute;
		left:0;
	}
	.shouyedlls>div:nth-child(2){
		height:49%;
		position: absolute;
		right:0;
	}
	.shouyedlls>div:nth-child(3){
		height:48%;
		position: absolute;
		left:0;
		top:51%;
	}
	.shouyedlls>div:nth-child(4){
		height:48%;
		position: absolute;
		right:0;
		top:51%;
	}
</style>
