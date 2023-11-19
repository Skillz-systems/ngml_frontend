import axios, { type AxiosResponse } from 'axios'
export const apiUrl = process.env.REACT_APP_BASE_URL
// auth / staff - register
// interface LoginInterface {
//   email: string
//   password: string
// }

export interface LoginInterface {
  email: string
  password: string
}

export interface RegisterInterface {
  firstname: string
  lastname: string
  designation: string
  email: string
  operation: string
  department: string
  type: string
  _id?: string
  createdAt?: string
  updatedAt?: string

}

export interface RegisterCustomerInterface {
  businessname: string
  email: string
  type: string
  cac: string
}
export interface EOIInterface {
  companyName: string
  email: string
  phoneNumber: string
  reason: string
}

export const registerUser = async (data: RegisterInterface): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/staff-register`, data)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}

export const loginUser = async (
  credentials: LoginInterface
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/staff-login`, credentials)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}

export const logoutUser = async (): Promise<AxiosResponse<void>> => {
  // You might want to clear user authentication on the server side as well
  return await axios.post(`${apiUrl}/auth/staff-logout`)
}

export const eoiSubmit = async (
  data: EOIInterface
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${apiUrl}/customer/submit-eoi`, data)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
