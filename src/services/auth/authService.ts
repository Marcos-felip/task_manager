import axios from 'axios'
import {
  type Auth,
  type AuthResponse,
  type RefreshToken,
  type RefreshTokenResponse,
} from '../../types/auth/auth'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const authUser = async (data: Auth): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${API_BASE_URL}token/`, data)
  return response.data
}

export const refreshAuthToken = async (data: RefreshToken): Promise<RefreshTokenResponse> => {
  const response = await axios.post<RefreshTokenResponse>(`${API_BASE_URL}token/refresh/`, data)
  return response.data
}
