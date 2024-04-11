interface Pagination<T = any> {
  data: T[]
  current_page: number
  last_page: number
  per_page: string
  from: number
  to: number
  total: number
}

interface QueryPagination {
  limit?: number
  page?: number
  q?: string | null
  sort?: string
  order?: 'asc' | 'desc'
}
