import axios from "axios"
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from "axios"

import { Modal, message as Message, notification, message } from "ant-design-vue"
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons-vue"

// import { NotificationArgsProps, ConfigProps } from 'ant-design-vue/lib/notification'

// import { useRouter } from 'vue-router'
// 根据自身规范修改![](https://tva1.sinaimg.cn/large/008i3skNgy1gxfn11mr8yj314w0u0tdg.jpg)

const instance = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
})

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token") || ""
  if (token) {
    config.headers = {
      Authorization: `${token}`,
      ...config.headers
    }
  }
  return config
})

const showToast = (title: string) => {
  Message.info(title)
}
const showMessage = (title: unknown) => {
  const message = JSON.stringify(title).replace(/"/g, "")
  // TODO Request failed with status code 500 优化展示逻辑
  if (message.indexOf("Network") > -1) {
    showToast("请求失败")
  } else if (message.indexOf("timeout") > -1) {
    showToast("请求超时")
  } else {
    showToast(message)
  }
}
interface ApiResult<T> {
  code: number
  message?: string
  result: T
}

export const loadingKey = "loading"
// Taro.showToast 和loading 是单例 所以只有成功时候hideLoading 其他情况showToast
export default function request<T>(options = {}) {
  Message.loading({
    content: "加载中...",
    key: loadingKey
  })
  return new Promise<T>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse<ApiResult<T>>) => {
        if (response?.status === 200 && response?.data?.code === 200) {
          resolve(response.data.result)
          Message.destroy()
        } else {
          throw response
        }
      })
      .catch((result) => {
        if (result?.status === 200 && result?.data?.code !== 200) {
          Message.destroy()
          //重新登陆 result?.data?.code === -1 ||
          showMessage(result?.data?.message ?? result?.message)
        } else {
          Message.destroy()
          // 其他情况 code 非 0 情况 有 message 就显示
          showMessage(result?.data?.message ?? result?.message)
        }
        reject(result)
      })
  })
}
