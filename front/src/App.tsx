import "./App.css"
import Navbar from "./components/navbar"
import { Card, CardContent, CardHeader } from "./components/ui/card"
import WeatherTile from "./components/weatherTile"

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0c0b11] ">
      <Navbar />
      <div className="grid grid-cols-3 gap-10 p-14">
        <div className=" ">
          {/* TODO: Integrate with weather API */}
          <WeatherTile />
        </div>

        <div className="col-span-2">
          <Card className="">
            <CardHeader>Recommended activities</CardHeader>
            <CardContent>Based on weather in your location</CardContent>
            {/* TODO: Integrate with weather API && Add best activity */}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
