import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetStats = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/api/stats`)
      return response.data
    },
    refetchOnWindowFocus: true,
    refetchInterval: 5000,
  })
  return { data, isError, isPending, error }
}
