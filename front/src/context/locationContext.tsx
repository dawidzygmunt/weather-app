import { createContext } from 'react'

interface LocationContextType {
  city: string
  setCity: (newValue: string) => void
  lat: string
  setLat: (newValue: string) => void
  lon: string
  setLon: (newValue: string) => void
}

export const LocationContext = createContext<LocationContextType>({
  city: '',
  setCity: () => {},
  lat: '',
  setLat: () => {},
  lon: '',
  setLon: () => {},
})
