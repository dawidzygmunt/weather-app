import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetLocation = (city: string) => {
  return useQuery({
    queryKey: ['location', city],
    queryFn: async () => {
      const response = await axios.get(
        'http://api.openweathermap.org/geo/1.0/direct?q=Mikołów,616&limit=1&appid=47e2b6002e03d7f0f95d8ee7c9a9bcbf'
      )
      return response
    },
  })
}

export default useGetLocation
