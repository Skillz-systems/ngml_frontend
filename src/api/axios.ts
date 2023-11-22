import axios, { type AxiosResponse } from 'axios'
export const apiUrl = process.env.REACT_APP_BASE_URL

const axiosInstance = axios.create({
  baseURL: apiUrl
})

export const setBearerToken = (token: string | null): void => {
  if (token != null) {
    localStorage.setItem('token', token)
    axiosInstance.defaults.headers.common.Authorization = token
  } else {
    localStorage.removeItem('token')
    delete axiosInstance.defaults.headers.common.Authorization
  }
}

export const revalidateBearerToken = (): void => {
  const token = localStorage.getItem('token')
  if (token != null) {
    localStorage.setItem('token', token)
    axiosInstance.defaults.headers.common.Authorization = token
  }
}

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token')
//     setBearerToken(token)
//     return config
//   },
//   async (error) => {
//     return await Promise.reject(error)
//   }
// )

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem('token')
      setBearerToken(token)
      return config
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    return await Promise.reject(error)
  }
)

export default axiosInstance
