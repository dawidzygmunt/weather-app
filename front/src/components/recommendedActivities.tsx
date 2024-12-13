import { Weather } from '@/types/types'
import React from 'react'

interface RecommendedActivitiesProps {
  data: Weather
}

const RecommendedActivities: React.FC<RecommendedActivitiesProps> = ({
  data,
}) => {
  if (!data) {
    return <div>Provide city...</div>
  }
  return (
    <div className="w-full">
      <h1>{data.recommendedActivity}</h1>
    </div>
  )
}

export default RecommendedActivities
