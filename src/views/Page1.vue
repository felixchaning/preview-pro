<template>
  <PageContainer>
    <a-result
      status="404"
      :style="{
        height: '100%',
        background: '#fff'
      }"
      title="Hello World"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary" @click="handleClick">Back Home</a-button>
        <div class="font-bold">123123</div>
      </template>
    </a-result>
  </PageContainer>
</template>

<script lang="ts" setup>
import { message } from "ant-design-vue"
import { PageContainer as PageContainer } from "@ant-design-vue/pro-layout"
import { getListApi } from "@/api/test"

const handleClick = () => {
  console.log("info")
  message.info("BackHome button clicked!")
}

const data = {
  args: {
    subject: {
      "()": {
        target_type: 1
      },
      "=>": ["id", "name", "org", "start_ts", "end_ts", "ts"],
      OrderBy: {
        ts: "ASC"
      },
      "[]": 1,
      total_page: true
    }
  },
  project_id: "crsw",
  project_type: "slab_priv"
}
console.log(JSON.stringify(data))

getListApi(JSON.stringify(data))
</script>

<style lang="less">
* {
}
</style>
