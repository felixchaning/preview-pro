import type { Router, RouteLocationNormalized } from "vue-router"
import { useSystemWithOut } from "@/stores/system"

export function setRouterGuard(router: Router) {
  createPageGuard(router)
}

function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>()
  const systemStore = useSystemWithOut()

  router.beforeEach(async (to) => {
    console.log(systemStore.token, to)
    if (to.name !== "login") {
      if (!systemStore.token && !localStorage.getItem("token")) {
        await router.replace({ name: "login" })
      }
    }
    if (!to.name) {
      router.replace({ name: "404" })
    }
  })

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true)
  })
}
