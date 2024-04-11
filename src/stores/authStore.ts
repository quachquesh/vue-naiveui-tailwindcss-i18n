import { Auth } from '@/types'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    authToken: null as Auth.AuthToken | null,
    profile: null as Auth.UserProfile | null
  }),
  actions: {
    async login(data: { username: string; password: string }) {
      try {
        const res = await apiAuth.login(data)
        res.data.expires_in = new Date().getTime() + res.data.expires_in * 1000
        this.authToken = res.data
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getMe() {
      try {
        if (!this.authToken) {
          return Promise.reject('Token is not found')
        }
        // Gọi API lấy thông tin user
        const res = await apiAuth.getMe()
        this.profile = res.data ?? null
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      this.authToken = null
      this.$router.push({ name: 'login' })
      this.profile = null
    },

    async refreshToken() {
      try {
        if (!this.authToken) throw new Error('Token is not found')

        const res = await apiAuth.refreshToken({
          refreshToken: this.authToken.refresh_token
        })
        res.data.expires_in = new Date().getTime() + res.data.expires_in * 1000
        this.authToken = res.data
        return Promise.resolve(res)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  },
  persist: {
    paths: ['authToken']
  }
})
