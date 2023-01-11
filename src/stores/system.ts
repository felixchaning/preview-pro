import { defineStore } from "pinia"
import { store } from "@/stores"
export interface Options {
  token: string
}

const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: "system",
  /** 状态 */
  state: () => ({
    token: ""
  }),
  actions: {
    setToken(payload: string) {
      this.token = payload
    }
  }
})
export { useSystem }

// setup 外使用
export function useSystemWithOut() {
  return useSystem(store)
}
