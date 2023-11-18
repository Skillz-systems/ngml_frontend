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
  zone: string
  type: string
  _id?: string
  createdAt?: string
  updatedAt?: string

}
// export interface RegisterInterface {
//   firstname: string
//   lastname: string
//   designation: string
//   email: string
//   department: string
//   operation: string
//   type: string
//   password: string
// }

export const registerUser = async (data: RegisterInterface): Promise<AxiosResponse<any>> => {
  return await axios.post(`${apiUrl}auth/staff-register`, data)
}

export const loginUser = async (
  credentials: LoginInterface
): Promise<AxiosResponse<any>> => {
  return await axios.post(`${apiUrl}auth/staff-login`, credentials)
}

export const logoutUser = async (): Promise<AxiosResponse<void>> => {
  // You might want to clear user authentication on the server side as well
  return await axios.post(`${apiUrl}auth/staff-logout`)
}
