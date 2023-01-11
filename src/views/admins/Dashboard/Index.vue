<template>
  <div class="p-4">
    <a-card class="banner">
      <h3>项目数据概览</h3>
      <div class="flex mt-12">
        <a-statistic title="项目总数" :value="112893" class="mr-16" />
        <a-statistic title="已完成" :value="112893" class="mr-16" />
        <a-statistic title="进行中" :value="112893" class="mr-16" />
        <a-statistic title="已暂停" :value="112893" class="mx-0" />
      </div>
    </a-card>
    <a-row :gutter="12" class="mt-4">
      <a-col :span="8">
        <a-card title="服务类别">
          <div ref="chartA" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="服务对象性别年龄占比">
          <div ref="chartB" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="服务对象地区分布情况">
          <div ref="chartC" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="12" class="mt-4">
      <a-col :span="12">
        <a-card title="社工师月度服务频次排行榜">
          <a-table :columns="columnsA" :data-source="dataSourceA" :pagination="false">
            <template #bodyCell="{ column, text, record }">
              <template v-if="column.key === 'actions'">
                <a>查看</a>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="志愿者月度服务频次排行榜">
          <a-table :columns="columnsB" :data-source="dataSourceB" :pagination="false">
            <template #bodyCell="{ column, text, record }">
              <template v-if="column.key === 'actions'">
                <a>查看</a>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { initChartA, initChartB, initChartC } from "@/views/admins/Dashboard/charts"
import { dataA, dataB, dataC, dataSourceB, dataSourceA } from "@/views/admins/Dashboard/mock"
import { columnsA, columnsB } from "@/views/admins/Dashboard/columns"

const chartA = ref(null)
const chartB = ref(null)
const chartC = ref(null)

onMounted(() => {
  initChartA(chartA, dataA)
  initChartB(chartB, dataB)
  initChartC(chartC, dataC)
})
</script>

<style>
.banner {
  background: linear-gradient(270deg, #D7E9FF 0%, #F2FEFF 100%);
}
</style>
