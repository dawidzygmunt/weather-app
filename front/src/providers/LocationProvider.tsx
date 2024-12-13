import { LocationContext } from '@/context/locationContext'
import { useState } from 'react'

interface LocationProviderProps {
  children: React.ReactNode
  initialValue?: string
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
  initialValue,
}) => {
  const [city, setCity] = useState<string>(initialValue || '')
  const [lat, setLat] = useState<string>(initialValue || '')
  const [lon, setLon] = useState<string>(initialValue || '')
  return (
    <LocationContext.Provider
      value={{ city, setCity, lat, setLat, lon, setLon }}
    >
      {children}
    </LocationContext.Provider>
  )
}
