import { LocationContext } from '@/context/locationContext'
import { useContext } from 'react'

export const useLocationContext = () => {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider')
  }
  return context
}
