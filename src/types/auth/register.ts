export interface Register {
  full_name: string
  email: string
  password: string
}

export interface RegisterResponse {
  user_id: string
}

export interface CreateOrganization {
  name: string
  email: string
  organization_id: string
  user_id: string
}
