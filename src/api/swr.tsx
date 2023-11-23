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

const useDataFetcher = ({ url }: UseFetcherProps): { data: any, error: Error | null, loading: boolean } => {
  revalidateBearerToken()
  const { data, error, isLoading: loading } = useSWR(url, fetcher)
  console.log(data)
  console.log(data)
  console.log(loading)
  return { data, error, loading }
}

export default useDataFetcher
