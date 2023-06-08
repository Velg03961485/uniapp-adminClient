

let siteBaseUrl = 'https://hyxsjd1.zjqfxx.net/v9.0';
// let siteBaseUrl = 'https://hyx.qifengyun.net/v9.0';

const sendRequest = function (param,type){
		var _self = this, 
		url = param.url,
		data = param.data || {}, 
		// header = param.header,
		header = {
			'X-Requested-With' : "XMLHttpRequest",
		},
		token = "";
		        
		//拼接完整请求地址
		var requestUrl = this.siteBaseUrl + url;
		//固定参数
		// 如果type 为login 登录调取的接口的时候 header不需要携带token参数
		if(type == 'login'){
			
		}else{
			
			token = uni.getStorageSync('token');
			// token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjk5ODVlZDFkYWQ0YjdkODdlOTY5MDFkNjQ5MjBkNiIsImV4cCI6MTY3MDUyMTUwMCwiaWF0IjoxNjcwNTE0MzAwfQ.J4RHADIsDC3aiobXcEAGI0S9jxYTYPGE0xZDZ1gSqn4';
			// uni.setStorageSync('token',token);
			if(token === '' || token === null || token === undefined){			
			}
			header.token = token;	
		}
		
		
		var timestamp = Date.parse(new Date());//时间戳
	
		
		//GET或POST
		if(param.method){
			param.method = param.method.toUpperCase();//小写改为大写
		}
		//网络请求
		uni.request({
			url: requestUrl,
			method: param.method,
			header: header,
			data: data,
			success: res => {
				// console.log("网络请求success:" + JSON.stringify(res));
				
				if (res.data.status) {//返回结果码code判断
		
				} else if(type =='noSuccess'){
						typeof param.success == "function" && param.success(res.data);
				} else{
					if(res.data.code == 1001){ // || res.data.code == 1003
						// http://hyxsjd.zjqfxx.net:2081/rightsidebar/#/?corpid=ww4a785ba3223f60b0&agentid=1000009
						let corpid = uni.getStorageSync('corpid');
						let agentid = uni.getStorageSync('agentid');
						
					}else{
						// uni.showToast({
						// 	title: res.data.errorMsg,
						// 	icon:'none',
						// 	duration: 2000
						// })
					}
					
					typeof param.fail == "function" && param.fail(res.data);
					return;
				}
				typeof param.success == "function" && param.success(res.data);
			},
			fail: (e) => {
				uni.showToast({
				    title: '您的网络出小差啦~',
					icon:'none',
				});
				
				typeof param.fail == "function" && param.fail(res.data);
			},
			complete: () => {
				
				
				typeof param.complete == "function" && param.complete(res.data);
				return;
			}
		});
	};
	
	
	export default{
		siteBaseUrl:siteBaseUrl,
		sendRequest:sendRequest,
	}
