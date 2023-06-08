<template>
	<view class="videoplay-page">
		<video id="myVideo" :poster="fileUrl+'?x-oss-process=video/snapshot,t_50,f_jpg,w_400,h_350'" :id="'video'+0" :src="fileUrl"  ref="myVideo" class="videoplay_box" :show-center-play-btn="showCenterPlayBtn" :show-play-btn="showCenterPlayBtn" :show-fullscreen-btn="true" :controls="showCenterPlayBtn" object-fit="contain"  muted @error="videoErrorCallback">
		</video>
		<view class="videoplayT">
			<view class="videoplayT_l">
				<view class="videoplayT_lName">
					摩西哈舞台剧-离别最爱的人
				</view>
			</view>
			<view class="videoplayT_r">
				<view class="videoplayT_r1">
					关注企业数10
				</view>
			</view>
		</view>
		
		<view class="videoplayList">
			<image src="" mode="" class="videoplayList_l"></image>
			<view class="videoplayList_c">
				<view class="videoplayList_cIt">
					<image src="../../static/logo.png" mode="" class="videoplayList_cIt_img"></image>
					<view class="videoplayList_cIt_txt">
						巴黎剧菲尔顿...
					</view>
				</view>
			</view>
			<image src="" mode="" class="videoplayList_r"></image>
		</view>
		<!-- <a-button type="primary" @click="playBtn" >Primary Button</a-button> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				fileUrl:"http://t-hyxfile.oss-cn-hangzhou.aliyuncs.com/video1681270442024",
				showCenterPlayBtn:true,
				videoContext:'',
			}
		},
		created() {
			this.$nextTick(() => {
				this.videoContext = uni.createVideoContext('myVideo')
				console.log(this.videoContext)
			});
		},
		methods:{
			videoErrorCallback: function(e) {
				console.log(e)
			},
			playBtn(){
				let video = uni.createVideoContext('myVideo', this)
				video.play();
			},
		}
	}
</script>

<style>
	.videoplay-page{
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.videoplay_box{
		width: 100%;
		height: 320px;
	}
	.videoplayT{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
	}
	.videoplayT_l{
		display: flex;
	}
	.videoplayT_lName{
		margin-left: 0px;
	}
	.videoplayT_r{
		display: flex;
		margin-right: 0px;
	}
	
	.videoplayList{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
	.videoplayList_l{
		width: 12px;
		height: 12px;
		background-color: #333333;
	}
	.videoplayList_c{
		display: flex;
		margin-left: 10px;
		margin-right: 10px;
	}
	.videoplayList_cIt{
		width: 120px;
		height: 80px;
		border:1px solid #333333;
		display: flex;
		flex-direction: column;
	}
	.videoplayList_cIt_img{
		width: 120px;
		height: 60px;
	}
	.videoplayList_r{
		width: 12px;
		height: 12px;
		background-color: #333333;
	}
</style>