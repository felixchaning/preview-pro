import request from "@/utils/request"
import type { ResultPageType } from "@/types/system"

export const getListApi = async (data: any) => {
  return await request({
    url: "http://localhost:3000/api/v1/deepr/list",
    method: "POST",
    params: {
      params: data
    }
  })
}
