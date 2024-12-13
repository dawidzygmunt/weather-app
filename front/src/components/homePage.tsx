import { useLocationContext } from '@/hooks/location/useLocationContext'
import { useGetWeather } from '@/hooks/weather/useGetWeather'
import WeatherTile from './weatherTile'
import { Card, CardContent, CardHeader } from './ui/card'
import RecommendedActivities from './recommendedActivities'

function HomePage() {
  const { lat, lon } = useLocationContext()
  console.log('[APP]', lat, lon)
  const { data } = useGetWeather(lat, lon)
  console.log('[APP]', data)

  return (
    <div className="w-full lg:px-36 bg-[#0c0b11] ">
      <div className="flex flex-col sm:flex-row gap-10 p-14">
        <div className=" ">
          {/* TODO: Integrate with weather API */}
          <WeatherTile data={data} />
        </div>

        <div className="w-full">
          <Card className="">
            <CardHeader className="text-2xl font-semibold">
              Recommended activities
            </CardHeader>
            <CardContent>
              <RecommendedActivities data={data} />
            </CardContent>
            {/* TODO: Integrate with weather API && Add best activity */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HomePage
