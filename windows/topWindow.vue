<template>
	<view class="topwindow-page">
		<view class="topwindow_l_title">
			产品运营后台
		</view>
		<view class="topwindow_r_view">
			<a-select
				ref="select"
				:default-value="defaultValue"
				v-model="langeValue"
				class="topwindow_r_view_select"
				@change="handleChange"
			>
				<a-select-option :value="item.value" v-for="(item,index) in langeOption" :key="index">{{item.name}}</a-select-option>
			</a-select>
			<view class="loginOutBox" @click="loginOutBtn">
				<IconFont type="anticon-hyx-icon-huanyuan" class="loginOutBox_1" ></IconFont>
				<view class="loginOutBox_2">
					退出登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		data(){
			return{
				langeValue:'zh-Hans',
				defaultValue:'zh-Hans',
				locale:'',
				langeOption:[
					{name:'中文',value:'zh-Hans'},
					{name:'英文',value:'en'},
				],
			}
		},
		created() {
			console.log(this.langeValue)
			this.locale = uni.getLocale();
		},
		methods:{
			handleChange(e){
				this.langeValue = e;
				this.$i18n.locale = this.langeValue;
				uni.setLocale(this.langeValue);
			},
			
			loginOutBtn(){
				uni.reLaunch({
				    url: '/indexPages/login/index'
				});
			},
		}
	}
</script>

<style>
	.topwindow-page{
		width: 100%;
		height: 100%;
		display: flex;
		background-color: #3E7BF8;
		justify-content: space-between;
		align-items: center;
	}
	.topwindow_r_view{
		display: flex;
	}
	.topwindow_l_title{
		font-size: 18px;
		color: #fff;
		margin-left: 10px;
	}
	.topwindow_r_view_select{
		width: 80px;
		margin-right: 30px;
	}
	.loginOutBox{
		height: 100%;
		display: flex;
		align-items: center;
		line-height: 32px;
		cursor: pointer;
	}
	.loginOutBox_1{
		font-size: 18px;
		margin-right: 5px;
	}
	.loginOutBox_2{
		font-size: 14px;
		margin-right: 10px;
	}
</style>