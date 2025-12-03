export interface Auth {
  email: string
  password: string
}

export interface AuthResponse {
  access: string
  refresh: string
}

export interface RefreshToken {
  refresh: string
}

export interface RefreshTokenResponse {
  access: string
  refresh: string
}
