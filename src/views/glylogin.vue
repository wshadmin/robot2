<template>
	<div>
		<div class="glylogin">
			<p>管理员注册</p>
			<div class="froms">
				<!--<label style="margin-left: 10%;"><input  type="radio" name="sex"checked="checked"/>平台 </label> 
				<label><input  type="radio" name="sex" />机器人 </label> -->
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="姓名" prop="pass" style="white-space:nowrap;">
				    <el-input  placeholder="填写样例: 张凯"  v-model="ruleForm.pass" autocomplete="off" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <el-form-item label="身份证" prop="checkPass">
				    <el-input  placeholder="填写样例: 3617987287382"  v-model="ruleForm.checkPass" autocomplete="off" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <el-form-item label="电话" prop="age">
				    <el-input v-model.number="ruleForm.age" placeholder="填写样例: 15512345678" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <!--<el-form-item label="邮箱" prop="mail">
				    <el-input v-model.number="ruleForm.mail" placeholder="填写样例: username@mail.com" style="padding-left:20px;"></el-input>
				  </el-form-item>-->
				  <el-form-item label="管理员邮箱" prop="mail">
				    <el-input  placeholder="邮箱 填写样例: username@mail.com" v-model="ruleForm.mail" autocomplete="off" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <div>
				  	<span style="float: left;font-size: 14px;margin-left: 32px;">公司地址</span>
				  	<span style="float: left;width:38%;">
				  		<select name="" id="" style="width:80%;margin-left:32px;height:40px;"  ref="newText1">
					  		<option value="0">中国</option>
					  	</select>
				  	</span>
				  	
				  	<span style="float: right;width:37%;padding-left: 14px;">
				  		<select name="" id="" @change="schange"  style="width:80%;height:40px;" ref="newText2">
							<option :value="ind" v-for="(val,ind) in city">
								{{val.name}}
							</option>
						</select> 省
				  	</span>
				  	
				
					<span style="clear:both;float: left;width:38%;margin-left:120px;" >
						<select name="" id="" @change="cchange" style="width:79%;height:40px;margin-top:10px;"  ref="newText3">
							 <option :value="ind" v-for="(val,ind) in city[sindex].city">
							 	 {{val.name}}
							 </option>
						</select> 市
					</span>
					
					<span style="float: right;width:37%;">
						<select name="" id=""  style="width:80%;height:40px;margin-top:10px;" ref="newText4">
							 <option :value="ind" v-for="(val,ind) in city[sindex].city[cindex].area">
							 	 {{val}}
							 </option>
						</select> 县
					</span>
					
				  </div>
				  <el-form-item label="一级部门" prop="onebm" style="clear:both;padding-top:20px;">
				    <el-input v-model.number="ruleForm.onebm" placeholder="公司名称 填写样例: 公安部第一研究所"  autocomplete="off" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <el-form-item label="二级部门" prop="twobm">
				    <el-input v-model.number="ruleForm.twobm" placeholder="部门名称 填写样例: 通信技术"  autocomplete="off" style="padding-left:20px;"></el-input>
				  </el-form-item>
				  <div class="time" v-show="times">
				  	<ul>
				  		<li>注册状态 :<span v-text="timeall.yx"></span></li>
				  	</ul>
				  </div>
				  <div class="time" v-show="times2">
				  	<ul>
				  		<li>密钥 : <span v-text="timeall.ms"></span></li>
				  		<li>创建时间 : <span v-text="timeall.createtime"></span></li>
				  		<li>失效时间 : <span v-text="timeall.sxtime"></span></li>
				  	</ul>
				  </div>
				  <el-form-item style="margin-left: 20px;">
				    <el-button  type="primary" @click="submitForm('ruleForm')">注册</el-button>
				    <el-button  type="primary" @click="submitreturn()">返回</el-button>
				  </el-form-item>
				</el-form>
				
			</div>
		</div>
	</div>
</template>

<script>
import info from '../../info.js';
import { baseurl } from '../config/urlconfig.js';
import axios from 'axios'
import qs from 'qs';
	export default{
		name:'glylogin',
		data() {
		    var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('姓名不能为空|填写样例：张凯'));
		        }
		    };
		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('身份证号不能为空|填写样例：1376278318748381234'));
		        }else if(!(/^(\d{14}|\d{17})(\d|[xX])$/.test(value))){
		        	return callback(new Error('身份证号格式不对|填写样例：15512345678'));
		        }
		    };
		    var checkAge = (rule, value, callback) => {
		        if (!value) {
		          return callback(new Error('电话号不能为空|填写样例：15512345678'));
		        }else if(!(/^1[3456789]\d{9}$/.test(value))){
		        	return callback(new Error('电话号格式不对|填写样例：15512345678'));
		        }
		    };
		    var mails = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('邮箱不能为空|填写样例：username@mail.com'));
		        }else if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(value))){
		        	callback(new Error('邮箱格式不对|填写样例：username@mail.com'));
		        }
		    };
		    var onebms = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('一级部门(公司名称)不能为空|填写样例：公安部第一研究所'));
		        }
		    };
		    var twobms = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('二级部门(公司名称)不能为空|填写样例：通信技术'));
		        }
		    };
	      return {
	      	city:[],
		  	sindex:0,
	  	  	cindex:0,
	  	  	times:false,
	  	  	times2:false,
	  	  	timeall:{
	  	  		ms:'',
	  	  		yx:'',
	  	  		createtime:'',
	  	  		sxtime:''
	  	  	},
	        ruleForm: {
	          pass: '',
	          checkPass: '',
	          age: '',
	          mail:'',
	          onebm:'',
	          twobm:''
	        },
	        rules: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
	          ],
	          age: [
	            { validator: checkAge, trigger: 'blur' }
	          ],
	          mail: [
	            { validator: mails, trigger: 'blur' }
	          ],
	          onebm: [
	            { validator: onebms, trigger: 'blur' }
	          ],
	          twobm: [
	            { validator: twobms, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    /*directives:{
		    trigger:{
		     inserted(el,binging){
		        el.click()
		       //$(el).trigger('click')
		      }
		   }
		},*/
		created(){
	  	   console.log(res)
	  	   this.city=res;
	    },
	    methods: {
	      submitForm(formName) {
	      	var guo=this.$refs.newText1.options[this.$refs.newText1.value].text;
	      	var sheng=this.$refs.newText2.options[this.$refs.newText2.value].text;
	      	var shi=this.$refs.newText3.options[this.$refs.newText3.value].text;
	      	var xian=this.$refs.newText4.options[this.$refs.newText4.value].text;
	      	var selectall=guo+sheng+shi+xian;
	      	if (this.ruleForm.pass!='' && this.ruleForm.checkPass!='' && this.ruleForm.age!='' && this.ruleForm.mail!=''  && this.ruleForm.onebm!=''  && this.ruleForm.twobm!='') {
	            console.log('请求!');
	            var obj =JSON.stringify({
		          	type:3,//1：平台注册；2：机器人注册；3：管理员注册
		          	username:this.ruleForm.pass,//名称
		          	identity:this.ruleForm.checkPass,//身份证
		          	phone:this.ruleForm.age,//联系电话
		          	email:this.ruleForm.mail,//接收授权码邮箱
		          	org1:this.ruleForm.onebm,//一级单位
		          	org2:this.ruleForm.twobm,//二级单位
		          	address:selectall//地址
		        })
	            this.$axios.post(baseurl+'/robot/secure/common/register',obj).then((res)=>{
	            	console.log('管理员注册',res)
	            	if(res.data.message=='已通过注册认证，请勿重复认证'){
	            		this.times=true;
	            		this.times2=false;
	            		this.timeall={
		            		ms:'',
				  	  		yx:res.data.message,
				  	  		createtime:'',
				  	  		sxtime:''
		            	}
	            	}else{
	            		this.times=true;
	            		this.times2=true;
		            	this.timeall={
		            		ms:res.data.data.result.secret.secret,
				  	  		yx:res.data.message,
				  	  		createtime:res.data.data.result.secret.createTime,
				  	  		sxtime:res.data.data.result.secret.finishTime
		            	}
	            	}
	            	/*if(res.data.message=='已通过注册认证，请勿重复认证'){
	            		this.$alert('<strong>该账号已注册，请勿重复注册</strong>', '注册', {
				          dangerouslyUseHTMLString: true
				        })
	            	}else{
	            		this.$alert('<strong>管理员注册成功</strong>', '注册', {
				          dangerouslyUseHTMLString: true
				        }).then(() => {
				        	this.$router.push({path:'/loginindex'})
				        })
	            	}*/
	            })
	        }else{
	        	this.$refs[formName].validate((valid) => {
		            console.log('error submit!!');
		            return false;
	        	});
	        }
	        
	      },
	      schange:function(evt){
	           this.sindex=evt.target.value;
	           this.cindex=0
	           // console.log(evt)
	  	  },
	  	  cchange:function(evt){
	  	  	 	this.cindex=evt.target.value
	  	  },
	  	  submitreturn(){
	  	  	this.$router.push({path:'/loginindex'})
	  	  }
	    }
	}
</script>

<style>
	.glylogin{
		width:50%;
		margin: auto;
		border:1px solid #ccc;
		padding-bottom: 55px;
	}
	.glylogin p{
		width:100%;
		height:100px;
		text-align: center;
		font-size: 30px;
	}
	.froms{
		width:500px;
		margin:-50px auto;
	}
	.demo-ruleForm{
		margin-top: 10px;
	}
	.el-form-item__error{
		color: #F56C6C;
	    font-size: 12px;
	    line-height: 1;
	    padding-top: 4px;
	    position: absolute;
	    top: 100%;
	    left: 22px;
	}
	li{
		list-style: none;
	}
	.time{
		width: 100%;
	}
	.time li{
		width:100%;
		height:50px;
		float: left;
	}
	.time2{
		width: 100%;
	}
	.time2 li{
		width:100%;
		height:50px;
		float: left;
	}
</style>