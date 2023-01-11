<template>
  <div class="page-login w-full h-full flex relative">
    <div class="w-1/2 h-full z-10 flex items-center justify-center">
      <div>
        <img src="../../assets/svg/login-box-bg.svg" alt="" style="width: 25vw" />
        <h2 class="text-white mt-8">同助平台管理系统</h2>
      </div>
    </div>
    <div class="w-1/2 h-full flex items-center justify-center">
      <div>
        <h1>登录</h1>
        <a-input
          placeholder="请输入用户名"
          size="large"
          :value="formData.username"
          @input="(e) => (formData.username = e.target.value)"
          class="mb-4"
        />
        <a-input
          placeholder="请输入密码"
          size="large"
          type="password"
          :value="formData.password"
          @input="(e) => (formData.password = e.target.value)"
        />
        <a-divider />
        <a-button type="primary" size="large" @click="handleLogin" class="w-full">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { loginApi } from "@/api/system/user"
import router from "@/router"
import { useSystem } from "@/stores/system"

const formData = reactive({
  username: "syzh",
  password: "123456"
})
const validForm = () => {
  return ""
}

const systemStore = useSystem()

const handleLogin = async () => {
  const data = validForm()
  if (data) return
  // const response = await loginApi(formData)
  // if (response?.token) {
  //   systemStore.setToken(response.token)
  //   localStorage.setItem("token", response.token)
  //   await router.push("/")
  // }
  // console.log(response)
  router.push("/")
}
</script>

<style scoped lang="less">
.page-login {
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url("../../assets/svg/login-bg.svg");
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: "";
    z-index: 1;
  }
}
</style>
