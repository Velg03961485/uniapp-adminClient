<template>
	<view class="richText-page">
		
		<webEdit 
			:placeholder="placeholder"
			:width="width"
		></webEdit>
		
	</view>
</template>

<script>

	
	import  webEdit from '@/uni_modules/idcims-webEdit/components/webEdit/webEdit.vue'
	

	export default{
		components:{
			webEdit
		},
		data() {
			return {
				content:'',
				placeholder:'请输入',
				width:'720px',
			}
		},
		watch: {
			
		},
		onLoad() {
			
		},
		methods:{
			
			
			
		}
	}
</script>

<style lang="scss">
	.richText-page{
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 20px 0 0 30px;
	}
	
	
</style>