import { Calendar, Cloud, MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Separator } from "@radix-ui/react-separator"

const WeatherTile = () => {
  return (
    <Card>
      <CardContent>
        <div className="pt-4">Now</div>
        <div className="flex items-center gap-8">
          <span className="text-4xl font-semibold">5&deg;C</span>
          <Cloud size={64} />
        </div>
        <span className="text-xs">Cloudy</span>
        <Separator className="bg-gray-600 my-3" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Calendar size={16} />
            <span className="text-xs">Monday, 9 Dec</span>
          </div>
          <div className="flex gap-2">
            <MapPin size={16} />
            <span className="text-xs">Warsaw, PL</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WeatherTile
