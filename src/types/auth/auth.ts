export interface Auth {
  email: string
  password: string
}

export interface AuthResponse {
  access: string
  refresh: string
  user: {
    first_name: string
    last_name: string
    email: string
  }
}

export interface RefreshToken {
  refresh: string
}

export interface RefreshTokenResponse {
  access: string
  refresh: string
}
