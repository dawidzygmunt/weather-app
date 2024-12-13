import { Calendar, Cloud, MapPin } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Weather } from '@/types/types'
import { Separator } from './ui/separator'

interface WeatherTileProps {
  data: Weather
}

const WeatherTile: React.FC<WeatherTileProps> = ({ data }) => {
  const date = new Date().toDateString()
  console.log(data)

  return (
    <Card>
      <CardContent>
        <div className="pt-5">Now</div>
        <div className="flex items-center gap-8">
          <span className="text-4xl font-semibold">
            {data && data.temperature}&deg;C
          </span>
          <Cloud size={64} />
        </div>
        <span className="text-sm font-semibold">{data && data.weather}</span>
        <Separator className="bg-gray-500 my-4 mt-2" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Calendar size={16} />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={16} />
            <span className="text-sm">{data && data.city}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeatherTile
