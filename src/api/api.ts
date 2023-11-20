// import axios, { type AxiosResponse } from 'axios'
// export const apiUrl = process.env.REACT_APP_BASE_URL
// auth / staff - register
// interface LoginInterface {
//   email: string
//   password: string
// }

import { type AxiosResponse } from 'axios'
import axiosInstance, { setBearerToken } from './axios'

export interface LoginInterface {
  email: string
  password: string
}

export interface UserInterface {
  firstname: string
  lastname: string
  designation: string
  email: string
  operation: string
  department: string
  type: string
  _id: string
  createdAt: string
  updatedAt: string
}
export interface RegisterInterface {
  firstname: string
  lastname: string
  designation: string
  email: string
  operation: string
  department: string
  // password: string
  type: string
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

export interface StaffInterface {
  eoiStarted: boolean
  verified: boolean
  _id: string
  firstname: string
  lastname: string
  department?: string
  designation: string
  operation?: string
  email: string
  type: string
  createdAt?: string
  updatedAt?: string
}

export const registerUser = async (data: RegisterInterface): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.post('/auth/staff-register', data)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}

export const loginUser = async (
  credentials: LoginInterface
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.post('/auth/staff-login', credentials)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}

export const logoutUser = async (): Promise<AxiosResponse<void>> => {
  setBearerToken(null)
  return await axiosInstance.post('/auth/staff-logout')
}

export const postEOI = async (
  data: EOIInterface
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.post('/customer/submit-eoi', data)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
export const getEOIByCustomerEmail = async (
  customerEmail: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get(`/customer/eoi/${customerEmail}`)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
export const getStaffById = async (
  id: string | undefined
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get(`/staff/${id}`)
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
export const getAllStaff = async (
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get('/staff')
    return response
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
