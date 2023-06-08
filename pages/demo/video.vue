<template>
	<view class="video-page">
		<a-button type="primary" @click="openbtn" class="playBtn">播放视频</a-button>
		<a-modal v-model:visible="visible" title="播放器" :footer="null" :width="620"  >
			<VideoPlay></VideoPlay>
		</a-modal>
	</view>
</template>

<script>
	import VideoPlay from "@/components/videoPlay/index.vue"
	export default{
		components: {
			VideoPlay,
		},
		data() {
			return {
				visible:false,
			}
		},
		onLoad() {
			
		},
		methods: {
			openbtn(){
				this.visible = true;
			},
		},
	}
</script>

<style>
	.video-page{
		display: flex;
		flex-direction: column;
		padding: 20px 0 0 30px;
	}
	.playBtn{
		width: 120px;
	}
</style>