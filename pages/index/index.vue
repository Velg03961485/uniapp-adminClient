<template>
	<view class="index-page">
		
		<text class="title">{{ $t('demo.title.themeTitle') }}</text>
		
		<view class="textStyle">
			{{ $t('demo.decText.themeText') }}
		</view>
		
		
		<text class="title">{{ $t('demo.icons.title') }}</text>
		<view class="textStyle">
			{{ $t('demo.decText.iconText') }}
		</view>
		
		<view class="fontListBox">
			<IconFont type="anticon-hyx-icon-fuzhi" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-fanshenhe" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-tiaobodan" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-tingyong_line" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-huodongzhihang" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-mingxiayingyong" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-hebingshenhe" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-shezhigongyouzhe" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-kehuhuishouzhan" class="fontItem" ></IconFont>
			<IconFont type="anticon-hyx-icon-jiaoseguanli" class="fontItem" ></IconFont>
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				title: 'Hello',
				
			}
		},
		onLoad() {
			console.log(this.$siteBaseUrl)
			
		},
		methods: {
			testHttpFun(){
				this.$sendRequest({
					url: 'this.requestUrl.followFieldList',
					data: {
						businessId: '1'
					},
					method:'GET',
					success: function(res) {
						
					
					},
					fail: function(e) {
						uni.hideLoading();
					}
				})
			},
			
		
		}
	}
	
</script>

<style>
	.index-page {
		display: flex;
		flex-direction: column;
		padding: 20px 0 0 30px;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 16px;
		color: #333;
		margin-top: 20px;
	}
	.textStyle{
		font-size: 13px;
		color: #8f8f94;
		margin-top: 10px;
	}
	
	.fontListBox{
		width: 460px;
		display: flex;
		margin-top: 30px;
		flex-wrap: wrap;
	}
	.fontItem{
		font-size: 36px;
		margin-left: 0px;
		margin-right: 30px;
		margin-top: 20px;
	}
</style>
