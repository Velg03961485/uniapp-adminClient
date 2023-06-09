import App from './App'
import messages from './i18n/index.js'

const lang = uni.getLocale()

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'


try {
  function isPromise(obj) {
    return (
      !!obj &&
      (typeof obj === "object" || typeof obj === "function") &&
      typeof obj.then === "function"
    );
  }

  // 统一 vue2 API Promise 化返回格式与 vue3 保持一致
  uni.addInterceptor({
    returnValue(res) {
      if (!isPromise(res)) {
        return res;
      }
      return new Promise((resolve, reject) => {
        res.then((res) => {
          if (res[0]) {
            reject(res[0]);
          } else {
            resolve(res[1]);
          }
        });
      });
    },
  });
} catch (error) { }

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createI18n } from 'vue-i18n'


import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/c/font_2101314_mqpeeeel08k.js', // 在 iconfont.cn 上生成
});

import globalHttp from '@/api/http.js'
import * as echarts from "echarts";

export function createApp() {
  const app = createSSRApp(App)
	app.config.globalProperties.$siteBaseUrl = globalHttp.siteBaseUrl;
	app.config.globalProperties.$sendRequest = globalHttp.sendRequest;
	app.config.globalProperties.$echarts = echarts;
	app.component('IconFont',IconFont);
	const i18n = createI18n({
		locale: lang,
		messages
	})
	app.use(i18n)
	app.use(Antd)
  return {
    app
  }
}
// #endif