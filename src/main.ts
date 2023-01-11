import "@ant-design-vue/pro-layout/dist/style.css"
import "ant-design-vue/dist/antd.variable.min.css"

import { createApp } from "vue"
import { ConfigProvider } from "ant-design-vue"
import ProLayout, { PageContainer } from "@ant-design-vue/pro-layout"
import { setRouterGuard } from "@/router/guard"
import { store } from "@/stores"
import router from "./router"
import App from "./App.vue"
import "./app.less"

const bootStrap = () => {
  localStorage.setItem("local_theme", "#1884FF")
  createApp(App)
    .use(router)
    .use(ConfigProvider)
    .use(ProLayout)
    .use(PageContainer)
    .use(store)
    .mount("#app")

  // router-guard
  // 路由守卫
  setRouterGuard(router)
}

bootStrap()
