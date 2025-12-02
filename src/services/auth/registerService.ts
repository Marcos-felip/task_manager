import axios from 'axios'
import {
  type Register,
  type RegisterResponse,
  type CreateOrganization,
} from '../../types/auth/register'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const registerUser = async (data: Register): Promise<RegisterResponse> => {
  const response = await axios.post<RegisterResponse>(`${API_BASE_URL}register/`, data)
  return response.data
}

export const createOrganization = async (data: CreateOrganization): Promise<void> => {
  await axios.post(`${API_BASE_URL}create-organization/`, data)
}
