import { CityStats } from '@/types/types'
import React from 'react'

interface StatsListProps {
  data: CityStats
}

const StatsList: React.FC<StatsListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 py-6 pb-0">
      <div className="flex space-x-3 items-center bg-[#2a292b] p-6 rounded-xl">
        <h3 className="font-semibold text-white text-xl">Total hits: </h3>
        <span>{data && data.totalHits}</span>
      </div>
      <div className="bg-[#2a292b] p-6 rounded-xl">
        <h3 className="font-semibold text-white text-xl">Top 5 cities:</h3>
        {data &&
          data.top5Cities.map((city) => (
            <div key={city.city}>
              {city.city} - {city.count}
            </div>
          ))}
      </div>

      <div className="bg-[#2a292b] p-6 rounded-xl">
        <h3 className="font-semibold text-white text-xl">Last 10 hits:</h3>
        {data &&
          data.last10Hits.map((hit) => (
            <div key={hit.id}>
              {hit.city_name} - {hit.query_date}
            </div>
          ))}
      </div>
    </div>
  )
}

export default StatsList
