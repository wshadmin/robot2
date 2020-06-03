<template>
	<div :style="{width: '100%', height: '100%'}" style="overflow: auto;">
		<div class="main2">
			<table>
				<tr>
					<th>序号</th>
					<th>名称</th>
					<th>单位</th>
					<th>状态</th>
				</tr>
				<tbody>
					<tr v-for="(item,val) in list" :key="val">
						<td><span>{{val+1}}</span></td>
						<td>{{item.name}}</td>
						<td>{{item.dw}}</td>
						<td><span>{{item.state}}</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		name:'main2',
		data:function(){
			return {
				list:[
					{name:'警101',dw:'一所',state:'离线'},
					{name:'警102',dw:'一所',state:'离线'},
					{name:'警103',dw:'一所',state:'离线'},
					{name:'警104',dw:'一所',state:'离线'},
					{name:'警105',dw:'一所',state:'离线'},
					{name:'警106',dw:'一所',state:'离线'},
					{name:'警107',dw:'一所',state:'离线'},
					{name:'警108',dw:'一所',state:'离线'},
					{name:'警109',dw:'一所',state:'离线'},
					{name:'警110',dw:'一所',state:'离线'},
					{name:'警111',dw:'一所',state:'离线'},
					{name:'警112',dw:'一所',state:'离线'},
					{name:'警113',dw:'一所',state:'离线'},
					{name:'警114',dw:'一所',state:'离线'},
					{name:'警115',dw:'一所',state:'离线'}
				]
			} 
		},
		props:["main2list"],
		mounted(){
			this.list=[];
			/* this.list=this.main2list.data;
			console.log('main2--',this.main2list.data) */
		}
	}
</script>

<style>
	.main2{
		width: 100%;
	}
	.main2 table{
		width: 100%;
	}
	.main2 tr{
		width: 100%;
		color:#fff;
		display: flex;
	}
	.main2 th{
		flex :1;
		height:30px;
		line-height: 30px;
		background: #073261;
		text-align: center;
	}
	.main2 td{
		flex :1;
		text-align: center;
	}
	.main2 tbody tr td:nth-child(1) span{
		width:20px;
		height:16px;
		display: inline-block;
		color:black;
		background: #43bafe;
		border-radius: 9px;
		line-height: 16px;
	}
	.main2 tbody tr td:nth-child(4) span{
		width: 100%;
		height:16px;
		display: inline-block;
		background: #ff0059;
		border-radius: 9px;
		line-height: 16px;
	}
	.main2 tbody tr:nth-child(even){
		/* 偶数行 */
		background-color: #08204b;
	}
	.main2 tbody tr:nth-child(odd){
		/* 偶数行 */
		background-color: #09153d;
	}
	.main2 tbody tr:hover{
		background-color: #174382;
	}
</style>
