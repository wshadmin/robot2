<template>
    <div>
        <h1>vue + websocket连接demo</h1>
    </div>
</template>

<script>
//let socket;
// 给服务器发送一个字符串:
export default {
    data() {
        return {
			
        };
    },
	created() {
	      this.initWebSocket();
	},
	destroyed() {
	  this.websock.close();//离开路由之后断开websocket连接
	},
	methods: {
	    initWebSocket(){//初始化weosocket(必须)
	        const wsuri = "ws://39.97.77.207:8000/robot2_count/RobotControlPlatform";    //请根据实际项目需要进行修改
	        this.websock = new WebSocket(wsuri);      //新建一个webstock对象
	        this.websock.onmessage = this.websocketonmessage;  
	        this.websock.onopen = this.websocketonopen;      
	        this.websock.onerror = this.websocketonerror;
	        this.websock.onclose = this.websocketclose;
	    },
	    websocketonopen(){//websocket连接后发送数据(send发送)
	        let actions = {"orgid":"123"};     //请根据实际项目需要进行修改
	        this.websocketsend(JSON.stringify(actions));
	    },
	    websocketonerror(){//连接建立失败重连
	        this.initWebSocket();
	    },
	    websocketonmessage(e){ //数据接收
	        //this.redata = JSON.parse(e.data).data;
			var demo1=e.data;
			if(demo1!="后端接收到连接请求，允许连接"){
				console.log(JSON.parse(demo1));
			}
			
	       
	    },
	    websocketsend(Data){//数据发送
	        this.websock.send(Data);
	    },
	    websocketclose(e){  //关闭
	        console.log('断开连接',e);
	    }
	},
};
</script>