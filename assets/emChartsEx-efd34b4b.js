import{d as x,c as n,T as u,U as D,e as i,o as v,f as _,g as a,w as l,i as d,V as c,h}from"./index-df5299c9.js";import{s as m}from"./sourceCodeView-84d5d6fc.js";const C=`
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
`,y=`
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
`,w={class:"container"},b=h("div",null,"饼图",-1),M=h("div",null,"柱状图",-1),F=x({name:"emChartsEx",__name:"emChartsEx",setup(S){let s=n([]),r=n([]);const p=u(()=>{let e=[],o=[];if(s.value&&s.value.length)for(const t of s.value)e.push(t.date),o.push(parseFloat((t.total/100).toFixed(2)));return{title:{text:"近一月销售情况",x:"center"},tooltip:{trigger:"item",formatter:"日期：{b}<br/> 金额：{c}"},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:[{data:o,type:"bar"}]}}),f=u(()=>{let e=[],o=[];if(r.value&&r.value.length)for(const t of r.value)e.push(t.name),o.push({value:t.count,name:t.name});return{title:{text:"订单分布",x:"center"},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:e},series:[{type:"pie",radius:"55%",center:["50%","40%"],data:o,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}});return D(()=>{s.value=[{date:"2023-05-10",total:20},{date:"2023-05-11",total:120},{date:"2023-05-12",total:40},{date:"2023-05-13",total:21},{date:"2023-05-14",total:52},{date:"2023-05-15",total:42},{date:"2023-05-16",total:41},{date:"2023-05-17",total:122},{date:"2023-05-18",total:321},{date:"2023-05-19",total:123},{date:"2023-05-20",total:45},{date:"2023-05-21",total:70},{date:"2023-05-22",total:80},{date:"2023-05-23",total:10},{date:"2023-05-24",total:42},{date:"2023-05-25",total:50},{date:"2023-05-26",total:67},{date:"2023-05-27",total:30},{date:"2023-05-28",total:20},{date:"2023-05-29",total:90},{date:"2023-05-30",total:110},{date:"2023-05-31",total:0},{date:"2023-06-01",total:0},{date:"2023-06-02",total:0},{date:"2023-06-03",total:0},{date:"2023-06-04",total:0},{date:"2023-06-05",total:0},{date:"2023-06-06",total:0},{date:"2023-06-07",total:0},{date:"2023-06-08",total:0},{date:"2023-06-09",total:0}],r.value=[{status:102,count:5,name:"用户取消"},{status:103,count:6,name:"系统取消"},{status:201,count:15,name:"已付款"},{status:203,count:1,name:"已退款"},{status:401,count:1,name:"已发货"},{status:502,count:3,name:"系统收货"},{status:601,count:6,name:"已评价"}]}),(e,o)=>{const t=i("el-card"),g=i("el-divider");return v(),_("div",w,[a(t,null,{header:l(()=>[b]),footer:l(()=>[a(m,{code:d(C)},null,8,["code"])]),default:l(()=>[a(d(c),{config:d(f),width:"100%",height:"350px",id:"statusChart"},null,8,["config"])]),_:1}),a(g),a(t,null,{header:l(()=>[M]),footer:l(()=>[a(m,{code:d(y)},null,8,["code"])]),default:l(()=>[a(d(c),{config:d(p),width:"100%",height:"350px",id:"monthChart"},null,8,["config"])]),_:1})])}}});export{F as default};
