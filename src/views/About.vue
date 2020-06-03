<template>
 <div class="box">
		<select name="" id="" @change="schange">
			<option :value="ind" v-for="(val,ind) in city">
				{{val.name}}
			</option>
		</select>省
		<select name="" id="" @change="cchange">
			 <option :value="ind" v-for="(val,ind) in city[sindex].city">
			 	 {{val.name}}
			 </option>
		</select>市
		<select name="" id="">
			 <option value="" v-for="(val,ind) in city[sindex].city[cindex].area">
			 	 {{val}}
			 </option>
		</select>县
	</div>
</template>
<script>
import info from '../../info.js'
	export default{
		  name:'about',
		  data:function(){
		  	return {
		  		city:[],
		  		sindex:0,
	  	  	cindex:0
		  	}
		  },
		  created(){
		  	 console.log(res)
		  	 this.city=res;
		  },
		  methods:{
		  	schange:function(evt){
           this.sindex=evt.target.value;
           this.cindex=0
           // console.log(evt)
  	    },
  	  	cchange:function(evt){
  	  	 	 this.cindex=evt.target.value
  	  	}
		  }
	}
</script>
<style lang="scss" scoped>
 
</style>