<template>
	<view class="content-page">
		<TopBotton>
			<view class="topButtonLeft" >
				<a-button type="primary" ghost class="leftBtnS">收回</a-button>
				<a-button type="primary" ghost class="leftBtnS">处理异常</a-button>
				<a-button type="primary" ghost class="leftBtnS">修改锚点</a-button>
			</view>
			<view class="topButtonRight" >
				<a-button type="primary" class="rightBtnS">创建</a-button>
				<a-button type="primary" class="rightBtnS">导出</a-button>
			</view>
		</TopBotton>
		<a-table style="width: 100%;margin: 0 auto;" bordered :dataSource="dataSource" :columns="columns" size="small" />
	</view>
</template>

<script>
import { defineComponent } from "vue"
import TopBotton from "@/components/operate/topBotton.vue"
	export default defineComponent({
		components:{
			TopBotton,
		},
		mounted() {
			
		},
		data() {
			return{
				dataSource: [
					{
						key: '1',
						name: '胡彦斌',
						age: 32,
						address: '西湖区湖底公园1号',
					},
					{
						key: '2',
						name: '胡彦祖',
						age: 42,
						address: '西湖区湖底公园1号',
					},
				],

				columns: [
					{
						title: '姓名',
						dataIndex: 'name',
						key: 'name',
					},
					{
						title: '年龄',
						dataIndex: 'age',
						key: 'age',
					},
					{
						title: '住址',
						dataIndex: 'address',
						key: 'address',
					},
				],
			}
		}
	})
</script>

<style>
	
</style>