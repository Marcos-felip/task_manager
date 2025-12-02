export interface Auth {
  email: string
  password: string
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
}

export interface RefreshToken {
  refresh_token: string
}

export interface RefreshTokenResponse {
  access_token: string
  refresh_token: string
}
