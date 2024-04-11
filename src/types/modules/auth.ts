export namespace Auth {
  export interface AuthToken {
    access_token: string
    refresh_token: string
    expires_in: number
    token_type: string
  }

  export interface UserProfile {
    id: number
    username: string
    is_active: number
    email_verified_at: string
    last_login_at: null
    deleted_at: null
    available_permissions: Record<string, 'index' | 'update'[]>
    profile: Profile
    roles: Role[]
  }

  interface Profile {
    id: number
    account_id: number
    firstname: string
    lastname: string
    nickname: null
    phone: string
    gender: string
    birthday: string
    avatar: string
    fullname: string
  }

  interface Role {
    id: number
    name: string
    guard_name: string
    scope: null
    level: RoleLevel
    created_at: null
    updated_at: null
  }

  export enum RoleLevel {
    administrator = 0,
    CEO = 10,
    manage = 20,
    HR = 30
  }
}
