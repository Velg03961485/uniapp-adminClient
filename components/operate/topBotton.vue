<template>
	<view class="topButton">
		<slot  slot="leftBtn" class="topButtonLeft"></slot>
		
	</view>
</template>

<script>
</script>

<style lang="less">
	.topButton{
		width: 100%;
		height: 45px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		border-bottom: 1px solid #e6e6e6;
	}
	
	.topButtonLeft{
		width: 50%;
		height: 30px;
		display: flex;
	}
	.topButtonRight{
		width: 50%;
		height: 30px;
		display: flex;
	}
</style>