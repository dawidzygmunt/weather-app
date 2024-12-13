import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetWeather = (lat: string, lon: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/api/weather?lat=${lat}&lon=${lon}`
      )
      return response.data
    },
    enabled: !!lat && !!lon,
  })
  return { data, isError, isPending, error }
}
