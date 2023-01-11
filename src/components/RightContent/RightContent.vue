<template>
  <div style="margin-right: 12px">
    <a-space size="middle">
      <a class="px-1 text-gray-500" @click="() => {}">
        <search-outlined class="text-lg inline-flex items-center" />
      </a>
      <a class="px-1 inline-block text-gray-500" @click="() => {}">
        <bell-outlined class="text-lg" />
      </a>
      <a v-if="false" style="padding: 0 12px; display: inline-block; user-select: none" @click="handleClick">
        <bell-outlined />
      </a>
      <a-space class="flex items-center">
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <template #icon>
                  <SettingOutlined />
                </template>
                <span>个人设置</span>
              </a-menu-item>
              <a-menu-item>
                <template #icon>
                  <LogoutOutlined />
                </template>
                <span @click="handleLogout">退出登录</span>
              </a-menu-item>
            </a-menu>
          </template>
          <a-avatar shape="rounded" size="small" class="mb-1">
            <template #icon>
              <UserOutlined />
            </template>
            {{ currentUser.nickname }}
          </a-avatar>
        </a-dropdown>
        {{ currentUser.nickname }}
      </a-space>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, SettingOutlined, LogoutOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons-vue"
import { apply, randomTheme } from "@/hooks/useTheme"
import router from "@/router"

export type CurrentUser = {
  nickname: string
  avatar?: string
}

const handleLogout = () => {
  localStorage.removeItem("token")
  router.replace("/login")
}

defineProps<{
  currentUser: CurrentUser
}>()

console.log()

const handleClick = () => {
  apply(randomTheme())
}
</script>
