export namespace Auth {
  export interface AuthToken {
    access_token: string
    refresh_token: string
    expires_in: number
    token_type: string
  }

  export interface UserProfile {
    id: number
    email: string
    avatar?: string | null
  }
}
