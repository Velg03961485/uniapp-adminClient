<template>
	<view class="leftwindow-page">
		<a-menu
		  id="dddddd"
		  v-model:openKeys="openKeys"
		  v-model:selectedKeys="selectedKeys"
		  style="width: 240px"
		  mode="inline"
		  @click="handleClick"
		>
		<template v-for="(item,index) in MenuData" :key="index">
			<a-sub-menu :key="item.key" @titleClick="titleClick" v-if="item.children && item.children.length > 0">
			  <template #icon>
			    <MailOutlined />
			  </template>
			  <template #title>{{$t('leftMenu.data.'+item.keyword)}}</template>
			  <a-menu-item  v-for="(ite,ind) in item.children" :key="ite.key" >{{$t('leftMenu.data.'+ite.keyword)}}</a-menu-item>
			</a-sub-menu>
			<a-menu-item :key="item.key" v-else>
				<template #icon>
					<QqOutlined />
				</template>
				{{$t('leftMenu.data.'+item.keyword)}}
			</a-menu-item>
		</template>
		  
		
		</a-menu>
	</view>
</template>
<script>
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import MenuDataJson from "./menuData.json"
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref([]);
    const openKeys = ref([]);
		let MenuData = ref(MenuDataJson);
		console.log(getCurrentPages())
    const handleClick = e => {
      console.log('click', e);
			console.log(e.key)
			uni.redirectTo({
			    url: e.key
			});
    };
		console.log(MenuData)
		// MenuData = MenuDataJson;
    const titleClick = e => {
      console.log('titleClick', e);
    };
    watch(() => openKeys, val => {
      console.log('openKeys', val);
    });
    return {
      selectedKeys,
      openKeys,
      handleClick,
      titleClick,
      MenuData,
    };
  },
});

// export default{
// 	components: {
// 	  MailOutlined,
// 	  QqOutlined,
// 	  AppstoreOutlined,
// 	  SettingOutlined,
// 	},
// 	data() {
// 		return {
// 			selectedKeys:[],
// 			openKeys:[],
// 			MenuData:MenuDataJson,
// 		}
// 	},
// 	created() {
		
// 	},
// 	methods:{
// 		handleClick(e){
// 			console.log('click', e);
// 			console.log(e.key)
// 			uni.redirectTo({
// 			    url: e.key
// 			});
// 		},
// 		titleClick(e){
// 			console.log('titleClick', e);
// 		},
// 	}
// }
</script>
<style>
	.leftwindow-page{
		height: 100%;
		padding-top: 0px;
	}
</style>