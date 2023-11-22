/* eslint-disable @typescript-eslint/explicit-function-return-type */
import useSWR, { mutate } from 'swr'
import axiosInstance, { apiUrl, revalidateBearerToken } from './axios'

console.log(mutate)

interface UseFetcherProps {
  url: string
}

const fetcher = async (url: string) => {
  const response = await axiosInstance.get(`${apiUrl}/${url}`)
  const data: any = response.data
  return data
}

const useDataFetcher = ({ url }: UseFetcherProps): { data: any, error: Error | null } => {
  revalidateBearerToken()
  const { data, error } = useSWR(url, fetcher)

  return { data, error }
}

export default useDataFetcher
