import{d as x,c as n,Q as u,R as D,e as i,o as v,f as C,g as e,w as l,h as c,i as d,T as m}from"./index-0f83177b.js";import{s as h}from"./sourceCodeView-3a98e334.js";const y=`
<script lang="ts" setup>
	let orderStatusData = ref<any[]>([])

	const orderStatusChart = computed(() => {
		let lData = []
		let sData = []
		if (orderStatusData.value && orderStatusData.value.length) {
			for (const item of orderStatusData.value) {
				lData.push(item.name)
				sData.push({
					value: item.count,
					name: item.name
				})
			}
		}
		return {
			title: {
				text: '订单分布',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{b} : {c} ({d}%)'
			},
			legend: {
				left: 'center',
				bottom: '10',
				data: lData
			},
			series: [
				{
					type: 'pie',
					radius: '55%',
					center: ['50%', '40%'],
					data: sData,
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}
	})

	onMounted(() => {
		orderStatusData.value = [
			{
				status: 102,
				count: 5,
				name: '用户取消'
			},
			{
				status: 103,
				count: 6,
				name: '系统取消'
			},
			{
				status: 201,
				count: 15,
				name: '已付款'
			},
			{
				status: 203,
				count: 1,
				name: '已退款'
			},
			{
				status: 401,
				count: 1,
				name: '已发货'
			},
			{
				status: 502,
				count: 3,
				name: '系统收货'
			},
			{
				status: 601,
				count: 6,
				name: '已评价'
			}
		]
	})
<\/script>

<template>
  <em-charts :config="orderStatusChart" width="100%" height="350px" id="statusChart" />
</template>
`,_=`
<script lang="ts" setup>
	let orderMonthData = ref<any[]>([])

	const orderMonthChart = computed(() => {
		let xData = []
		let sData = []
		if (orderMonthData.value && orderMonthData.value.length) {
			for (const item of orderMonthData.value) {
				xData.push(item.date)
				sData.push(parseFloat((item.total / 100).toFixed(2)))
			}
		}
		return {
			title: {
				text: '近一月销售情况',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '日期：{b}<br/> 金额：{c}'
			},
			xAxis: {
				type: 'category',
				data: xData
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: sData,
					type: 'bar'
				}
			]
		}
	})

	onMounted(() => {
		orderMonthData.value = [
			{
				date: '2023-05-10',
				total: 20
			},
			{
				date: '2023-05-11',
				total: 120
			},
			{
				date: '2023-05-12',
				total: 40
			},
			{
				date: '2023-05-13',
				total: 21
			},
			{
				date: '2023-05-14',
				total: 52
			},
			{
				date: '2023-05-15',
				total: 42
			},
			{
				date: '2023-05-16',
				total: 41
			},
			{
				date: '2023-05-17',
				total: 122
			},
			{
				date: '2023-05-18',
				total: 321
			},
			{
				date: '2023-05-19',
				total: 123
			},
			{
				date: '2023-05-20',
				total: 45
			},
			{
				date: '2023-05-21',
				total: 70
			},
			{
				date: '2023-05-22',
				total: 80
			},
			{
				date: '2023-05-23',
				total: 10
			},
			{
				date: '2023-05-24',
				total: 42
			},
			{
				date: '2023-05-25',
				total: 50
			},
			{
				date: '2023-05-26',
				total: 67
			},
			{
				date: '2023-05-27',
				total: 30
			},
			{
				date: '2023-05-28',
				total: 20
			},
			{
				date: '2023-05-29',
				total: 90
			},
			{
				date: '2023-05-30',
				total: 110
			},
			{
				date: '2023-05-31',
				total: 0
			},
			{
				date: '2023-06-01',
				total: 0
			},
			{
				date: '2023-06-02',
				total: 0
			},
			{
				date: '2023-06-03',
				total: 0
			},
			{
				date: '2023-06-04',
				total: 0
			},
			{
				date: '2023-06-05',
				total: 0
			},
			{
				date: '2023-06-06',
				total: 0
			},
			{
				date: '2023-06-07',
				total: 0
			},
			{
				date: '2023-06-08',
				total: 0
			},
			{
				date: '2023-06-09',
				total: 0
			}
		]
	})
<\/script>

<template>
  <em-charts :config="orderMonthChart" width="100%" height="350px" id="monthChart" />
</template>
`,w={class:"container"},B=x({name:"emChartsEx",__name:"emChartsEx",setup(b){let r=n([]),s=n([]);const p=u(()=>{let o=[],t=[];if(r.value&&r.value.length)for(const a of r.value)o.push(a.date),t.push(parseFloat((a.total/100).toFixed(2)));return{title:{text:"近一月销售情况",x:"center"},tooltip:{trigger:"item",formatter:"日期：{b}<br/> 金额：{c}"},xAxis:{type:"category",data:o},yAxis:{type:"value"},series:[{data:t,type:"bar"}]}}),f=u(()=>{let o=[],t=[];if(s.value&&s.value.length)for(const a of s.value)o.push(a.name),t.push({value:a.count,name:a.name});return{title:{text:"订单分布",x:"center"},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:o},series:[{type:"pie",radius:"55%",center:["50%","40%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}});return D(()=>{r.value=[{date:"2023-05-10",total:20},{date:"2023-05-11",total:120},{date:"2023-05-12",total:40},{date:"2023-05-13",total:21},{date:"2023-05-14",total:52},{date:"2023-05-15",total:42},{date:"2023-05-16",total:41},{date:"2023-05-17",total:122},{date:"2023-05-18",total:321},{date:"2023-05-19",total:123},{date:"2023-05-20",total:45},{date:"2023-05-21",total:70},{date:"2023-05-22",total:80},{date:"2023-05-23",total:10},{date:"2023-05-24",total:42},{date:"2023-05-25",total:50},{date:"2023-05-26",total:67},{date:"2023-05-27",total:30},{date:"2023-05-28",total:20},{date:"2023-05-29",total:90},{date:"2023-05-30",total:110},{date:"2023-05-31",total:0},{date:"2023-06-01",total:0},{date:"2023-06-02",total:0},{date:"2023-06-03",total:0},{date:"2023-06-04",total:0},{date:"2023-06-05",total:0},{date:"2023-06-06",total:0},{date:"2023-06-07",total:0},{date:"2023-06-08",total:0},{date:"2023-06-09",total:0}],s.value=[{status:102,count:5,name:"用户取消"},{status:103,count:6,name:"系统取消"},{status:201,count:15,name:"已付款"},{status:203,count:1,name:"已退款"},{status:401,count:1,name:"已发货"},{status:502,count:3,name:"系统收货"},{status:601,count:6,name:"已评价"}]}),(o,t)=>{const a=i("el-card"),g=i("el-divider");return v(),C("div",w,[e(a,null,{header:l(()=>t[0]||(t[0]=[c("div",null,"饼图",-1)])),footer:l(()=>[e(h,{code:d(y)},null,8,["code"])]),default:l(()=>[e(d(m),{config:d(f),width:"100%",height:"350px",id:"statusChart"},null,8,["config"])]),_:1}),e(g),e(a,null,{header:l(()=>t[1]||(t[1]=[c("div",null,"柱状图",-1)])),footer:l(()=>[e(h,{code:d(_)},null,8,["code"])]),default:l(()=>[e(d(m),{config:d(p),width:"100%",height:"350px",id:"monthChart"},null,8,["config"])]),_:1})])}}});export{B as default};
