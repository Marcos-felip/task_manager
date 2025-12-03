export interface User {
  full_name: string
  email: string
  role: string
  password: string
  password_confirm: string
  organization_key: string
}

export interface UserResponse {
  first_name: string
  last_name: string
  email: string
  role: string
  status: boolean
}
