<template>
  <div id="app"  @mouseover="OperatingWebsite()">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>
<script>
	export default{
		data() {
		    return {
		      currentTime: new Date().getTime()
		    };
		},
		methods: {
		    OperatingWebsite() {
		      /* let currentTime = this.currentTime;
		      //console.log(currentTime, "currentTime");
		      let lastTime = new Date().getTime();
		      //console.log(lastTime, "lastTime");
		      let timeOut = 10 * 60 * 1000; //设置时间 10分钟
		      if (lastTime - currentTime > timeOut) {
		        // 未操作页面，跳转登录页面
		        this.currentTime = new Date().getTime();
		        this.$router.push({path: "/demos6"});
		      } else {
		        this.currentTime = new Date().getTime();
		      } */
		    }
		}
	}
</script>
<style>
	*{
		padding:0;
		margin:0;
	}
</style>
