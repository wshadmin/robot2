<template>
	<div class="main6s">
		<div id="main6" :style="{width: '100%', height: '100%'}"></div>
	</div>
</template>

<script>
import echarts from 'echarts'
	export default{
		name:'main6',
		props:["main6list"],
		created(){
			/* setTimeout(()=>{
				console.log('44',this.main6list)
				var robotmain6=this.main6list;
				for(var i=0;i<robotmain6.length;i++){
					 this.data6.push(robotmain6[i].patrol,robotmain6[i].security,robotmain6[i].service,robotmain6[i].toInternet,robotmain6[i].selfSupport,robotmain6[i].customized)
				}
				console.log(this.data6)
			},3000) */
			
		},
		mounted(){
			setTimeout(()=>{
				console.log('44',this.main6list)
				var robotmain6=this.main6list;
				for(var i=0;i<robotmain6.length;i++){
					 this.data6.push(robotmain6[i].patrol,robotmain6[i].security,robotmain6[i].service,robotmain6[i].toInternet,robotmain6[i].selfSupport,robotmain6[i].customized)
				}
				console.log(this.data6)
				this.drawLine(this.data6);
			},2000)
		    
		},
		data:function(){
			return { 
				list6:[],
				data6:[],
			}
		},
		methods: {
		    drawLine(main66){
		        // 基于准备好的dom，初始化echarts实例
		        let main6 = this.$echarts.init(document.getElementById('main6'));
				//var grade = ['涉嫌','涉恐','涉毒','在逃','上访', ]
				var myColor = ['#08cca2', '#fac46e', '#64ccf3', '#fb9996', '#36a3f7'];
		        // 绘制图表
		        main6.setOption({
			            "title": {
			                "text": "",
			                x: "center",
			                y:"4%",
			                textStyle: {
			                    color: '#fff',
			                    fontSize: '22'
			                },
			                subtextStyle: {
			                    color: '#90979c',
			                    fontSize: '16',
			        
			                },
			            },
			            tooltip: {
			                trigger: 'axis',
			                axisPointer: {
			                    type: 'shadow'
			                }
			            },
			            grid: {
			                top: '0%',
			                right: '3%',
			                left: '5%',
			                bottom: '12%'
			            },
			            xAxis: [{
			                type: 'category',
			                data: ['巡逻', '安保', '服务', '入网', '自营','定制'],
			                axisLine: {
			                    lineStyle: {
			                        color: 'rgba(255,255,255,0.12)'
			                    }
			                },
			                axisLabel: {
			                    margin: 10,
			                    color: '#e2e9ff',
			                    textStyle: {
			                        fontSize: 14
			                    },
			                },
							axisLine: {
								show: true,
								lineStyle: {
									color: "#00bfe3",
									width: 1,
									type: "solid"
								}
							}
			            }],
			            yAxis: [{
			                name: '',
			                axisLabel: {
			                    formatter: '{value}',
			                    color: '#e2e9ff',
			                },
			                axisLine: {
			                    show: false,
			                    lineStyle: {
			                        color: 'rgba(255,255,255,1)'
			                    }
			                },
			                splitLine: {
			                    lineStyle: {
			                        color: 'rgba(255,255,255,0.12)'
			                    }
			                }
			            }],
			            series: [{
			                type: 'bar',
							data:main66,
			                //data: [50, 10, 10, 13, 12, 15],
			                barWidth: '20px',
			                itemStyle: {
			                    normal: {
			                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                            offset: 0,
			                            color: 'rgba(0,244,255,1)' // 0% 处的颜色
			                        }, {
			                            offset: 1,
			                            color: 'rgba(0,77,167,1)' // 100% 处的颜色
			                        }], false),
			                        barBorderRadius: [30, 30, 30, 30],
			                        shadowColor: 'rgba(0,160,221,1)',
			                        shadowBlur: 4,
			                    }
			                },
			                label: {
			                    normal: {
			                        show: true,
			                        lineHeight: 30,
			                        width: 80,
			                        height: 30,
			                        backgroundColor: 'rgba(0,160,221,0.1)',
			                        borderRadius: 200,
			                        position: ['-8', '-60'],
			                        distance: 1,
			                        formatter: [
			                            '    {d|●}',
			                            ' {a|{c}}     \n',
			                            '    {b|}'
			                        ].join(','),
			                        rich: {
			                            d: {
			                                color: '#3CDDCF',
			                            },
			                            a: {
			                                color: '#fff',
			                                align: 'center',
			                            },
			                            b: {
			                                width: 1,
			                                height: 30,
			                                borderWidth: 1,
			                                borderColor: '#234e6c',
			                                align: 'left'
			                            },
			                        }
			                    }
			                }
			            }],
	                grid: {
	                	y: 40,
	                },
		    });
		    window.onresize = function(){
			    main6.resize();
			}
		}
	}
		}
</script>

<style scoped="scoped">
