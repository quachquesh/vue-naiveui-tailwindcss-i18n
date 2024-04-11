import axios from '@/configs/axios'
import type { Auth } from '@/types'

const prefix = '/v1'

export const apiAuth = {
  login: (data: { username: string; password: string }) =>
    axios.post<Auth.AuthToken>(`${prefix}/login`, data),
  getMe: () => axios.get<Auth.UserProfile>(`${prefix}/admin/me`),
  refreshToken(data: { refreshToken: string }) {
    return axios.get<Auth.AuthToken>(`${prefix}/refresh-token`, {
      headers: {
        Authorization: `Bearer ${data.refreshToken}`
      }
    })
  }
}
