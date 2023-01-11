export type PaginationType = {
  pageSize?: number
  page?: number
  total?: number
}

export type ResponseType = {
  code: number
  message: string
  result: unknown
  success: boolean
  time: string
}

export type ResultPageType<itemsType> = {
  total: number
  pageSize: number
  page: number
  items: itemsType | []
}
