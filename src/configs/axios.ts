import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import Axios from 'axios'

const baseURL = useEnv('VITE_API_SERVER') ?? '' + '/api'

const defaultConfig: AxiosRequestConfig = {
  baseURL,
  // request timeout
  timeout: 10000
}

class AxiosHttp {
  public axiosInstance = Axios.create(defaultConfig)

  constructor() {}

  // Gọi hàm này trong main.ts để khởi tạo và kích hoạt pinia store
  public init(): void {
    // console.log color red
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  /** After the token expires, temporarily store pending requests */
  private requests: ((token: string) => void)[] = []

  /** Prevent repeated token refresh */
  private isRefreshing = false

  /** Reconnect the original request */
  private retryOriginalRequest(
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> {
    return new Promise((resolve) => {
      this.requests.push((token: string) => {
        if (config.headers) config.headers['Authorization'] = `Bearer ${token}`
        resolve(config)
      })
    })
  }

  private httpInterceptorsRequest(): void {
    const authStore = useAuthStore()
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        window.$loadingBar.start()
        const whiteList = ['/v1/login', '/v1/refresh-token']
        const isWhiteList = whiteList.some((v) => config.url && config.url.indexOf(v) > -1)
        if (isWhiteList || config.url === '/') {
          return config
        }

        return new Promise((resolve) => {
          if (!authStore.authToken) {
            return resolve(config)
          }

          const now = new Date().getTime()
          const expired = authStore.authToken.expires_in - now <= 0
          // Chưa hết hạn
          if (!expired) {
            if (config.headers)
              config.headers['Authorization'] = `Bearer ${authStore.authToken.access_token}`
            return resolve(config)
          }

          // Nếu đã hết hạn
          if (!this.isRefreshing) {
            this.isRefreshing = true

            // Gọi API refresh token
            authStore
              .refreshToken()
              .then((res) => {
                const authToken = res.data
                // Sau khi nhận được token mới thì cấu hình lại config
                if (config.headers)
                  config.headers['Authorization'] = `Bearer ${authToken.access_token}`
                // Sau khi cấu hình lại accessToken mới thì gọi lại các request đợi có accessToken mới
                this.requests.forEach((cb: any) => cb(authToken.access_token))
                this.requests = []
              })
              .catch((error) => {
                if (error.response.status === 401) {
                  authStore.logout()
                }
              })
              .finally(() => {
                this.isRefreshing = false
              })
          }

          // Nếu refreshToken đang được xử lý thì đẩy request vào hàng đợi
          resolve(this.retryOriginalRequest(config))
        })
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response
  }

  private httpInterceptorsResponse(): void {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        window.$loadingBar.finish()
        return response
      },
      (error) => {
        window.$loadingBar.error()
        return Promise.reject(error)
      }
    )
  }
}

const axios = new AxiosHttp()

export default axios.axiosInstance

export { axios }
